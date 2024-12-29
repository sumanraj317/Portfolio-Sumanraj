
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 sticky top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold animate-bounce">
          <span role="img" aria-label="wave">👋</span> Welcome!
        </h1>
        <nav>
          <ul className="flex space-x-4">
            
            <li><a href="#about" className="hover:text-gray-200 transition-colors duration-300"><span role="img" aria-label="person">👤</span> About</a></li>
            <li><a href="#skills" className="hover:text-gray-200 transition-colors duration-300"><span role="img" aria-label="tools">🛠</span> Skills</a></li>
            <li><a href="#projects" className="hover:text-gray-200 transition-colors duration-300"><span role="img" aria-label="project">📁</span> Projects</a></li>
            <li><a href="#services" className="hover:text-gray-200 transition-colors duration-300"><span role="img" aria-label="service">💼</span> Services</a></li>
            <li><a href="#why-choose-me" className="hover:text-gray-200 transition-colors duration-300"><span role="img" aria-label="question">❓</span> Why Choose Me</a></li>
            <li><a href="#select-me" className="hover:text-gray-200 transition-colors duration-300"><span role="img" aria-label="select">✅</span> Select Me</a></li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;