import React from "react";
import { OurValue } from "@/constants/ourValue";
import { Lightbulb, Eye, Shield, Brain, Leaf, Heart } from "lucide-react";

const OurValues = () => {
  return (
    <div className="">
      <div className="text-center py-16">
        <h2 className="text-white text-[40px] underline font-ro font-semibold mb-6 ">
          Our <span className="text-[#1DE5DB]">Value</span>
        </h2>
        <p className="text-white text-base lg:text-xl max-w-6xl mx-auto leading-relaxed">
          At Aimers Tech Global, our values guide everything we do—from design
          to <br /> development. They reflect who we are, how we work, and what
          we stand for. With a <br /> strong focus on innovation, empathy,
          collaboration, and reliability, we strive to create <br /> impactful
          solutions that truly matter.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        {OurValue.map((value, index) => {
          const icons = [
            <Lightbulb key={index} className="w-8 h-8 text-yellow-400" />,
            <Eye key={index} className="w-8 h-8 text-purple-500" />,
            <Shield key={index} className="w-8 h-8 text-green-500" />,
            <Brain key={index} className="w-8 h-8 text-blue-500" />,
            <Leaf key={index} className="w-8 h-8 text-teal-500" />,
            <Heart key={index} className="w-8 h-8 text-red-500" />,
          ];
          return (
            <div
              key={index}
              className="p-6 rounded-md border border-gray-800 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-start">
                <div className="mb-4">{icons[index]}</div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-lg">{value.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurValues;
