import React, { useState } from 'react';

const ReviewCarousel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  if (reviews.length === 0) {
    return <div>No reviews available.</div>;
  }

  return (
    <div className="review-carousel">
      <button onClick={prevReview}>Previous</button>
      <div className="review">
        <p>"{reviews[currentIndex].text}"</p>
        <p>- {reviews[currentIndex].author}</p>
      </div>
      <button onClick={nextReview}>Next</button>
    </div>
  );
};

export default ReviewCarousel;