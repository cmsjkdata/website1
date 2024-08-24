import "./App.css";
// https://www.hover.dev/components
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

import { motion } from "framer-motion";

function App() {
  return (
    <div className=" text-white source-code-pro-1 bg-black">
      <div className="p-8 flex justify-between ">
        <div className="mt-8 border-spacing-2 p-4 gap-2 md:flex border-emerald-600 border-2  ">
          <div className="border-spacing-2 md:inline-block border-emerald-600 border-2 my-3  p-3">
            <h2 className="text-2xl   text-red-500 ">{"<projects/>"}</h2>
          </div>
          <div className="border-spacing-2 md:inline-block border-emerald-600 border-2 my-3  p-3">
            <h2 className="text-2xl  text-red-500 ">{"<about_me/>"}</h2>
          </div>
          <div className="border-spacing-2 md:inline-block border-emerald-600 border-2 my-3  p-3">
            <h2 className="text-2xl  text-red-500 ">{"<skills/>"}</h2>
          </div>
          <div className="border-spacing-2 md:inline-block border-emerald-600 border-2 my-3  p-3">
            <h2 className="text-2xl  text-red-500 ">{"<about_me/>"}</h2>
          </div>
        </div>
        <div className="mt-8 border-spacing-2 p-4 gap-2 md:flex border-emerald-600 border-2  ">
          <div className="border-spacing-2 md:inline-block border-emerald-600 border-2 my-3  p-3">
            <h2 className="text-2xl   text-red-500 ">{<FaGithub />}</h2>
          </div>
          <div className="border-spacing-2 md:inline-block border-emerald-600 border-2 my-3  p-3">
            <h2 className="text-2xl   text-red-500 ">{<CiLinkedin />}</h2>
          </div>
        </div>
      </div>
      <section
        className="relative p-8 h-screen bg-cover bg-center"
        style={{
          // backgroundImage: `url("/img/Leonardo_Phoenix_Create_an_image_of_a_confident_young_boy_stan_3.jpg")`,
          // backgroundSize: "cover",
          backgroundPosition: " fixed",
          width: "100%",
          height: "50vh",
        }}
      >
        <div className="relative border-spacing-2 border-emerald-600 border-2   text-3xl  z-10 flex  flex-col items-center justify-center h-full text-center text-white">
          <motion.h1
            className=" px-6 py-1   "
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="border-spacing-2 border-emerald-600 border-2   p-3">
              <h2 className="text-2xl  text-red-500 ">
                {"<Hi, i'm [https://github.com/G-ourav]>"}
              </h2>
            </div>
          </motion.h1>
          <motion.p
            className="mt-8 px-6  "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            a software developer & designer
          </motion.p>
          <motion.a
            href="#projects"
            className="mt-8 px-6 "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a href="#">
              <div className="text-blue-500 border-spacing-2 my-2   inline-block border-emerald-600 border-2  p-4">
                {"view my work() => "}
              </div>
            </a>
          </motion.a>
        </div>
      </section>
      <div className="p-8 ">
        <div className="mt-8 border-spacing-2 p-4 border-emerald-600 border-2  ">
          <div className="border-spacing-2 border-emerald-600 border-2 my-3  p-3">
            <h2 className="text-4xl  text-red-500 ">{"<projects>"}</h2>
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-8">
            <div className="project-card  border-spacing-2 border-emerald-600 border-2  p-4  ">
              <h3 className="text-2xl">{"<project_one>"}</h3>
              <p className="mt-2">Description of project one.</p>
              <a href="#">
                <div className="text-blue-500 border-spacing-2 my-2   inline-block border-emerald-600 border-2  p-4">
                  {"View Project() => "}
                </div>
              </a>
              <h3 className="text-2xl">{"<project_one/>"}</h3>
            </div>
            <div className="project-card  border-spacing-2 border-emerald-600 border-2  p-4  ">
              <h3 className="text-xl">{"<project_two/>"}</h3>
              <p className="mt-2">Description of project two.</p>
              <a href="#">
                <div className="text-blue-500 border-spacing-2 my-2   inline-block border-emerald-600 border-2  p-4">
                  {"View Project() => "}
                </div>
              </a>
              <h3 className="text-xl">{"<project_two/>"}</h3>
            </div>
          </div>
          <div className="border-spacing-2 border-emerald-600 border-2 my-3  p-3">
            <h2 className="text-4xl  text-red-500 ">{"<projects/>"}</h2>
          </div>
        </div>
      </div>
      <div className="p-8 ">
        <div className="mt-8 border-spacing-2 p-4 border-emerald-600 border-2  ">
          <div className="border-spacing-2 border-emerald-600 border-2 my-3  p-3">
            <h2 className="text-4xl  text-red-500 ">{"<about_me>"}</h2>
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-8">
            <div className="project-card  border-spacing-2 border-emerald-600 border-2  p-4  ">
              <p className="mb-4">
                Hello! I’m [Your Name], a passionate developer and event manager with over [X] years
                of experience in creating dynamic web applications and organizing memorable events.
                My journey began with a fascination for coding and has expanded to include a deep
                expertise in event planning through my role at Mella.
              </p>
            </div>
            <div className="project-card  border-spacing-2 border-emerald-600 border-2  p-4  ">
              <p className="mb-4">
                In the world of web development, I specialize in React, JavaScript, and CSS,
                crafting responsive and engaging user interfaces. I enjoy tackling complex problems
                and delivering seamless user experiences. Outside of coding, I lead Mella’s event
                management efforts, where we’ve been organizing community-centric events and
                festivals since 1991.
              </p>
            </div>
          </div>
          <div className="border-spacing-2 border-emerald-600 border-2 my-3  p-3">
            <h2 className="text-4xl  text-red-500 ">{"<about_me/>"}</h2>
          </div>
        </div>
      </div>
      <div className="p-8 ">
        <div className="mt-8 border-spacing-2 p-4 border-emerald-600 border-2  ">
          <div className="border-spacing-2 border-emerald-600 border-2 my-3  p-3">
            <h2 className="text-4xl  text-red-500 ">{"<skills/>"}</h2>
          </div>
          <div className=" flex flex-col gap-3 ">
            <div className=" border-spacing-2  inline-block border-emerald-600 border-2  p-4  ">
              <h3 className="text-2xl">{"<react_js>"}</h3>
            </div>
            <div className=" border-spacing-2  inline-block border-emerald-600 border-2  p-4  ">
              <h3 className="text-2xl">{"<JavaScript>"}</h3>
            </div>
            <div className=" border-spacing-2  inline-block border-emerald-600 border-2  p-4  ">
              <h3 className="text-2xl">{"<HTML>"}</h3>
            </div>
            <div className=" border-spacing-2  inline-block border-emerald-600 border-2  p-4  ">
              <h3 className="text-2xl">{"<CSS>"}</h3>
            </div>
          </div>
          <div className="border-spacing-2 border-emerald-600 border-2 my-3  p-3">
            <h2 className="text-4xl  text-red-500 ">{"<skills/>"}</h2>
          </div>
        </div>
      </div>
      <div className="p-8 ">
        <div className="mt-8 border-spacing-2 p-4 border-emerald-600 border-2  ">
          <div className="border-spacing-2 border-emerald-600 border-2 my-3  p-3">
            <h2 className="text-4xl  text-red-500 ">{"<about_me>"}</h2>
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-8">
            <div className="project-card  border-spacing-2 border-emerald-600 border-2  p-4  ">
              <div className="border-spacing-2 border-emerald-600 border-2 my-3  p-3">
                <h2 className="text-2xl  text-red-500 ">{"<experience>"}</h2>
              </div>
              <p className="mt-2">
                {
                  "{/* At Mella, I oversee all aspects of event planning, from conceptualization to execution. My experience includes organizing large-scale festivals, community events, and corporate functions. I work closely with local vendors, manage event   logistics, and ensure every detail aligns with our vision. */}"
                }
              </p>
              <div className="border-spacing-2 border-emerald-600 border-2 my-3  p-3">
                <h2 className="text-2xl  text-red-500 ">{"</experience>"}</h2>
              </div>
            </div>
            <div className="project-card  border-spacing-2 border-emerald-600 border-2  p-4  ">
              <div className="border-spacing-2 border-emerald-600 border-2 my-1  p-3">
                <h2 className="text-2xl  text-red-500 ">{"<personal_interests>"}</h2>
              </div>
              <p className="mt-2">
                {
                  "{/* When I’m not coding or managing events, I enjoy exploring new technologies, participating in hackathons, and contributing to open-source projects. I’m also                passionate about mentoring budding developers and sharing insights on event management. */}"
                }
              </p>
              <div className="border-spacing-2 border-emerald-600 border-2 my-1  p-3">
                <h2 className="text-2xl  text-red-500 ">{"</personal_interests>"}</h2>
              </div>
            </div>
          </div>
          <a href="/path-to-your-resume.pdf" download>
            <div className="text-blue-500 border-spacing-2 my-2   shadow-sm hover:shadow-md shadow-white  inline-block border-emerald-600 border-2  p-4">
              {"     download_my_resume() => "}
            </div>
          </a>

          <div className="border-spacing-2 border-emerald-600 border-2 my-3  p-3">
            <h2 className="text-4xl  text-red-500 ">{"</about_me>"}</h2>
          </div>
        </div>
      </div>

      <footer className=" px-8 py-2 text-center">
        <div className="border-spacing-2 border-emerald-600 border-2 my-3  p-3">
          <p className="text-xl  text-red-500 ">
            &copy; {"</2024 [https://github.com/G-ourav]. All rights reserved>."}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
