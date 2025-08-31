"use client";

import { Code2, Zap, Users } from "lucide-react";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative container mx-auto pe-4 sm:pe-6 lg:pe-8 w-full text-center text-white pt-28 pb-20 bg-black">
      {/* Hexagon pattern background (unchanged) */}
      <div className="absolute inset-0 opacity-70 container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="w-full h-full bg-[linear-gradient(120deg,#0ff_1px,transparent_1px),linear-gradient(60deg,#0ff_1px,transparent_1px)] bg-[length:60px_104px]"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#1DE5DB]  to-[#9B8FE4] bg-clip-text text-transparent">
          Aimers Tech Global
        </h1>

        {/* Tagline */}
        <p className="text-base md:text-lg font-semibold tracking-widest mb-4 uppercase text-gray-200">
          Innovating Tomorrow, Today
        </p>

        {/* Description */}
        <p className="text-gray-300 mb-8 text-sm md:text-base">
          We transform ideas into powerful digital solutions. From web
          applications to AI integration, we’re your partners in building the
          future of technology.
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <Link href='/contact'>
          <button className="relative group px-8 py-3 font-semibold rounded-md border-2 border-cyan-400 text-white overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Get In touch →
            </span>
            {/* cyan diagonal corner */}
            <span className="absolute bottom-0 right-0 w-6 h-6 bg-cyan-400 clip-path-polygon"></span>
          </button>
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:px-9 px-4  ">
        {/* Card 1 */}
        <div className="bg-gray-800 border-gray-700 border transition-all duration-500 transform hover:-translate-y-2 hover:border-[#1DE5DB]/50 rounded-2xl p-8 shadow-lg text-center ">
          <div className="w-14 h-14 mx-auto  mb-4 flex items-center justify-center rounded-full bg-cyan-500">
            <Code2 className="text-white w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold mb-2 border-b-3 border-[#1DE5DB]  inline-block">
            Web Development
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mt-2">
            Building robust and scalable web platforms. Leveraging modern
            frameworks to ensure performance and flexibility. Crafting
            user-friendly interfaces with responsive design in mind.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 border-gray-700 border transition-all duration-500 transform hover:-translate-y-2 hover:border-[#1DE5DB]/50 rounded-2xl p-8 shadow-lg text-center ">
          <div className="w-14 h-14 mx-auto  mb-4 flex items-center justify-center rounded-full bg-pink-500">
            <Zap className="text-white w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold mb-2 border-b-3 border-[#1DE5DB] inline-block">
            AI Integration
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mt-2">
            Applying machine learning to real-world problems. Turning complex
            data into intelligent, actionable solutions. Bridging innovation and
            practicality through smart automation.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 border-gray-700 border transition-all duration-500 transform hover:-translate-y-2 hover:border-[#1DE5DB]/50 rounded-2xl p-8 shadow-lg text-center ">
          <div className="w-14 h-14 mx-auto  mb-4 flex items-center justify-center rounded-full bg-green-500">
            <Users className="text-white w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold mb-2 border-b-3 border-[#1DE5DB] inline-block">
            MVP Launch
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mt-2">
            Helping startups go from idea to launch. Fueling innovation with
            agile development and bold design. Empowering founders to build
            fast, launch smart, and grow confidently.
          </p>
        </div>
      </div>

      {/* Custom clip-path for button corner */}
      <style jsx>{`
        .clip-path-polygon {
          clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        }
      `}</style>
    </section>
  );
}
