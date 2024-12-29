import React from 'react';
import { FaCode, FaLaptopCode, FaMobileAlt, FaCloud, FaDatabase, FaTools, FaHandshake, FaServer, FaCogs, FaMicrosoft } from 'react-icons/fa';

const services = [
  {
    title: "Custom Web Development",
    description: "Building responsive, interactive, and user-friendly websites using HTML, CSS, and JavaScript. Developing custom web applications with modern technologies like React.js and Node.js. Ensuring websites are optimized for performance, accessibility, and SEO.",
    icon: <FaCode />,
    color: 'text-blue-500'
  },
  {
    title: "Frontend Development",
    description: "Designing pixel-perfect, mobile-friendly UI components using React.js and CSS frameworks (e.g., Tailwind CSS). Transforming static designs (Figma, Adobe XD, etc.) into dynamic, functional websites. Implementing animations and transitions for an engaging user experience.",
    icon: <FaLaptopCode />,
    color: 'text-green-500'
  },
  {
    title: "Backend Development",
    description: "Developing secure and scalable server-side applications with Node.js and Express.js. Creating and managing databases with MongoDB for dynamic, data-driven applications. Integrating RESTful APIs for seamless communication between frontend and backend.",
    icon: <FaServer />,
    color: 'text-purple-500'
  },
  {
    title: "Full-Stack Web Development",
    description: "Crafting end-to-end solutions by integrating React.js on the frontend and Node.js/Express.js on the backend. Building complete CRUD (Create, Read, Update, Delete) applications with user authentication and authorization. Implementing real-time functionality using WebSockets.",
    icon: <FaCogs />,
    color: 'text-indigo-500'
  },
  {
    title: "Web Application Development",
    description: "Designing and developing Single Page Applications (SPAs) with React.js for enhanced performance and interactivity. Building scalable and maintainable web apps using best practices in frontend and backend development.",
    icon: <FaMobileAlt />,
    color: 'text-yellow-500'
  },
  {
    title: ".NET Core MVC Development",
    description: "Building dynamic and robust web applications using the .NET Core MVC framework. Creating clean, modular, and scalable architectures for enterprise-level projects. Integrating third-party services and APIs into .NET Core projects.",
    icon: <FaMicrosoft />,
    color: 'text-red-500'
  },
  {
    title: "API Integration and Development",
    description: "Developing RESTful APIs to power your web applications using Node.js or .NET Core MVC. Connecting third-party APIs like payment gateways, social logins, and data providers to your app. Optimizing API performance for fast and reliable data exchange.",
    icon: <FaCloud />,
    color: 'text-orange-500'
  },
  {
    title: "Database Management",
    description: "Designing and maintaining databases with MongoDB for efficient data storage and retrieval. Writing optimized queries to ensure fast performance and scalability. Implementing data security and backup solutions.",
    icon: <FaDatabase />,
    color: 'text-teal-500'
  },
  {
    title: "Website Maintenance and Support",
    description: "Providing ongoing support for bug fixes, feature enhancements, and performance improvements. Updating and maintaining existing web applications to keep them secure and up-to-date.",
    icon: <FaTools />,
    color: 'text-pink-500'
  },
  {
    title: "Agile Development Collaboration",
    description: "Working in agile teams to deliver quality projects on time. Participating in sprint planning, code reviews, and daily stand-ups to ensure project success.",
    icon: <FaHandshake />,
    color: 'text-blue-600'
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold mb-12 text-center">Services I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className={`text-5xl mb-4 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;