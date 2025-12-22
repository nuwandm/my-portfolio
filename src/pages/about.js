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
import TiltCard from "@/components/TiltCard";
import AnimatedBlob from "@/components/AnimatedBlob";

const about = () => {
	return (
		<>
			<Head>
				<title>About Nuwan Madusanka | Full Stack Developer</title>
				<meta name="description" content="Learn about Nuwan Madusanka, a Full Stack Developer with 3+ years of experience specializing in MERN stack, React, Next.js, and modern web technologies." />
				<meta name="keywords" content="Nuwan Madusanka, Full Stack Developer, MERN Stack, React Developer, Web Developer, Software Engineer" />
				<meta property="og:title" content="About Nuwan Madusanka | Full Stack Developer" />
				<meta property="og:description" content="Full Stack Developer with expertise in MERN stack and modern web technologies. 3+ years of experience building innovative web applications." />
				<meta property="og:type" content="profile" />
				<meta property="og:url" content="https://nuwandm.github.io/my-portfolio/about" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="About Nuwan Madusanka | Full Stack Developer" />
				<meta name="twitter:description" content="Full Stack Developer with expertise in MERN stack and modern web technologies." />
			</Head>
			<main className="flex w-full flex-col items-center justify-center dark:text-light relative overflow-hidden">
				<AnimatedBlob delay={1} />
				<Layout className="pt-16">
					<AnimatedText
						text="About me!"
						className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
					/>
					<div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
						<div className="col-span-3 flex-com items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 ">
							<h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 tracking-wider">
								Biography
							</h2>
							<p className="font-medium leading-relaxed text-dark/90 dark:text-light/90">
								Hi, my name is Nuwan and I am a fullstack developer with a
								degree in Computing and Information Systems from Sabaragamuwa
								University of Sri Lanka. I have more than 2 years of experience
								in the field and am passionate about using technology to create
								solutions that make a positive impact on people's lives.
							</p>
							<br />
							<p className="font-medium leading-relaxed text-dark/90 dark:text-light/90">
								I have extensive knowledge in HTML, CSS, JavaScript, React,
								Redux, Next.js, and the fullstack MERN stack (MongoDB,
								Express.js, React, and Node.js). I am skilled in creating
								user-centered applications that not only function seamlessly but
								also provide an excellent user interface. Throughout my career,
								I have worked on a wide range of projects, from small mobile
								apps to large-scale enterprise-level software systems.
							</p>
							<br />
							<p className="font-medium leading-relaxed text-dark/90 dark:text-light/90">
								I am a strong communicator and always strive to deliver
								high-quality software solutions that meet the needs of my
								clients and users. I am constantly learning and exploring new
								technologies to stay up to date with the latest trends and tools
								in the industry.
							</p>
							<br />
							<p className="font-medium leading-relaxed text-dark/90 dark:text-light/90">
								If you're looking for a dedicated software engineer who can
								deliver results that exceed your expectations, I would love to
								work with you.
							</p>
						</div>
						{/* profile pic section */}
						<div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 overflow-hidden group">
							<div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-gradient-to-br from-primary to-primaryDark dark:from-primaryDark dark:to-primary" />
							<div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							<Image
								src={profilePic}
								alt="Nuwan Madusanka - Full Stack Developer"
								priority="true"
								className="relative rounded-lg"
								sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
							/>
						</div>
						<div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 gap-8 xl:gap-4">
							<TiltCard className="group flex flex-col items-center justify-center px-8 py-6 rounded-2xl
								bg-gradient-to-br from-light to-light/50 dark:from-dark dark:to-dark/50
								border-2 border-dark/10 dark:border-light/10 shadow-lg hover:shadow-xl
								transition-all duration-300 hover:border-primary dark:hover:border-primaryDark
								backdrop-blur-sm w-full xl:w-auto">
								<span className="inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl
									bg-gradient-to-r from-primary to-primaryDark bg-clip-text text-transparent">
									<AnimatedNumbers value={3} />+
								</span>
								<h2 className="text-lg font-semibold capitalize text-dark/75 dark:text-light/75 text-center mt-2
									md:text-base sm:text-sm xs:text-xs group-hover:text-primary dark:group-hover:text-primaryDark transition-colors">
									Years Experience
								</h2>
							</TiltCard>
							<TiltCard className="group flex flex-col items-center justify-center px-8 py-6 rounded-2xl
								bg-gradient-to-br from-light to-light/50 dark:from-dark dark:to-dark/50
								border-2 border-dark/10 dark:border-light/10 shadow-lg hover:shadow-xl
								transition-all duration-300 hover:border-primary dark:hover:border-primaryDark
								backdrop-blur-sm w-full xl:w-auto">
								<span className="inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl
									bg-gradient-to-r from-primary to-primaryDark bg-clip-text text-transparent">
									<AnimatedNumbers value={7} />+
								</span>
								<h2 className="text-lg font-semibold capitalize text-dark/75 dark:text-light/75 text-center mt-2
									md:text-base sm:text-sm xs:text-xs group-hover:text-primary dark:group-hover:text-primaryDark transition-colors">
									Projects Completed
								</h2>
							</TiltCard>
							<TiltCard className="group flex flex-col items-center justify-center px-8 py-6 rounded-2xl
								bg-gradient-to-br from-light to-light/50 dark:from-dark dark:to-dark/50
								border-2 border-dark/10 dark:border-light/10 shadow-lg hover:shadow-xl
								transition-all duration-300 hover:border-primary dark:hover:border-primaryDark
								backdrop-blur-sm w-full xl:w-auto">
								<span className="inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl
									bg-gradient-to-r from-primary to-primaryDark bg-clip-text text-transparent">
									<AnimatedNumbers value={100} />%
								</span>
								<h2 className="text-lg font-semibold capitalize text-dark/75 dark:text-light/75 text-center mt-2
									md:text-base sm:text-sm xs:text-xs group-hover:text-primary dark:group-hover:text-primaryDark transition-colors">
									Dedication
								</h2>
							</TiltCard>
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
