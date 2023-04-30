import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import AnimatedNumbers from "../components/AnimatedNumbers";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const about = () => {
  return (
    <>
      <Head>
        <title>Nuwan | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex-com items-start justify-start ">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BioGraphy
              </h2>
              <p className="font-medium">
                Hi, my name is Nuwan and I am a software engineer and UI/UX
                developer with a degree in Computing and Information Systems
                from Sbaragamuwa University of Sri Lanka. I have 2 years of
                experience in the field and am passionate about using technology
                to create solutions that make a positive impact on people's
                lives.
              </p>
              <p className="font-medium">
                In addition to my degree, I have knowledge in HTML, CSS,
                JavaScript, React, Redux, and Next.js. I am skilled in creating
                user-centered software that not only functions well, but also
                has a great user interface. Throughout my career, I have worked
                on a variety of projects, from small mobile apps to large-scale
                enterprise software systems.
              </p>
              <p className="font-medium">
                I am a strong communicator and project manager, and always
                strive to deliver high-quality software solutions that meet the
                needs of my clients and users. I am constantly learning and
                exploring new technologies to stay up to date with the latest
                trends and tools in the industry. If you're looking for a
                dedicated software engineer and UI/UX developer who can deliver
                results that exceed your expectations, I would love to work with
                you.
              </p>
            </div>
            {/* profile pic section */}
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Profile Image"
                priority={true}
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <div className=" col-span-2 flex flex-col items-end justify-between ">
              <div className="flex flex-col items-end justify-center ">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 ">
                  Years Of Experiance
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center ">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75  ">
                  Projects Compleated
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center ">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={100} />%
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75  ">
                  Dedication
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
