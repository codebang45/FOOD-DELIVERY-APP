import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import burgerImg from "../components/assets/categories/burger.jpg";
import pizzaImg from "../components/assets/categories/pizza.jpg";
import drinkImg from "../components/assets/categories/colddrink.jpg";

function PopularDishes() {
  const { addToCart } = useContext(CartContext);

 const dishes = [
  {
    id: 1,
    name: "Cheese Burger",
    price: 199,
    image: burgerImg,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    price: 299,
    image: pizzaImg,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Cold Drink",
    price: 99,
    image: drinkImg,
    rating: 4.6,
  },
];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-10">

        <h2 className="text-5xl font-bold text-center mb-4">
          Popular Dishes
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Most loved by our customers
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="
             bg-white
            rounded-3xl
overflow-hidden
shadow-lg
hover:shadow-2xl
hover:-translate-y-3
transition-all
duration-300
              "
            >
         <img
  src={dish.image}
  alt={dish.name}
  className="
w-full
h-56
object-contain
bg-white
p-4
"
/>

<div className="p-6">

  <h3 className="text-2xl font-bold text-center">
    {dish.name}
  </h3>

  <div className="flex justify-center mt-3">
    <span className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
      ⭐ {dish.rating}
    </span>
  </div>

  <p className="text-center text-orange-500 font-bold text-xl mt-3">
    ₹{dish.price}
  </p>

  <button
    onClick={() => addToCart(dish)}
    className="
    w-full
    mt-6
    bg-orange-500
    text-white
    py-3
    rounded-xl
    hover:bg-orange-600
    transition
    "
  >
    Add To Cart
  </button>

</div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}



export default PopularDishes;