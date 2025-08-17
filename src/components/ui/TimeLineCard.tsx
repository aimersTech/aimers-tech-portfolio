import React from "react";

import { ClipboardList, Palette, TestTube, Headphones } from "lucide-react";
import { TimelineCardProps } from "@/lib/types";

const getIcon = (step: number) => {
    const iconProps = { size: 24, className: "text-black" };

    switch (step) {
        case 1: return <ClipboardList {...iconProps} />;
        case 2: return <Palette {...iconProps} />;
        case 3: return <TestTube {...iconProps} />;
        case 4: return <Headphones {...iconProps} />;
        default: return <ClipboardList {...iconProps} />;
    }
};

const TimelineCard: React.FC<TimelineCardProps> = ({ process, isEven }) => {
    return (
        <div className={`relative flex items-center mb-16 lg:mb-20 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10">
                <div className="w-4 h-4 bg-[#1DE5DB] rounded-full shadow-lg shadow-[#1DE5DB]/50"></div>
            </div>

            <div className={`ml-24 lg:ml-0 lg:w-5/12 ${isEven ? 'lg:mr-auto lg:pr-16' : 'lg:ml-auto lg:pl-16'}`}>
                <div className={`rounded-xl p-8 border transition-all duration-500 transform hover:-translate-y-2 ${
                isEven
                    ? 'bg-black border-[#FFFFFF] hover:border-[#1DE5DB]/50'
                    : 'bg-gray-800 border-gray-700 hover:border-[#1DE5DB]/50'
                }`}>
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1DE5DB] to-[#14B8A6] rounded-full flex items-center justify-center shadow-lg">
                    {getIcon(process.step)}
                    </div>
                    <div>
                    <p className="text-[#1DE5DB] text-sm font-medium">
                        Step {process.step}
                    </p>
                    <h3 className="text-xl font-bold text-white">
                        {process.title}
                    </h3>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    {process.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {process.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#1DE5DB] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-200 text-[15px] font-medium">
                        {option}
                        </span>
                    </div>
                    ))}
                </div>
                </div>
            </div>

            <div className={`hidden lg:block absolute top-8 w-16 h-1 bg-gradient-to-r ${isEven ? 'from-[#1DE5DB] to-transparent left-1/2' : 'from-transparent to-[#1DE5DB] right-1/2'}`}></div>
        </div>
    );
};

export default TimelineCard;