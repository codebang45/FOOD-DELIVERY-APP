import {
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Navbar({ transparent = false }) {
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isScrolled = transparent && scrolled;
  



useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "auto";

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    document.body.style.overflow = "auto";
    window.removeEventListener("scroll", handleScroll);
  };
}, [menuOpen]);

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
<nav
  className={`
    fixed
    top-0
    left-0
    w-full
    z-[999]
    px-6
    py-5
    flex
    justify-between
    items-center
    transition-all
    duration-300
 ${
  isScrolled
    ? "bg-white text-black shadow-md"
    : transparent
      ? "bg-transparent text-white"
      : "bg-white text-black shadow-md"
}
  `}
>
      {/* Logo */}
<h1
  className={`text-3xl md:text-5xl font-bold ${
    scrolled || !transparent
      ? "text-orange-500"
      : "text-white"
  }`}
>
  Foodie
</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 font-semibold">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/menu">Menu</Link>
        </li>

        <li>
          <Link to="/orders">Orders</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
  <Link to="/contact">Contact</Link>
</li>
      </ul>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/cart" className="relative">
<FaShoppingCart
  size={24}
  className={`${
    scrolled || !transparent
      ? "text-black"
      : "text-white"
  } hover:text-orange-500`}
/>

<span
  className="
    absolute
    -top-2
    -right-3
    bg-orange-500
    text-white
    text-xs
    px-2
    py-1
    rounded-full
  "
>
  {totalItems}
</span>
        </Link>

        {user ? (
          <div className="flex items-center gap-3">
  <span className="font-medium">
  Hi {user.email.split("@")[0]}
</span>

            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
<button
className={`
  px-6
  py-3
  rounded-xl
  text-white
  transition
  ${
  isScrolled
    ? "bg-orange-500 hover:bg-orange-600"
    : transparent
      ? "bg-black hover:bg-gray-800"
      : "bg-orange-500 hover:bg-orange-600"
}
`}
>
  Login
</button>
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
<button
  className={`md:hidden text-3xl ${
  transparent ? "text-white" : "text-black"
}`}
  onClick={() => setMenuOpen(true)}
>
  <FaBars />
</button>
       

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
          fixed
          top-0
          left-0
          w-full
          h-screen
          bg-black/95
          z-50
          text-white
          flex
         flex-col
         justify-center
         items-center
         gap-8
          md:hidden
          "
        >

          <button
  onClick={() => setMenuOpen(false)}
  className="absolute top-6 right-6 text-3xl"
>
  <FaTimes />
</button>

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/menu"
            onClick={() => setMenuOpen(false)}
          >
            Menu
          </Link>

          <Link
            to="/orders"
            onClick={() => setMenuOpen(false)}
          >
            Orders
          </Link>

          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
          >
            Cart ({totalItems})
          </Link>

          {user ? (
            <>
<span>
  Hi {user.email.split("@")[0]}
</span>

              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="
                bg-red-500
                px-5
                py-2
                rounded-lg
                "
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
            >
              <button
                className="
                bg-orange-500
                px-5
                py-2
                rounded-lg
                "
              >
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;