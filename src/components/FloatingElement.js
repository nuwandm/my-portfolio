import React from "react";
import { motion } from "framer-motion";

const FloatingElement = ({ children, duration = 3, delay = 0, yOffset = 20 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
