import React, { useEffect, useState, useCallback } from 'react';
import { Wand2 } from 'lucide-react';
import MagicSparkle from './MagicSparkle';

export default function TypedName() {
  const [text, setText] = useState('');
  const [sparkles, setSparkles] = useState<Array<{ id: string; x: number; y: number }>>([]);
  const fullName = "Yeshwanth Reddy Miryala";

  const addSparkle = useCallback(() => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    // Generate a more unique ID using timestamp and random number
    const newSparkle = { 
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      x, 
      y 
    };
    
    setSparkles(current => [...current, newSparkle]);
    setTimeout(() => {
      setSparkles(current => current.filter(s => s.id !== newSparkle.id));
    }, 1000);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullName.length) {
        setText(prev => prev + fullName.charAt(index));
        addSparkle();
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [addSparkle, fullName]);

  useEffect(() => {
    const sparkleInterval = setInterval(addSparkle, 500);
    return () => clearInterval(sparkleInterval);
  }, [addSparkle]);

  return (
    <div className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map(sparkle => (
          <MagicSparkle
            key={sparkle.id}
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
            }}
          />
        ))}
      </div>
      <div className="relative">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 text-center mb-8 animate-pulse-slow">
          <Wand2 className="inline-block mr-4 text-yellow-400 animate-wave" />
          {text}
          <Wand2 className="inline-block ml-4 text-yellow-400 animate-wave-reverse" />
        </h1>
      </div>
    </div>
  );
}