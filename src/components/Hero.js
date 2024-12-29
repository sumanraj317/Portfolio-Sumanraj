import React from 'react';
import bg1 from '../assets/bg1.png'; 

const Hero = () => {
  return (
    <section 
      className="relative h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start pl-10">
        <div className="text-left text-white px-5 max-w-lg animate-fade-in">
          <h1 className="text-6xl font-bold mb-4 text-indigo-400 animate-pulse">
            Welcome to <span className="text-yellow-300">My Portfolio</span>
          </h1>
          <p className="text-xl mb-8 text-gray-200 animate-slide-in">
            I'm <span className="text-teal-300">Suman Raj</span>, a passionate Full Stack Developer. I love creating dynamic and responsive web applications using modern technologies.
          </p>
          <a 
            href="#about" 
            className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 hover:scale-105 transform transition duration-300"
          >
            Learn More About Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
