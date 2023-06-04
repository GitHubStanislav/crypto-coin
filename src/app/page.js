"use client";
// pages/Home/Home.js
import React, { useState, useEffect } from "react";
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
    <div className="container mx-auto px-8">
      <Navbar
        isMenuOpen={isMenuOpen}
        handleMenuToggle={handleMenuToggle}
        handleCloseMenu={handleCloseMenu}
      />
      <section className="mt-28">
        <p className="md:text-8xl sm:text-6xl text-4xl text-center text-gray-200 font-bold">
          Use Our Free Crypto Portfolio Tracker -{" "}
          <span
            style={{
              background: "linear-gradient(to right, #3F51B5, #E91E63)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            CryptoCoin
          </span>
        </p>
      </section>
    </div>
  );
};

export default Home;
