import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaDatabase,
  FaFire,
  FaMicrosoft,
  FaAws,
  FaEthereum,
} from "react-icons/fa";
import { SiSolidity, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-red-500", glow: "shadow-red-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500", glow: "shadow-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500", glow: "shadow-yellow-500" },
  { name: "React.js", icon: <FaReact />, color: "text-blue-400", glow: "shadow-blue-400" },
  { name: "MongoDB", icon: <FaDatabase />, color: "text-green-500", glow: "shadow-green-500" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600", glow: "shadow-green-600" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-500", glow: "shadow-gray-500" },
  { name: "Firebase", icon: <FaFire />, color: "text-orange-500", glow: "shadow-orange-500" },
  { name: "Git", icon: <FaGit />, color: "text-red-600", glow: "shadow-red-600" },
  { name: ".NET Core MVC", icon: <FaMicrosoft />, color: "text-blue-700", glow: "shadow-blue-700" },
  { name: "AWS", icon: <FaAws />, color: "text-orange-400", glow: "shadow-orange-400" },
  { name: "Solidity", icon: <SiSolidity />, color: "text-gray-500", glow: "shadow-gray-500" },
  { name: "Ethereum", icon: <FaEthereum />, color: "text-gray-700", glow: "shadow-gray-700" },
  { name: "Smart Contracts", icon: <FaEthereum />, color: "text-gray-700", glow: "shadow-gray-700" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Glow Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-30 blur-3xl"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="container mx-auto px-5 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`p-4 sm:p-5 bg-white bg-opacity-10 rounded-lg shadow-lg transform transition-all hover:scale-110 hover:bg-opacity-30 ${skill.glow} hover:shadow-lg flex flex-col items-center`}
              whileHover={{ scale: 1.1, rotate: [0, 3, -3, 0], transition: { duration: 0.6 } }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 80 }}
              transition={{ duration: 1.5, delay: index * 0.15, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`text-4xl sm:text-5xl mb-2 sm:mb-3 ${skill.color}`}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.4 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
