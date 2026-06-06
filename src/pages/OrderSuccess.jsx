import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-green-600 mb-4">
        🎉 Order Placed Successfully!
      </h1>

      <p className="text-xl text-gray-600 mb-6">
        Thank you for ordering with us.
      </p>

      <p className="text-lg mb-8">
        Order ID: #{Math.floor(Math.random() * 100000)}
      </p>

      <Link to="/">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
          Back To Home
        </button>
      </Link>
    </div>
  );
}

export default OrderSuccess;