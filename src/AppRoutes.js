import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import { Cart } from "./pages/Cart";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
