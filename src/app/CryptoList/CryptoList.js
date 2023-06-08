import React from "react";
import Animation from "@/app/AnimationContainer/Animation";
import CryptoItem from "./CryptoItem";
import CryptoSearch from "@/app/CryptoList/CryptoSearch";

const CryptoList = ({ cryptocurrencies, exchangeRate, handleSearch }) => {
  return (
    <ul>
      <div className="flex items-center justify-center mb-10 ml-10 flex-wrap md:text-4xl sm:text-xl text-center text-gray-200 font-bold bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
        ALL CRYPTOCURRENCIES
        <span className="ml-2">
          <Animation />
        </span>
      </div>
      <CryptoSearch handleSearch={handleSearch} />
      <div className="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text text-white flex justify-end mr-8">
        <div className="w-full md:w-5/6 flex flex-wrap">
          <div className="w-1/4 font-bold hidden md:block text-from-indigo-500 to-pink-500 text-transparent bg-clip-text">
            Current Price (USD)
          </div>
          <div className="w-1/4 font-bold hidden md:block text-from-indigo-500 to-pink-500 text-transparent bg-clip-text ">
            Current Price (UAH)
          </div>
          <div className="w-1/4 font-bold hidden md:block text-from-indigo-500 to-pink-500 text-transparent bg-clip-text ">
            1-hour Price Change
          </div>
          <div className="w-1/4 font-bold hidden md:block text-from-indigo-500 to-pink-500 text-transparent bg-clip-text ">
            24-hour Price Change
          </div>
        </div>
      </div>
      {cryptocurrencies.map((crypto) => (
        <CryptoItem
          key={crypto.id}
          crypto={crypto}
          exchangeRate={exchangeRate}
        />
      ))}
    </ul>
  );
};

export default CryptoList;
