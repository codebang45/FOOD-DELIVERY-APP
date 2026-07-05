import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
    const navigate = useNavigate();
    const { cartItems } = useContext(CartContext);
    const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");
const [paymentMethod, setPaymentMethod] = useState("COD");


return (
  <div className="min-h-screen bg-[#fff7f2] py-16 px-6">

    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

      {/* Left */}
      <div className="bg-white rounded-3xl p-8 shadow-xl">

        <h1 className="text-4xl font-bold mb-8">
          Checkout
        </h1>

        <form
          className="space-y-5"
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
  items: cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  ),
  orderedItems: cartItems,
  phone,
  address,
  payment: paymentMethod,
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-4 border rounded-2xl outline-none focus:border-orange-500"
          />

          <textarea
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows="5"
            className="w-full p-4 border rounded-2xl outline-none focus:border-orange-500"
          />


          {/* Payment Method */}

<div className="mt-6">
  <h3 className="text-xl font-semibold mb-4">
    Payment Method
  </h3>

  <div className="space-y-3">

    <label
      className={`flex items-center justify-between border rounded-xl p-4 cursor-pointer transition ${
        paymentMethod === "COD"
          ? "border-orange-500 bg-orange-50"
          : "border-gray-300"
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="radio"
          name="payment"
          value="COD"
          checked={paymentMethod === "COD"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />

        <span className="font-medium">
           Cash on Delivery
        </span>
      </div>
    </label>

    <label
      className={`flex items-center justify-between border rounded-xl p-4 cursor-pointer transition ${
        paymentMethod === "UPI"
          ? "border-orange-500 bg-orange-50"
          : "border-gray-300"
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="radio"
          name="payment"
          value="UPI"
          checked={paymentMethod === "UPI"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />

        <span className="font-medium">
           UPI Payment
        </span>
      </div>
    </label>

    <label
      className={`flex items-center justify-between border rounded-xl p-4 cursor-pointer transition ${
        paymentMethod === "Card"
          ? "border-orange-500 bg-orange-50"
          : "border-gray-300"
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="radio"
          name="payment"
          value="Card"
          checked={paymentMethod === "Card"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />

        <span className="font-medium">
           Credit / Debit Card
        </span>
      </div>
    </label>

  </div>
</div>

<p className="text-sm text-gray-500 mt-4 text-center">
  🔒 Secure Checkout
</p>

          <button
            type="submit"
            className="
            w-full
            bg-orange-500
            text-white
            py-4
            rounded-2xl
            font-semibold
            hover:bg-orange-600
            transition
            "
          >
            Place Order
          </button>

        </form>

      </div>

      {/* Right */}
      <div className="bg-white rounded-3xl p-8 shadow-xl h-fit">

        <h2 className="text-3xl font-bold mb-6">
          Order Summary
        </h2>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between mb-4"
          >
            <span>
              {item.name} × {item.quantity}
            </span>

            <span>
              ₹{item.price * item.quantity}
            </span>
          </div>
        ))}

        <hr className="my-6" />

        <div className="flex justify-between text-lg">
  <span>Delivery Fee</span>
  <span className="text-green-600 font-semibold">
    FREE
  </span>
</div>

        <div className="flex justify-between text-2xl font-bold mt-6">
          <span>Total</span>

         <span>
  ₹{
    cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
  }
</span>
        </div>

      </div>

    </div>

  </div>
);
}

export default Checkout;