import React, { useState } from "react";

const CryptoSearch = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <div className="ml-8 mt-8 mb-10 w-fit">
      <label htmlFor="cryptoSearch" className="text-pink-600 font-medium">
        Find Crypto
      </label>
      <input
        id="cryptoSearch"
        className="border border-gray-300 rounded-md px-4 py-2 w-full mt-2"
        type="text"
        placeholder="Search cryptocurrency"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default CryptoSearch;
