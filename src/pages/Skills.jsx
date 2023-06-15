import React from 'react';
import '../styles/BlinkingNightStars.css';
import '../styles/RandomDots.css';
import { SkillsContent } from './skills-content';

const Skills = () => {
  const starCount = 50; // Number of stars to generate

  // Generate random coordinates for each star
  const stars = [];
  for (let i = 0; i < starCount; i++) {
    const left = Math.random() * 100; // Random left position (percentage)
    const top = Math.random() * 100; // Random top position (percentage)
    const duration = Math.random() * 2 + 1; // Random animation duration between 1 to 3 seconds
    const size = Math.random() * 3 + 2; // Random star size between 2 to 5 pixels
    const style = {
      left: `${left}%`,
      top: `${top}%`,
      animationDuration: `${duration}s`,
      width: `${size}px`,
      height: `${size}px`,
    };
    stars.push(<div className="star" style={style} key={i} />);
  }

  return (
    <div className="blinking-night-stars-container">
      <div className="random-dots-container">
        {stars}
      </div>
        <SkillsContent/>
    </div>
  );
}

export default Skills;
