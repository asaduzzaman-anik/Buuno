import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  const closeCart = () => setCartOpened(false);
  const openCart = () => setCartOpened(true);
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (cart.length === 0) {
      return;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    // console.log(product);

    setCart((prev) => {
      const exists = prev.find((item) => item.code === product.code);

      if (exists) {
        return prev.map((item) =>
          item.code === product.code
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (code) =>
    setCart((prev) => prev.filter((item) => item.code !== code));

  const increment = (code) =>
    setCart((prev) =>
      prev.map((item) =>
        item.code === code ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  const decrement = (code) =>
    setCart((prev) =>
      prev.map((item) =>
        item.code === code && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpened,
        addToCart,
        removeFromCart,
        increment,
        decrement,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
