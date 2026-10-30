import { Link } from "react-router-dom";
import foodImage from "../components/assets/images/food.jpg";
import {
  FaBolt,
  FaUtensils,
  FaShieldAlt,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";

import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-500 to-yellow-400 text-white pt-32 pb-24">
        {/* Decorative circles */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full" />
        <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-white/10 rounded-full" />

        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text */}
          <div>
            <p className="uppercase tracking-[4px] text-white/80 font-semibold mb-4">
              About Foodie
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Good Food.
              <br />
              <span className="text-black">Good Mood.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              Foodie makes discovering, ordering and enjoying your
              favourite meals simple, fast and convenient.
            </p>

            <Link
              to="/menu"
              className="
                inline-flex
                items-center
                gap-3
                mt-8
                bg-black
                text-white
                px-7
                py-4
                rounded-xl
                font-semibold
                hover:bg-gray-800
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Explore Our Menu
              <FaArrowRight />
            </Link>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-black/20 rounded-[40px] rotate-6" />

              <img
                src={foodImage}
                alt="Delicious food"
                className="
                  relative
                  w-[280px]
                  h-[280px]
                  md:w-[400px]
                  md:h-[400px]
                  object-cover
                  rounded-[40px]
                  shadow-2xl
                  border-8
                  border-white/30
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <p className="text-orange-500 font-semibold uppercase tracking-[3px] mb-3">
                Our Story
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Food should be
                <span className="text-orange-500"> simple.</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Foodie was created with one simple idea — ordering great
                food should never be complicated.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                From discovering your favourite dishes to adding them
                to your cart, we aim to make every step of your food
                journey smooth, quick and enjoyable.
              </p>
            </div>

            {/* Right */}
            <div className="bg-orange-50 rounded-3xl p-8 md:p-12">
              <div className="border-l-4 border-orange-500 pl-6">
                <p className="text-2xl md:text-3xl font-semibold text-gray-900 leading-relaxed">
                  "Great food brings people together,
                  and we want to make that experience
                  easier for everyone."
                </p>
              </div>

              <div className="mt-8 flex gap-10">
                <div>
                  <h3 className="text-4xl font-bold text-orange-500">
                    1000+
                  </h3>
                  <p className="text-gray-500 mt-1">
                    Happy Customers
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-orange-500">
                    50+
                  </h3>
                  <p className="text-gray-500 mt-1">
                    Restaurants
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY FOODIE ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-orange-500 font-semibold uppercase tracking-[3px] mb-3">
              Why Foodie?
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why choose us?
            </h2>

            <p className="mt-4 text-gray-500 text-lg">
              Everything you need for a better food ordering experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center text-2xl mb-6">
                <FaBolt />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Fast Delivery
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Get your favourite meals delivered quickly and
                conveniently.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center text-2xl mb-6">
                <FaUtensils />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Quality Food
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Discover delicious meals from a variety of
                restaurants.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center text-2xl mb-6">
                <FaShieldAlt />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Safe & Secure
              </h3>

              <p className="text-gray-500 leading-relaxed">
                A simple and secure platform designed for your
                convenience.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center text-2xl mb-6">
                <FaHeart />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Customer First
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Your satisfaction is always at the heart of what
                we do.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-[3px] mb-3">
            Our Mission
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Making every meal
            <span className="text-orange-500"> memorable.</span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Our mission is to connect people with great food through
            a fast, simple and reliable food ordering experience.
            We believe technology should make everyday life easier,
            and ordering food should be no different.
          </p>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
            <h3 className="text-5xl font-bold text-orange-500">
              1000+
            </h3>
            <p className="text-gray-500 mt-3 text-lg">
              Happy Customers
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
            <h3 className="text-5xl font-bold text-orange-500">
              50+
            </h3>
            <p className="text-gray-500 mt-3 text-lg">
              Restaurant Partners
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
            <h3 className="text-5xl font-bold text-orange-500">
              30 Min
            </h3>
            <p className="text-gray-500 mt-3 text-lg">
              Average Delivery
            </p>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center">

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Hungry already?
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-8">
            Discover delicious food and order your favourite meal today.
          </p>

          <Link
            to="/menu"
            className="
              inline-flex
              items-center
              gap-3
              bg-black
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-gray-800
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Explore Menu
            <FaArrowRight />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default About;