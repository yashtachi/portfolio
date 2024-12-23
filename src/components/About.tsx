import React from 'react';
import { Wand2, GraduationCap, Trophy, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-[#1a0f2e]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">The Sorting Hat Speaks</h2>
          <p className="text-xl text-gray-300">A tale of magical achievements and endeavors</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#2d1b4e] p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <GraduationCap className="text-yellow-400 mr-4" size={32} />
              <h3 className="text-2xl font-bold text-white">Magical Education</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li>
                <span className="font-semibold text-yellow-400">Masters in Computer Science</span>
                <p>University of Texas at Arlington, 2023</p>
              </li>
              <li>
                <span className="font-semibold text-yellow-400">Bachelor of Technology</span>
                <p>Computer Science & Engineering</p>
                <p>JNTUH, 2021</p>
              </li>
            </ul>
          </div>

          <div className="bg-[#2d1b4e] p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Briefcase className="text-yellow-400 mr-4" size={32} />
              <h3 className="text-2xl font-bold text-white">Professional Journey</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li>
                <span className="font-semibold text-yellow-400">Graduate Teaching Assistant</span>
                <p>University of Texas at Arlington</p>
                <p>Jan 2023 - May 2023</p>
              </li>
              <li>
                <span className="font-semibold text-yellow-400">Software Engineer Intern</span>
                <p>Infosys</p>
                <p>Jan 2021 - July 2021</p>
              </li>
            </ul>
          </div>

          <div className="bg-[#2d1b4e] p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Trophy className="text-yellow-400 mr-4" size={32} />
              <h3 className="text-2xl font-bold text-white">Achievements</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li>
                <span className="font-semibold text-yellow-400">Research Publications</span>
                <p>Published papers in reputed journals</p>
              </li>
              <li>
                <span className="font-semibold text-yellow-400">Academic Excellence</span>
                <p>Maintained 3.8 GPA throughout Masters</p>
              </li>
            </ul>
          </div>

          <div className="bg-[#2d1b4e] p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Wand2 className="text-yellow-400 mr-4" size={32} />
              <h3 className="text-2xl font-bold text-white">Core Skills</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li>
                <span className="font-semibold text-yellow-400">Languages</span>
                <p>Python, JavaScript, Java, C++</p>
              </li>
              <li>
                <span className="font-semibold text-yellow-400">Technologies</span>
                <p>React, Node.js, MongoDB, SQL</p>
              </li>
              <li>
                <span className="font-semibold text-yellow-400">Tools</span>
                <p>Git, Docker, AWS, Azure</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}