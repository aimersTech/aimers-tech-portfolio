"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

// Import images
import image1 from "../../../assests/globalTech/1192b57cbe683f4e7552a1cba0ddeb9d25178cb9.jpg";
import image2 from "../../../assests/globalTech/381ff00ca5da7cf94c2b0e86d0afe0791cd6e358.jpg";
import image3 from "../../../assests/globalTech/8992e44c5d3fee34a1d8ad50d7bbbb5cf3a72411.png";
import image4 from "../../../assests/globalTech/bc272ac73079f5ee6d83e5e01eeeab4fda6534a9.jpg";
import image5 from "../../../assests/globalTech/f86ad9d679c6ff6809bd5bd87855cf87ca8fa37b.jpg";
import image6 from "../../../assests/globalTech/four.jpg";
import image7 from "../../../assests/globalTech/five.png";

const AboutUsSection = () => {
  type ImageItem = {
    url: StaticImageData;
    width: string;
    height: string;
    alt: string;
  };

  const images: ImageItem[] = [
    { url: image1, width: "220px", height: "250px", alt: "Team collaboration" },
    { url: image2, width: "290px", height: "264px", alt: "Team meeting" },
    { url: image3, width: "250px", height: "295px", alt: "Office workspace" },
    { url: image4, width: "288px", height: "235px", alt: "Team discussion" },
    { url: image5, width: "272px", height: "232px", alt: "Remote work" },
    { url: image6, width: "222px", height: "262px", alt: "Remote work" },
    { url: image7, width: "252px", height: "282px", alt: "Remote work" },
  ];

  const [emblaRefDesktop] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [emblaRefMobile] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section className="bg-black text-white py-16 md:py-20 overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,.1)_35%,rgba(255,255,255,.1)_65%,transparent_65%),linear-gradient(-45deg,transparent_35%,rgba(255,255,255,.1)_35%,rgba(255,255,255,.1)_65%,transparent_65%)] bg-[length:20px_20px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-6">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              About{" "}
              <span className="text-cyan-400 decoration-cyan-400 decoration-2">
                Us
              </span>
            </h2>
            <div className="w-[180px] sm:w-[229px] h-[2px] bg-white mt-1" />
          </div>

          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mt-6 sm:mt-[41px] px-2">
            We are an optimistic and gratitude-filled group of remote workers
            dedicated to creating a product our customers will use and love.
          </p>

          <div className="flex justify-center mt-12 sm:mt-[90px] mb-16 sm:mb-[130px]">
            <Link href="/contact">
              <button className="relative group px-8 py-3 font-semibold rounded-md border-2 border-cyan-400 text-white overflow-hidden hover:cursor-pointer hover:bg-cyan-400 hover:text-black">
                <span className="relative z-10 flex items-center gap-3">
                  Know About Us
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span
                  className="absolute bottom-0 right-0 w-5 sm:w-6 h-5 sm:h-6 bg-cyan-400"
                  style={{
                    clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                  }}
                ></span>
              </button>
            </Link>
          </div>
        </div>

        {/* === Desktop Carousel === */}
        <div className="relative hidden md:block">
          <div className="overflow-hidden" ref={emblaRefDesktop}>
            <div className="flex items-end space-x-3 sm:space-x-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-hidden mr-4 shadow-2xl flex-shrink-0"
                  style={{
                    width:
                      index % 2 === 0
                        ? "clamp(160px, 28vw, 280px)"
                        : "clamp(180px, 30vw, 300px)",
                    height:
                      index % 2 === 0
                        ? "clamp(140px, 25vw, 260px)"
                        : "clamp(160px, 27vw, 280px)",
                  }}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
        </div>

        {/* === Mobile Carousel === */}
        <div className="relative block md:hidden">
          <div className="overflow-hidden" ref={emblaRefMobile}>
            <div className="flex">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-[300px] h-[200px] sm:h-[400px]"
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlays for mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
