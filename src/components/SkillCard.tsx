import React from 'react';
import { Wand2 } from 'lucide-react';

interface SkillCardProps {
  category: string;
  skills: string[];
  icon?: React.ReactNode;
}

export default function SkillCard({ category, skills, icon = <Wand2 /> }: SkillCardProps) {
  return (
    <div className="bg-[#2d1b4e] p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-yellow-400">{icon}</span>
        <h3 className="text-xl font-bold text-white">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-3 py-1 bg-[#1a0f2e] text-yellow-400 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}