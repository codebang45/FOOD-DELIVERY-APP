import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Menu() {
  const { addToCart } = useContext(CartContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const menuItems = [
    {
      id: 1,
      name: "Cheese Burger",
      price: 199,
      emoji: "🍔",
      category: "Burger",

    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      price: 299,
      emoji: "🍕",
      category: "Pizza",
    },
    {
      id: 3,
      name: "Cold Drink",
      price: 99,
      emoji: "🥤",
      category: "Drink",
    },
    {
      id: 4,
      name: "Chocolate Cake",
      price: 149,
      emoji: "🍰",
      category: "Dessert",
    },
  ];

const filteredItems = menuItems.filter((item) => {
  const matchesSearch = item.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    category === "All" ||
    item.category === category;

  return matchesSearch && matchesCategory;
});

  return (
    <>
      <Navbar />

      <section className="py-20 px-10">
        <h1 className="text-5xl font-bold text-center mb-12">
          Our Menu
        </h1>

        <div className="flex justify-center mb-10">
  <input
    type="text"
    placeholder="Search food..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="border p-3 rounded-lg w-80"
  />
</div>

<div className="flex justify-center gap-4 mb-10 flex-wrap">
  <button
    onClick={() => setCategory("All")}
    className="bg-gray-200 px-4 py-2 rounded"
  >
    All
  </button>

  <button
    onClick={() => setCategory("Burger")}
    className="bg-gray-200 px-4 py-2 rounded"
  >
    Burger
  </button>

  <button
    onClick={() => setCategory("Pizza")}
    className="bg-gray-200 px-4 py-2 rounded"
  >
    Pizza
  </button>

  <button
    onClick={() => setCategory("Drink")}
    className="bg-gray-200 px-4 py-2 rounded"
  >
    Drink
  </button>

  <button
    onClick={() => setCategory("Dessert")}
    className="bg-gray-200 px-4 py-2 rounded"
  >
    Dessert
  </button>
</div>

        <div className="grid md:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
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