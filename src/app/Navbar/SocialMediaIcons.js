// components/Navbar/SocialMediaIcons.js
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <ul className="hidden md:flex space-x-4">
      <li>
        <span className="text-2xl font-bold text-gray-200 transition-colors duration-300 hover:text-pink-500 cursor-pointer">
          <FaFacebook />
        </span>
      </li>
      <li>
        <span className="text-2xl font-bold text-gray-200 transition-colors duration-300 hover:text-pink-500 cursor-pointer">
          <FaTwitter />
        </span>
      </li>
      <li>
        <span className="text-2xl font-bold text-gray-200 transition-colors duration-300 hover:text-pink-500 cursor-pointer">
          <FaLinkedin />
        </span>
      </li>
    </ul>
  );
};

export default SocialMediaIcons;
