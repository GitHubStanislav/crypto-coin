import React from "react";
import {
  BsLockFill,
  BsShieldLockFill,
  BsCashCoin,
  BsLightningFill,
  BsGraphUp,
  BsPuzzleFill,
} from "react-icons/bs";

const ReasonsToUseCrypto = () => {
  return (
    <section className="container mx-auto px-8 py-10 mt-2 bg-inherit">
      <h2 className="mb-20 ml-10 md:text-6xl sm:text-2xl text-xl text-center font-bold bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-pink-500">
        6 REASONS TO USE CRYPTO
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-800 rounded-lg p-8 shadow-lg flex flex-col items-center transform transition duration-500 hover:scale-105">
          <div className="text-4xl text-yellow-400 mb-4">
            <BsLockFill />
          </div>
          <h3 className="text-2xl font-bold text-gray-200 mb-4">Security</h3>
          <p className="text-gray-400 text-center">
            Cryptocurrencies use advanced cryptographic techniques to secure
            transactions, providing enhanced security and protection against
            fraud.
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-8 shadow-lg flex flex-col items-center transform transition duration-500 hover:scale-105">
          <div className="text-4xl text-yellow-400 mb-4">
            <BsShieldLockFill />
          </div>
          <h3 className="text-2xl font-bold text-gray-200 mb-4">Privacy</h3>
          <p className="text-gray-400 text-center">
            Cryptocurrencies provide users with greater control over their
            financial privacy, offering secure and pseudonymous transactions.
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-8 shadow-lg flex flex-col items-center transform transition duration-500 hover:scale-105">
          <div className="text-4xl text-yellow-400 mb-4">
            <BsCashCoin />
          </div>
          <h3 className="text-2xl font-bold text-gray-200 mb-4">
            Diversification
          </h3>
          <p className="text-gray-400 text-center">
            Cryptocurrencies offer a new asset class for diversifying investment
            portfolios, reducing risk exposure to traditional financial markets.
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-8 shadow-lg flex flex-col items-center transform transition duration-500 hover:scale-105">
          <div className="text-4xl text-yellow-400 mb-4">
            <BsLightningFill />
          </div>
          <h3 className="text-2xl font-bold text-gray-200 mb-4">Speed</h3>
          <p className="text-gray-400 text-center">
            Cryptocurrency transactions are processed quickly and efficiently,
            enabling fast and seamless transfers of value.
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-8 shadow-lg flex flex-col items-center transform transition duration-500 hover:scale-105">
          <div className="text-4xl text-yellow-400 mb-4">
            <BsGraphUp />
          </div>
          <h3 className="text-2xl font-bold text-gray-200 mb-4">
            Potential for Growth
          </h3>
          <p className="text-gray-400 text-center">
            Cryptocurrencies have the potential for significant price
            appreciation, offering opportunities for investment growth and
            wealth accumulation.
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-8 shadow-lg flex flex-col items-center transform transition duration-500 hover:scale-105">
          <div className="text-4xl text-yellow-400 mb-4">
            <BsPuzzleFill />
          </div>
          <h3 className="text-2xl font-bold text-gray-200 mb-4">
            Technological Innovation
          </h3>
          <p className="text-gray-400 text-center">
            Cryptocurrencies and blockchain technology are driving innovation in
            various industries, revolutionizing finance, and enabling new
            possibilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReasonsToUseCrypto;
