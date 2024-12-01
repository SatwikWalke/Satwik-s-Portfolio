import React from 'react';
import { Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Deepfake Detection Model",
      description: "Developed a Python-based deepfake detection system using the 'Celebsynthesis' dataset, achieving 95% accuracy in identifying manipulated videos through advanced computer vision and neural network techniques.",
      tech: ["Python", "Computer Vision", "Neural Networks"],
    },
    {
      title: "Background Replacement Using Segmentation Mask",
      description: "This Python code performs background replacement using image segmentation with a pre-trained DeepLabV3 model, combining segmented foreground with user-provided backgrounds.",
      tech: ["Python", "OpenCV", "DeepLabV3"],
      github: "https://github.com/SatwikWalke/Background-Replacement-using-Segmentation-Mask"
    },
    {
      title: "Object Detection Using OpenCV Python",
      description: "Utilizes OpenCV's capabilities to identify objects within images or videos, exploring Haar Cascade Classifiers and Deep Learning models for accurate object identification.",
      tech: ["Python", "OpenCV", "Deep Learning"],
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}