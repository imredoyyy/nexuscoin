import { useEffect } from "react";
import Faq from "../components/Sections/Faq";
import Container from "../components/Layout/Container";
import IntegrationImage from "../assets/images/integration.svg";
import { IntegrationsApp } from "../data/data";

const Integrations = () => {
  useEffect(() => {
    document.title = "Integrations | NexusCoin";
  }, []);

  return (
    <main>
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex justify-center">
            <img
              src={IntegrationImage}
              className="object-contain"
              alt="different social app"
            />
          </div>
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-center text-4xl font-semibold !leading-tight md:text-5xl lg:text-6xl">
              <span className="bg-gradient-two bg-cover bg-clip-text bg-0 bg-no-repeat text-transparent">
                Seamless
              </span>{" "}
              <span className="bg-gradient-four bg-cover bg-clip-text bg-0 bg-no-repeat text-transparent">
                integration across <br /> your favorite apps
              </span>
            </h1>
            <p className="max-w-lg text-center text-lg">
              Simplify your digital life with seamless integration, allowing all
              your favorite apps to work together effortlessly
            </p>
          </div>

          <div className="grid place-items-center gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-10">
            {IntegrationsApp.map((app, i) => (
              <div
                key={i}
                className="group relative flex size-72 flex-col items-start justify-center gap-4 overflow-hidden rounded-xl border-2 border-app-300 pl-6 transition-colors duration-300 hover:border-app-50/50"
              >
                <div className="absolute -right-[5rem] -top-[2.5rem] z-[-1]">
                  {app.icon}
                </div>
                <div className="flex items-center justify-center rounded-xl bg-app-700 p-4 [&_svg]:size-12 [&_svg]:!fill-app-50 [&_svg]:transition-transform [&_svg]:duration-400 group-hover:[&_svg]:scale-110">
                  {app.icon}
                </div>
                <h2 className="text-xl font-medium text-app-100">{app.name}</h2>
                <p className="text-base font-normal">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Faq />
    </main>
  );
};

export default Integrations;
