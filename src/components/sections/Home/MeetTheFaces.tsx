"use client";

import { useState } from "react";
import { Aimers, IAimers } from "@/constants/facesBehind";
import AvatarCard from "@/components/ui/AvatarCard";
import MemberModal from "@/components/ui/MemberModal";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

const MeetTheFaces = () => {
  const [selectedMember, setSelectedMember] = useState<IAimers | null>(null);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white relative">
      {/* Header Section */}
      <div className="py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 relative z-20">
          <div>
            <h2 className="text-white text-4xl md:text-5xl font-semibold mb-4 leading-snug">
              <span className="text-[#00D9FF]">Meet the faces</span> behind <br /> our work
            </h2>
            <p className="text-gray-300 text-base mb-4 lg:text-lg max-w-4xl leading-relaxed">
              We’re a close-knit team of designers, developers, and innovators who love turning bold ideas into reality.
              From crafting beautiful interfaces to building powerful, scalable systems, we blend creativity and technology
              to deliver solutions that truly make an impact.
            </p>
          </div>

          {/* Navigation Arrows — stay side by side */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              className="swiper-button-prev bg-[#1E1E1E] hover:bg-[#00D9FF] text-white rounded-full p-3 transition-all flex items-center justify-center !static !translate-x-0 !translate-y-0 relative z-30"
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="swiper-button-next bg-[#1E1E1E] hover:bg-[#00D9FF] text-white rounded-full p-3 transition-all flex items-center justify-center !static !translate-x-0 !translate-y-0 relative z-30"
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Grid]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            grid={{ rows: 2, fill: "row" }}
            spaceBetween={30}
            slidesPerView={3.2} // show a small part of next card
            slidesPerGroup={1} // move 1 card at a time
            breakpoints={{
              320: { slidesPerView: 1.2, grid: { rows: 2 }, spaceBetween: 20 },
              480: { slidesPerView: 1.5, grid: { rows: 2 }, spaceBetween: 20 },
              640: { slidesPerView: 2.2, grid: { rows: 2 }, spaceBetween: 25 },
              768: { slidesPerView: 2.5, grid: { rows: 2 }, spaceBetween: 25 },
              1024: { slidesPerView: 3.2, grid: { rows: 2 }, spaceBetween: 30 },
              1280: { slidesPerView: 3.2, grid: { rows: 2 }, spaceBetween: 30 },
            }}
            className="pb-16 overflow-visible"
          >
            {Aimers.map((member, index) => (
              <SwiperSlide key={index}>
                <div onClick={() => setSelectedMember(member)}>
                  <AvatarCard index={index} member={member} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Modal Popup */}
      <MemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
};

export default MeetTheFaces;
