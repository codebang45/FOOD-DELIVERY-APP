import { Link } from "react-router-dom";
import foodImage from "../components/assets/images/food.jpg";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGoogle,
} from "react-icons/fa";

function Signup() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-300">
      
      {/* Left Side */}
      <div className="hidden md:flex w-1/2 bg-orange-500 text-white flex-col justify-center items-center p-10">
        <h1 className="text-6xl font-bold mb-6">
          Foodie 🍔
        </h1>

        <p className="text-2xl text-center">
          Order your favorite food
          <br />
          anytime, anywhere.
        </p>

<img
  src={foodImage}
  alt="Food"
className="
  w-[280px]
  h-[280px]
  object-cover
  mt-10
  rounded-full
  border-4 border-white/20
  shadow-2xl
  mx-auto
  float-animation
"
/>

<div className="mt-8 grid grid-cols-3 gap-3 w-full max-w-md">
  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl text-center">
    🚀
    <p className="text-sm mt-1">Fast Delivery</p>
  </div>

  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl text-center">
    🍔
    <p className="text-sm mt-1">Fresh Food</p>
  </div>

  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl text-center">
    ⭐
    <p className="text-sm mt-1">1000+ Users</p>
  </div>
</div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-gradient-to-br from-orange-50 to-white">
        <div
className="
bg-white/80
backdrop-blur-md
border border-white/30
p-10
rounded-3xl
shadow-2xl
w-[450px]
"
>

          <h1 className="text-4xl font-bold text-center mb-8">
            Create Account
          </h1>

          <form className="space-y-4">

            <div className="relative">
  <FaUser
    className="
    absolute
    left-4
    top-1/2
    -translate-y-1/2
    text-orange-500"
  />

  <input
    type="text"
    placeholder="Full Name"
    className="
    w-full
    pl-12
    p-4
    rounded-xl
    border
    outline-none
    focus:border-orange-500"
  />
</div>

            <div className="relative">
  <FaEnvelope
    className="
    absolute
    left-4
    top-1/2
    -translate-y-1/2
    text-orange-500"
  />

  <input
    type="email"
    placeholder="Email"
    className="
    w-full
    pl-12
    p-4
    rounded-xl
    border
    outline-none
    focus:border-orange-500"
  />
</div>

            <div className="relative">
  <FaLock
    className="
    absolute
    left-4
    top-1/2
    -translate-y-1/2
    text-orange-500"
  />

  <input
    type="password"
    placeholder="Password"
    className="
    w-full
    pl-12
    p-4
    rounded-xl
    border
    outline-none
    focus:border-orange-500"
  />
</div>

            <div className="relative">
  <FaLock
    className="
    absolute
    left-4
    top-1/2
    -translate-y-1/2
    text-orange-500"
  />

  <input
    type="password"
    placeholder="Confirm Password"
    className="
    w-full
    pl-12
    p-4
    rounded-xl
    border
    outline-none
    focus:border-orange-500"
  />
</div>

            <button
className="
w-full
bg-orange-500
text-white
py-4
rounded-xl
font-semibold
shadow-lg
hover:scale-105
hover:bg-orange-600
transition-all
duration-300
"
            >
              Create Account
            </button>

            <div className="my-4 text-center text-gray-500">
  OR
</div>

<button
className="
w-full
border
py-4
rounded-xl
flex
justify-center
items-center
gap-3
hover:bg-gray-100
transition
"
>
  <FaGoogle />
  Continue With Google
</button>

          </form>

          <p className="text-center mt-6">
            Already have an account?
            <Link
              to="/login"
              className="text-orange-500 ml-2"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Signup;