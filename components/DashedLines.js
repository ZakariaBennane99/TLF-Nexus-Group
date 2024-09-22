"use client"


import React, { useEffect, useState } from 'react';

const DashedLines = () => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const calculateLines = () => {
      const viewportWidth = window.innerWidth;
      const lineSpacing = viewportWidth >= 568 ? 200 : Math.max(50, viewportWidth * 0.1);
      const numberOfLines = Math.floor(viewportWidth / lineSpacing);
      const totalLineWidth = (numberOfLines - 1) * lineSpacing;
      const startOffset = (viewportWidth - totalLineWidth) / 2;
      
      const newLines = [];
      for (let i = 0; i < numberOfLines; i++) {
        newLines.push(startOffset + (i * lineSpacing));
      }
      setLines(newLines);
    };

    calculateLines();
    window.addEventListener('resize', calculateLines);
    return () => window.removeEventListener('resize', calculateLines);
  }, []);

  return (
    <div className="vertical-lines-container">
      {lines.map((position, index) => (
        <div 
          key={index} 
          className="vertical-line" 
          style={{ left: `${position}px` }}
        />
      ))}
    </div>
  );
};

export default DashedLines;