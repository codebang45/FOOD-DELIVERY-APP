import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
const totalPrice = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
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
              </div>


              <div className="text-4xl">
                {item.emoji}
              </div>

            <button>-</button>
<span>{item.quantity}</span>
<button>+</button>

            </div>
          ))}
          <div className="mt-8 text-right">
  <h2 className="text-3xl font-bold">
    Total: ₹{totalPrice}
  </h2>
</div>
        </div>
      )}
    </div>
  );
}

export default Cart;