import React from "react";
import Image from "next/image";

const CryptoItem = ({ crypto, exchangeRate }) => {
  const formatPercentage = (percentage) => parseFloat(percentage).toFixed(3);
  const getPercentageColor = (percentage) => {
    if (percentage < 0) {
      return "text-red-600";
    } else if (percentage > 0) {
      return "text-lime-500";
    } else {
      return "text-gray-500";
    }
  };
  const formatCurrency = (value, currency) => {
    return `${currency}${value.toLocaleString()}`;
  };

  return (
    <li className="p-4 flex flex-col md:flex-row md:items-center md:justify-between hover:bg-gray-200 hover:bg-opacity-20 transition-colors duration-300">
      <div className="flex items-center w-full md:w-1/6 mb-4 md:mb-0">
        <div className="mr-2">
          <Image src={crypto.image} alt={crypto.name} width={35} height={35} />
        </div>
        <h2 className="text-lg text-white font-semibold mr-8">{crypto.name}</h2>
      </div>
      <div className="flex flex-col w-full md:w-5/6 md:flex-row md:flex-wrap">
        <div className="text-white w-full md:w-1/4 md:flex md:items-center mb-4 md:mb-0">
          <div className="font-medium">${crypto.current_price}</div>
        </div>
        <div className="text-white w-full md:w-1/4 md:flex md:items-center mb-4 md:mb-0">
          <div className="font-medium">
            {formatCurrency(crypto.current_price * exchangeRate, "₴")}
          </div>
        </div>
        <div
          className={`w-full md:w-1/4 md:flex md:items-center mb-4 md:mb-0 ${getPercentageColor(
            crypto.price_change_percentage_1h_in_currency
          )}`}
        >
          <div className="font-medium">
            {formatPercentage(crypto.price_change_percentage_1h_in_currency)}%
          </div>
        </div>
        <div
          className={`w-full md:w-1/4 md:flex md:items-center mb-4 md:mb-0 ${getPercentageColor(
            crypto.price_change_percentage_24h_in_currency
          )}`}
        >
          <div className="font-medium">
            {formatPercentage(crypto.price_change_percentage_24h_in_currency)}%
          </div>
        </div>
      </div>
    </li>
  );
};

export default CryptoItem;
