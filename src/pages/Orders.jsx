import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Orders() {
const { reorderItems } = useContext(CartContext);
const navigate = useNavigate();

const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">
         Order History
      </h1>

      {orders.length === 0 ? (
  <p className="text-gray-500">

    No Orders Yet
  </p>
) : (

      <div className="space-y-4">
        {orders.map((order) => (
     <div
  key={order.id}
  className="
  bg-white
  rounded-3xl
  shadow-lg
  p-6
  border
  border-gray-100
  hover:shadow-xl
  transition
  "
>
  <div className="flex justify-between items-start">

    <div>
      <h2 className="text-2xl font-bold">
        Order #{order.id}
      </h2>

      <p className="text-gray-500 mt-1">
        {order.date}
      </p>
    </div>

<span
  className="
  bg-green-100
  text-green-700
  px-4
  py-2
  rounded-full
  text-sm
  font-semibold
  "
>
  {order.status}
</span>

  </div>

  <div className="mt-5 grid md:grid-cols-2 gap-4">

    <div>
      <p>
        <span className="font-semibold">Items:</span>{" "}
        {order.items}
      </p>

      <p>
        <span className="font-semibold">Phone:</span>{" "}
        {order.phone}
      </p>
    </div>

    <div>
      <p>
        <span className="font-semibold">Address:</span>{" "}
        {order.address}
      </p>
    </div>

  </div>

  <div className="mt-5 pt-4 border-t flex justify-between items-center">

   <div>
  <p className="text-gray-500 text-sm">
    Total Amount
  </p>

  <h3 className="text-2xl font-bold text-orange-500">
    ₹{order.total}
  </h3>
</div>

<button
  onClick={() => {
    reorderItems(order.orderedItems);
    navigate("/cart");
  }}
  className="
  bg-orange-500
  text-white
  px-5
  py-2
  rounded-xl
  hover:bg-orange-600
  "
>
  Reorder
</button>

  </div>
</div>
          
        ))}
    
      </div>
      )}
    </div>
    
  );
}

export default Orders;