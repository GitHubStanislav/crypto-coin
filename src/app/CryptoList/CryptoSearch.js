import React, { useState, useEffect } from "react";
import { FaBitcoin } from "react-icons/fa";

const CryptoSearch = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    setIsRotating(searchTerm !== "");
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <div className="ml-8 mt-8 mb-10 w-fit">
      <label htmlFor="cryptoSearch" className="text-pink-600 font-medium">
        Find CryptoCoin
        <span
          className={`ml-2 ${isRotating ? "animate-spin" : ""}`}
          style={{
            display: "inline-block",
            verticalAlign: "middle",
            transform: isRotating ? "rotateY(180deg)" : "rotateY(0deg)",
            color: "#F7931A",
            fontSize: "24px",
          }}
        >
          <FaBitcoin />
        </span>
      </label>
      <input
        id="cryptoSearch"
        className="border-2 border-purple-500 rounded-md px-2 py-2 w-full mt-2
        bg-inherit focus:text-white focus:outline-none focus:ring-4 duration-500 focus:ring-purple-600"
        type="text"
        placeholder="Search cryptocurrency"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default CryptoSearch;
