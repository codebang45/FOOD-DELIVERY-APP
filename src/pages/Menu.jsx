import Navbar from "../components/Navbar";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Menu() {
  const { addToCart } = useContext(CartContext);

  const menuItems = [
    {
      id: 1,
      name: "Cheese Burger",
      price: 199,
      emoji: "🍔",
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      price: 299,
      emoji: "🍕",
    },
    {
      id: 3,
      name: "Cold Drink",
      price: 99,
      emoji: "🥤",
    },
    {
      id: 4,
      name: "Chocolate Cake",
      price: 149,
      emoji: "🍰",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="py-20 px-10">
        <h1 className="text-5xl font-bold text-center mb-12">
          Our Menu
        </h1>

        <div className="grid md:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition"
            >
              <div className="text-7xl mb-4">
                {item.emoji}
              </div>

              <h2 className="text-2xl font-semibold">
                {item.name}
              </h2>

             <p className="text-orange-500 font-bold mt-2">
                ₹{item.price}
            </p>

              <button
                onClick={() => addToCart(item)}
                className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600"
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Menu;