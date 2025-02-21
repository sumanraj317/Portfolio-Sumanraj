import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaDatabase, FaFire, FaMicrosoft, FaAws, FaCloud, FaEthereum } from 'react-icons/fa';
import { SiSolidity } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, color: 'text-red-500' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-500' },
  { name: 'React.js', icon: <FaReact />, color: 'text-blue-400' },
  { name: 'MongoDB', icon: <FaDatabase />, color: 'text-green-500' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600' },
  { name: 'Firebase', icon: <FaFire />, color: 'text-orange-500' },
  { name: 'Git', icon: <FaGit />, color: 'text-red-600' },
  { name: '.NET Core MVC', icon: <FaMicrosoft />, color: 'text-blue-700' },
  { name: 'Azure', icon: <FaCloud />, color: 'text-blue-600' }, 
  { name: 'AWS', icon: <FaAws />, color: 'text-orange-400' },
  { name: 'Solidity', icon: <SiSolidity />, color: 'text-gray-500' },
  { name: 'Ethereum', icon: <FaEthereum />, color: 'text-gray-700' },
  { name: 'Smart Contracts', icon: <FaEthereum />, color: 'text-gray-700' }, 
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center items-center">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="w-40 p-4 m-4 bg-white bg-opacity-20 rounded-lg shadow-lg transform transition-transform hover:scale-110 hover:bg-opacity-30"
            >
              <div className={`text-5xl mb-3 ${skill.color}`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;