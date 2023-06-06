// components/Section.js
import React from "react";
import CryptoItemList from "./CryptoItemList";

const Section = ({ cryptocurrencies }) => {
  return (
    <section className="mt-20">
      <p className="md:text-8xl sm:text-6xl text-4xl text-center text-gray-200 font-bold">
        USE OUR FREE CRYPTO PORTFOLIO TRACKER -{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
          CRYPTOCOIN
        </span>
      </p>
      <div>
        <ul className="flex flex-wrap justify-center mt-20">
          {cryptocurrencies.slice(0, 4).map((crypto) => (
            <CryptoItemList key={crypto.id} crypto={crypto} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Section;
