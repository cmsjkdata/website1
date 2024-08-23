// src/components/Header.js
import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <header className={`p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <nav className="flex justify-between">
        <div>Logo</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button onClick={toggleDarkMode} className="ml-4">
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
