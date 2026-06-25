import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaTrash } from "react-icons/fa";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const delivery = subtotal > 0 ? 0 : 0;
  const total = subtotal + delivery;

  return (
    <>
      <Navbar />

      <section className="pt-28 pb-16 px-4 md:px-8 lg:px-14 bg-gray-50 min-h-screen">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}

          <div className="flex justify-between items-center mb-10">

            <div>
<h1 className="text-4xl font-bold">
  Your Cart
</h1>

<p className="text-gray-500 mt-2">
  {totalItems} {totalItems > 1 ? "items" : "item"}  •  Review your order before checkout
</p>


            </div>

          </div>

          {cartItems.length === 0 ? (

            <div className="bg-white rounded-3xl shadow-xl py-20 text-center">

              <h2 className="text-3xl font-bold">
                Your Cart is Empty 😔
              </h2>

              <p className="text-gray-500 mt-3">
                Looks like you haven't added anything yet.
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

            <div className="grid lg:grid-cols-3 gap-10">

              {/* Left */}

              <div className="lg:col-span-2 space-y-6">

                {cartItems.map((item) => (

                  <div
                    key={item.id}
                    className="
                    bg-white
                    rounded-3xl
                    shadow-md
                    hover:shadow-xl
                    transition
                    p-6
                    flex
                    flex-col
                    sm:flex-row
                    items-center
                    gap-6
                    "
                  >

                    {/* Image */}

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-contain"
                    />

                    {/* Details */}

                    <div className="flex-1 text-center sm:text-left">

                      <h2 className="text-2xl font-bold">
                        {item.name}
                      </h2>

                      <p className="text-orange-500 text-xl font-bold mt-2">
                        ₹{item.price}
                      </p>

                      <p className="text-gray-500 mt-1">
                        Category : {item.category}
                      </p>

                    </div>

                    {/* Quantity */}

                    <div className="flex flex-col items-center gap-4">

                      <div className="flex items-center gap-4">

                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="
                          w-11
                          h-11
                          rounded-full
                          bg-red-500
                          text-white
                          text-xl
                          hover:bg-red-600
                          "
                        >
                          -
                        </button>

                        <span className="text-xl font-bold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="
                          w-11
                          h-11
                          rounded-full
                          bg-green-500
                          text-white
                          text-xl
                          hover:bg-green-600
                          "
                        >
                          +
                        </button>

                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="
                        flex
                        items-center
                        gap-2
                        text-red-500
                        hover:text-red-700
                        font-semibold
                        "
                      >
                        <FaTrash />
                        Remove
                      </button>

                    </div>

                  </div>

                ))}

              </div>

              {/* Right */}

<div className="bg-white rounded-3xl shadow-xl p-8 h-fit sticky top-32">

  <h2 className="text-3xl font-bold mb-8">
    Order Summary
  </h2>

  <div className="space-y-5">

    <div className="flex justify-between">
      <span className="text-gray-500">
        Items
      </span>

      <span>
        {totalItems}
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-500">
        Subtotal
      </span>

      <span>
        ₹{subtotal}
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-500">
        Delivery
      </span>

      <span className="text-green-600 font-semibold">
        FREE
      </span>
    </div>

    <hr />

    <div className="flex justify-between text-2xl font-bold">

      <span>Total</span>

      <span className="text-orange-500">
        ₹{total}
      </span>

    </div>

  </div>

  <Link to="/checkout">

    <button
      className="
      w-full
      mt-8
      bg-orange-500
      text-white
      py-4
      rounded-2xl
      font-semibold
      hover:bg-orange-600
      transition
      "
    >
      Proceed To Checkout
    </button>

  </Link>

  <Link to="/menu">

    <button
      className="
      w-full
      mt-4
      border-2
      border-orange-500
      text-orange-500
      py-4
      rounded-2xl
      font-semibold
      hover:bg-orange-50
      transition
      "
    >
      Continue Shopping
    </button>

  </Link>

  <button
    onClick={clearCart}
    className="
    w-full
    mt-4
    bg-red-500
    text-white
    py-4
    rounded-2xl
    font-semibold
    hover:bg-red-600
    transition
    "
  >
    Clear Cart
  </button>

</div>

</div>

)}

</div>

</section>

</>

);

}

export default Cart;
  