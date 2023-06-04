"use client";
// pages/Home/Home.js
import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";

const Home = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="container mx-auto px-12">
      <Navbar
        isMenuOpen={isMenuOpen}
        handleMenuToggle={handleMenuToggle}
        handleCloseMenu={handleCloseMenu}
      />
      {/* Other content of the Home page */}
    </div>
  );
};

export default Home;
