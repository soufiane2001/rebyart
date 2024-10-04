import React, { useEffect, useState } from 'react';
import './PhotoSlide.css'; // Create this CSS file for styling

const PhotoSlide = ({ tableaux ,isopen,close}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const showNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === tableaux.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tableaux.length - 1 : prevIndex - 1
    );
  };

  const closeSlide = () => {
    setIsOpen(false);
    close();
  };

  const openSlide = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };
  useEffect(() => {
    if (isOpen) {
      // Disable scroll when the slideshow is open
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scroll when the slideshow is closed
      document.body.style.overflow = 'auto';
    }

    return () => {
      // Reset the overflow when component is unmounted
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  return (
    <div>
  
    

      {isopen && (
        <div className="overlay">
          <div className="slider">
            <img src={tableaux[currentIndex].src} alt="Current Slide" className="slide-image" />
            <button className="nav-button prev" onClick={showPrevious}>
              &#10094;
            </button>
            <button className="nav-button next" onClick={showNext}>
              &#10095;
            </button>
            <button className="close-button" onClick={closeSlide}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoSlide;
