import React, { useState } from "react";

function Carousel() {
  // 輪播頁資料
  const slides = [
    {
      url: "photo/image1.jpg",
      alt: "Slide 1",
    },
    {
      url: "photo/image2.jpg",
      alt: "Slide 2",
    },
    {
      url: "photo/image3.jpg",
      alt: "Slide 3",
    },
    {
      url: "photo/image4.jpg",
      alt: "Slide 4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 利用模數運算 (% slides.length) 來確保索引值在範圍內循環
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg my-8">
      {/* Slides */}
      <div className="relative h-100">
        <img
          src={slides[currentIndex].url}
          alt={slides[currentIndex].alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2  text-white rounded-full p-2 opacity-70 hover:opacity-100 transition-opacity "
      >
        <i className="bi bi-arrow-left-circle text-5xl"></i>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2  text-white rounded-full p-2 opacity-70 hover:opacity-100 transition-opacity"
      >
        <i className="bi bi-arrow-right-circle text-5xl"></i>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
