"use client";

import Image from "next/image";
import React, { useState } from "react";

import logo from "../../assets/logo2.png";
import Link from "next/link";

// import MobileNavMenu from "@/components/Shared/MobileNavMenu";
import NavCrossIcon from "@/styles/Svgs/NavCrossIcon";
import MenuItem from "./MenuItem";
import ServicesDropdown from "./ServicesDropdown";
import AboutUsDropdown from "./AboutUsDropdown";
import ChannelsDropdown from "./ChannelsDropdown";

import MobileNavMenu from "./MobileNavMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isServicesDropdownHovered, setIsServicesDropdownHovered] =
    useState(false);

  const [isChannelsDropdownHovered, setIsChannelsDropdownHovered] =
    useState(false);

  const [isAboutUsDropdownHovered, setIsAboutUsDropdownHovered] =
    useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <header className="relative z-[999] sm:pt-[40.45px]">
      <nav className="relative z-[100] px-5 py-5 sm:py-0 sm:px-[44px] lg:px-5 xl:px-8 min-[1400px]:px-[44px] max-w-[1608px] mx-auto 
    bg-gray-800 backdrop-blur-md backdrop-saturate-150 border-b border-t border-white/20 shadow-lg 
    flex justify-between items-center ">
        <Link href="/" className="lg:py-[5px] md:py-1">
          <Image
            src={logo}
            alt="logo"
            width={144.85}
            height={115}
            className="w-[134px] h-[100.6px] sm:w-[144.85px] sm:h-[115px]"
          />
        </Link>

        <ul className="hidden xl:flex justify-end items-center gap-2.5">
          <li className="py-[35px]">
            <MenuItem href="/">Home</MenuItem>
          </li>
          <li
            onMouseOver={() => {
              setIsChannelsDropdownHovered(false);
              setIsAboutUsDropdownHovered(false);
            }}
            onMouseLeave={() => setIsServicesDropdownHovered(false)}
            className="py-[35px]"
          >
            <MenuItem
              isLink={false}
              isIcon={true}
              isHovered={isServicesDropdownHovered}
              setIsHovered={setIsServicesDropdownHovered}
            >
              Services
            </MenuItem>

            <ServicesDropdown
              isHovered={isServicesDropdownHovered}
              setHovered={setIsServicesDropdownHovered}
            />
          </li>

          <li
            onMouseOver={() => {
              setIsServicesDropdownHovered(false);
              setIsAboutUsDropdownHovered(false);
            }}
            onMouseLeave={() => setIsChannelsDropdownHovered(false)}
            className="py-[35px]"
          >
            <MenuItem
              isLink={false}
              isIcon={true}
              isHovered={isChannelsDropdownHovered}
              setIsHovered={setIsChannelsDropdownHovered}
            >
              Channels
            </MenuItem>

            <ChannelsDropdown
              isHovered={isChannelsDropdownHovered}
              setHovered={setIsChannelsDropdownHovered}
            />
          </li>
          <li
            onMouseOver={() => {
              setIsServicesDropdownHovered(false);
              setIsChannelsDropdownHovered(false);
            }}
            onMouseLeave={() => setIsAboutUsDropdownHovered(false)}
            className="py-[35px]"
          >
            <MenuItem
              isLink={false}
              isIcon={true}
              isHovered={isAboutUsDropdownHovered}
              setIsHovered={setIsAboutUsDropdownHovered}
            >
              About Us
            </MenuItem>

            <AboutUsDropdown
              isHovered={isAboutUsDropdownHovered}
              setHovered={setIsAboutUsDropdownHovered}
            />
          </li>

          <li className="py-[35px]">
            <MenuItem href="/blogs">Insights</MenuItem>
          </li>

          <li className="py-[35px]">
            <Link
              href="/contact"
              className="px-[30px] py-3 bg-[#FAF8F1] text-nowrap text-text-dark-blue text-base leading-[130%] font-bold rounded-[100px]"
            >
              Get in touch
            </Link>
          </li>
        </ul>

        <button
          className={`xl:hidden ${isOpen ? "bg-bg-dark-purple" : "bg-bg-light-blue"
            } w-[38px] h-[38px] rounded-full text-[#392839] text-2xl flex justify-center items-center cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-[38px] h-[33px] flex justify-center items-center">
            {isOpen ? (
              <div className="flex justify-center items-center">
                <NavCrossIcon />
              </div>
            ) : (
              // <FaBars className="text-3xl text-text-light-blue" />
              <div className="space-y-[5px]">
                <div className="w-[16.66px] h-[2px] bg-bg-minty-blue rounded-l-full rounded-r-full"></div>
                <div className="w-[16.66px] h-[2px] bg-bg-minty-blue rounded-l-full rounded-r-full"></div>
                <div className="w-[16.66px] h-[2px] bg-bg-minty-blue rounded-l-full rounded-r-full"></div>
              </div>
            )}
          </div>
        </button>

        {/* Mobile Nav Items */}

        <MobileNavMenu isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Old Mobile Nav Items */}
      </nav>
    </header>
  );
};

export default Navbar;
