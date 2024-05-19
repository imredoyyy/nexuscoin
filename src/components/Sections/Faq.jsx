import{ useState } from "react";

import { mergeClasses } from "../../lib/utils";

import Container from "../Layout/Container";
import { FaqData } from "../../data/data";

import { Plus } from "lucide-react";

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(0); // First accordion is opened by default

  // Clicking on closed accordion closes the opened one and opens the clicked one
  const handleAccordion = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <Container>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-6">
          <h1 className="bg-gradient-one bg-cover bg-clip-text text-center text-4xl font-bold text-transparent lg:text-5xl">
            Frequently Asked <br />{" "}
            <span className="mt-3 inline-block">Questions</span>
          </h1>
          <p className="text-color-200 mx-auto max-w-md text-center">
            Explore frequently asked questions about cryptocurrencies to make
            your experience smoother and hassle-free
          </p>
        </div>
        <div className="flex flex-col gap-2 px-6 py-6">
          {FaqData.map((faq, index) => (
            <div
              key={index}
              className={mergeClasses(
                "flex flex-col gap-1.5 py-3 ",
                index === FaqData.length - 1 ? "" : "border-b",
              )}
            >
              <div
                className={`flex cursor-pointer items-start rounded-[6px] px-4 py-3 transition-all duration-700`}
                onClick={() => {
                  handleAccordion(index);
                }}
              >
                <h2 className="font-semibold text-app-100">
                  {index + 1}. {faq.ques}
                </h2>{" "}
                &nbsp;
                <span>
                  <Plus
                    className={mergeClasses(
                      "size-6 stroke-app-100 transition-transform duration-500",
                      activeAccordion === index ? "rotate-[135deg]" : "",
                    )}
                  />
                </span>
              </div>
              <div
                className={mergeClasses(
                  "max-h-0 max-w-4xl overflow-hidden px-4 transition-all duration-700",
                  activeAccordion === index ? "max-h-96" : "",
                )}
              >
                Answer: {faq.ans}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Faq;
