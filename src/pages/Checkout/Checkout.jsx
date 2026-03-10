import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useCart } from '../../context/CartContext';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import PaymentMethodSelector from '../../components/PaymentMethodSelector/PaymentMethodSelector';
import { createMercadoPagoPayment, createPayPalOrder } from '../../services/paymentService';
import styles from './Checkout.module.css';

export default function Checkout() {
  const { t } = useLanguage();
  const { cartItem, clearCart } = useCart();
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handlePayment = async () => {
    if (!cartItem || !selectedMethod) return;

    setProcessing(true);

    try {
      if (selectedMethod.id === 'mercado-pago') {
        const result = await createMercadoPagoPayment({
          title: cartItem.name,
          quantity: 1,
          unit_price: cartItem.price,
          currency_id: 'BRL',
        });
        // TODO: Redirect to result.redirectUrl or render MercadoPago checkout brick
        console.log('[Checkout] MercadoPago result:', result);
        alert('MercadoPago integration placeholder — redirect to: ' + result.redirectUrl);
      } else if (selectedMethod.id === 'paypal') {
        const result = await createPayPalOrder({
          description: cartItem.name,
          amount: cartItem.price,
          currency: cartItem.currency,
        });
        // TODO: Render PayPal buttons or redirect
        console.log('[Checkout] PayPal result:', result);
        alert('PayPal integration placeholder — order ID: ' + result.orderId);
      }
    } catch (error) {
      console.error('[Checkout] Payment error:', error);
    } finally {
      setProcessing(false);
    }
  };

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
          </div>

          <div className={styles.right}>
            <button
              className="btn btn--primary btn--lg btn--full"
              disabled={!cartItem || !selectedMethod || processing}
              onClick={handlePayment}
            >
              {processing ? 'Processing...' : t('checkout.pay')}
            </button>

            {cartItem && (
              <button
                className="btn btn--ghost btn--sm btn--full mt-4"
                onClick={clearCart}
              >
                Cancel
              </button>
            )}

            <p className={styles.disclaimer}>
              This is a development checkout. No real payments will be processed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
