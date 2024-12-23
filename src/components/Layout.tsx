import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#1a0f2e] text-white">
      <nav className="bg-[#2d1b4e] p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="text-yellow-400" />
            <span className="text-xl font-semibold">Magical Portfolio</span>
          </div>
          <div className="space-x-6">
            <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-yellow-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}