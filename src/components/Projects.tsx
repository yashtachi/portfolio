import React from 'react';
import { Sparkles } from 'lucide-react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Phishing Detection System",
      description: "Developed an ML model to detect phishing websites using Python and scikit-learn, achieving 97% accuracy.",
      technologies: ["Python", "scikit-learn", "TensorFlow", "Flask"],
    },
    {
      title: "Stock Market Analysis",
      description: "Created a predictive model for stock market analysis using LSTM neural networks.",
      technologies: ["Python", "Keras", "Pandas", "NumPy"],
    },
    {
      title: "Spotify Recommendation System",
      description: "Built a music recommendation system using collaborative filtering and content-based approaches.",
      technologies: ["Python", "Spark", "MongoDB", "Flask"],
    },
    {
      title: "WHAMOS Dashboard",
      description: "Developed a web dashboard for warehouse automation and monitoring system.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-[#2d1b4e]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-yellow-400" size={32} />
            <h2 className="text-4xl font-bold text-yellow-400">Magical Projects</h2>
          </div>
          <p className="text-xl text-gray-300">Spells and enchantments I've crafted</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}