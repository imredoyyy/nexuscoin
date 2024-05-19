import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DOMPurify from "isomorphic-dompurify";

import Container from "../components/Layout/Container";
import { tailChase } from "ldrs";

tailChase.register();

const Page = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://api.coingecko.com/api/v3/coins/${id}`;

  useEffect(() => {
    document.title = `${coin.name ? coin.name : "Coin"} | NexusCoin`;
  });

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const res = await axios.get(url);
        setCoin(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchUrl();
  }, [url]);

  return (
    <main>
      <Container>
        <div className="grid gap-8 lg:grid-cols-two">
          <div className="relative flex flex-col items-center justify-center gap-6 border-b-2 border-app-50 pb-6 lg:border-b-0 lg:border-r-2 lg:pb-0">
          {isLoading && (
              <div className="flex min-h-80 items-center justify-center">
                <l-tail-chase size="58" speed="2" color="#e2e5e9" />
              </div>
            )}
            {coin.image ? (
              <div>
                <img
                  src={coin.image.large}
                  alt={coin.name}
                  width={220}
                  height={220}
                />
              </div>
            ) : (
              ""
            )}

            <h2 className="font-playfair text-3xl font-bold">{coin.name}</h2>
          </div>

          <div className="flex flex-col gap-4 lg:gap-6">
            <div className="flex flex-col items-center gap-3 lg:flex-row lg:justify-between">
              <p className="text-lg font-medium text-app-50">
                24h Changes: &nbsp;
                <span
                  className={
                    coin.price_change_percentage_24h >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {coin.market_data
                    ? coin.market_data.price_change_percentage_24h.toFixed(2) +
                      "%"
                    : ""}
                </span>
              </p>
              <p className="text-lg font-medium text-app-50">
                Price: &nbsp;{" "}
                <span className="text-green-600">
                  {coin.market_data
                    ? coin.market_data.current_price.usd.toFixed(2)
                    : ""}
                </span>
              </p>
              <p className="text-lg font-medium text-app-50">
                Symbol: &nbsp; <span>{coin.symbol}</span>
              </p>
            </div>
            <div className="h-80 overflow-y-scroll" id="coin-desc">
            {isLoading && (
              <div className="flex min-h-80 items-center justify-center">
                <l-tail-chase size="58" speed="2" color="#e2e5e9" />
              </div>
            )}
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    coin.description ? coin.description.en : "",
                  ),
                }}
              ></p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};
export default Page;
