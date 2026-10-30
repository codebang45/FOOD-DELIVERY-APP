import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import FoodDetails from "./pages/FoodDetails";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProtectedRoute from "./routes/ProtectedRoute";

import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/menu" element={<Menu />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />

  <Route
    path="/cart"
    element={
      <ProtectedRoute>
        <Cart />
      </ProtectedRoute>
    }
  />

  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />

  <Route
    path="/checkout"
    element={
      <ProtectedRoute>
        <Checkout />
      </ProtectedRoute>
    }
  />

  <Route
    path="/success"
    element={
      <ProtectedRoute>
        <OrderSuccess />
      </ProtectedRoute>
    }
  />

  <Route
    path="/orders"
    element={
      <ProtectedRoute>
        <Orders />
      </ProtectedRoute>
    }
  />

  <Route path="/food/:id" element={<FoodDetails />} />
</Routes>

    <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    pauseOnHover
    theme="colored"
  />
  
    </BrowserRouter>
  );
}

export default App;