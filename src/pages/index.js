import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import AnimatedBlob from "@/components/AnimatedBlob";
import MagneticButton from "@/components/MagneticButton";
import FloatingElement from "@/components/FloatingElement";
import { motion } from "framer-motion";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
	return (
		<>
			<Head>
				<title>Nuwan Madusanka - Full Stack Developer | Portfolio</title>
				<meta name="description" content="Full Stack Developer specializing in MERN stack, React, Next.js, and modern web technologies. View my portfolio of projects and articles." />
				<meta name="keywords" content="Full Stack Developer, MERN Stack, React, Next.js, Web Development, Portfolio" />
			</Head>

			<main className="flex items-center text-dark w-full min-h-screen dark:text-light relative overflow-hidden">
				{/* Animated gradient background */}
				<div className="absolute inset-0 bg-gradient-to-br from-light via-light to-primary/5 dark:from-dark dark:via-dark dark:to-primaryDark/5 -z-10" />
				<AnimatedBlob delay={0} />

				<Layout className="pt-0 md:p-16 sm:pt-8 relative z-10">
					<div className="flex items-center justify-between w-full lg:flex-col gap-8">
						<div className="w-1/2 md:w-full relative">
							<FloatingElement duration={4} yOffset={30}>
								<motion.div
									className="relative group"
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.8, delay: 0.2 }}
								>
									<motion.div
										className="absolute -inset-1 bg-gradient-to-r from-primary to-primaryDark rounded-lg blur opacity-25 group-hover:opacity-50"
										animate={{
											scale: [1, 1.1, 1],
											rotate: [0, 5, -5, 0],
										}}
										transition={{
											duration: 4,
											repeat: Infinity,
											ease: "easeInOut",
										}}
									/>
									<Image
										src={profilePic}
										alt="Nuwan Madusanka - Full Stack Developer"
										className="w-full h-auto lg:hidden md:inline-block md:w-full rounded-lg relative"
										priority="true"
										sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
									/>
								</motion.div>
							</FloatingElement>
						</div>
						<div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
							<div className="mb-2">
								<span className="inline-block px-4 py-2 rounded-full bg-primary/10 dark:bg-primaryDark/10 text-primary dark:text-primaryDark text-sm font-semibold mb-4 animate-pulse">
									Available for Opportunities
								</span>
							</div>
							<AnimatedText
								text={"Nuwan Madusanka"}
								className="!text-6xl !text-left xl:!text-5xl lg:!text-6xl sm:!text-3xl sm:!pl-5"
							/>
							<h2 className="text-2xl font-bold text-primary dark:text-primaryDark mt-2 mb-4 xl:text-xl lg:text-2xl sm:text-lg">
								Full Stack Developer
							</h2>
							<p className="my-6 text-base font-medium leading-relaxed md:text-sm sm:text-xs text-dark/80 dark:text-light/80">
								Transforming innovative concepts into cutting-edge web applications with modern technologies.
								Specializing in <span className="font-bold text-primary dark:text-primaryDark">React</span>, <span className="font-bold text-primary dark:text-primaryDark">Next.js</span>, and the <span className="font-bold text-primary dark:text-primaryDark">MERN stack</span>.
								Passionate about creating seamless user experiences that exceed expectations.
							</p>

							<div className="flex items-center gap-4 self-start mt-4 lg:self-center flex-wrap">
								<MagneticButton>
									<Link
										href="/Resume/Nuwan_Madusanka_Resume.pdf"
										target={"_blank"}
										className="group flex items-center bg-dark text-light px-6 py-2.5
                rounded-lg text-base font-semibold hover:bg-primary dark:bg-light dark:text-dark
                hover:dark:bg-primaryDark border-2 border-solid border-dark dark:border-light
                hover:border-primary dark:hover:border-primaryDark transition-all duration-300
                shadow-md hover:shadow-lg hover:scale-105 md:px-4 md:py-2 md:text-sm sm:text-xs"
										download={true}
									>
										Resume <LinkArrow className={"w-4 ml-1.5 group-hover:translate-x-1 transition-transform"} />
									</Link>
								</MagneticButton>
								<MagneticButton>
									<Link
										href="mailto:nuwandarshana2012@gmail.com"
										className="flex items-center px-6 py-2.5 text-base font-semibold capitalize
										border-2 border-solid border-dark dark:border-light rounded-lg
										hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark
										transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105
										md:px-4 md:py-2 md:text-sm sm:text-xs"
									>
										Contact
									</Link>
								</MagneticButton>
							</div>

							{/* Tech stack badges */}
							<div className="flex flex-wrap gap-2 mt-8 justify-center lg:justify-center">
								{['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind'].map((tech) => (
									<span
										key={tech}
										className="px-3 py-1 text-sm rounded-full bg-dark/5 dark:bg-light/5
										border border-dark/10 dark:border-light/10 text-dark dark:text-light
										hover:bg-primary/10 dark:hover:bg-primaryDark/10 hover:border-primary
										dark:hover:border-primaryDark transition-all duration-300 cursor-default"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>

					{/* Scroll indicator */}
					<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
						<span className="text-sm text-dark/50 dark:text-light/50">Scroll Down</span>
						<svg className="w-6 h-6 text-dark/50 dark:text-light/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
						</svg>
					</div>
				</Layout>
				<HireMe />
			</main>
		</>
	);
}
