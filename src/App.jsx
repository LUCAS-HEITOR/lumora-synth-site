import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import AppRouter from './routes/AppRouter';

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </LanguageProvider>
  );
}
