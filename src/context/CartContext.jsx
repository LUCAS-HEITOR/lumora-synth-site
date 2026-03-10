import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState(null);

  const addToCart = useCallback((service) => {
    setCartItem({
      id: service.id,
      slug: service.slug,
      name: service.name,
      price: service.priceFrom,
      currency: service.currency,
    });
  }, []);

  const clearCart = useCallback(() => {
    setCartItem(null);
  }, []);

  return (
    <CartContext.Provider value={{ cartItem, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
