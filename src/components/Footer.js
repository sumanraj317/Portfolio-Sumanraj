import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left">&copy; 2025 Suman Raj. All rights reserved.</p>
        <div className="flex justify-center md:justify-end mt-4 md:mt-0">
          <a href="https://linkedin.com/in/suman-raj-r" className="text-blue-500 hover:text-blue-700 mx-2"><FaLinkedin size={24} /></a>
          <a href="https://github.com/sumanraj317/Master-task.git" className="text-gray-400 hover:text-gray-600 mx-2"><FaGithub size={24} /></a>
          <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600 mx-2"><FaTwitter size={24} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;