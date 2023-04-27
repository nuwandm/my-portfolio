import React from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });
  return (
    <figure className="absolute left-0 stroke-dark">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 24 100 100">
        <circle
          cx="75"
          cy="75"
          r="20"
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="75"
          r="20"
          className=" stroke-[5px] fill-light"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="75"
          r="10"
          className=" stroke-1 fill-primary animate-pulse"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
