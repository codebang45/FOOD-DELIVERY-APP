import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
  const savedCart = localStorage.getItem("cartItems");
  return savedCart ? JSON.parse(savedCart) : [];
});

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

const increaseQuantity = (id) => {
  setCartItems(
    cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQuantity = (id) => {
  setCartItems(
    cartItems
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};

const clearCart = () => {
  setCartItems([]);
};

useEffect(() => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems)
  );
}, [cartItems]);


  return (
   <CartContext.Provider
value={{
  cartItems,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
}}
>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;