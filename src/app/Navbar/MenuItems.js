import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const MenuItems = ({ isMenuOpen }) => {
  return (
    <ul
      className={`${
        isMenuOpen ? "block" : "hidden"
      } md:flex flex-col md:flex-row md:space-x-4 md:items-center mt-4 ml-4 md:mt-0 overflow-hidden`}
    >
      <li>
        <a
          href="#"
          className="font-bold text-gray-200 hover:text-pink-500 block text-lg py-2"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          className="font-bold text-gray-200 hover:text-pink-500 block text-lg py-2"
        >
          Market
        </a>
      </li>
      <li>
        <a
          href="#"
          className="font-bold text-gray-200 hover:text-pink-500 block text-lg py-2"
        >
          Join us
        </a>
      </li>
      {isMenuOpen && (
        <li className="mt-20 flex space-x-4 justify-center">
          <span className="text-3xl text-gray-200 hover:text-pink-500 cursor-pointer">
            <FaFacebook />
          </span>
          <span className="text-3xl text-gray-200 hover:text-pink-500 cursor-pointer">
            <FaTwitter />
          </span>
          <span className="text-3xl text-gray-200 hover:text-pink-500 cursor-pointer">
            <FaLinkedin />
          </span>
        </li>
      )}
    </ul>
  );
};

export default MenuItems;
