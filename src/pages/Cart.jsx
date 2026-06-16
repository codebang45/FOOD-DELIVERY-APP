import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
  cartItems,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = useContext(CartContext);

console.log(cartItems);

const totalPrice = cartItems.reduce(
  (total, item) =>
    total + item.price * item.quantity,
  0
);

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">
        🛒 Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-xl">
          Cart is Empty
        </p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-5 rounded-xl shadow"
            >
              <div>
                <h2 className="text-xl font-semibold">
                  {item.name}
                </h2>

                <p className="text-orange-500">
                 ₹{item.price}
                </p>

                <p className="text-gray-500">
                Quantity: {item.quantity}
                </p>

                <div className="flex items-center gap-6 mt-2">
                <button
                 onClick={() => decreaseQuantity(item.id)}
                 className="bg-red-500 text-white px-3 py-1 rounded"
  >
    -
  </button>

  <span className="font-bold">
    {item.quantity}
  </span>

  <button
    onClick={() => increaseQuantity(item.id)}
    className="bg-green-500 text-white px-3 py-1 rounded"
  >
    +
  </button>
</div>
              </div>


              <img
  src={item.image}
  alt={item.name}
  className="w-20 h-20 object-contain"
/>



            </div>
          ))}
      <div className="mt-8 text-right">
  <h2 className="text-3xl font-bold">
    Total: ₹{totalPrice}
  </h2>

  <div className="mt-4 flex justify-end gap-4">
    <Link to="/checkout">
      <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
        Proceed To Checkout
      </button>
    </Link>

    <button
      onClick={clearCart}
      className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
    >
      Clear Cart
    </button>
  </div>
</div>
        </div>
      )}
    </div>
  );
}

export default Cart;