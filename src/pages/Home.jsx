import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import PopularDishes from "../components/PopularDishes";

// import heroBurger from "../assets/images/hero-burger.jpg";


function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-[85vh] flex items-center justify-center px-10 bg-gradient-to-r from-orange-50 via-white to-orange-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">

          <div className="flex-1">
            <h1 className="text-6xl font-bold leading-tight">
              Delicious Food
              <span className="text-orange-500"> Delivered</span>
              <br />
              To Your Door
            </h1>

            <p className="text-gray-600 mt-6 text-lg">
              Order your favorite meals from the best restaurants
              and get them delivered fast at your doorstep.
            </p>

            <button className="mt-8 bg-orange-500 text-white px-8 py-4 rounded-xl hover:scale-105 hover:bg-orange-600 transition-all duration-300 shadow-lg">
             Order Now
            </button>
          </div>

        <div className="flex-1 flex justify-center">
  <img
    src="/hero-burger.jpg"
    alt="burger"
    className="w-[500px] hover:scale-105 transition duration-500"
  />
</div>

        </div>
      </section>
      <Categories />
      <PopularDishes />

      
    </>
  );
}

export default Home;