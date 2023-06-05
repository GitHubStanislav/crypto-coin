"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar/Navbar";
import CryptoList from "./CryptoList";
import Animation from "./AnimationContainer/Animation";
import CryptoItem from "./CryptoItem";
import Pagination from "./Pagination/Pagination";

const Home = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [visibleCryptocurrencies, setVisibleCryptocurrencies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&sparkline=false&price_change_percentage=1h,24h,7d,30d,1y&market_data=false&community_data=false&developer_data=false"
        );
        setCryptocurrencies(response.data);
        console.log(response);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        const uahExchangeRate = response.data.rates.UAH;
        setExchangeRate(uahExchangeRate);
      } catch (error) {
        console.log("Error fetching exchange rate:", error);
      }
    };

    fetchData();
    fetchExchangeRate();
  }, []);

  useEffect(() => {
    setVisibleCryptocurrencies(
      cryptocurrencies.slice((currentPage - 1) * 10, currentPage * 10)
    );
  }, [cryptocurrencies, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(cryptocurrencies.length / 10);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="container mx-auto px-8">
      <Navbar
        isMenuOpen={isMenuOpen}
        handleMenuToggle={handleMenuToggle}
        handleCloseMenu={handleCloseMenu}
      />
      <section className="mt-36">
        <p className="md:text-8xl sm:text-6xl text-4xl text-center text-gray-200 font-bold">
          USE OUR FREE CRYPTO PORTFOLIO TRACKER -{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
            CRYPTOCOIN
          </span>
        </p>
        <div>
          <ul className="flex flex-wrap justify-center mt-20">
            {cryptocurrencies.slice(0, 4).map((crypto) => (
              <CryptoItem key={crypto.id} crypto={crypto} />
            ))}
          </ul>
          <div className="flex justify-center">
            <Animation />
          </div>
        </div>
      </section>
      <div className="text-gray-900 p-8 bg-inherit">
        <CryptoList
          cryptocurrencies={visibleCryptocurrencies}
          exchangeRate={exchangeRate}
        />
        <div className="flex justify-center mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(cryptocurrencies.length / 10)}
            handlePageChange={handlePageChange}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
