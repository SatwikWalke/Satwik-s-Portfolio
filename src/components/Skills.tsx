import React from 'react';
import { Code2, Brain, Clock, Users, Lightbulb, MessageSquare } from 'lucide-react';

export default function Skills() {
  const technicalSkills = ['Python', 'HTML', 'CSS', 'JavaScript', 'Java', 'C Programming'];
  const softSkills = ['Time Management', 'Communication Skills', 'Adaptability', 'Fast Learner', 'Leadership Skills', 'Problem Solving'];

  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold">Technical Skills</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="bg-white p-3 rounded shadow">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="text-purple-600" size={24} />
              <h3 className="text-xl font-semibold">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-white p-3 rounded shadow">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}