import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function PopularDishes() {
    const { addToCart } = useContext(CartContext);
  const dishes = [
    {
      name: "Cheese Burger",
      price: "₹199",
      emoji: "🍔",
    },
    {
      name: "Pepperoni Pizza",
      price: "₹299",
      emoji: "🍕",
    },
    {
      name: "Cold Drink",
      price: "₹99",
      emoji: "🥤",
    },
  ];

  return (
    <section className="py-20 px-10">
      <h2 className="text-4xl font-bold text-center mb-12">
        Popular Dishes
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {dishes.map((dish) => (
          <div
            key={dish.name}
            className="bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition"
          >
            <div className="text-8xl mb-4">
              {dish.emoji}
            </div>

            <h3 className="text-2xl font-semibold">
              {dish.name}
            </h3>

            <p className="text-orange-500 font-bold mt-2">
              {dish.price}
            </p>

            <button
            onClick={() => addToCart(dish)}
            className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-xl"
            >
            Add To Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularDishes;