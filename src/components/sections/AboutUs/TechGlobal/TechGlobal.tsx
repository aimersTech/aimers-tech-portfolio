import React from 'react';
import image1 from "../../../../assests/globalTech/1192b57cbe683f4e7552a1cba0ddeb9d25178cb9.jpg";
import image2 from "../../../../assests/globalTech/381ff00ca5da7cf94c2b0e86d0afe0791cd6e358.jpg";
import image3 from "../../../../assests/globalTech/8992e44c5d3fee34a1d8ad50d7bbbb5cf3a72411.png";
import image4 from "../../../../assests/globalTech/bc272ac73079f5ee6d83e5e01eeeab4fda6534a9.jpg";
import image5 from "../../../../assests/globalTech/f86ad9d679c6ff6809bd5bd87855cf87ca8fa37b.jpg";
import image6 from "../../../../assests/globalTech/fe587b2f1b318e38f11d3ca6dacff9a1fe458522.jpg";
import Image from 'next/image';

const TechGlobal = () => {
  // Replace these URLs with your actual image paths

  return (
    <section className="bg-black text-white min-h-screen relative overflow-hidden container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,.1)_35%,rgba(255,255,255,.1)_65%,transparent_65%),linear-gradient(-45deg,transparent_35%,rgba(255,255,255,.1)_35%,rgba(255,255,255,.1)_65%,transparent_65%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 ">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-[40px] lg:text-[40px] font-bold leading-tight">
                <span className="text-cyan-400">Hey!</span>
                <br />
                We're <span className="text-cyan-400">Aimers Tech Global</span>
              </h1>
            </div>
            
            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl">
              We're a forward-thinking technology company dedicated to transforming ideas into reality. We specialize in crafting innovative digital solutions that drive business growth and user engagement. Our team blends creativity with cutting-edge technology to solve real-world challenges with precision and impact. Our mission is to empower businesses with technology that inspires progress and delivers impact. Collaboration and creativity are at the heart of everything we build. We don't just develop products — we craft experiences that shape the future.
            </p>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative">
            {/* Dotted Line Decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-dotted border-blue-500 opacity-30 rounded-lg"></div>
            
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {/* Top Row */}
              <div className="space-y-4">
                {/* Image 1 - Top Left */}
                <div className="w-full h-48 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={image1}
                    alt="Team collaboration"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Image 3 - Bottom Left */}
                <div className="w-full h-56 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={image3}
                    alt="Team meeting"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {/* Image 2 - Top Right */}
                <div className="w-full h-56 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={image2}
                    alt="Development team"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Image 4 - Bottom Right */}
                <div className="w-full h-48 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={image4}
                    alt="Design process"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Row - Spanning full width */}
            <div className="grid grid-cols-2 gap-4 mt-4 relative z-10">
              {/* Image 5 - Bottom Left */}
              <div className="w-full h-44 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={image5}
                  alt="Team discussion"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Image 6 - Bottom Right */}
              <div className="w-full h-44 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={image6}
                  alt="Workspace"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default TechGlobal;