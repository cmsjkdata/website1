// src/components/Hero.js
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url("/img/Leonardo_Phoenix_Create_an_image_of_a_confident_young_boy_stan_3.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: " fixed",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative md:text-9xl  z-10 md:flex  flex-col items-center justify-center h-full text-center text-white">
        <motion.h1
          className="mt-8 px-6 py-3 bg-orange-500 rounded-full text-white hover:bg-orange-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm [Your Name]
        </motion.h1>
        <motion.p
          className="mt-8 px-6 py-3 bg-orange-500 rounded-full text-white hover:bg-orange-600"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A Creative Developer & Designer
        </motion.p>
        <motion.a
          href="#projects"
          className="mt-8 px-6 py-3 bg-orange-500 rounded-full text-white hover:bg-orange-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
