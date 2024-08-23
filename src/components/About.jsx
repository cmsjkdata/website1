// src/components/About.js
import React from "react";

const About = () => {
  return (
    <section id="about" className="p-8 bg-gray-100 text-gray-900">
      <h2 className="text-2xl font-bold">About Me</h2>
      <div className="mt-4 max-w-3xl mx-auto">
        <p className="mb-4">
          Hello! I’m [Your Name], xfg a passionate developer and event manager with over [X] years
          of experience in creating dynamic web applications and organizing memorable events. My
          journey began with a fascination for coding and has expanded to include a deep expertise
          in event planning through my role at Mella.
        </p>
        <p className="mb-4">
          In the world of web development, I specialize in React, JavaScript, and CSS, crafting
          responsive and engaging user interfaces. I enjoy tackling complex problems and delivering
          seamless user experiences. Outside of coding, I lead Mella’s event management efforts,
          where we’ve been organizing community-centric events and festivals since 1991.
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
          At Mella, I oversee all aspects of event planning, from conceptualization to execution. My
          experience includes organizing large-scale festivals, community events, and corporate
          functions. I work closely with local vendors, manage event logistics, and ensure every
          detail aligns with our vision.
        </p>
        <h3 className="text-xl font-semibold mt-6">Personal Interests</h3>
        <p className="mt-2">
          When I’m not coding or managing events, I enjoy exploring new technologies, participating
          in hackathons, and contributing to open-source projects. I’m also passionate about
          mentoring budding developers and sharing insights on event management.
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
  );
};

export default About;
