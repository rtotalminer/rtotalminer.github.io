import React, { useState } from 'react';
import './slideshow.css';

const images = [
  {
    src: 'https://raw.githubusercontent.com/rtotalminer/maze-game/main/game/static/img/menu.png',
    url: 'https://rtotalminer.github.io/maze-game/'
  },
  { src: 'https://via.placeholder.com/800x400?text=Slide+2', url: 'https://www.example2.com' },
  { src: 'https://via.placeholder.com/800x400?text=Slide+3', url: 'https://www.example3.com' },
];

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-[400px] mx-auto overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <a key={index} href={image.url} target="_blank" className="flex-shrink-0">
            <img src={image.src} alt={`Slide ${index + 1}`} className="w-[400px] h-[400px] object-cover" />
          </a>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrevClick}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
      >
        &lt;
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNextClick}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
      >
        &gt;
      </button>

      {/* Dots/Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'} cursor-pointer`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
