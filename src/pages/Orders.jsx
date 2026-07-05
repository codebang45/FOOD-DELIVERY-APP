import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaRedo, FaBoxOpen } from "react-icons/fa";

function Orders() {
  const { reorderItems } = useContext(CartContext);
  const navigate = useNavigate();

  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <>
      <Navbar />

      <section className="pt-28 pb-16 bg-gray-50 min-h-screen">

        <div className="max-w-6xl mx-auto px-4">

          {/* Heading */}

          <div className="mb-10">

            <h1 className="text-4xl md:text-5xl font-bold">
              Your Orders
            </h1>

            <p className="text-gray-500 mt-2">
              {orders.length} Order
              {orders.length !== 1 && "s"} | Review your previous orders
            </p>

          </div>

          {/* Empty */}

          {orders.length === 0 ? (

            <div className="bg-white rounded-3xl shadow-xl py-20 text-center">

              <FaBoxOpen
                className="mx-auto text-6xl text-orange-500 mb-6"
              />

              <h2 className="text-3xl font-bold">
                No Orders Yet
              </h2>

              <p className="text-gray-500 mt-3">
                Looks like you haven't placed any order.
              </p>

              <Link to="/menu">

                <button
                  className="
                  mt-8
                  bg-orange-500
                  text-white
                  px-8
                  py-3
                  rounded-xl
                  hover:bg-orange-600
                  transition
                  "
                >
                  Browse Menu
                </button>

              </Link>

            </div>

          ) : (

            <div className="space-y-8">

              {orders
                .slice()
                .reverse()
                .map((order) => (

                  <div
                    key={order.id}
                    className="
                    bg-white
                    rounded-3xl
                    shadow-lg
                    hover:shadow-xl
                    transition
                    overflow-hidden
                    "
                  >

                    {/* Top */}

                    <div
                      className="
                      bg-orange-500
                      text-white
                      px-6
                      py-5
                      flex
                      justify-between
                      items-center
                      "
                    >

                      <div>

                        <h2 className="text-2xl font-bold">
                          Order #{order.id}
                        </h2>

                        <p className="text-orange-100 mt-1">
                          {order.date}
                        </p>

                      </div>

                      <span
                        className="
                        bg-white
                        text-orange-500
                        px-4
                        py-2
                        rounded-full
                        font-semibold
                        "
                      >
                        {order.status}
                      </span>

                    </div>

                    {/* Body */}

                    <div className="p-6">

                      <div className="grid lg:grid-cols-2 gap-8">

                        {/* Left */}

                        <div>

                          <h3 className="font-bold text-xl mb-5">
                            Ordered Items
                          </h3>

                          <div className="space-y-4">

                            {order.orderedItems.map((item) => (

                              <div
                                key={item.id}
                                className="
                                flex
                                items-center
                                gap-4
                                border
                                rounded-2xl
                                p-3
                                "
                              >

                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="
                                  w-20
                                  h-20
                                  object-contain
                                  "
                                />

                                <div className="flex-1">

                                  <h4 className="font-semibold text-lg">
                                    {item.name}
                                  </h4>

                                  <p className="text-gray-500">
                                    Qty : {item.quantity}
                                  </p>

                                </div>

                                <h4 className="font-bold text-orange-500">
                                  ₹
                                  {item.price *
                                    item.quantity}
                                </h4>

                              </div>

                            ))}

                          </div>

                        </div>

                        {/* Right */}

                        <div>

                          <h3 className="font-bold text-xl mb-5">
                            Order Details
                          </h3>

                          <div className="space-y-4">

                            <div className="flex justify-between">

                              <span className="text-gray-500">
                                Total Items
                              </span>

                              <span className="font-semibold">
                                {order.items}
                              </span>

                            </div>

                            <div className="flex justify-between">

                              <span className="text-gray-500">
                                Phone
                              </span>

                              <span className="font-semibold">
                                {order.phone}
                              </span>

                            </div>

                            <div className="flex justify-between">

                              <span className="text-gray-500">
                                Payment
                              </span>

                              <span className="font-semibold">
                                {order.payment}
                              </span>

                            </div>

                            <div className="flex justify-between">

                              <span className="text-gray-500">
                                Status
                              </span>

                              <span className="text-green-600 font-semibold">
                                {order.status}
                              </span>

                            </div>

                            <div>

                              <p className="text-gray-500 mb-2">
                                Delivery Address
                              </p>

                              <div className="bg-gray-100 rounded-xl p-4">
                                {order.address}
                              </div>

                            </div>

                                                        <hr className="my-6" />

                            <div className="flex justify-between items-center">

                              <div>

                                <p className="text-gray-500 text-sm">
                                  Total Amount
                                </p>

                                <h2 className="text-3xl font-bold text-orange-500">
                                  ₹{order.total}
                                </h2>

                              </div>

                              <button
                                onClick={() => {
                                  reorderItems(order.orderedItems);
                                  navigate("/cart");
                                }}
                                className="
                                bg-orange-500
                                text-white
                                px-6
                                py-3
                                rounded-xl
                                hover:bg-orange-600
                                transition
                                flex
                                items-center
                                gap-3
                                "
                              >
                                <FaRedo />
                                Order Again
                              </button>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                ))}

            </div>

          )}

          {/* Bottom Button */}

          {orders.length > 0 && (

            <div className="flex justify-center mt-12">

              <Link to="/menu">

                <button
                  className="
                  border-2
                  border-orange-500
                  text-orange-500
                  px-10
                  py-4
                  rounded-2xl
                  hover:bg-orange-50
                  transition
                  font-semibold
                  "
                >
                  Continue Shopping
                </button>

              </Link>

            </div>

          )}

        </div>

      </section>

    </>
  );
}

export default Orders;