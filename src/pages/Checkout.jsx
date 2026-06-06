import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
    const navigate = useNavigate();
    const { cartItems } = useContext(CartContext);
  return (
    <div className="max-w-2xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">
        Checkout
      </h1>

    <form
  className="space-y-4"
onSubmit={(e) => {
  e.preventDefault();

  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const newOrder = {
    id: Math.floor(Math.random() * 100000),
    total,
    date: new Date().toLocaleDateString(),
    status: "Placed",
  };

  localStorage.setItem(
    "orders",
    JSON.stringify([...orders, newOrder])
  );

  navigate("/success");
}}
>

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          placeholder="Delivery Address"
          className="w-full border p-3 rounded-lg"
          rows="4"
        ></textarea>

        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;