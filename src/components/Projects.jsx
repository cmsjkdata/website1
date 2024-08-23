// src/components/Projects.js
import React from "react";

const Projects = () => {
  return (
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
  );
};

export default Projects;
