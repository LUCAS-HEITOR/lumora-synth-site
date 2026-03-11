import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useCart } from '../../context/CartContext';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import PaymentMethodSelector from '../../components/PaymentMethodSelector/PaymentMethodSelector';
import { createMercadoPagoPayment, checkPaymentStatus, createPayPalOrder, capturePayPalOrder } from '../../services/paymentService';
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

  // Handle PayPal return redirect
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paypalStatus = params.get('paypal');
    const paypalToken = params.get('token');

    if (paypalStatus === 'success' && paypalToken) {
      setProcessing(true);
      capturePayPalOrder(paypalToken)
        .then((data) => {
          if (data.status === 'COMPLETED') {
            setPaymentStatus('approved');
            clearCart();
          } else {
            alert(t('checkout.paypal_error'));
          }
        })
        .catch(() => {
          alert(t('checkout.paypal_error'));
        })
        .finally(() => {
          setProcessing(false);
          window.history.replaceState({}, '', '/checkout');
        });
    } else if (paypalStatus === 'cancel') {
      window.history.replaceState({}, '', '/checkout');
    }
  }, []);

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
      alert(t('checkout.email_required'));
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
        const result = await createPayPalOrder({
          title: cartItem.name,
          amount: cartItem.price,
          currency: cartItem.currency || 'USD',
        });
        const approveLink = result.links?.find((l) => l.rel === 'approve');
        if (approveLink) {
          window.location.href = approveLink.href;
          return;
        }
        throw new Error('No approval link');
      }
    } catch (error) {
      console.error('[Checkout] Payment error:', error);
      alert(t('checkout.error'));
    } finally {
      setProcessing(false);
    }
  };

  // PayPal processing screen (during redirect capture)
  if (processing && !pixData && !cartItem) {
    return (
      <div className="page">
        <div className="container container--narrow">
          <div className={styles.successScreen}>
            <div className={styles.successIcon}>⏳</div>
            <h2>{t('checkout.paypal_processing')}</h2>
          </div>
        </div>
      </div>
    );
  }

  // Payment approved screen
  if (paymentStatus === 'approved') {
    return (
      <div className="page">
        <div className="container container--narrow">
          <div className={styles.successScreen}>
            <div className={styles.successIcon}>✅</div>
            <h2>{t('checkout.approved_title')}</h2>
            <p>{t('checkout.approved_text')}</p>
            <button className="btn btn--primary btn--lg" onClick={clearCart}>
              {t('checkout.approved_button')}
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
            <h1>{t('checkout.pix_title')}</h1>
          </div>

          <div className={styles.pixContainer}>
            <div className={styles.pixCard}>
              <h3>{t('checkout.pix_scan')}</h3>

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
                  <p className={styles.pixLabel}>{t('checkout.pix_copy_label')}</p>
                  <div className={styles.pixCodeBox}>
                    <code className={styles.pixCode}>
                      {pixData.qr_code.substring(0, 50)}...
                    </code>
                    <button
                      className="btn btn--secondary btn--sm"
                      onClick={handleCopyPix}
                    >
                      {copied ? t('checkout.pix_copied') : t('checkout.pix_copy')}
                    </button>
                  </div>
                </div>
              )}

              <div className={styles.pixStatus}>
                <div className={styles.statusDot} />
                <span>{t('checkout.pix_waiting')}</span>
              </div>

              <p className={styles.pixInfo}>
                {t('checkout.pix_info')}
              </p>

              <button
                className="btn btn--ghost btn--sm"
                onClick={() => { setPixData(null); setPaymentStatus(null); }}
              >
                {t('checkout.cancel')}
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
                  {t('checkout.email_label')}
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
              {processing ? t('checkout.processing') : t('checkout.pay')}
            </button>

            {cartItem && (
              <button
                className="btn btn--ghost btn--sm btn--full mt-4"
                onClick={clearCart}
              >
                {t('checkout.cancel')}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
