import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import about from '../assets/about.jpg';

const About = () => {
  return (
    <section id="about" className="container mx-auto my-10 p-5 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-5 text-center text-gray-800">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3">
          <img 
            src={about} 
            alt="Profile" 
            className="rounded-full mx-auto md:mx-0"
          />
        </div>
        <div className="md:w-2/3 mt-5 md:mt-0 md:ml-10 text-center md:text-left">
          <p className="text-lg leading-relaxed text-gray-600">
            Hello! I'm <span className="font-bold text-indigo-600">Suman Raj</span>, a passionate web developer with experience in creating dynamic and responsive web applications. I have a strong background in Full Stack Development and enjoy working with modern technologies like <span className="font-bold text-indigo-600">React</span>, <span className="font-bold text-indigo-600">Node.js</span>, and <span className="font-bold text-indigo-600">Tailwind CSS</span>. I specialize in crafting modern, responsive, and user-friendly web applications that deliver exceptional user experiences and meet business goals.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 mt-4">
            With a keen eye for detail and a commitment to quality, I take pride in delivering projects that are not only technically robust but also visually appealing and optimized for performance. Whether it’s developing a dynamic frontend interface or integrating seamless backend functionality, I bring creativity, precision, and efficiency to every line of code.
          </p>
          
          <p className="text-2xl font-semibold text-black mt-6 leading-9 tracking-wide animate-fade-in delay-200">
  I craft  
  <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 text-transparent bg-clip-text font-extrabold animate-pulse">
    {" "}sleek, secure, and high-performance{" "}
  </span>  
  web solutions with a keen eye for detail. Passionate about  
  <span className="text-purple-500 font-bold drop-shadow-xl transition-all duration-300 hover:scale-110 hover:text-pink-400 animate-bounce-once">
    {" "}AI-driven automation{" "}
  </span>  
  and  
  <span className="text-blue-500 font-bold drop-shadow-xl transition-all duration-300 hover:scale-110 hover:text-cyan-400 animate-bounce-once">
    {" "}blockchain smart contracts{" "}
  </span>  
  for real-world impact.
</p>


          <p className="text-lg leading-relaxed text-gray-600 mt-4">
            I thrive in agile environments, collaborating closely with teams and clients to adapt quickly to changing requirements and ensure timely delivery of high-quality solutions. My expertise extends to working with cutting-edge technologies, problem-solving, and building scalable solutions from the ground up.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 mt-4">
            When you work with me, you can expect:
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed text-gray-600 mt-4 space-y-2">
            <li><span className="font-bold text-indigo-600">Top-notch quality:</span> Code that is clean, maintainable, and aligned with best practices.</li>
            <li><span className="font-bold text-indigo-600">Reliability:</span> Timely delivery of projects with attention to detail.</li>
            <li><span className="font-bold text-indigo-600">Collaboration:</span> Clear communication and a proactive approach to understanding your needs.</li>
          </ul>
          <p className="text-lg leading-relaxed text-gray-600 mt-4">
            I’m always eager to take on new challenges and turn ideas into reality. Let’s build something extraordinary together!
          </p>
          <div className="flex justify-center md:justify-start mt-5">
            <a href="https://linkedin.com/in/suman-raj-r" className="text-blue-500 hover:text-blue-700 mx-2"><FaLinkedin size={30} /></a>
            <a href="https://github.com/sumanraj317/Master-task.git" className="text-gray-800 hover:text-gray-900 mx-2"><FaGithub size={30} /></a>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;