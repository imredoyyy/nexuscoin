import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Container from "../Layout/Container";
import PriceDown from "../../assets/images/price-down.svg";
import PriceUp from "../../assets/images/price-up.svg";

import { tailChase } from "ldrs";

import { TrendingUp, TrendingDown } from "lucide-react";
import { mergeClasses } from "../../lib/utils";

tailChase.register();

const MarketUpdate = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const paginationButtons = [];

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false`;

  // Using Axios
  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const res = await axios.get(url);
        setCoins(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUrl();
  }, [url]);

  // Using JavaScript's fetch api method
  // useEffect(() => {
  //   const fetchUrl = async () => {
  //     try {
  //       const res = await fetch(url);
  //       if (!res.ok) {
  //         throw new Error("Could not fetch url");
  //       }
  //       const data = await res.json();
  //       setCoins(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchUrl();
  // }, [url]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: window.scrollY - 760,
      behavior: "smooth",
    });
  };

  for (let i = 1; i <= 3; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => handlePageChange(i)}
        className={mergeClasses(
          "size-11 rounded-full text-lg font-medium",
          i === currentPage
            ? "bg-gradient-two bg-cover bg-center bg-no-repeat"
            : "bg-neutral-50 text-app-200",
        )}
      >
        {i}
      </button>,
    );
  }

  return (
    <Container>
      <div className="flex w-full flex-col gap-8 md:gap-10">
        <h1 className="bg-gradient-one bg-cover bg-clip-text text-center text-4xl font-bold text-transparent lg:text-5xl">
          Market Update
        </h1>

        <div className="market-cap flex flex-col gap-3 overflow-x-scroll whitespace-nowrap">
          <div className="grid grid-cols-table place-items-center gap-8 whitespace-nowrap border-b-2 border-app-50 py-2">
            <p className="font-medium text-app-50 md:text-lg">Coin Name</p>
            <p className="font-medium text-app-50 md:text-lg">Price</p>
            <p className="font-medium text-app-50 md:text-lg">24h Changes(%)</p>
            <p className="font-medium text-app-50 md:text-lg">Last 24hrs</p>
            <p className="font-medium text-app-50 md:text-lg">Market Cap</p>
          </div>

          <div className="flex flex-col gap-2">
            {isLoading && (
              <div className="flex min-h-80 items-center justify-center">
                <l-tail-chase size="58" speed="2" color="#e2e5e9" />
              </div>
            )}
            {coins.map((coin) => (
              <Link
                key={coin.id}
                to={`/coin/${coin.id}`}
                className="grid grid-cols-table items-center gap-8 rounded-md px-3 py-4 transition-colors duration-400 ease-in-out hover:bg-app-200"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    width={24}
                    height={24}
                  />
                  <h3>{coin.name}</h3>
                </div>
                <div className="text-center">
                  ${coin.current_price.toFixed(2)}
                </div>
                <div
                  className={`${coin.price_change_percentage_24h >= 0 ? "text-green-600" : "text-red-600"} text-center`}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div className="flex items-center justify-center gap-2">
                  {coin.price_change_percentage_24h >= 0 ? (
                    <TrendingUp className="stroke-green-600" />
                  ) : (
                    <TrendingDown className="stroke-red-600" />
                  )}
                  <img
                    src={
                      coin.price_change_percentage_24h >= 0
                        ? PriceUp
                        : PriceDown
                    }
                    height={80}
                    width={80}
                    alt={
                      coin.price_change_percentage_24h >= 0
                        ? "price up"
                        : "price down"
                    }
                  />
                </div>
                <div className="text-center">
                  {coin.market_cap.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
              </Link>
            ))}
            <div className="flex items-center justify-center gap-6">
              {coins.length > 0 && paginationButtons}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MarketUpdate;
