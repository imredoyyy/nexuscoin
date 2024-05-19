import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Container from "../Layout/Container";
import AppMockup from "../../assets/images/app-mockup.png";
import GradientButton from "../ui/GradientButton";
import Modal from "../Modal/Modal";

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <Container>
      <div className="grid w-full items-center gap-12 md:grid-cols-2">
        <div className="flex justify-center">
          <img src={AppMockup} alt="app mockup" />
        </div>
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-6">
          <h1 className="bg-gradient-two bg-cover bg-clip-text text-center text-3xl font-bold text-transparent md:text-left md:text-4xl lg:text-5xl">
            Build a Portfolio with popular coins
          </h1>
          <p className="max-w-md text-center md:text-left">
            Build a well-balanced portfolio featuring the most popular and
            promising cryptocurrencies in the market
          </p>
          <GradientButton className="max-w-44" onClick={handleModal}>
            Get Started
          </GradientButton>
        </div>
      </div>

      <AnimatePresence initial={false} mode="wait">
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            onClick={handleModal}
            handleClose={handleModal}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Portfolio;
