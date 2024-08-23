import "./App.css";
import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

function App() {
  return (
    <div className=" text-orange-200  bg-slate-950">
      <Header />
      <Hero />
      <About />
      <Projects />
      <div className="p-8 bg-white text-gray-900">
        <h2 className="text-7xl font-bold">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="project-card p-4 bg-gray-100 rounded-lg">
            <h3 className="text-2xl">Project One</h3>
            <p className="mt-2">Description of project one.</p>
            <a href="#" className="text-blue-500">
              View Project
            </a>
          </div>
          <div className="project-card p-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl">Project Two</h3>
            <p className="mt-2">Description of project two.</p>
            <a href="#" className="text-blue-500">
              View Project
            </a>
          </div>
        </div>
      </div>
      <Contact />

      <section id="about" className="p-8 bg-gray-100 text-gray-900">
        <h2 className="text-2xl font-bold">About Me</h2>
        <div className="mt-4 max-w-3xl mx-auto">
          <p className="mb-4">
            Hello! I’m [Your Name], a passionate developer and event manager with over [X] years of
            experience in creating dynamic web applications and organizing memorable events. My
            journey began with a fascination for coding and has expanded to include a deep expertise
            in event planning through my role at Mella.
          </p>
          <p className="mb-4">
            In the world of web development, I specialize in React, JavaScript, and CSS, crafting
            responsive and engaging user interfaces. I enjoy tackling complex problems and
            delivering seamless user experiences. Outside of coding, I lead Mella’s event management
            efforts, where we’ve been organizing community-centric events and festivals since 1991.
          </p>
          <h3 className="text-xl font-semibold mt-6">Skills & Expertise</h3>
          <ul className="list-disc list-inside mt-2">
            <li>
              🌟 <strong>Web Development:</strong> React, JavaScript, HTML, CSS
            </li>
            <li>
              🔧 <strong>Event Management:</strong> Planning, Coordination, Vendor Management
            </li>
            <li>
              💡 <strong>UI/UX Design:</strong> Responsive Design, User Experience Optimization
            </li>
            <li>
              📈 <strong>Project Management:</strong> Budgeting, Scheduling, Team Collaboration
            </li>
          </ul>
          <h3 className="text-xl font-semibold mt-6">Experience</h3>
          <p className="mt-2">
            At Mella, I oversee all aspects of event planning, from conceptualization to execution.
            My experience includes organizing large-scale festivals, community events, and corporate
            functions. I work closely with local vendors, manage event logistics, and ensure every
            detail aligns with our vision.
          </p>
          <h3 className="text-xl font-semibold mt-6">Personal Interests</h3>
          <p className="mt-2">
            When I’m not coding or managing events, I enjoy exploring new technologies,
            participating in hackathons, and contributing to open-source projects. I’m also
            passionate about mentoring budding developers and sharing insights on event management.
          </p>
          <div className="mt-6">
            <a
              href="/path-to-your-resume.pdf"
              className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              download
            >
              Download My Resume
            </a>
          </div>
        </div>
      </section>
      <Blog />
      <section id="blog" className="p-8 text-gray-100 bg-gray-900">
        <h2 className="text-2xl font-bold text-center">Blog</h2>
        <div className="mt-8 max-w-3xl mx-auto">
          {/* Blog Post 1 */}
          <article className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
              src="/path-to-your-image1.jpg"
              alt="Blog Post 1"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Understanding React Hooks</h3>
            <p className="mt-2">
              Dive deep into the world of React Hooks and learn how they simplify state management
              and side effects in functional components.
            </p>
            <a href="/blog/react-hooks" className="text-blue-400 hover:underline">
              Read More
            </a>
          </article>

          {/* Blog Post 2 */}
          <article className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
              src="/path-to-your-image2.jpg"
              alt="Blog Post 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">CSS Grid vs Flexbox</h3>
            <p className="mt-2">
              Explore the differences between CSS Grid and Flexbox, and understand when to use each
              for responsive design and layout.
            </p>
            <a href="/blog/css-grid-vs-flexbox" className="text-blue-400 hover:underline">
              Read More
            </a>
          </article>

          {/* Blog Post 3 */}
          <article className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
              src="/path-to-your-image3.jpg"
              alt="Blog Post 3"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Introduction to TypeScript</h3>
            <p className="mt-2">
              Discover the benefits of using TypeScript in your JavaScript projects and how it can
              improve your development workflow.
            </p>
            <a href="/blog/introduction-to-typescript" className="text-blue-400 hover:underline">
              Read More
            </a>
          </article>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
