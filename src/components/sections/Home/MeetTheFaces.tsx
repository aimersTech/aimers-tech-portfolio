"use client";

import { useState } from "react";
import { Aimers, IAimers } from "@/constants/facesBehind";
import AvatarCard from "@/components/ui/AvatarCard";
import MemberModal from "@/components/ui/MemberModal";

const MeetTheFaces = () => {
  const [selectedMember, setSelectedMember] = useState<IAimers | null>(null);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-start py-16">
        <h2 className="text-white text-5xl font-semibold mb-6">
          <span className="text-[#00D9FF]">Meet the faces</span> behind <br /> our work
        </h2>
        <p className="text-white text-base lg:text-xl max-w-6xl leading-relaxed">
          We’re a close-knit team of designers, developers, and <br /> innovators who love turning bold ideas into reality.<br /> From crafting beautiful interfaces to building powerful,<br /> scalable systems, we blend creativity and technology<br /> to deliver solutions that truly make an impact.
        </p>
      </div>

      {/* Grid of members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        {Aimers.map((member, index) => (
          <div key={index} onClick={() => setSelectedMember(member)}>
            <AvatarCard index={index} member={member} />
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      <MemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
};

export default MeetTheFaces;
