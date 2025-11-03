import React from 'react';
import image1 from "../../../../assests/globalTech/first.jpg";
import image2 from "../../../../assests/globalTech/second.jpg";
import image3 from "../../../../assests/globalTech/third.png";
import image4 from "../../../../assests/globalTech/four.jpg";
import image5 from "../../../../assests/globalTech/five.png";
import image6 from "../../../../assests/globalTech/six.jpg";
import Image from 'next/image';

const TechStory = () => {
  // Replace these URLs with your actual image paths

  return (
    <section className="bg-black text-white min-h-screen relative overflow-hidden container mx-auto">
      <div className=" py-16 lg:pt-0 lg:pb-10 relative z-10">
        <div className="grid xl:grid-cols-2 gap-12 xl:gap-10 items-center">
          {/* Left Content */}
          <div className="hidden xl:block">
            {/* Image 1 - Top Left */}
            <div className="w-[150px] h-[125px] absolute top-[230px] left-[80px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={image1}
                alt="Team collaboration"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>


            <div className="w-[210px] h-[159px] absolute top-[200px] left-[246px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={image3}
                alt="Team meeting"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>



            <div className="w-[295px] h-[307px] absolute top-[380px] left-[35px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={image4}
                alt="Design process"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>


            <div className="w-[210px] h-[267px] absolute top-[400px] left-[350px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={image6}
                alt="Development team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>




            <div className="w-[150px] h-[125px] absolute top-[710px] left-[80px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={image5}
                alt="Team discussion"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>


            <div className="w-[210px] h-[159px] absolute top-[710px] left-[246px] rounded-lg  overflow-hidden shadow-xl">
              <Image
                src={image2}
                alt="Workspace"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className=" order-2 xl:hidden grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-10">
            {[image1, image3, image6, image4, image5, image2].map((img, idx) => (
              <div key={idx} className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
                <Image
                  src={img}
                  alt={`Responsive image ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Right Content - Image Grid */}
          <div className="space-y-[37px] text-center xl:text-left order-1 xl:order-2">
            <div className="space-y-4 ">
              <h1 className="text-[30px] lg:text-[40px] font-bold leading-tight">
                Aimers Tech Global -  <span className="text-cyan-400">Our Story</span>
              </h1>
              <div className='border-1 xl:w-[580px] lg:w-[600px] md:w-[460px]  bg-white -mt-2 mx-auto xl:mx-0'></div>
            </div>

            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto xl:mx-0">
              Founded on July 13th, 2025, Aimers Tech Global emerged as a bold startup with a mission to merge creativity with technology in meaningful ways. What began as a small team of passionate innovators has grown into a multidisciplinary company working across UI/UX design, UX research, AI-powered development, and full-stack software solutions.
              <br />
              <br />
              From day one, we have believed that great digital products begin with understanding the people who use them. That is why our foundation is rooted in human-centered design and deep research—uncovering user needs, behaviors, and pain points to craft seamless, intuitive experiences. Our design philosophy is not just about beauty, it is about purpose, clarity, and impact.
              <br />
              <br />
              On the tech side, we harness the power of artificial intelligence and modern development tools to build scalable, efficient, and smart systems. Whether it iss creating an interactive interface, conducting usability studies, or deploying AI-generated solutions, every step we take is driven by innovation and precision.
              <br />
              <br />
              Today, Aimers Tech Global stands as a growing global team—collaborating across borders, industries, and ideas. We do not just deliver digital products; we create meaningful experiences that connect people and technology in powerful new ways.
              <br />
              <br />
              We are not just building the future.
              We are designing it, researching it, and engineering it—one idea at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default TechStory;