import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import TourPlane from "./pages/PDFViewer";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/*" element={<PageNotFound/>} />
        <Route path="/tourplane" element={<TourPlane/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes> 

    </BrowserRouter>
  );
}

export default App;
