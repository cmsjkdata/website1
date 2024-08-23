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
      https://www.hover.dev/components
      <Hero />
      <Projects />
      <div className="p-8 bg-white text-gray-900">
        <h2 className="text-7xl font-bold">Projects</h2>
        <div className="mt-8 grid border-spacing-2 p-4 border-emerald-600 border-2 grid-cols-1 md:grid-cols-2 gap-8">
          <div className="project-card  border-spacing-2 border-emerald-600 border-2  p-4 bg-gray-700 rounded-lg">
            <h3 className="text-2xl">Project One</h3>
            <p className="mt-2">Description of project one.</p>
            <a href="#" className=" text-blue-500">
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
      <Blog />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
