import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Booking from "./pages/Booking";
import ContactPage from "./pages/Contact";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import TourPlane from "./pages/TourPlane";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/tourplane" element={<TourPlane />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
