import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Task-Master",
    description: "Task Master is a full-stack web application designed for efficient task management, allowing users to create, update, delete, and track tasks seamlessly. Built using HTML, CSS, React.js, and Tailwind CSS for the frontend, and Node.js, Express.js, and MongoDB for the backend, the app ensures responsive design, secure authentication, and smooth functionality. It integrates RESTful APIs (auth.js, tasks.js) for backend communication, employs Git for version control, and utilizes basic hosting and deployment techniques for making the application accessible.",
    link: "https://github.com/sumanraj317/Master-task.git"
  },
  {
    title: "Job-Portal",
    description: "JobPortal is a web application built with React.js and powered by Firebase, designed to connect job seekers with employers. The app provides features like job listings, user authentication, and application tracking, leveraging Firebase services for real-time database management, secure authentication, and hosting. Its responsive design ensures seamless usability across devices, making it an efficient platform for job search and recruitment.",
    link: "https://github.com/sumanraj317/advanced-jobpplication.git"
  },
  {
    title: "BookIt",
    description: "BookIt is a dynamic web application built using HTML, CSS, and JavaScript, designed to simplify the booking process for users. The app provides a seamless and interactive interface for browsing and booking services, ensuring a user-friendly experience. JavaScript is utilized for DOM manipulation and creating responsive, interactive features, while CSS ensures a visually appealing design.",
    link: "https://github.com/sumanraj317/bookit-app.git"
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white text-gray-800 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-5">{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-300">
                  <FaGithub className="mr-2" /> View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;