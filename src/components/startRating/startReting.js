
import React from 'react';
import './startRating.css'; 

const StarRating = ({ rating }) => {
  // Assuming rating is out of 10, convert it to a scale of 1 to 5 stars
  const starCount = Math.round(rating / 2); // Convert 1-10 to 1-5 stars
  
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={`star ${index < starCount ? 'filled' : ''}`}>
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
