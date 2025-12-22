import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon, LinkedInIcon, TwitterIcon, FaceBookIcon } from "@/components/Icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });

    // Simulate form submission (in a real app, you'd send this to an API)
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: false });
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Contact | Nuwan Madusanka</title>
        <meta name="description" content="Get in touch with Nuwan Madusanka for web development opportunities, collaborations, or project inquiries." />
        <meta name="keywords" content="Contact, Hire Developer, Web Development Services, Full Stack Developer Contact" />
        <meta property="og:title" content="Contact Nuwan Madusanka" />
        <meta property="og:description" content="Get in touch for web development opportunities and collaborations." />
        <meta property="og:type" content="website" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center dark:text-light relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-light via-light to-primary/5 dark:from-dark dark:via-dark dark:to-primaryDark/5 -z-10" />

        <Layout className="pt-16">
          <AnimatedText
            text="Let's Connect!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-dark dark:text-light mb-4 md:text-3xl sm:text-2xl">
                  Get In Touch
                </h2>
                <p className="text-lg text-dark/80 dark:text-light/80 leading-relaxed md:text-base">
                  I'm always interested in hearing about new projects and opportunities.
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <motion.a
                  href="mailto:nuwandarshana2012@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-6 rounded-2xl
                    bg-gradient-to-br from-light to-light/50 dark:from-dark dark:to-dark/50
                    border-2 border-dark/10 dark:border-light/10
                    hover:border-primary dark:hover:border-primaryDark
                    shadow-lg hover:shadow-xl transition-all duration-300
                    backdrop-blur-sm"
                >
                  <div className="p-3 rounded-full bg-primary/10 dark:bg-primaryDark/10">
                    <svg className="w-6 h-6 text-primary dark:text-primaryDark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-dark/60 dark:text-light/60">Email</p>
                    <p className="text-lg font-semibold text-dark dark:text-light">nuwandarshana2012@gmail.com</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-6 rounded-2xl
                    bg-gradient-to-br from-light to-light/50 dark:from-dark dark:to-dark/50
                    border-2 border-dark/10 dark:border-light/10
                    shadow-lg transition-all duration-300
                    backdrop-blur-sm"
                >
                  <div className="p-3 rounded-full bg-primary/10 dark:bg-primaryDark/10">
                    <svg className="w-6 h-6 text-primary dark:text-primaryDark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-dark/60 dark:text-light/60">Location</p>
                    <p className="text-lg font-semibold text-dark dark:text-light">Sri Lanka</p>
                  </div>
                </motion.div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-dark dark:text-light mb-4 md:text-xl">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {[
                    { Icon: GithubIcon, href: "https://github.com/nuwandm", label: "GitHub" },
                    { Icon: LinkedInIcon, href: "https://www.linkedin.com/in/nuwanmadusanka/", label: "LinkedIn" },
                    { Icon: FaceBookIcon, href: "https://web.facebook.com/nuwan1sanka", label: "Facebook" },
                    { Icon: TwitterIcon, href: "/", label: "Twitter" },
                  ].map(({ Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 rounded-full bg-dark/5 dark:bg-light/5
                        hover:bg-primary/10 dark:hover:bg-primaryDark/10
                        border-2 border-dark/10 dark:border-light/10
                        hover:border-primary dark:hover:border-primaryDark
                        transition-all duration-300"
                      aria-label={label}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl
                  bg-gradient-to-br from-light to-light/50 dark:from-dark dark:to-dark/50
                  border-2 border-dark/10 dark:border-light/10
                  shadow-xl backdrop-blur-sm
                  space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark dark:text-light mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg
                      bg-light dark:bg-dark
                      border-2 border-dark/20 dark:border-light/20
                      focus:border-primary dark:focus:border-primaryDark
                      text-dark dark:text-light
                      outline-none transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark dark:text-light mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg
                      bg-light dark:bg-dark
                      border-2 border-dark/20 dark:border-light/20
                      focus:border-primary dark:focus:border-primaryDark
                      text-dark dark:text-light
                      outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-dark dark:text-light mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg
                      bg-light dark:bg-dark
                      border-2 border-dark/20 dark:border-light/20
                      focus:border-primary dark:focus:border-primaryDark
                      text-dark dark:text-light
                      outline-none transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark dark:text-light mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg
                      bg-light dark:bg-dark
                      border-2 border-dark/20 dark:border-light/20
                      focus:border-primary dark:focus:border-primaryDark
                      text-dark dark:text-light
                      outline-none transition-all duration-300
                      resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formStatus.submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg font-bold text-lg
                    bg-gradient-to-r from-primary to-primaryDark text-light
                    hover:shadow-xl transition-all duration-300
                    disabled:opacity-50 disabled:cursor-not-allowed
                    ${formStatus.submitting ? 'animate-pulse' : ''}`}
                >
                  {formStatus.submitting ? "Sending..." : formStatus.submitted ? "Message Sent!" : "Send Message"}
                </motion.button>

                {formStatus.submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/10 border-2 border-green-500/20 text-green-600 dark:text-green-400 text-center"
                  >
                    Thank you for your message! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
