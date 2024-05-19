import { Link } from "react-router-dom";
import { Copyright } from "lucide-react";
import { SocialLinks, ServiceLinks, CompanyLinks } from "../../data/data";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto grid w-[90%] max-w-7xl justify-items-center gap-10 border-y-2 border-app-300 px-4 py-16 md:grid-cols-3 md:justify-items-center md:px-8 md:py-20 lg:gap-12">
        <div className="flex flex-col items-center gap-3.5 md:items-start">
          <Link to="/">
            <h2 className="text-2xl font-bold text-app-50">NexusCoin</h2>
          </Link>
          <div className="flex flex-col gap-3">
            <p className="max-w-md text-center md:text-left">
              Welcome to NexusCoin, your one stop gateway to the world of Web3
              trading. Buy, sale & track cryptocurrencies in one place
            </p>
            <ul className="flex items-center justify-center gap-2 md:justify-start">
              {SocialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.icon}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3.5">
          <h2 className="text-2xl font-bold text-app-50">Company</h2>
          <ul className="flex flex-col gap-2">
            {ServiceLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="transition-colors duration-200 hover:text-app-100"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3.5">
          <h2 className="text-2xl font-bold text-app-50">Company</h2>
          <ul className="flex flex-col gap-2">
            {CompanyLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="transition-colors duration-200 hover:text-app-50"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-6">
        <p className="flex items-center justify-center gap-1 text-center text-sm font-medium">
          <Copyright className="size-[18px]" /> {new Date().getFullYear()} |
          Designed & coded with ❤️ by{" "}
          <a
            target="_blank"
            href="https://coderredoy.com"
            className="underline underline-offset-4 transition-colors duration-200 hover:text-app-50/80"
          >
            Coder Redoy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
