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
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li>
                <span className="font-semibold text-yellow-400">B.Tech - Computer Science & Engineering</span>
                <p>Marri Laxman Reddy Institute of Technology and Management</p>
                <p>8.88 CGPA (Dec 2021 – Present)</p>
              </li>
              <li>
                <span className="font-semibold text-yellow-400">Higher Secondary - Science with Maths</span>
                <p>Bhagyaradhi Junior College</p>
                <p>98.4% (2019 – 2021)</p>
              </li>
              <li>
                <span className="font-semibold text-yellow-400">Secondary School Certificate</span>
                <p>Geetanjali Talent High School</p>
                <p>9.5 GPA (2018 – 2019)</p>
              </li>
            </ul>
          </div>

          <div className="bg-[#2d1b4e] p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Briefcase className="text-yellow-400 mr-4" size={32} />
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li>
                <span className="font-semibold text-yellow-400">Data Structures and Algorithms</span>
                <p>Certificate earned from Smart Interviews.</p>
              </li>
              <li>
                <span className="font-semibold text-yellow-400">Cisco Cyber Security Certificate</span>
                <p>Certified in essential cyber security practices.</p>
              </li>
              <li>
                <span className="font-semibold text-yellow-400">Mentorship Certifications</span>
                <p>Certified mentor for Code-A-Thon, Agritech, and Smart India Hackathons.</p>
              </li>
              <li>
                <span className="font-semibold text-yellow-400">Python Programming</span>
                <p>Certified by Kaggle, Udemy, and HackerRank.</p>
              </li>
              <li>
                <span className="font-semibold text-yellow-400">Google Analytics Certificate</span>
                <p>Certified in Google Analytics tools and techniques.</p>
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
                <span className="font-semibold text-yellow-400">Smart India Hackathon 2024 Finalist</span>
                <p>Finalist in Software Edition (PSID SIH1693).</p>
              </li>
              <li>
                <span className="font-semibold text-yellow-400">Top 3 in Coding Contest</span>
                <p>Ranked among the top 3 in an intercollege coding contest by Smart Interviews.</p>
              </li>
              <li>
                <span className="font-semibold text-yellow-400">Meritorious Award</span>
                <p>Recognized for academic excellence (2019 – 2021).</p>
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
                <p>Python, C, Java, JavaScript, HTML, CSS</p>
              </li>
              <li>
                <span className="font-semibold text-yellow-400">Frameworks</span>
                <p>Streamlit, Pandas, NumPy, Matplotlib</p>
              </li>
              <li>
                <span className="font-semibold text-yellow-400">Tools</span>
                <p>Git, GitHub, VS Code</p>
              </li>
              <li>
                <span className="font-semibold text-yellow-400">Other Skills</span>
                <p>Full-Stack Development, Data Analysis, APIs, ML, DSA</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
