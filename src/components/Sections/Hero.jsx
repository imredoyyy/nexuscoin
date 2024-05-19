import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Container from "../Layout/Container";
import Tiles from "../Layout/Tiles";
import GradientButton from "../ui/GradientButton";
import HeroBanner from "../../assets/images/hero-banner.png";
import Modal from "../Modal/Modal";
import Bitcoin from "../../assets/images/bitcoin.png";
import Ethereum from "../../assets/images/ethereum.png";

import { CircleArrowRight } from "lucide-react";

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  // const open = () => {
  //   setModalOpen(true);
  // };

  // const close = () => {
  //   setModalOpen(false);
  // };

  const handleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen w-screen flex-col">
      <Tiles />

      <Container className="pointer-events-none inset-x-0 z-[5] flex items-center justify-center">
        <div className="flex flex-col gap-12">
          <div className="flex w-full flex-col items-center gap-8">
            <div className="relative">
              <h1 className="text-center font-playfair text-4xl font-extrabold text-app-50 md:text-6xl lg:text-7xl lg:leading-[1.2] 2xl:text-8xl">
                Buy, Trade & Track
                <br />
                <span className="bg-gradient-two bg-cover bg-clip-text bg-no-repeat text-transparent">
                  Crypto Currencies
                </span>
              </h1>

              {/* Floating Icons */}
              <div className="absolute -right-[70px] top-1/4 hidden animate-up-down sm:block">
                <img
                  src={Bitcoin}
                  alt="Bitcoin"
                  className="w-[50px] object-contain md:w-14"
                />
              </div>
              <div className="absolute -left-[70px] top-1/4 hidden animate-up-down sm:block">
                <img
                  src={Ethereum}
                  alt="Ethereum"
                  className="w-[50px] object-contain md:w-14"
                />
              </div>
            </div>
            <p className="max-w-xl text-center md:max-w-2xl md:text-lg">
              Stay ahead in the world of cryptocurrencies with our all-in-one
              platform! Buy, sell, and track your favorite digital assets in one
              place
            </p>

            <div className="flex w-fit flex-wrap items-center justify-center gap-6">
              <GradientButton className="min-w-[13rem]" onClick={handleModal}>
                Get Started
              </GradientButton>
              <GradientButton className="min-w-[13rem]">
                Connect Wallet{" "}
                <span>
                  <CircleArrowRight />
                </span>
              </GradientButton>
            </div>
          </div>
          <div className="w-full">
            <img
              src={HeroBanner}
              alt="Hero Banner"
              className="w-full rounded-2xl object-cover"
            />
          </div>
          {/* Authentication Form */}
          <AnimatePresence initial={false} mode="wait">
            {modalOpen && (
              <Modal
                modalOpen={modalOpen}
                onClick={handleModal}
                handleClose={handleModal}
              />
            )}
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
