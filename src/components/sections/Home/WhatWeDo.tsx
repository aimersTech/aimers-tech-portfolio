import React from "react";
import { WhatWeDo } from "@/constants/whatWeDo";
import {
  Code2,
  BrainCircuit,
  Rocket,
  Smartphone,
  Database,
  Cloud,
} from "lucide-react";

function WhatWeDoSection() {
  return (
    <div className="bg-[#2F2F2F] min-h-screen w-full font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center py-16">
          <h2 className="text-white underline decoration-[#FFFFFF] decoration-1 underline-offset-[15px] text-5xl font-semibold mb-6">
            What <span className="text-[#1DE5DB]">We Do</span>
          </h2>
          <p className="text-white text-base lg:text-xl max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive technology solutions tailored to your
            business needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
          {WhatWeDo.map((item, index) => (
            <div
              key={index}
              className="bg-black p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-start space-y-4">
                {/* Icon */}
                <div>
                  {index === 0 && <Code2 className="w-8 h-8 text-[#00A3E0]" />}
                  {index === 1 && (
                    <BrainCircuit className="w-8 h-8 text-[#A100FF]" />
                  )}
                  {index === 2 && <Rocket className="w-8 h-8 text-[#00FF00]" />}
                  {index === 3 && (
                    <Smartphone className="w-8 h-8 text-[#FF4500]" />
                  )}
                  {index === 4 && (
                    <Database className="w-8 h-8 text-[#FF00FF]" />
                  )}
                  {index === 5 && <Cloud className="w-8 h-8 text-[#00CED1]" />}
                </div>

                {/* Title and Description */}
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {item.description}
                </p>

                {/* Options */}
                <ul className="list-none space-y-2">
                  {item.options.map((option, optionIndex) => (
                    <li
                      key={optionIndex}
                      className="flex items-center text-white text-sm"
                    >
                      <span className="w-2 h-2 bg-[#1DE5DB] rounded-full mr-2"></span>
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatWeDoSection;
