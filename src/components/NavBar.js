import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  FaceBookIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion, AnimatePresence } from "framer-motion";
import useThemeSwicher from "./hooks/useThemeSwicher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      href={href}
      className={`${className} relative group px-3 py-2 rounded-lg transition-all duration-300
        ${isActive ? 'text-primary dark:text-primaryDark font-bold' : 'hover:text-primary dark:hover:text-primaryDark'}`}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-gradient-to-r from-primary to-primaryDark absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 rounded-full
        ${isActive ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
// for mobile ...👇👇
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-dark dark:text-light my-3 text-xl font-semibold
        px-6 py-3 rounded-lg transition-all duration-300
        ${isActive ? 'bg-dark/20 dark:bg-light/20 scale-105' : 'hover:bg-dark/10 dark:hover:bg-light/10'}`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 rounded-full
        ${isActive ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwicher();
  // hamberger menu status 👇
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light relative z-50 lg:px-16  md:px-12 sm:px-8"
    >
      {/* button with hamberger...  */}
      {/* desktop menu div  */}
      <button
        className=" flex-col justify-center items-center  hidden lg:flex "
        onClick={handleClick}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-2.5" : "-translate-y- 0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate - y  -0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between lg:hidden">
        <nav aria-label="Main navigation">
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="mx-4" />
          <CustomLink href="/contact" title="Contact" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap" aria-label="Social media links">
          {/* target={"_blank"} will open this link in new tab  */}
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 3 }}
            className="w-6 mr-3"
            aria-label="Visit Twitter profile"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/nuwandm"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 3 }}
            className="w-6 mx-3"
            aria-label="Visit GitHub profile"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/nuwanmadusanka/"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 3 }}
            className="w-6 mx-3"
            aria-label="Visit LinkedIn profile"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://web.facebook.com/nuwan1sanka"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 3 }}
            className="w-6 ml-3"
            aria-label="Visit Facebook profile"
          >
            <FaceBookIcon />
          </motion.a>
          <button
            className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
      {/* mobile menu div */}
      {/* if isOpen ? {div}: null  👇😍👀 */}
      <AnimatePresence>
        {isOpen && (
          <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-dark/50 dark:bg-dark/70 backdrop-blur-sm z-[90]"
            onClick={handleClick}
            aria-hidden="true"
          />
          {/* Menu content */}
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="min-w-[70vw] sm:min-w-[90vw] flex flex-col justify-between z-[100] items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-light/95 dark:bg-dark/95 rounded-2xl backdrop-blur-md py-32 shadow-2xl border-2 border-dark/20 dark:border-light/20"
          >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 flex items-center justify-center w-10 h-10 rounded-full
            bg-dark/10 dark:bg-light/10 hover:bg-dark/20 dark:hover:bg-light/20
            transition-all duration-300 group"
            onClick={handleClick}
            aria-label="Close menu"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="w-6 h-6 text-dark dark:text-light"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/contact"
              title="Contact"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            {/* target={"_blank"} will open this link in new tab  */}
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 3 }}
              className="w-6 mr-3 sm:mx-1 text-dark dark:text-light"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com/nuwandm"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 3 }}
              className="w-6 mx-3 bg-dark dark:bg-light rounded-full sm:mx-1 text-light dark:text-dark"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/nuwanmadusanka/"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 3 }}
              className="w-6 mx-3 sm:mx-1 text-dark dark:text-light"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://web.facebook.com/nuwan1sanka"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 3 }}
              className="w-6 ml-3 sm:mx-1 text-dark dark:text-light"
            >
              <FaceBookIcon />
            </motion.a>
            <button
              className={`ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
        </>
        )}
      </AnimatePresence>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
