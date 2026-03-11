import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useCart } from '../../context/CartContext';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import PaymentMethodSelector from '../../components/PaymentMethodSelector/PaymentMethodSelector';
import { createMercadoPagoPayment, checkPaymentStatus, createPayPalPayment } from '../../services/paymentService';
import styles from './Checkout.module.css';

export default function Checkout() {
  const { t } = useLanguage();
  const { cartItem, clearCart } = useCart();
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [pixData, setPixData] = useState(null);
  const [payerEmail, setPayerEmail] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [copied, setCopied] = useState(false);
  const pollRef = useRef(null);

  // Poll payment status when we have a PIX payment
  useEffect(() => {
    if (pixData?.id && paymentStatus !== 'approved') {
      pollRef.current = setInterval(async () => {
        try {
          const status = await checkPaymentStatus(pixData.id);
          if (status.status === 'approved') {
            setPaymentStatus('approved');
            clearInterval(pollRef.current);
          }
        } catch (err) {
          // silently retry
        }
      }, 5000);
    }
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, [pixData, paymentStatus]);

  const handleCopyPix = () => {
    if (pixData?.qr_code) {
      navigator.clipboard.writeText(pixData.qr_code);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handlePayment = async () => {
    if (!cartItem || !selectedMethod) return;

    if (selectedMethod.id === 'mercado-pago' && !payerEmail) {
      alert('Por favor, insira seu email para gerar o PIX.');
      return;
    }

    setProcessing(true);

    try {
      if (selectedMethod.id === 'mercado-pago') {
        const result = await createMercadoPagoPayment({
          title: cartItem.name,
          quantity: 1,
          unit_price: cartItem.price,
          email: payerEmail,
        });
        setPixData(result);
      } else if (selectedMethod.id === 'paypal') {
        const result = createPayPalPayment({
          description: cartItem.name,
          amount: cartItem.price,
          currency: cartItem.currency,
        });
        window.open(result.redirectUrl, '_blank');
      }
    } catch (error) {
      console.error('[Checkout] Payment error:', error);
      alert('Erro ao processar pagamento. Tente novamente.');
    } finally {
      setProcessing(false);
    }
  };

  // Payment approved screen
  if (paymentStatus === 'approved') {
    return (
      <div className="page">
        <div className="container container--narrow">
          <div className={styles.successScreen}>
            <div className={styles.successIcon}>✅</div>
            <h2>Pagamento Aprovado!</h2>
            <p>Obrigado pela sua compra. Entraremos em contato em breve para iniciar o projeto.</p>
            <button className="btn btn--primary btn--lg" onClick={clearCart}>
              Voltar ao Início
            </button>
          </div>
        </div>
      </div>
    );
  }

  // PIX QR Code screen
  if (pixData) {
    return (
      <div className="page">
        <div className="container container--narrow">
          <div className="page-header">
            <h1>Pagamento PIX</h1>
          </div>

          <div className={styles.pixContainer}>
            <div className={styles.pixCard}>
              <h3>Escaneie o QR Code para pagar</h3>

              {pixData.qr_code_base64 && (
                <div className={styles.qrCodeWrapper}>
                  <img
                    src={`data:image/png;base64,${pixData.qr_code_base64}`}
                    alt="QR Code PIX"
                    className={styles.qrCode}
                  />
                </div>
              )}

              {pixData.qr_code && (
                <div className={styles.pixCopySection}>
                  <p className={styles.pixLabel}>Ou copie o código PIX:</p>
                  <div className={styles.pixCodeBox}>
                    <code className={styles.pixCode}>
                      {pixData.qr_code.substring(0, 50)}...
                    </code>
                    <button
                      className="btn btn--secondary btn--sm"
                      onClick={handleCopyPix}
                    >
                      {copied ? 'Copiado!' : 'Copiar'}
                    </button>
                  </div>
                </div>
              )}

              <div className={styles.pixStatus}>
                <div className={styles.statusDot} />
                <span>Aguardando pagamento...</span>
              </div>

              <p className={styles.pixInfo}>
                O status será atualizado automaticamente quando o pagamento for confirmado.
              </p>

              <button
                className="btn btn--ghost btn--sm"
                onClick={() => { setPixData(null); setPaymentStatus(null); }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container container--narrow">
        <div className="page-header">
          <h1>{t('checkout.title')}</h1>
        </div>

        <div className={styles.layout}>
          <div className={styles.left}>
            <CheckoutSummary item={cartItem} />
            <PaymentMethodSelector onSelect={setSelectedMethod} />

            {selectedMethod?.id === 'mercado-pago' && (
              <div className={styles.emailField}>
                <label className="form-label" htmlFor="payer-email">
                  Email para pagamento PIX *
                </label>
                <input
                  id="payer-email"
                  className="form-input"
                  type="email"
                  value={payerEmail}
                  onChange={(e) => setPayerEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                />
              </div>
            )}
          </div>

          <div className={styles.right}>
            <button
              className="btn btn--primary btn--lg btn--full"
              disabled={!cartItem || !selectedMethod || processing}
              onClick={handlePayment}
            >
              {processing ? 'Processando...' : t('checkout.pay')}
            </button>

            {cartItem && (
              <button
                className="btn btn--ghost btn--sm btn--full mt-4"
                onClick={clearCart}
              >
                Cancelar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
