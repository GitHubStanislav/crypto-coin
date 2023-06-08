import React, { useState, useEffect } from "react";
import MenuItems from "./MenuItems";
import SocialMediaIcons from "./SocialMediaIcons";

const Navbar = ({ isMenuOpen, handleMenuToggle, handleCloseMenu }) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleMenuClick = () => {
    handleMenuToggle();
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
    document.body.style.position = isMenuOpen ? "static" : "fixed";
    document.body.style.width = "100%";
    document.body.style.height = isMenuOpen ? "100vh" : "auto";
  };

  const handleCloseClick = () => {
    handleCloseMenu();
    document.body.style.overflow = "auto";
    document.body.style.position = "static";
    document.body.style.width = "auto";
    document.body.style.height = "auto";
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
      {/* CRYPTO-COIN Link */}
      <a href="#" className="text-2xl font-extrabold text-white">
        CryptoCoin
      </a>

      {/* Burger Menu Icon */}
      <div className="md:hidden">
        <button
          className={`text-2xl cursor-pointer text-white ${
            isMenuOpen ? "animate-burger" : ""
          }`}
          onClick={handleMenuClick}
        >
          &#9776;
        </button>
      </div>

      {/* Menu Items */}
      <MenuItems isMenuOpen={isMenuOpen} />

      {/* Burger Menu Items */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 w-screen">
          <div className="flex justify-between items-center py-6 px-8">
            <a href="#" className="text-2xl font-bold text-gray-200">
              CRYPTO-COIN
            </a>
            <button
              className="text-2xl cursor-pointer text-gray-200"
              onClick={handleCloseClick}
            >
              &#10005;
            </button>
          </div>
          <MenuItems isMenuOpen={isMenuOpen} />
          <SocialMediaIcons /> {/* Добавлено */}
        </div>
      )}

      {/* Social Media Icons */}
      <SocialMediaIcons />
    </nav>
  );
};

export default Navbar;
