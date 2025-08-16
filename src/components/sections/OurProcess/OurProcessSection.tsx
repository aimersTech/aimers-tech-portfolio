import React from "react";

import TimelineCard from "@/components/ui/TimeLineCard";
import { OurProcess } from "@/app/constants/outProcess";

function OurProcessSection() {
  return (
    <div className="bg-black px-4 lg:px-20 xl:px-[100px] font-sans min-h-screen w-full">
      <div className="mx-auto">
        <div className="text-center py-16">
          <h2 className="text-white text-3xl lg:text-[40px] font-semibold mb-6">
            Our <span className="text-[#1DE5DB]">Process</span>
          </h2>
          <p className="text-white text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            A proven methodology that ensures successful project delivery from <br />
            concept to completion
          </p>
        </div>

        <div className="relative pb-16">
          <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1DE5DB] via-[#1DE5DB]/60 to-[#1DE5DB]/20"></div>

          {OurProcess.map((process, index) => (
            <TimelineCard
              key={index}
              process={process}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


export default OurProcessSection;