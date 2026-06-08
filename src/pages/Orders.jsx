function Orders() {
const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">
        📦 Order History
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
            className="bg-white p-5 rounded-xl shadow"
          >
            <h2 className="text-xl font-semibold">
              Order #{order.id}
            </h2>

          <p>Items: {order.items}</p>
          <p>Phone: {order.phone}</p>
          <p>Address: {order.address}</p>

            <p>Total: ₹{order.total}</p>
            <p>Date: {order.date}</p>
            <p>Status: {order.status}</p>
          </div>
          
        ))}
    
      </div>
      )}
    </div>
    
  );
}

export default Orders;