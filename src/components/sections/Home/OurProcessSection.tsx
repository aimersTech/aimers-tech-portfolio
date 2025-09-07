"use client";

import React from "react";
import { OurProcess } from "@/constants/outProcess";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { WorkflowIcon, StarIcon } from "lucide-react";

function OurProcessSection() {
  return (
    <div className="bg-black min-h-screen w-full font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Section Header */}
        <div className="text-center py-16">
          <h2 className="text-white text-4xl md:text-5xl underline font-semibold mb-6">
            Our <span className="text-[#1DE5DB]">Process</span>
          </h2>
          <p className="text-white text-base lg:text-xl max-w-2xl mx-auto leading-relaxed">
            A proven methodology that ensures successful project delivery from{" "}
            <br />
            concept to completion
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pb-16">
          <div className="absolute left-8 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1DE5DB] via-[#1DE5DB]/60 to-[#1DE5DB]/20"></div>

          <VerticalTimeline>
            {OurProcess.map((step, index) => (
              <VerticalTimelineElement
                key={step.step}
                className="vertical-timeline-element--work"
                iconStyle={{
                  background: "#1DE5DB",
                  color: "#fff",
                }}
                icon={<WorkflowIcon />}
                contentStyle={{
                  background: "#111827", // dark gray background
                  color: "#fff",
                  border: "1px solid rgba(29,229,219,0.4)",
                  borderRadius: "12px",
                }}
                contentArrowStyle={{ borderRight: "7px solid #1DE5DB" }}
                date={`Step ${step.step}`}
              >
                <h3 className="vertical-timeline-element-title text-lg md:text-xl font-semibold text-[#1DE5DB]">
                  {step.title}
                </h3>
                <p className="text-gray-300 mt-2 text-sm md:text-base">
                  {step.description}
                </p>
                <ul className="list-disc list-inside mt-3 text-gray-400 text-sm md:text-base space-y-1">
                  {step.options.map((option, i) => (
                    <li key={i}>{option}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}

            {/* End marker */}
            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={<StarIcon />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default OurProcessSection;
