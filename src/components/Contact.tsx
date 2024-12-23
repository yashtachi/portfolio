import React from 'react';
import { Phone, Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#2d1b4e]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">Contact Me</h2>
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-3">
            <Phone className="text-yellow-400" />
            <span className="text-white">+1 781-584-6771</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-yellow-400" />
            <a 
              href="mailto:yashwanthmiryala1234@gmail.com" 
              className="text-white hover:text-yellow-400 transition-colors"
            >
              yashwanthmiryala1234@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin className="text-yellow-400" />
            <a 
              href="https://www.linkedin.com/in/yeshwanth-reddy-miryala-a39b51273/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Yeshwanth Reddy Miryala
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}