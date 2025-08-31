'use client'

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const AboutUsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample images - replace these URLs with your actual images
  type WidthKey = 'w-64' | 'w-68' | 'w-72' | 'w-80' | 'w-88' | 'w-96';

  const images: { url: string; width: WidthKey; alt: string }[] = [
    {
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      width: 'w-80',
      alt: 'Team collaboration'
    },
    {
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      width: 'w-64',
      alt: 'Team meeting'
    },
    {
      url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
      width: 'w-96',
      alt: 'Office workspace'
    },
    {
      url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
      width: 'w-72',
      alt: 'Team discussion'
    },
    {
      url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=850&q=80',
      width: 'w-88',
      alt: 'Team planning'
    },
    {
      url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=650&q=80',
      width: 'w-68',
      alt: 'Remote work'
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Calculate transform based on current index
  const getTransform = () => {
    // Approximate widths in pixels (Tailwind CSS equivalents)
    const widthMap: Record<WidthKey, number> = {
      'w-64': 256,
      'w-68': 272,
      'w-72': 288,
      'w-80': 320,
      'w-88': 352,
      'w-96': 384
    };
    let totalWidth = 0;
    for (let i = 0; i < currentIndex; i++) {
      totalWidth += (widthMap[images[i].width] ?? 320) + 16; // 16px for gap
    }
    return `translateX(-${totalWidth}px)`;
  };

  return (
    <section className="bg-black text-white py-16 px-6 overflow-hidden relative">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,.1)_35%,rgba(255,255,255,.1)_65%,transparent_65%),linear-gradient(-45deg,transparent_35%,rgba(255,255,255,.1)_35%,rgba(255,255,255,.1)_65%,transparent_65%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Content */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold">
            About <span className="text-cyan-400 underline decoration-cyan-400 decoration-2 underline-offset-4">Us</span>
          </h2>
          
          <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            We're an optimistic and gratitude-filled group of remote workers dedicated 
            to creating a product our customers will use and love.
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <button className="group inline-flex items-center space-x-2 px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-lg font-medium">
              <span>Know About Us</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Image Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex space-x-4 transition-transform duration-1000 ease-in-out"
              style={{ transform: getTransform() }}
            >
              {/* Duplicate images for infinite loop effect */}
              {[...images, ...images, ...images].map((image, index) => (
                <div
                  key={index}
                  className={`${image.width} h-64 lg:h-80 flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Slider Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;