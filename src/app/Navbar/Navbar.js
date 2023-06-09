import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import MenuItems from "./MenuItems";
import SocialMediaIcons from "./SocialMediaIcons";
import Animation from "@/app/AnimationContainer/Animation";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsSmallScreen(screenWidth <= 768); // Adjust the breakpoint as per your needs
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // Check initial screen size

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`flex flex-wrap ${
        isSmallScreen ? "flex-col items-center" : "justify-between items-center"
      } py-6 px-8 mt-5 ${
        isSticky ? "sticky top-0 z-10 bg-blue-950 bg-opacity-70" : ""
      } transition-colors duration-200 ease-in-out w-full ${
        isSticky ? "fixed inset-x-0" : ""
      }`}
    >
      {/* CRYPTO-COIN Link */}

      <a href="#" className="text-xl font-extrabold text-white">
        <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
          C
        </span>
        rypto
        <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
          C
        </span>
        oin
      </a>

      {/* Menu Items */}
      <MenuItems
        scrollToTop={scrollToTop}
        scrollToMarket={scrollToMarket}
        scrollToJoinUs={scrollToJoinUs}
      />

      {/* Social Media Icons */}
      {!isSmallScreen && <SocialMediaIcons />}
    </nav>
  );
};

export default Navbar;
