import React from "react";
import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const colors = [
  "#A8D5A2",  // Light Green
  "#8BCC8E",  // Medium Light Green
  "#6ABF6A",  // Medium Green
  "#4CA64C",  // Medium Dark Green
  "#2E8B57",  // Dark Green
  "#1E6F3F"   // Very Dark Green
]

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            style={{ backgroundColor: colors[index] }}
            className="h-full w-full relative "
          />
        );
      })}
    </>
  );
};

export default Stairs;
