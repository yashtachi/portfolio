import React from 'react';

interface SparkleProps {
  color?: string;
  size?: number;
  style?: React.CSSProperties;
}

export default function MagicSparkle({ color = "#FCD34D", size = 4, style = {} }: SparkleProps) {
  return (
    <span
      className="absolute inline-block animate-sparkle-float"
      style={{
        width: size,
        height: size,
        background: color,
        borderRadius: "50%",
        ...style,
      }}
    />
  );
}