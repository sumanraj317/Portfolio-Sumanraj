import React from 'react';

const WhyChooseMe = () => {
  return (
    <section id="why-choose-me" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Me?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Personalized Attention</h3>
            <p>You’ll work directly with me, ensuring clear communication and a deep understanding of your project’s needs.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Expertise You Can Trust</h3>
            <p>With a strong foundation in HTML, CSS, JavaScript, React.js, Node.js, and more, I bring technical excellence to every task.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Commitment to Quality</h3>
            <p>I treat each project as my own, ensuring every detail is polished and every goal is met.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3">On-Time Delivery</h3>
            <p>I prioritize your time and ensure that projects are delivered within agreed deadlines.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Cost-Effective Solutions</h3>
            <p>As a freelancer, I offer high-quality work at a competitive price, giving you the best value for your investment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseMe;