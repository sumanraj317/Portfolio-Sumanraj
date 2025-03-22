import React from 'react';
import bg1 from '../assets/bg1.png';

const Hero = () => {
  return (
    <section 
      className="relative h-screen bg-cover bg-center flex items-center justify-center md:justify-start px-6 md:px-10" 
      style={{ backgroundImage: `url(${bg1})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-3xl text-white text-center md:text-left animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-cyan-400 drop-shadow-lg animate-glow">
          Welcome to <span className="text-yellow-300">My Portfolio</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-300 animate-slide-in leading-relaxed">
          I'm <span className="text-purple-400 font-semibold">Suman Raj</span>, a MERN Stack Developer <br className="hidden sm:block"/> 
          with a passion for <span className="text-teal-300">Blockchain Technology</span>. <br className="hidden sm:block"/>
          Creating decentralized and futuristic web applications.
        </p>
        <a 
          href="#about" 
          className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 hover:shadow-indigo-500 transform transition duration-300"
        >
          Learn More About Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
