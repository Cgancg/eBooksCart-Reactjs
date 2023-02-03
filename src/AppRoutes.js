import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { AboutUs } from "./NavLinks/AboutUs";
import { ContactUs } from "./NavLinks/ContactUs";
import { Cart } from "./components/Cart";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
};