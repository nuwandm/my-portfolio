import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className}`}>
      {title}
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/project" title="Projects" className="mx-4" />
        <CustomLink href="/article" title="Articles" className="ml-4" />
      </nav>

      <nav>
        {/* target={"_blank"} will open this link in new tab  */}
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
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
