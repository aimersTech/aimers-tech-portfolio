import React from "react";
import Image from "next/image";
import { IAimers } from "@/constants/aimersDetails";
import avatar from "../../../public/useravatar.png";

interface AvatarCardProps {
  index: number;
  member: IAimers;
}

const AvatarCard: React.FC<AvatarCardProps> = ({ index, member }) => {
  return (
    <div
      key={index}
      className="p-6 rounded-md border border-gray-900 hover:shadow-lg transition-shadow duration-300 flex flex-col items-start h-full bg-[#0D0D0D]"
    >
      {/* Image Container with fixed height */}
      <div className="w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[270px] relative mb-4">
        <Image
          src={avatar}
          alt={member.name}
          fill
          className="object-cover rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          priority={index < 3}
        />
      </div>

      {/* Text Section — equal height alignment */}
      <div className="flex flex-col justify-between flex-grow w-full">
        <div>
          <h3 className="text-white text-lg sm:text-xl font-semibold mb-1 text-center sm:text-start">
            {member.name}
          </h3>
          <p className="text-gray-300 text-sm mb-1 text-start">
            {member.expertise}
          </p>
          <p className="text-gray-400 text-xs text-start">{member.location}</p>
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;
