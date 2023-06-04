// components/Navbar/MenuItems.js
import React from "react";

const MenuItems = ({ isMenuOpen }) => {
  return (
    <ul
      className={`${
        isMenuOpen ? "block" : "hidden"
      } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4 ml-4 md:mt-0`}
    >
      <li>
        <a
          href="#"
          className={`font-bold ${
            isMenuOpen ? "text-black" : "text-white"
          } transition-colors duration-300 hover:text-pink-500 block text-xl`}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          className={`font-bold ${
            isMenuOpen ? "text-black" : "text-white"
          } transition-colors duration-300 hover:text-pink-500 block text-xl`}
        >
          Market
        </a>
      </li>
      <li>
        <a
          href="#"
          className={`font-bold ${
            isMenuOpen ? "text-black" : "text-white"
          } transition-colors duration-300 hover:text-pink-500 block text-xl`}
        >
          Join us
        </a>
      </li>
    </ul>
  );
};

export default MenuItems;
