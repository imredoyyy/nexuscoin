import { useState, useEffect } from "react";
import Container from "../components/Layout/Container";
import Faq from "../components/Sections/Faq";
import { PricingData } from "../data/data";
import { Switch } from "../components/ui/Switch";
import { mergeClasses } from "../lib/utils";
import { Check } from "lucide-react";
import Button from "../components/ui/Button";

const Pricing = () => {
  const [pricedAnnually, setIsPricedAnnually] = useState(false);

  useEffect(() => {
    document.title = "Pricing | NexusCoin";
  });

  const handlePrice = () => {
    setIsPricedAnnually((prev) => !prev);
  };

  return (
    <div>
      <title>Pricing | NexusCoin</title>
      <main>
        <Container>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col items-center gap-2">
              <h1 className="bg-gradient-one bg-cover bg-clip-text bg-center pb-1 text-4xl font-bold text-transparent lg:text-5xl">
                Our Pricing Plan
              </h1>
              <p className="max-w-md text-center">
                Affordable pricing plan for everyone. Choose the one that fits
                your need. No hidden charge
              </p>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex items-center justify-center gap-3">
                <p
                  className={mergeClasses(
                    "font-medium",
                    pricedAnnually ? "" : "text-app-100",
                  )}
                >
                  Billed Monthly
                </p>
                <Switch onClick={handlePrice} />
                <p
                  className={mergeClasses(
                    "font-medium",
                    pricedAnnually ? "text-app-100" : "",
                  )}
                >
                  Billed Annually
                </p>
              </div>

              <div className="grid justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-12">
                {PricingData.map((data, index) => (
                  <div
                    key={index}
                    className={mergeClasses(
                      "flex max-w-lg flex-col gap-6 rounded-lg border-2 border-app-200 px-5 py-10 transition-all duration-500 sm:min-w-[290px] md:hover:scale-105",
                      index === 1
                        ? "border-app-50/40"
                        : "hover:border-app-50/40",
                    )}
                  >
                    <div className="flex flex-col gap-4">
                      <h2 className="text-center text-3xl font-medium">
                        {data.label}
                      </h2>
                      <p className="text-center">{data.desc}</p>
                      <h3 className="flex items-center justify-center gap-1 text-4xl font-medium text-app-100">
                        $
                        {pricedAnnually
                          ? data.priceAnnual * 12
                          : data.priceMonth}
                        <span className="text-lg">
                          /{pricedAnnually ? "y" : "m"}
                        </span>
                      </h3>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {data.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <Check className="h-5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button>Buy Now</Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>

        <Faq />
      </main>
    </div>
  );
};

export default Pricing;
