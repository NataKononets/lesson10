import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function removeOne(productId) {
    setCartItems((prev) => {
      const item = prev.find((i) => i.id === productId);

      if (!item) return prev;

      if (item.quantity === 1) {
        return prev.filter((i) => i.id !== productId);
      }

      return prev.map((i) =>
        i.id === productId ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  }

  function removeAll(productId) {
    setCartItems((prev) => prev.filter((i) => i.id !== productId));
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeOne, removeAll, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}


export function useCart() {
  return useContext(CartContext);
}