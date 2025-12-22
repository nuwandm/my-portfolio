import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark shadow-dark dark:shadow-light py-3 px-6 cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 sm:text-5xl">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] md:h-[60vh] sm:h-[50vh]">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark shadow-dark dark:shadow-light p-8 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          WEB
        </motion.div>

        {/* Inner circle - Core technologies */}
        <Skill name="JavaScript" x="-18vw" y="0vw" />
        <Skill name="TypeScript" x="18vw" y="0vw" />
        <Skill name="ReactJS" x="0vw" y="-18vw" />
        <Skill name="Node.js" x="0vw" y="18vw" />

        {/* Middle circle - Frameworks & Libraries */}
        <Skill name="NextJS" x="-25vw" y="-12vw" />
        <Skill name="Express.js" x="25vw" y="-12vw" />
        <Skill name="Redux" x="-25vw" y="12vw" />
        <Skill name="Tailwind CSS" x="25vw" y="12vw" />

        {/* Outer circle - Additional skills */}
        <Skill name="HTML" x="-12vw" y="-25vw" />
        <Skill name="CSS" x="12vw" y="-25vw" />
        <Skill name="MongoDB" x="-12vw" y="25vw" />
        <Skill name="Firebase" x="12vw" y="25vw" />
        <Skill name="Git" x="-32vw" y="0vw" />
      </div>
    </>
  );
};

export default Skills;
