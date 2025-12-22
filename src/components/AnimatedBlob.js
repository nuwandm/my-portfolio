import React from "react";
import { motion } from "framer-motion";

const AnimatedBlob = ({ delay = 0 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blob 1 */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{
          background: "linear-gradient(45deg, #B63E96, #58E6D9)",
        }}
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, -100, 100, 0, 0],
          scale: [1, 1.2, 0.8, 1.1, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 20,
          delay: delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ x: -100, y: -100 }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-20"
        style={{
          background: "linear-gradient(135deg, #58E6D9, #B63E96)",
          right: 0,
          bottom: 0,
        }}
        animate={{
          x: [0, -150, 0, 100, 0],
          y: [0, 100, -100, 0, 0],
          scale: [1, 0.8, 1.3, 0.9, 1],
          rotate: [360, 270, 180, 90, 0],
        }}
        transition={{
          duration: 25,
          delay: delay + 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ x: 100, y: 100 }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute w-72 h-72 rounded-full blur-3xl opacity-25"
        style={{
          background: "radial-gradient(circle, #B63E96, transparent)",
          top: "50%",
          left: "50%",
        }}
        animate={{
          x: [0, 80, -80, 0],
          y: [0, -80, 80, 0],
          scale: [1, 1.3, 0.7, 1],
        }}
        transition={{
          duration: 15,
          delay: delay + 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ x: -50, y: -50 }}
      />
    </div>
  );
};

export default AnimatedBlob;
