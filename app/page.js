"use client";

import { Typewriter } from "react-simple-typewriter";

import ParticlesContainer from "../components/ParticlesContainer";
import ResumeBtn from "../components/ResumeBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../helpers/variants";

import { Bio } from "../helpers/constants";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="h-full">
      {/* particles */}
      <ParticlesContainer />
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            <div className="space-y-2 pt-12">
              <span className="text-4xl block">Hello, I am</span>
              <span className="text-4xl block">{Bio.name}, and I'm a</span>
            </div>

            <span className="text-accent text-3xl">
              <Typewriter
                words={Bio.roles}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-lg xl2:max-w-4xl  mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            <span className="text-secondary text-xl"> {Bio.description} </span>
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ResumeBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ResumeBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 xl:right-12 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[540px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </main>
  );
}
