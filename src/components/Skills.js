import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light shadow-dark py-3 px-6 cursor-pointer absolute dark:text-dark dark:bg-light
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
      xs:text-dark xs:dark:text-light"
      whileHover={{ scale: 1.5 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className=" font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
        <br/>
      <div className="w-full h-screen realative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      ">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light shadow-dark p-7 cursor-pointer  dark:text-dark dark:bg-lime-200  xs:font-bold lg:p-6 md:p-4 xs:text-xs xs:p-2 "
          whileHover={{ scale: 1.5 }}
        >
          web
        </motion.div>
        <Skill name="HTML" x="-24vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-13vw" />
        <Skill name="JavaScript" x="24vw" y="3vw" />
        <Skill name="ReactJS" x="0" y="13vw" />
        <Skill name="Next.js" x="-20vw" y="-14vw" />
        <Skill name="Tailwind CSS" x="20vw" y="-14vw" />
        <Skill name="Mongo DB" x="38vw" y="-6vw" />
        <Skill name="Node.js" x="33vw" y="12vw" />
        <Skill name="Express.js" x="-40vw" y="1vw" />
        <Skill name="Redux" x="20vw" y="14vw" />
        <Skill name="Firebase" x="-20vw" y="14vw" />
      </div>
    </>
  );
};
 
export default Skills;
