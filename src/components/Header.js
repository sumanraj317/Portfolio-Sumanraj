import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-3xl bg-gradient-to-r from-purple-800/20 via-indigo-700/15 to-blue-500/20 text-white py-4 shadow-lg transition-all duration-500 border-b border-gray-300/10">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-8">
        
        <h1 className="text-4xl font-extrabold tracking-wider drop-shadow-lg animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
          Hello
        </h1>

       
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-lg font-medium">
            {["About", "Skills", "Projects", "Services", "Why Me?", "Contact"].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative group transition duration-300 hover:text-yellow-300"
                >
                  {item}
                  <span className="absolute left-1/2 -bottom-1 w-0 h-1 bg-yellow-300 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-80 backdrop-blur-lg py-5 transition-all duration-500">
          <ul className="flex flex-col items-center space-y-4 text-lg font-medium">
            {["About", "Skills", "Projects", "Services", "Why Me?", "Contact"].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="transition duration-300 hover:text-yellow-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
