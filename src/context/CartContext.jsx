import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

 const addToCart = (item) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingItem) {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  } else {
    setCartItems([
      ...cartItems,
      { ...item, quantity: 1 }
    ]);
  }
};

  const removeFromCart = (index) => {
  setCartItems(cartItems.filter((_, i) => i !== index));
};

  return (
   <CartContext.Provider
  value={{ cartItems, addToCart, removeFromCart }}
>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;