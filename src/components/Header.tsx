import React from 'react';
import { FileDown } from 'lucide-react';

export default function Header() {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/18ezNcxqnOoKnM8HHMZmJ089Nf6eaU1Bv/view?usp=sharing', '_blank');
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#1a0f2e]/90 backdrop-blur-sm z-50 py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <nav className="space-x-6">
          <a href="#about" className="text-white hover:text-yellow-400 transition-colors">About</a>
          <a href="#projects" className="text-white hover:text-yellow-400 transition-colors">Projects</a>
          <a href="#skills" className="text-white hover:text-yellow-400 transition-colors">Skills</a>
          <button
            onClick={scrollToContact}
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Contact
          </button>
        </nav>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-[#1a0f2e] rounded-lg hover:bg-yellow-300 transition-colors"
        >
          <FileDown size={20} />
          Download Resume
        </button>
      </div>
    </header>
  );
}