import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
   const { cartItems } = useContext(CartContext);
   const { user, logout } = useContext(AuthContext);
   const totalItems = cartItems.reduce(
  (sum, item) => sum + item.quantity,
  0
);
  return (
    
    <nav className="
absolute
top-0
left-0
w-full
z-50
flex
justify-between
items-center
px-12
py-6
bg-transparent
text-white
">
 <h1 className="text-5xl font-bold text-white">
  Foodie
</h1>

<ul className="flex gap-10 font-semibold text-white">
  <li>
    <Link to="/">Home</Link>
  </li>

  <li>
    <Link to="/menu">Menu</Link>
  </li>

  <li>About</li>

<li>
  <Link to="/orders">Orders</Link>
</li>

  <li>Contact</li>
</ul>
      <div className="flex items-center gap-10">
<Link to="/cart" className="relative">
  <FaShoppingCart
    size={22}
    className="cursor-pointer hover:text-orange-500"
  />

  <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
    {totalItems}
  </span>
</Link>
  {user ? (
  <div className="flex items-center gap-3">
    <span className="font-semibold">
      Hi {user.name} 👋
    </span>

    <button
      onClick={logout}
      className="bg-red-500 text-white px-4 py-2 rounded-lg"
    >
      Logout
    </button>
  </div>
) : (
  <Link to="/login">
   <button className="bg-black text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 hover:bg-gray-900 transition-all duration-300">
  Login
</button>
  </Link>
)}
      </div>
    </nav>
  );
}

export default Navbar;