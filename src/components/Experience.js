import { React, useRef } from "react";
import LiIcon from "./LiIcon";
import { motion, useScroll } from "framer-motion";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 fist:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between  md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark capitalize">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark 
          md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2  ">
          <Details
            position="Software Engineer"
            company="DMS Software Engineering (Pvt) Ltd"
            address="Rajagiriya, Sri Lanka"
            companyLink="https://www.dmsswe.com/"
            time="2024-Present (9 months)"
            work="Currently working as a Software Engineer at DMS Software Engineering, where I am a core contributor to the DOCFLO project. I architect and develop scalable backend solutions using Clean Architecture principles and TypeScript with Node.js. My expertise includes implementing database-independent systems through dependency inversion, ensuring high maintainability and testability. I specialize in designing loosely coupled systems that adhere to SOLID principles, enabling seamless integration and future scalability. Working with modern development practices, I focus on building robust enterprise-level applications that deliver exceptional performance and reliability."
          />
          <Details
            position="Associate Software Engineer"
            company="DMS Software Engineering (Pvt) Ltd"
            address="Rajagiriya, Sri Lanka"
            companyLink="https://www.dmsswe.com/"
            time="2023-2024"
            work="Worked as an Associate Software Engineer with strong proficiency in the MERN stack (MongoDB, Express.js, React, and Node.js). Built scalable and user-friendly web applications while delivering innovative solutions that met both technical and business requirements. Developed responsive UIs, implemented efficient APIs, and ensured seamless integration between different components of projects. Collaborated with talented teams to drive digital innovation and deliver impactful solutions."
          />
          <Details
            position=" Trainee Software Engineer"
            company="SmartCode"
            address=" Negombo
Sri Lanka."
            time="2022-2023"
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
