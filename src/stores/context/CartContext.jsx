import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  const removeCart = (product) => {
    const remove = cartItems.filter((item) => {
      return item.id !== product.id;
    });

    setCartItems(remove);
  };
  const quantityDecrease = (product) => {
    const index = cartItems.indexOf(product);
    cartItems.splice(index, 1);
    setCartItems([...cartItems]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addCart, removeCart, quantityDecrease }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
