import "./App.css";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import bgImage from "./assets/images/bg.png";
import bgImage2 from "./assets/images/bg2.png";
import rock1 from "./assets/images/rock1.png";
import dragon_1 from "./assets/images/Android.jpg";
import dragon_2 from "./assets/images/mui.jpg";
import dragon_3 from "./assets/images/react.png";
import dragon_4 from "./assets/images/redux.png";
import dragon_5 from "./assets/images/tailwind.png";
import dragon_6 from "./assets/images/express.png";
import dragon_7 from "./assets/images/socket.png";

import git_pic from "./assets/images/git_pic.png";

import { motion } from "framer-motion";

function App() {
  return (
    <div className="  text-white source-code-pro-1 bg-black">
      <div className="p-8    flex justify-between ">
        <div className="mt-8 border-spacing-2 p-4 gap-2 md:flex border-emerald-600 border-2  ">
          <div className="border-spacing-2 md:inline-block border-emerald-600 border-2 my-3  p-3">
            <a href="#projects">
              <h2 className="text-2xl   text-red-500 ">{"<projects/>"}</h2>
            </a>
          </div>
          <div className="border-spacing-2 md:inline-block border-emerald-600 border-2 my-3  p-3">
            <a href="#about_me">
              <h2 className="text-2xl  text-red-500 ">{"<about_me/>"}</h2>
            </a>
          </div>
          <div className="border-spacing-2 md:inline-block border-emerald-600 border-2 my-3  p-3">
            <a href="#skills">
              <h2 className="text-2xl  text-red-500 ">{"<skills/>"}</h2>
            </a>
          </div>
          <div className="border-spacing-2 md:inline-block border-emerald-600 border-2 my-3  p-3">
            <a href="#about_me">
              <h2 className="text-2xl  text-red-500 ">{"<about_me/>"}</h2>
            </a>
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
        className=" p-8   "
        style={{
          // backgroundImage: `url(${git_pic})`,
          // backgroundSize: "cover",
          // backgroundPosition: " fixed",
          width: "100%",
        }}
      >
        <div className="relative border-spacing-2  px-5 py-10 border-emerald-600 border-2   text-3xl  z-10 flex  flex-col items-center justify-center h-full text-center text-white">
          <motion.h1
            className=" px-6 py-1   "
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="border-spacing-2 flex flex-col justify-center items-center border-emerald-600 border-2   p-3">
              <img
                className="w-36 h-36 p-0.5 rounded-full ring-2 transition ease-out duration-300 transform hover:scale-110 ring-emerald-600 dark:ring-emerald-800"
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
                alt="Bordered avatar"
              />

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
          <div className="text-blue-500 border-spacing-2 my-2   inline-block border-emerald-600 border-2  p-4">
            <img src={git_pic} />
          </div>
        </div>
      </section>
      <div className="banner">
        <div className="product">
          <div className="soda" style={{ "--url": `url(${bgImage})` }}></div>
          <div className="soda" style={{ "--url": `url(${bgImage2})` }}></div>
        </div>

        <div className="rock">
          <img src={rock1} alt="Rock Image" />
        </div>
      </div>
      <section id="projects">
        <div
          style={{
            // backgroundImage: `url("/img/Leonardo_Phoenix_Create_an_image_of_a_confident_young_boy_stan_3.jpg")`,
            // backgroundSize: "cover",
            backgroundPosition: " fixed",
            width: "100%",
            // height: "100vh",
          }}
          className="p-8 "
        >
          <div className="mt-8  bg-black border-spacing-2 p-4 border-emerald-600 border-2  ">
            <div className="border-spacing-2 inline-block border-emerald-600 border-2 my-3  p-3">
              <h2 className="text-4xl  text-red-500 ">{"<projects>"}</h2>
            </div>
            <div className="external">
              <ul className=" pb-40" id="cards">
                <li class="card" id="card_1">
                  {" "}
                  <div className="grid  shadow-2xl border-emerald-600 border-2 shadow-zinc-800  bg-zinc-900 rounded-2xl grid-cols-2 gap-8">
                    <div className="project-card  border-spacing-2   p-4  ">
                      <h3 className="text-2xl  text-red-600 ">{"<project_one>"}</h3>
                      <p className="mt-2">
                        Description asdfgsdfsd adsf asdfas dfsd fsdf sadfsad fasdf asdfa sdfasdf
                        asdfasdfadfasdfasd fsadf asdfasd fasdf asdf sffad f of project one.
                      </p>
                      <a href="#">
                        <div className="text-blue-500 border-spacing-2 my-2   inline-block border-emerald-600 border-2  p-4">
                          {"View Project() => "}
                        </div>
                      </a>
                      <h3 className="text-2xl  text-red-600 ">{"</project_one>"}</h3>
                    </div>
                    <div className="  flex justify-center items-center  p-4   ">
                      <div className="border-spacing-2  p-4   border-emerald-600 border-2  rounded-2xl ">
                        <img src={git_pic} />
                      </div>
                    </div>
                  </div>
                </li>
                <li class="card" id="card_1">
                  {" "}
                  <div className="grid  shadow-2xl border-emerald-600 border-2 shadow-zinc-800  bg-zinc-900 rounded-2xl grid-cols-2 gap-8">
                    <div className="project-card  border-spacing-2   p-4  ">
                      <h3 className="text-2xl  text-red-600 ">{"<project_one>"}</h3>
                      <p className="mt-2">
                        Description asdfgsdfsd adsf asdfas dfsd fsdf sadfsad fasdf asdfa sdfasdf
                        asdfasdfadfasdfasd fsadf asdfasd fasdf asdf sffad f of project one.
                      </p>
                      <a href="#">
                        <div className="text-blue-500 border-spacing-2 my-2   inline-block border-emerald-600 border-2  p-4">
                          {"View Project() => "}
                        </div>
                      </a>
                      <h3 className="text-2xl  text-red-600 ">{"</project_one>"}</h3>
                    </div>
                    <div className="  flex justify-center items-center  p-4   ">
                      <div className="border-spacing-2  p-4   border-emerald-600 border-2  rounded-2xl ">
                        <img src={git_pic} />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border-spacing-2 inline-block border-emerald-600 border-2 my-3  p-3">
              <h2 className="text-4xl  text-red-500 ">{"<projects/>"}</h2>
            </div>
          </div>
        </div>
      </section>
      <div className="banner2">
        <div className="slider" style={{ "--quantity": 10 }}>
          <div className="item" style={{ "--position": 1 }}>
            <img src={dragon_1} alt="" />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src={dragon_2} alt="" />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src={dragon_3} alt="" />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img src={dragon_4} alt="" />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img src={dragon_5} alt="" />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img src={dragon_6} alt="" />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img src={dragon_7} alt="" />
          </div>
        </div>
        <div className="content">
          <div className="model"></div>
        </div>
      </div>

      <section id="skills">
        <div className="p-8  ">
          <div className="mt-8 bg-black border-spacing-2 p-4 border-emerald-600 border-2  ">
            <div className="border-spacing-2 inline-block border-emerald-600 border-2 my-3  p-3">
              <h2 className="text-4xl  text-red-500 ">{"<skills/>"}</h2>
            </div>
            <div className=" flex flex-col   gap-3 ">
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
            <div className="border-spacing-2 inline-block border-emerald-600 border-2 my-3  p-3">
              <h2 className="text-4xl  text-red-500 ">{"<skills/>"}</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="about_me">
        <div className="p-8 ">
          <div className="mt-8 border-spacing-2 p-4 border-emerald-600 border-2  ">
            <div className="border-spacing-2 inline-block border-emerald-600 border-2 my-3  p-3">
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
              <a href="/path-to-your-resume.pdf" download>
                <div className="text-blue-500 border-spacing-2 my-2   shadow-sm hover:shadow-md shadow-white  inline-block border-emerald-600 border-2  p-4">
                  {"     download_my_resume() => "}
                </div>
              </a>
            </div>

            <div className="border-spacing-2 inline-block border-emerald-600 border-2 my-3  p-3">
              <h2 className="text-4xl  text-red-500 ">{"</about_me>"}</h2>
            </div>
          </div>
        </div>
      </section>

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
