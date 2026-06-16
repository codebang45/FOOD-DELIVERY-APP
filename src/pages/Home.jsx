import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import PopularDishes from "../components/PopularDishes";
import heroBg from "../components/assets/images/hero-bg.png";

import foodDelivery from "../components/assets/cards/food-delivery.jpg";
import instamart from "../components/assets/cards/instamart.jpg";
import dineout from "../components/assets/cards/dineout.jpg";
import healthhub from "../components/assets/cards/healthhub.jpg";
import genie from "../components/assets/cards/genie.jpg";

import { useState } from "react";



function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Navbar />

      {/* Hero Section */}
<section
  className="relative min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: `url(${heroBg})`,
  }}
>
  <div className="absolute inset-0 bg-black/10"></div>

  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">

   <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center max-w-4xl leading-tight">
  Discover Great Food
  <br />
  Delivered Fast To Your Door !
  
</h1>

<div className="flex justify-center gap-4 mt-10">
  <input
    type="text"
    placeholder="Enter your delivery location"
    className="
      w-[340px]
      h-[62px]
      bg-white
      rounded-2xl
      px-6
      text-[17px]
      shadow-md
      outline-none
    "
  />

  <input
    type="text"
    placeholder="Search for restaurant, item or more"
    value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
    className="
      w-[520px]
      h-[62px]
      bg-white
      rounded-2xl
      px-6
      text-[17px]
      shadow-md
      outline-none
    "
  />
</div>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-14 w-full max-w-6xl">

      <div className="bg-white rounded-3xl p-5 shadow-xl hover:scale-105 transition">
       <img
  src={foodDelivery}
  alt=""
  className="h-44 mx-auto object-contain"
/>
        <h3 className="font-bold text-xl mt-3"> 
          Food Delivery
        </h3>
        <p className="text-gray-500">
          From Restaurants
        </p>
      </div>

      <div className="bg-white rounded-3xl p-5 shadow-xl hover:scale-105 transition">
        <img
  src={instamart}
  alt=""
  className="h-44 mx-auto object-contain"
/>
        <h3 className="font-bold text-xl mt-3">
          Instamart
        </h3>
        <p className="text-gray-500">
          Instant Grocery
        </p>
      </div>

      <div className="bg-white rounded-3xl p-5 shadow-xl hover:scale-105 transition">
        <img
  src={dineout}
  alt=""
  className="h-44 mx-auto object-contain"
/>
        <h3 className="font-bold text-xl mt-3">
          Dineout
        </h3>
        <p className="text-gray-500">
          Save More
        </p>
      </div>

      <div className="bg-white rounded-3xl p-5 shadow-xl hover:scale-105 transition">
        <img
  src={healthhub}
  alt=""
  className="h-44 mx-auto object-contain"
/>
        <h3 className="font-bold text-xl mt-3">
          Health Hub
        </h3>
        <p className="text-gray-500">
          Medicines
        </p>
      </div>

      <div className="bg-white rounded-3xl p-5 shadow-xl hover:scale-105 transition">
        <img
  src={genie}
  alt=""
  className="h-44 mx-auto object-contain"
/>
        <h3 className="font-bold text-xl mt-3">
          Genie
        </h3>
        <p className="text-gray-500">
          Pick & Drop
        </p>
      </div>

    </div>

  </div>
</section>

      {/* Stats Section */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-8">

    <div className="bg-orange-50 p-10 rounded-3xl shadow-xl text-center">
      <h2 className="text-5xl font-bold text-orange-500">
        1000+
      </h2>
      <p className="mt-3 text-gray-600">
        Happy Customers
      </p>
    </div>

    <div className="bg-orange-50 p-10 rounded-3xl shadow-xl text-center">
      <h2 className="text-5xl font-bold text-orange-500">
        500+
      </h2>
      <p className="mt-3 text-gray-600">
        Restaurants
      </p>
    </div>

    <div className="bg-orange-50 p-10 rounded-3xl shadow-xl text-center">
      <h2 className="text-5xl font-bold text-orange-500">
        30 Min
      </h2>
      <p className="mt-3 text-gray-600">
        Average Delivery
      </p>
    </div>

  </div>
</section>

      <Categories />

      <PopularDishes searchTerm={searchTerm} />

      

      {/* Footer */}
      <footer className="bg-black text-white py-12 text-center">
        <h1 className="text-3xl font-bold">
          Foodie 
        </h1>

        <p className="mt-3 text-gray-400">
          Delicious food delivered fast to your doorstep.
        </p>

        <p className="mt-4 text-gray-500 text-sm">
          © 2026 Foodie. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default Home;