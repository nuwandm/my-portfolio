import React from "react";
import Link from "next/link";
import Layout from "./Layout";
import { useState, useEffect } from "react";

const Footer = () => {

  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg 
    dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Bulild By&nbsp;
          <span className="text-primary dark:text-primaryDark text-2xl px-1" >
            &#9825; &nbsp;
          </span>
          <Link
            href="https://www.linkedin.com/in/nuwanmadusanka/"
            className="underline underline-offset-2"
            target="{_blank}"
          >
            Nuwan Madusanka
          </Link>
        </div>
        
      </Layout>
    </footer>
  );
};

export default Footer;
