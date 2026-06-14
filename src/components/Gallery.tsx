"use client";

import React, { useState } from "react";

export default function Gallery() {
  const images = [
    "/gallery/unnamed.jpg",
    "/gallery/unnamed (1).jpg",
    "/gallery/unnamed (2).jpg",
    "/gallery/unnamed (3).jpg",
    "/gallery/unnamed (4).jpg",
    "/gallery/unnamed (5).jpg"
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-32 bg-deep-navy" id="gallery">
      <div className="max-w-container-max mx-auto px-4 md:px-16">
        <div className="text-center mb-20">
          <span className="font-label-caps text-label-caps text-rich-gold tracking-[0.4em] uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="font-headline-lg text-headline-lg text-parchment">
            Vastu <span className="text-rich-gold">Gallery</span>
          </h2>
          <p className="text-parchment/60 mt-4 font-body-sm">Click any image to view full screen</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="overflow-hidden border border-rich-gold/20 aspect-square group cursor-pointer relative"
              onClick={() => openLightbox(index)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-deep-navy/30 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center">
                 <span className="material-symbols-outlined text-parchment opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-4xl">zoom_in</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Slideshow Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-parchment/60 hover:text-rich-gold transition-colors p-2"
            onClick={closeLightbox}
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>

          {/* Previous Button */}
          <button 
            className="absolute left-4 md:left-10 text-parchment/60 hover:text-rich-gold transition-colors p-2"
            onClick={showPrev}
          >
            <span className="material-symbols-outlined text-5xl">chevron_left</span>
          </button>

          {/* Current Image */}
          <div className="relative w-full h-full max-w-5xl flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={images[currentIndex]} 
              alt={`Full screen gallery image ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain border border-rich-gold/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
            <div className="absolute bottom-[-40px] text-parchment/60 font-body-sm tracking-widest">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Next Button */}
          <button 
            className="absolute right-4 md:right-10 text-parchment/60 hover:text-rich-gold transition-colors p-2"
            onClick={showNext}
          >
            <span className="material-symbols-outlined text-5xl">chevron_right</span>
          </button>
        </div>
      )}
    </section>
  );
}
