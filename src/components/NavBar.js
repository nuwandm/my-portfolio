import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/project">Projects</Link>
        <Link href="/article">Articles</Link>
      </nav>
      <h2>Logo</h2>
      <nav>
        <Link href="/" target={"_blank"}>
          Twitter
        </Link>
        <Link href="/" target={"_blank"}>
          Fb
        </Link>
        <Link href="/" target={"_blank"}>
          Linkdln
        </Link>
        <Link href="/" target={"_blank"}>
          Blog
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
