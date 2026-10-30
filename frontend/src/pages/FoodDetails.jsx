import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Link } from "react-router-dom";

import foodData from "../data/foodData";
import { CartContext } from "../context/CartContext";

function FoodDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const food = foodData.find(
    (item) => item.id === Number(id)
  );

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Food Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fff7f2] py-16">

      {/* Main Food Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <Link
          to="/menu"
          className="inline-block mb-8 text-orange-500 font-semibold"
        >
          ← Back To Menu
        </Link>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div className="flex justify-center">
            <img
  src={food.image}
  alt={food.name}
  className="w-[400px] h-[400px] object-contain"
/>
          </div>

          {/* Right */}
          <div>

            <h1 className="text-5xl font-bold mb-4">
              {food.name}
            </h1>

            <div className="flex items-center gap-3 mb-5">
              <span className="bg-green-600 text-white px-3 py-1 rounded-lg">
                ⭐ 4.8
              </span>
            </div>

            <p className="text-gray-600 text-lg mb-6">
              Freshly prepared and delivered hot to your
              doorstep. Made with premium ingredients and
              loved by our customers.
            </p>

            <h2 className="text-4xl font-bold text-orange-500 mb-8">
              ₹{food.price}
            </h2>

            <button
              onClick={() => addToCart(food)}
              className="
              bg-orange-500
              text-white
              px-8
              py-4
              rounded-2xl
              text-lg
              hover:bg-orange-600
              transition
              "
            >
              Add To Cart
            </button>

          </div>

        </div>

      </div>

      {/* Related Foods */}
      <div className="max-w-6xl mx-auto mt-16">

        <h2 className="text-3xl font-bold mb-8">
          Related Foods
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {foodData
            .filter((item) => item.id !== food.id)
            .map((item) => (
              <Link
                key={item.id}
                to={`/food/${item.id}`}
                className="
                bg-white
                rounded-3xl
                p-6
                shadow-lg
                text-center
                hover:scale-105
                transition
                "
              >
                <img
  src={item.image}
  alt={item.name}
  className="w-40 h-40 object-contain mx-auto"
/>

                <h3 className="text-xl font-bold mt-4">
                  {item.name}
                </h3>

                <p className="text-orange-500 font-bold mt-2">
                  ₹{item.price}
                </p>
              </Link>
            ))}

        </div>

      </div>

    </div>
  );
}

export default FoodDetails;