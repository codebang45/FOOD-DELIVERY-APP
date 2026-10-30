import pizza from "./assets/categories/pizza.jpg";
import burger from "./assets/categories/burger.jpg";
import biryani from "./assets/categories/biryani.jpg";
import momo from "./assets/categories/momo.jpg";
import noodles from "./assets/categories/noodles.jpg";
import pasta from "./assets/categories/pasta.jpg";
import dosa from "./assets/categories/dosa.jpg";
import icecream from "./assets/categories/icecream.jpg";
import colddrink from "./assets/categories/colddrink.jpg";
import redbull from "./assets/categories/redbull.jpg";
import samosa from "./assets/categories/samosa.jpg";

function Categories() {
const categories = [
  { image: pizza, name: "Pizza" },
  { image: burger, name: "Burger" },
  { image: biryani, name: "Biryani" },
  { image: momo, name: "Momos" },
  { image: noodles, name: "Noodles" },
  { image: pasta, name: "Pasta" },
  { image: dosa, name: "Dosa" },
  { image: icecream, name: "Ice Cream" },
  { image: colddrink, name: "Beverages" },
  { image: redbull, name: "Drinks" },
  { image: samosa, name: "Samosa" },
  
];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-10">

        <h2 className="text-5xl font-bold text-center mb-4">
          What's On Your Mind?
        </h2>

        <p className="text-center text-gray-500 mb-14">
          Choose your favourite category
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {categories.map((item) => (
  <div
    key={item.name}
    className="
    text-center
    cursor-pointer
    hover:scale-105
    transition-all
    duration-300
    "
  >
              <img
                src={item.image}
                alt={item.name}
                className="
                w-40
                h-40
                object-contain
                mx-auto
                
                "
              />

              <h3 className="text-2xl font-bold">
                {item.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Categories;