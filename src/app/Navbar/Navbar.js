import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import MenuItems from "./MenuItems";
import SocialMediaIcons from "./SocialMediaIcons";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const scrollToTop = () => {
    const section = document.getElementById("section1");
    section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToMarket = () => {
    const section = document.getElementById("section2");
    section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToJoinUs = () => {
    const section = document.getElementById("section3");
    section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between items-center py-6 px-8 mt-5 ${
        isSticky ? "sticky top-0 z-10 bg-blue-950 bg-opacity-70" : ""
      } transition-colors duration-200 ease-in-out w-full ${
        isSticky ? "fixed inset-x-0" : ""
      }`}
    >
      <a href="#" className="text-2xl font-extrabold text-white">
        CryptoCoin
      </a>
      {/* Menu Items */}
      <MenuItems
        scrollToTop={scrollToTop}
        scrollToMarket={scrollToMarket}
        scrollToJoinUs={scrollToJoinUs}
      />
      <SocialMediaIcons />
    </nav>
  );
};

export default Navbar;
