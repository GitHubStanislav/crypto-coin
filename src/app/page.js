"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProgressBar } from "react-loader-spinner";
import Navbar from "./Navbar/Navbar";
import CryptoList from "./CryptoList/CryptoList";
import Pagination from "./Pagination/Pagination";
import Section from "./HeroSection/Section";
import ReasonsToUseCrypto from "@/app/HeroSection/ReasonsToUseCrypto";
import Footer from "@/app/Footer/Footer";
import JoinUs from "@/app/HeroSection/JoinUs";

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
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(cryptocurrencies.length / 10);
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
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
      <Section cryptocurrencies={cryptocurrencies} />
      {!!cryptocurrencies.length ? (
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
          </div>{" "}
        </div>
      ) : (
        <div className="flex justify-center w-auto">
          <ProgressBar
            height={180}
            width={180}
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#F4442E"
            barColor="#51E5FF"
          />
        </div>
      )}

      <div>
        <ReasonsToUseCrypto />
      </div>
      <JoinUs />
      <Footer />
    </div>
  );
};

export default Home;
