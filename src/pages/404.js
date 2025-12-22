import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Nuwan Madusanka</title>
        <meta name="description" content="Page not found" />
      </Head>

      <main className="flex items-center justify-center min-h-screen w-full dark:text-light relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-light via-light to-primary/5 dark:from-dark dark:via-dark dark:to-primaryDark/5 -z-10" />

        <Layout className="pt-0">
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <h1 className="text-9xl font-bold bg-gradient-to-r from-primary to-primaryDark bg-clip-text text-transparent mb-8 md:text-7xl sm:text-6xl">
                404
              </h1>
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary to-primaryDark rounded-lg blur opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold text-dark dark:text-light mb-4 md:text-3xl sm:text-2xl"
            >
              Page Not Found
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-dark/70 dark:text-light/70 mb-8 max-w-md md:text-base sm:text-sm"
            >
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4 flex-wrap justify-center"
            >
              <Link
                href="/"
                className="group flex items-center gap-2 bg-gradient-to-r from-primary to-primaryDark text-light
                  px-8 py-4 rounded-lg text-lg font-semibold
                  hover:shadow-xl hover:scale-105
                  transition-all duration-300
                  md:px-6 md:py-3 md:text-base"
              >
                <svg
                  className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Go Home
              </Link>

              <Link
                href="/projects"
                className="flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold
                  border-2 border-dark dark:border-light text-dark dark:text-light
                  hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark
                  transition-all duration-300 hover:scale-105
                  md:px-6 md:py-3 md:text-base"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16"
            >
              <svg
                className="w-64 h-64 text-dark/10 dark:text-light/10 md:w-48 md:h-48"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </motion.div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default NotFound;
