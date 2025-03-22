import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Task-Master",
    description: "A full-stack task management app with seamless CRUD operations, secure authentication, and a responsive UI. Built with React, Node.js, Express, and MongoDB.",
    link: "https://github.com/sumanraj317/Master-task.git"
  },
  {
    title: "Job-Portal",
    description: "A job-seeking platform using React.js and Firebase, enabling job listings, authentication, and real-time application tracking.",
    link: "https://github.com/sumanraj317/advanced-jobpplication.git"
  },
  {
    title: "BookIt",
    description: "An intuitive booking app built with HTML, CSS, and JavaScript, offering a seamless UI for browsing and booking services.",
    link: "https://github.com/sumanraj317/bookit-app.git"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-16 tracking-wide drop-shadow-lg">
          My Projects 🚀
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-blue-500/10 rounded-2xl opacity-50"></div>
              <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-md">{project.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-5">{project.description}</p>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-indigo-300 hover:text-indigo-500 transition-colors duration-300 font-semibold"
                >
                  <FaGithub className="mr-2 text-2xl" /> View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
