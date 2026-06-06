import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";


import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<OrderSuccess />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;