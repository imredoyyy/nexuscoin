import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { mergeClasses } from "../../lib/utils";
import IconButton from "../ui/IconButton";
import { NavLinks } from "../../data/data";
import useScroll from "../../hooks/UseScroll";
import useWindowSize from "../..//hooks/UseWindowSize";

import { Menu, X } from "lucide-react";

const Header = () => {
  const scrolled = useScroll(40);
  const windowSize = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const handleMobileMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  // Close mobile menu if window size is greater than 767px and it's currently opened
  useEffect(() => {
    windowSize.width > 767 && isOpen ? setIsOpen(false) : "";
  }, [windowSize, isOpen]);

  // Close mobile menu when clicked outside of menu
  const handleClickOutside = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={mergeClasses(
        "fixed left-1/2 top-5 z-10 mx-auto flex w-[90%] max-w-7xl -translate-x-1/2 items-center justify-between rounded-xl border border-app-300 bg-app-background/50 px-4 py-4 transition-colors duration-200 md:px-8 md:py-5",
        scrolled ? "backdrop-blur-sm" : "",
      )}
    >
      <Link to="/">
        <h2 className=" text-2xl font-bold tracking-[-0.02em] text-app-100 md:text-3xl">
          NexusCoin
        </h2>
      </Link>

      <nav className="hidden items-center gap-6 md:flex">
        <ul className="flex items-center gap-6">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.url}
                className="font-medium transition-colors duration-200 hover:text-app-50"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <IconButton className="md:hidden" onClick={handleMobileMenu}>
        {isOpen ? <X /> : <Menu />}
      </IconButton>

      {/* Mobile Navigation */}
      <div
        ref={navRef}
        className={mergeClasses(
          "pointer-events-none fixed -top-52 left-1/2 z-[999] w-full -translate-x-1/2 rounded-md bg-app-300/95 p-4 opacity-0 transition-all duration-500 ease-in-out",
          isOpen ? "pointer-events-auto top-[75px] opacity-100" : "",
        )}
      >
        <ul className="mx-auto flex flex-col items-start gap-4">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.url}
                onClick={() => {
                  const timeoutId = setTimeout(() => {
                    setIsOpen(false);
                    clearTimeout(timeoutId);
                  }, 500);
                }}
                className="font-medium"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
