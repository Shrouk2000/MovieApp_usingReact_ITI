import React from 'react';
import './circularProgressBar.css';
const CircularProgressBar = ({ percentage }) => {
  const strokeColor = 'green'; // Customize the color as needed
  const radius = 30; // Radius of the circular bar
  const strokeWidth = 8; // Width of the stroke
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress-bar">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="circular-progress-bar-svg"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 50 50)"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="16px"
          fill="#000"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
