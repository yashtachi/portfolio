import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <div className="bg-[#2d1b4e] p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-yellow-400">{title}</h3>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400">
            <ExternalLink size={20} />
          </a>
        )}
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-[#1a0f2e] text-yellow-400 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}