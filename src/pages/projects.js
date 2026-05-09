import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/project1.png";
import smartPP from "../../public/images/projects/Smart PP.png";
import escapeWithAmila from "../../public/images/projects/scape with amila.png";
import project2 from "../../public/images/projects/Project2.jpg";
import project3 from "../../public/images/projects/project3.png";
import project4 from "../../public/images/projects/project4.jpg";
import deadlinebuddy from "../../public/images/projects/deadlinebuddy1.jpg";
import udawalawaTaxi from "../../public/images/projects/udawalawa taxt.png";
import bestConverts from "../../public/images/projects/bestconverts.png";
import kidsStories from "../../public/images/projects/kidsstori.png";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summery, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between
    rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12 relative rounded-br-2xl
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.09 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:765px) 100vw, (max-width:1200px) 50vw,50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summery}
        </p>
        <div className="mt-2 flex items-center">
          {github && github !== "/" && (
            <Link href={github} target="_blank" className="w-10 mr-4">
              <GithubIcon />
            </Link>
          )}
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github, summery }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative xs:p-4"
    >
      <div
        className="absolute top-0 -right-2 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl
       md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.09 }}
          transition={{ duration: 0.2 }}
          priority="true"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>
        {summery && (
          <p className="my-1 font-medium text-dark dark:text-light text-sm">{summery}</p>
        )}
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          {github && github !== "/" && (
            <Link href={github} target="_blank" className="w-10 md:w-6">
              <GithubIcon />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const SectionHeading = ({ children }) => (
  <h2 className="text-2xl font-bold text-dark dark:text-light border-b-2 border-primary dark:border-primaryDark pb-2 mb-8 mt-4">
    {children}
  </h2>
);

const projects = () => {
  return (
    <>
      <Head>
        <title>Nuwan | Projects Page</title>
        <meta name="description" content="Projects by Nuwan Madusanka - Full Stack Developer" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Playfair+Display:wght@700;900&display=swap');

          .newspaper-bg {
            background-color: #f5f3e8;
            background-image:
              url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E"),
              repeating-linear-gradient(0deg, transparent, transparent 23px, rgba(139, 119, 101, 0.08) 23px, rgba(139, 119, 101, 0.08) 24px),
              radial-gradient(ellipse at 20% 30%, rgba(139, 119, 101, 0.05) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(139, 119, 101, 0.04) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(139, 119, 101, 0.03) 0%, transparent 60%),
              linear-gradient(180deg, #f5f3e8 0%, #ebe7d5 50%, #e8e3cf 100%);
            position: relative;
          }

          .newspaper-bg::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-image:
              repeating-linear-gradient(90deg, transparent, transparent calc(33.333% - 1px), rgba(139, 119, 101, 0.15) calc(33.333% - 1px), rgba(139, 119, 101, 0.15) calc(33.333%), transparent calc(33.333%), transparent calc(66.666% - 1px), rgba(139, 119, 101, 0.15) calc(66.666% - 1px), rgba(139, 119, 101, 0.15) calc(66.666%));
            pointer-events: none;
            opacity: 0.3;
          }

          .dark .newspaper-bg {
            background-color: #2b2621;
            background-image:
              url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E"),
              repeating-linear-gradient(0deg, transparent, transparent 23px, rgba(255, 255, 255, 0.05) 23px, rgba(255, 255, 255, 0.05) 24px),
              radial-gradient(ellipse at 20% 30%, rgba(101, 87, 73, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(101, 87, 73, 0.15) 0%, transparent 50%),
              linear-gradient(180deg, #2b2621 0%, #221f1b 50%, #1a1814 100%);
          }

          .dark .newspaper-bg::before {
            background-image:
              repeating-linear-gradient(90deg, transparent, transparent calc(33.333% - 1px), rgba(255, 255, 255, 0.08) calc(33.333% - 1px), rgba(255, 255, 255, 0.08) calc(33.333%), transparent calc(33.333%), transparent calc(66.666% - 1px), rgba(255, 255, 255, 0.08) calc(66.666% - 1px), rgba(255, 255, 255, 0.08) calc(66.666%));
            opacity: 0.2;
          }

          .newspaper-heading {
            font-family: 'Playfair Display', serif;
            font-weight: 900;
            letter-spacing: -0.02em;
            text-transform: uppercase;
            border-top: 3px double rgba(139, 119, 101, 0.5);
            border-bottom: 3px double rgba(139, 119, 101, 0.5);
            padding: 1rem 0;
            margin-bottom: 2rem;
          }

          .dark .newspaper-heading {
            border-color: rgba(255, 255, 255, 0.3);
          }
        `}</style>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light newspaper-bg min-h-screen">
        <Layout className="pt-16">
          <AnimatedText
            text={"My Projects"}
            className="mb-8 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl newspaper-heading"
          />

          {/* FREELANCE PROJECTS */}
          <SectionHeading>Freelance Projects</SectionHeading>
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 mb-24">
            <div className="col-span-12">
              <FeaturedProject
                title="Dream Labs Smart PP — Clinic Management System"
                type="Freelance · Full Stack"
                summery="A comprehensive hospital ecosystem web application for managing patient records, appointments, doctor schedules, and billing. Built with the MERN stack for a private practice center."
                img={smartPP}
                link="https://private-practice-center-client.vercel.app"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="SL Auction"
                type="Freelance · Netexper Pty Ltd"
                summery="Online auction platform for Sri Lanka."
                img={project2}
                link="https://slauction.lk"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Escape with Amila Tours"
                type="Freelance · Travel Agency Website"
                summery="Travel agency website with tour packages, booking, and destination highlights."
                img={escapeWithAmila}
                link="https://escapewithamila.com"
                github="/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="UdawalawaTaxi — Taxi & Tour Booking Platform"
                type="Freelance · Full Stack"
                summery="A taxi and tour booking web platform serving the Udawalawe region, featuring real-time availability, route management, and customer booking flows."
                img={udawalawaTaxi}
                link="https://udawalawataxi.com"
                github="/"
              />
            </div>
          </div>

          {/* PERSONAL PROJECTS */}
          <SectionHeading>Personal Projects</SectionHeading>
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="SunChat"
                type="Featured Project · MERN + Socket.io"
                summery="Real-time messaging app built with the MERN stack and Socket.io. Features live chat, user authentication, and responsive UI."
                img={project1}
                link="https://sunchat.onrender.com"
                github="https://github.com/nuwandm/SunChat"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="DeadlineBuddy — Chrome Extension"
                type="Chrome Extension · Productivity"
                summery="A Chrome extension that helps students and professionals track assignment deadlines, set reminders, and manage tasks directly from the browser."
                img={deadlinebuddy}
                link="https://lnkd.in/g6eu8gkP"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="BestConverts — Unit Conversion Web App"
                type="Web App · React"
                summery="A fast, clean unit conversion tool covering length, weight, temperature, and more."
                img={bestConverts}
                link="https://bestconverts.com"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Kids Stories — Educational Web Platform"
                type="Web App · Next.js"
                summery="An educational storytelling platform for children with interactive stories and audio."
                img={kidsStories}
                link="https://kidsstories-bay.vercel.app"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Currency Converter Pro"
                type="Chrome Extension"
                summery="A Chrome extension for real-time currency conversion supporting multiple currencies."
                img={project4}
                link="https://chromewebstore.google.com/detail/currency-converter-pro/dmomjgdbofbhcjeapinfbdbbhmobbakc"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="React Admin Dashboard"
                type="Personal Project · React"
                img={project1}
                link="https://github.com/nuwandm/admin_dashboard"
                github="https://github.com/nuwandm/admin_dashboard"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="MERN App For Workout Tracking"
                type="Personal Project · MERN Stack"
                img={project2}
                link="https://github.com/nuwandm/Exercise-Tracking-App--MERN-STACK"
                github="https://github.com/nuwandm/Exercise-Tracking-App--MERN-STACK"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Gym Landing Page — Svelte"
                type="Personal Project · Svelte"
                img={project3}
                link="https://maxfitlandingpage.netlify.app"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="iPhone Calculator Clone"
                type="Personal Project · React"
                img={project4}
                link="https://nuwandm.github.io/iphone_calculator/"
                github="https://github.com/nuwandm/iphone_calculator"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="ML Approach: YouTube Music Video Comment Analysis"
                type="University Research Project"
                summery="Machine learning approach for analyzing user comments on trending YouTube music videos to identify factors influencing listener engagement and sentiment."
                img={project3}
                link="/"
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
