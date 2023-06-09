import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const MenuItems = ({
  isMenuOpen,
  scrollToTop,
  scrollToMarket,
  scrollToJoinUs,
}) => {
  return (
    <ul
      className={`${
        isMenuOpen ? "block" : "hidden"
      } md:flex flex-col md:flex-row md:space-x-4 md:items-center mt-4 ml-4 md:mt-0 overflow-hidden`}
    >
      <li className="font-bold text-gray-200 hover:text-pink-500 block text-lg py-2 cursor-pointer">
        <Link
          to="section1"
          smooth={true}
          duration={1500}
          offset={-200}
          onClick={scrollToTop}
        >
          Home
        </Link>
      </li>
      <li className="font-bold text-gray-200 hover:text-pink-500 block text-lg py-2 cursor-pointer">
        <Link
          to="section2"
          smooth={true}
          duration={1500}
          offset={-110}
          onClick={scrollToMarket}
        >
          Market
        </Link>
      </li>
      <li className="font-bold text-gray-200 hover:text-pink-500 block text-lg py-2 cursor-pointer">
        <Link
          to="section3"
          smooth={true}
          duration={1500}
          offset={-50}
          onClick={scrollToJoinUs}
        >
          Join us
        </Link>
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
