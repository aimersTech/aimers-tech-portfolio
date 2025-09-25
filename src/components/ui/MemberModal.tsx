"use client";

import React from "react";
import Image from "next/image";
import { IAimers } from "@/constants/aimersDetails";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

interface ModalProps {
  member: IAimers | null;
  onClose: () => void;
}

const MemberModal: React.FC<ModalProps> = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div className="bg-black">
        <div
          className=" text-white rounded-xl w-full max-w-lg sm:max-w-2xl md:max-w-4xl p-6 sm:p-10 md:p-16 relative flex flex-col md:flex-row gap-6"
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        >
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-xl overflow-hidden">
              <Image
                src={"/useravatar.png"}
                alt={member.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right side - Details */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              {/* Tag */}
              {member.tag && (
                <span className="border px-3 py-1 rounded-md text-sm mb-3 inline-block">
                  {member.tag}
                </span>
              )}

              <h2 className="text-xl sm:text-2xl font-semibold">
                {member.name}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                {member.expertise}
              </p>

              {/* Location + Date */}
              <div className="flex flex-col gap-1 mt-3 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#1DE5DB]" />
                  <span>{member.location}</span>
                </div>
                {member.joined && (
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#1DE5DB]" />
                    <span>Joined {member.joined}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              {member.description && (
                <p className="text-gray-300 mt-4 leading-relaxed text-xs">
                  {member.description}
                </p>
              )}
            </div>

            {/* CTA */}

          </div>
        </div>

        <div className="flex justify-center items-center px-4 text-white">
            {member.site && (
              <div className="mb-3">
                <a
                  href={member.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 text-sm sm:text-base bg-transparent transition hover:cursor-pointer text-start"
                >
                  Go to my site <ArrowRight size={16} />
                </a>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default MemberModal;
