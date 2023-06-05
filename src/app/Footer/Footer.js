import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-inherit">
      <div className="container mx-auto px-8 py-6">
        <div className="flex justify-center items-center space-x-4">
          <a
            href="#"
            className="text-white transition-colors duration-300 hover:text-pink-500 cursor-pointer"
          >
            <FaFacebookSquare size={24} />
          </a>
          <a
            href="#"
            className="text-white transition-colors duration-300 hover:text-pink-500 cursor-pointer"
          >
            <FaTwitterSquare size={24} />
          </a>
          <a
            href="#"
            className="text-white transition-colors duration-300 hover:text-pink-500 cursor-pointer"
          >
            <FaInstagramSquare size={24} />
          </a>
          <a
            href="#"
            className="text-white transition-colors duration-300 hover:text-pink-500 cursor-pointer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-center text-gray-300 text-sm mt-4">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
