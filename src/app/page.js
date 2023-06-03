import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-purple-950 to-pink-950 h-screen">
      <nav className="flex justify-between items-center py-6 px-8">
        <a href="#" className="text-2xl font-bold text-white">
          CRYPTO-COIN
        </a>
        <ul className="flex space-x-4">
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
        <ul className="flex space-x-4">
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
