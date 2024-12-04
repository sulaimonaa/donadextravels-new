import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { useEffect } from "react";
import Favicon from "../src/assets/images/dtr-fav.jpg"
import Visa from "./components/Visa/Visa";
import Hotel from "./components/Hotel/Hotel";
import Flight from "./components/Flight/Flight";
import About from "./components/About/About";



function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = Favicon;
    document.head.appendChild(link);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flight" element={<Flight />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/visa" element={<Visa />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
