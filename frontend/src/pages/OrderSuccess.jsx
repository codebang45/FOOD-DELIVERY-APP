import { Link } from "react-router-dom";

function OrderSuccess() {
  const orderId = Math.floor(Math.random() * 100000);

  return (
    <div className="min-h-screen bg-[#fff7f2] flex items-center justify-center px-6">

      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl w-full text-center">

        <div className="text-7xl mb-4">
          ✅
        </div>

        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Thank you for ordering with Foodie.
          Your delicious meal is being prepared.
        </p>

        <div className="bg-orange-50 rounded-2xl p-6 mb-8">

          <p className="text-gray-500 mb-2">
            Order ID
          </p>

          <h2 className="text-3xl font-bold">
            #{orderId}
          </h2>

          <p className="text-gray-500 mt-4">
            Estimated Delivery
          </p>

          <h3 className="text-xl font-semibold text-orange-500">
            25 - 30 Minutes
          </h3>

        </div>

        <Link to="/">
          <button
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
            Back To Home
          </button>
        </Link>

      </div>

    </div>
  );
}

export default OrderSuccess;