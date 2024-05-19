import { useLayoutEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: null,
  });

  useLayoutEffect(() => {
    const handleWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    handleWindowSize();
    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  return windowSize;
}
