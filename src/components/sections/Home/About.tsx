

"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import image1 from "../../../assests/globalTech/1192b57cbe683f4e7552a1cba0ddeb9d25178cb9.jpg";
import image2 from "../../../assests/globalTech/381ff00ca5da7cf94c2b0e86d0afe0791cd6e358.jpg";
import image3 from "../../../assests/globalTech/8992e44c5d3fee34a1d8ad50d7bbbb5cf3a72411.png";
import image4 from "../../../assests/globalTech/bc272ac73079f5ee6d83e5e01eeeab4fda6534a9.jpg";
import image5 from "../../../assests/globalTech/f86ad9d679c6ff6809bd5bd87855cf87ca8fa37b.jpg";
import image6 from "../../../assests/globalTech/four.jpg";
import image7 from "../../../assests/globalTech/five.png";
import image8 from "../../../assests/globalTech/second.jpg";

import Image, { StaticImageData } from "next/image";

const AboutUsSection = () => {
  type ImageItem = {
    url: StaticImageData;
    width: string; // e.g., "320px"
    height: string; // e.g., "220px"
    alt: string;
  };

  const images: ImageItem[] = [
    {
      url: image1,
      width: "220px",
      height: "250px",
      alt: "Team collaboration",
    },
    {
      url: image2,
      width: "290px",
      height: "264px",
      alt: "Team meeting",
    },
    {
      url: image3,
      width: "290px",
      height: "295px",
      alt: "Office workspace",
    },
    {
      url: image4,
      width: "288px",
      height: "235px",
      alt: "Team discussion",
    },
    {
      url: image5,
      width: "272px",
      height: "232px",
      alt: "Remote work",
    },
    {
      url: image6,
      width: "222px",
      height: "262px",
      alt: "Remote work",
    },
    {
      url: image7,
      width: "252px",
      height: "282px",
      alt: "Remote work",
    },
    {
      url: image8,
      width: "232px",
      height: "212px",
      alt: "Remote work",
    },
  
    // {
    //   url: image6,
    //   width: "272px",
    //   height: "200px",
    //   alt: "Remote work",
    // },
  ];

  // Embla carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  // Auto-play effect
  React.useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="bg-black text-white py-20 overflow-hidden relative">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,.1)_35%,rgba(255,255,255,.1)_65%,transparent_65%),linear-gradient(-45deg,transparent_35%,rgba(255,255,255,.1)_35%,rgba(255,255,255,.1)_65%,transparent_65%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Content */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-4xl lg:text-5xl font-bold">
              About{" "}
              <span className="text-cyan-400 decoration-cyan-400 decoration-2">
                Us
              </span>
            </h2>
            {/* underline below heading */}
            <div className="w-[229px] h-[2px] bg-white mt-1"></div>
          </div>

          <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mt-[41px]">
            We're an optimistic and gratitude-filled group of remote workers
            dedicated to creating a product our customers will use and love.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mt-[90px] mb-[130px]">
            <Link href="/contact">
              <button className="relative group px-8 py-3 font-semibold rounded-md border-2 border-cyan-400 text-white overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  Know About Us
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                {/* cyan diagonal corner */}
                <span
                  className="absolute bottom-0 right-0 w-6 h-6 bg-cyan-400"
                  style={{
                    clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                  }}
                ></span>
              </button>
            </Link>
          </div>
        </div>

        {/* Image Slider */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-end space-x-3">
              {images.map((image, index) => (
                <div
                  key={index}
                  style={{ width: image.width, height: image.height }}
                  className="flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
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
      </div>
    </section>
  );
};

export default AboutUsSection;
