import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import foodData from "../data/foodData";

function Menu() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const menuItems = foodData;

  const categories = [
    "All",
    ...new Set(menuItems.map((item) => item.category)),
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

      <section className="pt-32 pb-16 px-4 md:px-10">

        <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
          Our Menu
        </h1>

        {/* Search */}

        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-3 rounded-lg w-full max-w-md"
          />
        </div>

        {/* Categories */}

        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-lg transition ${
                category === cat
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Food Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {filteredItems.map((item) => (

            <div
              key={item.id}
              onClick={() => navigate(`/food/${item.id}`)}
              className="
bg-white
rounded-2xl
shadow-lg
p-5
md:p-7
text-center
cursor-pointer
transition
md:hover:scale-105
hover:shadow-2xl
"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto mb-4"
              />

              <h2 className="text-xl md:text-2xl font-semibold">
                {item.name}
              </h2>

              <p className="text-orange-500 font-bold text-lg mt-2">
                ₹{item.price}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(item);
                }}
                className="
mt-5
w-full
bg-orange-500
text-white
py-3
rounded-xl
font-semibold
transition
hover:bg-orange-600
active:scale-95
"
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