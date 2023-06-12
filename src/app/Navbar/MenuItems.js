import React from "react";
import { Link } from "react-scroll";

const MenuItems = ({ scrollToTop, scrollToMarket, scrollToJoinUs }) => {
  return (
    <ul className="flex flex-row space-x-4 items-center mt-4 ml-4 overflow-hidden">
      <li className="font-bold text-gray-200 hover:text-pink-500 duration-300 block text-lg py-2 cursor-pointer">
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
      <li className="font-bold text-gray-200 hover:text-pink-500 duration-300 block text-lg py-2 cursor-pointer">
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
      <li className="font-bold text-gray-200 hover:text-pink-500 duration-300 block text-lg py-2 cursor-pointer">
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
    </ul>
  );
};

export default MenuItems;
