import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light shadow-dark py-3 px-6 cursor-pointer absolute "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{once:true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className=" font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen realative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light shadow-dark p-8 cursor-pointer "
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>
        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-12vw" />
        <Skill name="JavaScript" x="20vw" y="3vw" />
        <Skill name="ReactJS" x="0" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-14vw" />
        <Skill name="Tailwind CSS" x="20vw" y="-14vw" />
        <Skill name="Redux" x="20vw" y="14vw" />
        <Skill name="Firebase" x="-20vw" y="14vw" />
      </div>
    </>
  );
};
 
export default Skills;
