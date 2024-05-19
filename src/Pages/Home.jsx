import Hero from "../components/Sections/Hero";
import MarketUpdate from "../components/Sections/MarketUpdate";
import Deposit from "../components/Sections/Deposit";
import Portfolio from "../components/Sections/Portfolio";
import ChooseUs from "../components/Sections/ChooseUs";
import DownloadApp from "../components/Sections/DownloadApp";
import Faq from "../components/Sections/Faq";

const Home = () => {
  return (
    <main>
      <Hero />
      <MarketUpdate/>
      <Deposit />
      <Portfolio />
      <ChooseUs />
      <DownloadApp />
      <Faq />
    </main>
  );
};

export default Home;
