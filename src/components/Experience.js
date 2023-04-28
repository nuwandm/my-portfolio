import { React, useRef } from "react";
import LiIcon from "./LiIcon";
import { motion, useScroll } from "framer-motion";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 fist:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a href={companyLink} target="_blank" className="text-primary capi">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4  ">
          <Details
            position="software Engineer"
            company="SmartCode"
            address=" Negombo
Sri Lanka."
            time="2022-present"
            work="My main responsibility is overseeing the implementation of an ERP system for an apparel garment factory. This includes developing the front-end user interface of the ERP system using React, HTML, CSS, and JavaScript, as well as developing the server-side back-end logic of the ERP system using ASP.NET. In addition, I am also responsible for implementing Microsoft SQL Server as the database engine. However, my role does not stop at developing the system. I am also collaborating with other development team members and working closely with the client garment factory stakeholders to ensure that the ERP system meets the requirements and goals of the organization."
          />
          <Details
            position="Trainee Software Engineer
"
            company="SCAF SOLUTION"
            address=" Ambalanthota
Sri Lanka."
            time="JAN 2020-DEC 2020"
            work="As a front-end developer for Scalf Medical application, I was responsible for developing and maintaining the user interface of the medical web application using technologies such as HTML, CSS, JavaScript, and Bootstrap. To ensure seamless integration of the frontend and backend components of the web application, I collaborated closely with the backend development team. Utilizing GitHub as a version control tool, I managed and shared code with team members, facilitating effective collaboration throughout the development process. Overall, my role as a front-end developer for Scalf Medical involved creating a visually appealing and user-friendly interface for the web application while working closely with the backend team to ensure optimal functionality."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;