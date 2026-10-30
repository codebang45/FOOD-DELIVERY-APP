import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

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

  toast.success(`${item.name} quantity increased 🛒`);

} else {
  setCartItems([
    ...cartItems,
    { ...item, quantity: 1 }
  ]);

  toast.success(`${item.name} added to cart 🛒`);
}

};

const removeFromCart = (id) => {
  setCartItems(
    cartItems.filter((item) => item.id !== id)
  );
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

const reorderItems = (items) => {
  setCartItems(items);
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
  reorderItems,
}}
>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;