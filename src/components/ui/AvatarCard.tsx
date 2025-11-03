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
      className="p-6 rounded-md border border-gray-900 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex flex-col items-start">
        <div className="w-full h-60 sm:h-72 md:h-80 relative mb-4">
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
        <div>
          <h3 className="text-white text-xl font-semibold mb-2 text-center">
            {member.name}
          </h3>
          <p className="text-gray-100 text-sm mb-2 text-start">
            {member.expertise}
          </p>
          <p className="text-gray-100 text-xs text-start">
            {member.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;
