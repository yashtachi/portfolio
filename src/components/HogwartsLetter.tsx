import React, { useEffect, useState } from 'react';
import { Wand } from 'lucide-react';

export default function HogwartsLetter() {
  const [text, setText] = useState('');
  const fullText = `Dear Visitor,

Welcome to my magical portfolio! Here, you'll uncover the enchanting projects and spellbinding skills I have mastered throughout my journey at Hogwarts and beyond. Dive into this realm of creativity, wizardry, and innovation—I’m certain you’ll find it truly magical!

Happy exploring! 🪄✨`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index)); // Use slicing instead of concatenation
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 30); // Adjust typing speed as needed

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#1a0f2e] to-[#2d1b4e]">
      <div className="max-w-2xl w-full bg-[#f4e4bc] text-[#1a0f2e] p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <div className="flex justify-between items-start mb-4"> {/* Reduced margin-bottom */}
          <h1 className="text-4xl font-bold">HOGWARTS</h1>
          <Wand className="text-[#2d1b4e]" size={32} />
        </div>
        <div className="space-y-4">
          <p className="whitespace-pre-line font-serif">{text}</p>
          {text.length === fullText.length && (
            <div className="mt-8 flex justify-center">
              <button
                className="bg-[#2d1b4e] text-white px-6 py-3 rounded-lg hover:bg-[#1a0f2e] transition-colors duration-300 flex items-center space-x-2"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Explore My Magic</span>
                <Wand size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
