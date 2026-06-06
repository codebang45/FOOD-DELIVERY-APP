import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
   const { cartItems } = useContext(CartContext);
   const totalItems = cartItems.reduce(
  (sum, item) => sum + item.quantity,
  0
);
  return (
    <nav className="flex justify-between items-center px-8 py-4 backdrop-blur-md bg-white/80 sticky top-0 z-50 shadow-sm">
        <h1 className="text-3xl font-extrabold">
    Food<span className="text-orange-500">ie</span>
        </h1>

<ul className="flex gap-8 font-medium">
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
      <div className="flex items-center gap-4">
<Link to="/cart" className="relative">
  <FaShoppingCart
    size={22}
    className="cursor-pointer hover:text-orange-500"
  />

  <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
    {totalItems}
  </span>
</Link>
       <Link to="/login">
  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
    Login
  </button>
</Link>
      </div>
    </nav>
  );
}

export default Navbar;