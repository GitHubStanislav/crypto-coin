import React from "react";
import { FaBitcoin, FaUsers, FaMoneyCheckAlt, FaBook } from "react-icons/fa";

const JoinUs = () => {
  return (
    <section className="container mx-auto px-8 py-10 mt-2">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="bg-gray-800 text-white rounded-lg p-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
              Join Us Now!
            </span>
          </h2>
          <p className="text-base font-bold md:text-xl text-center mb-8 bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
            Start your crypto journey and unlock the potential of
            cryptocurrencies.
          </p>
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-full text-xl md:text-3xl focus:outline-none focus:ring focus:ring-purple-500 transition-all duration-300 transform hover:scale-110">
              Start journey!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
