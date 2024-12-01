import React from 'react';

export default function Hero() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3">
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -rotate-6"></div>
            <img
              src="My_pic.jpg"
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white"
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-4xl font-bold mb-4">AI & ML Specialist</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A committed computer science student specializing in AI and ML, with expertise in HTML, CSS, Python,
            JavaScript, Java, and C. Passionate about applying cutting-edge technology to real-world scenarios,
            delivering clean code, and fostering collaborative teamwork.
          </p>
        </div>
      </div>
    </section>
  );
}