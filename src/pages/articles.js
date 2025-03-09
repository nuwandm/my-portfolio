import AnimatedText from "../components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { React, useRef } from "react";
import Image from "next/image";
import article1 from "../../public/images/articles/Js.jpg";
import article2 from "../../public/images/articles/react.jpg";
import article3 from "../../public/images/articles/create modal component in react using react portals.png";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

// by doing separate from artical we can render only this moving image without article1

const MovingImg = ({ title, img, link }) => {
  // obtaining possition of the cursor ---->
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);
  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto absolute hidden rounded-lg md:!hidden"
        ref={imgRef}
      />
    </Link>
  );
};

const Article = ({ img, title, link, time }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark  text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light
    border-r-4 border-b-4 sm:flex-col "
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark  font-semibold pl-4 xs:text-sm">{time}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, summery, link, time }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl relative">
      <div className="absolute -top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          priority={true}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.09 }}
          transition={{ duration: 0.2 }}
          property="true"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <Link href={link} alt={title} className="w-full h-auto">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline  dark:text-light
        xs:text-lg
        ">
          {title}
        </h2>
      </Link>
      <p className="text-sm- mb-2 dark:text-light">{summery}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">
        {time}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Nuwan | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="My Articles"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lag:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={article1}
              title="How JavaScript Works"
              summery="This article provides a brief overview of how JavaScript code is executed, and discusses the concepts of synchronous and asynchronous programming in JavaScript. It emphasizes that JavaScript is both synchronous and asynchronous, and that while it is single-threaded, it can handle asynchronous operations efficiently through APIs that use a separate thread pool to execute operations without blocking the main thread."
              link="https://wordpress.com/post/nuwanmadusanka3.wordpress.com/30"
              time="15 min to read"
            />
            <FeaturedArticle
              img={article2}
              title="Getting Start With React."
              summery="This article is a beginner's guide to React, covering what it is and its benefits, how to set up a development environment for React, and a step-by-step guide for creating a new React application from scratch."
              link="https://wordpress.com/post/nuwanmadusanka3.wordpress.com/13"
              time="9 min to read"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-32 dark:text-light">
            All Articles
          </h2>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Cs......."
              time="March 22. 2023"
              img={article3}
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Cs......."
              time="March 22. 2023"
              img={article3}
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Cs......."
              time="March 22. 2023"
              img={article3}
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
