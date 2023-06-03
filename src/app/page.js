"use client";
import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Home = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-b from-purple-950 to-pink-950 h-screen">
      <nav className="flex justify-between items-center py-6 px-8">
        {/* CRYPTO-COIN Link */}
        <a href="#" className="text-2xl font-bold text-white">
          CRYPTO-COIN
        </a>

        {/* Burger Menu Icon */}
        <div className="md:hidden">
          <button
            className={`text-2xl cursor-pointer text-white ${
              isMenuOpen ? "animate-burger" : ""
            }`}
            onClick={handleMenuToggle}
          >
            &#9776;
          </button>
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a
              href="#"
              className="font-bold text-white transition-colors duration-300 hover:text-pink-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-bold text-white transition-colors duration-300 hover:text-pink-500"
            >
              Market
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-bold text-white transition-colors duration-300 hover:text-pink-500"
            >
              Join us
            </a>
          </li>
        </ul>

        {/* Burger Menu Items */}
        <div
          className={`md:hidden absolute right-0 top-0 mt-16 mr-2 bg-white rounded-lg shadow-lg ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="py-4 px-6 space-y-2">
            <li>
              <a
                href="#"
                className="block font-bold text-gray-800 hover:text-pink-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block font-bold text-gray-800 hover:text-pink-500"
              >
                Market
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block font-bold text-gray-800 hover:text-pink-500"
              >
                Join us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <span className="text-2xl font-bold text-white transition-colors duration-300 hover:text-pink-500 cursor-pointer">
              <FaFacebook />
            </span>
          </li>
          <li>
            <span className="text-2xl font-bold text-white transition-colors duration-300 hover:text-pink-500 cursor-pointer">
              <FaTwitter />
            </span>
          </li>
          <li>
            <span className="text-2xl font-bold text-white transition-colors duration-300 hover:text-pink-500 cursor-pointer">
              <FaLinkedin />
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
