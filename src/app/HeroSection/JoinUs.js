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
          <p className="text-base font-bold  md:text-xl text-center mb-8 bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
            Start your crypto journey and unlock the potential of
            cryptocurrencies.
          </p>
          <div className="flex items-center mb-8">
            <FaBitcoin className="text-pink-500 text-6xl md:text-9xl animate-pulse-slow animate-fade-in mx-4 hover:text-pink-600 hover:scale-110 transition-all duration-300" />
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
                Exclusive Access
              </h3>
              <p className="text-base">
                Gain exclusive access to educational resources and investment
                opportunities.
              </p>
            </div>
          </div>
          <div className="flex items-center mb-8">
            <FaUsers className="text-pink-500 text-6xl md:text-9xl animate-pulse-slow animate-fade-in mx-4 hover:text-pink-600 hover:scale-110 transition-all duration-300" />
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
                Thriving Community
              </h3>
              <p className="text-base">
                Connect with a thriving community of cryptocurrency enthusiasts
                and participate in networking events.
              </p>
            </div>
          </div>
          <div className="flex items-center mb-8">
            <FaMoneyCheckAlt className="text-pink-500 text-6xl md:text-9xl animate-pulse-slow animate-fade-in mx-4 hover:text-pink-600 hover:scale-110 transition-all duration-300" />
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
                Financial Freedom
              </h3>
              <p className="text-base">
                Explore the possibilities of achieving financial freedom through
                cryptocurrency investments.
              </p>
            </div>
          </div>
          <div className="flex items-center mb-8">
            <FaBook className="text-pink-500 text-6xl md:text-9xl animate-pulse-slow animate-fade-in mx-4 hover:text-pink-600 hover:scale-110 transition-all duration-300" />
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
                Stay Informed
              </h3>
              <p className="text-base">
                Stay up to date with the latest trends, news, and insights in
                the world of cryptocurrencies.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-pink-900 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full focus:outline-none focus:ring focus:ring-pink-500 transition-all duration-300">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
