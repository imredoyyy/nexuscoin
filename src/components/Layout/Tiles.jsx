import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Tile = ({ index }) => {
  return (
    <motion.div
      key={index}
      className="border-app-200/40 sm:border-app-200/20 aspect-square w-16 rounded-sm border"
      whileHover={{
        zIndex: 1,
        backgroundColor: "rgba(36, 38, 101, 0.3)",
      }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
    />
  );
};

const Tiles = () => {
  const [tilesCount, setTilesCount] = useState(0);

  useEffect(() => {
    const calculateNumberOfTiles = () => {
      const minTiles = 4;
      const maxTiles = Math.floor(window.innerWidth / 64);
      const numTilesToShow = Math.max(minTiles, maxTiles);
      return numTilesToShow;
    };

    const updateTilesCount = () => {
      const newTilesCount = calculateNumberOfTiles();
      setTilesCount(newTilesCount);
    };

    updateTilesCount();

    window.addEventListener("resize", updateTilesCount);

    return () => {
      window.removeEventListener("resize", updateTilesCount);
    };
  }, []);

  // Generate grid template columns
  const gridTemplateColumns = `repeat(${tilesCount}, 1fr)`;

  return (
    <div
      style={{ gridTemplateColumns }}
      className="absolute inset-0 grid w-full"
    >
      {Array.from(Array(tilesCount * 12), (_, i) => (
        <Tile key={i} index={i} />
      ))}
    </div>
  );
};

export default Tiles;
