import Container from "../Layout/Container";
import DepositImage from "../../assets/images/deposit.png";

const Deposit = () => {
  return (
    <Container>
      <h1 className="bg-gradient-one bg-cover bg-clip-text pb-1 text-center text-4xl font-bold text-transparent lg:text-5xl">
        Earn Crypto
      </h1>
      <div className="flex w-full flex-col items-center gap-12 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="bg-gradient-two bg-cover bg-clip-text pb-1 text-center text-3xl font-bold text-transparent md:text-left md:text-4xl lg:text-5xl">
            Deposit crypto & <br /> earn interest
          </h1>
          <p className="text-center md:text-left">
            Choose from 50+ cryptocurrencies
          </p>
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex flex-col gap-4">
              <h2 className="text-center text-4xl font-bold text-app-50 md:text-left">
                10%
              </h2>
              <p className="text-center text-xl font-semibold text-app-100 md:text-left">
                On cryptos
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-center text-4xl font-bold text-app-50 md:text-left">
                20%
              </h2>
              <p className="text-center text-xl font-semibold text-app-100 md:text-left">
                On stablecoins
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-lg">
          <img src={DepositImage} alt="image of a crypto coin chart" />
        </div>
      </div>
    </Container>
  );
};

export default Deposit;
