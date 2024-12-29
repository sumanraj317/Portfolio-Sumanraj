import React from 'react';

const SelectMe = () => {
  return (
    <section id="select-me" className="py-20 bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 text-white">
      <div className="container mx-auto px-5 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Ideas into Vision?</h2>
        <p className="text-xl mb-8">
          Let's work together to create something amazing. Whether you need a custom web application, a responsive website, or ongoing support, I'm here to help.
        </p>
        <p className="text-lg mb-8">
          <strong>Contact me at:</strong> <a href="mailto:sumanraj.code@gmail.com" className="underline hover:text-yellow-300">sumanraj.code@gmail.com</a>
        </p>
        <a 
          href="#contact" 
          className="bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default SelectMe;