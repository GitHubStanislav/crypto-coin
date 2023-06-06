import React from "react";
import Image from "next/image";

const CryptoItemList = ({ crypto }) => {
  return (
    <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-8 flex flex-col">
      <div className="flex justify-center">
        <Image src={crypto.image} alt={crypto.name} width={60} height={60} />
      </div>
      <p
        className={
          crypto.price_change_percentage_24h < 0
            ? "text-red-600 text-xl sm:text-4xl text-center"
            : "text-lime-500 text-xl sm:text-4xl text-center"
        }
      >
        {crypto.price_change_percentage_24h.toFixed(3)}%
      </p>
      <p className="text-white text-2xl sm:text-4xl text-center">
        ${crypto.current_price}
      </p>
    </li>
  );
};

export default CryptoItemList;
