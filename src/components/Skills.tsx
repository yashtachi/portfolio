import React from 'react';
import { Code2, Database, Cloud, Terminal, Wrench, Brain } from 'lucide-react';
import SkillCard from './SkillCard';

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "C++", "SQL", "TypeScript"],
      icon: <Code2 size={24} />,
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Express", "Flask", "Django", "TensorFlow"],
      icon: <Terminal size={24} />,
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
      icon: <Database size={24} />,
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
      icon: <Cloud size={24} />,
    },
    {
      category: "Tools & Utilities",
      skills: ["Git", "Jira", "Postman", "VS Code", "Linux"],
      icon: <Wrench size={24} />,
    },
    {
      category: "Machine Learning",
      skills: ["Neural Networks", "NLP", "Computer Vision", "Deep Learning"],
      icon: <Brain size={24} />,
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-[#1a0f2e]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Magical Arsenal</h2>
          <p className="text-xl text-gray-300">Spells and abilities I've mastered</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCard key={category.category} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}