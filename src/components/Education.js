import { React, useRef } from "react";
import LiIcon from "./LiIcon";
import { motion, useScroll } from "framer-motion";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 fist:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-primaryDark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          <Details
            type="BSc Honor in Computing and Information Systems"
            time="2017-2022"
            place="Sabaragamuwa University of Sri Lanka"
            info="As a graduate of Sabaragamuwa University of Sri Lanka with a degree in Computing and Information Systems, I have acquired a solid foundation in computer science and related fields. Through my academic coursework, I have gained extensive knowledge and practical experience in programming, web development, data structures, and algorithms. These skills have enabled me to build complex software applications, analyze and manipulate large datasets, and design and optimize efficient algorithms. My academic achievements have not only prepared me for a successful career in the tech industry, but have also instilled in me a passion for lifelong learning and exploration in the rapidly-evolving field of computer science."
          />
          <Details
            type="GCE Advanced Level"
            time="2015"
            place="Kegalu Vidyalaya"
            info="I studied Mathematics, Physics, and Chemistry for  advanced level, gaining a deep understanding of these core sciences and developing strong analytical and problem-solving skills."
          />
         
        </ul>
      </div>
    </div>
  );
};

export default Education;
