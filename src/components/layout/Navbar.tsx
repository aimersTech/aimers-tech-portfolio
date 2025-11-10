"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

import logo from "../../assets/logo2.png";
import NavCrossIcon from "@/styles/Svgs/NavCrossIcon";
import MenuItem from "./MenuItem";
import ServicesDropdown from "./ServicesDropdown";
import AboutUsDropdown from "./AboutUsDropdown";
import ChannelsDropdown from "./ChannelsDropdown";
import MobileNavMenu from "./MobileNavMenu";
import { div } from "framer-motion/client";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  // Close dropdown when clicking outside navbar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Hover handling with delay (to prevent flicker)
  const handleMouseEnter = (menu: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    if (!openMenu) setOpenMenu(menu);
  };

  const handleMouseLeave = (menu: string) => {
    if (openMenu !== menu) {
      hoverTimeout.current = setTimeout(() => {
        setOpenMenu(null);
      }, 150);
    }
  };

  const handleMenuClick = (menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <header className="relative z-[999] sm:pt-[40.45px]">
      <nav
        ref={navRef}
        className="relative z-[100] px-5 py-2 sm:py-0 sm:px-[44px] lg:px-5 xl:px-8 min-[1400px]:px-[44px] 
        max-w-[1608px] mx-auto bg-white/5 backdrop-blur-md backdrop-saturate-150 border-b border-t border-white/20 shadow-lg 
        flex justify-between items-center rounded-[100px]"
      >
        {/* Logo */}
        <Link href="/" className="lg:py-[5px] md:py-1">
          <Image
            src={logo}
            alt="logo"
            width={144.85}
            height={115}
            className="w-[134px] h-[100.6px] sm:w-[144.85px] sm:h-[115px]"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex justify-end items-center gap-2.5">
          <li className="py-[35px]">
            <MenuItem href="/">Home</MenuItem>
          </li>

          {/* Services */}
          <li
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={() => handleMouseLeave("services")}
            onClick={() => handleMenuClick("services")}
            className="py-[35px]"
          >
            <MenuItem isLink={false} isIcon isHovered={openMenu === "services"}>
              Services
            </MenuItem>
            <ServicesDropdown
              isHovered={openMenu === "services"}
              setHovered={() => setOpenMenu("services")}
            />
          </li>

          {/* Channels */}
          <li
            onMouseEnter={() => handleMouseEnter("channels")}
            onMouseLeave={() => handleMouseLeave("channels")}
            onClick={() => handleMenuClick("channels")}
            className="py-[35px]"
          >
            <MenuItem isLink={false} isIcon isHovered={openMenu === "channels"}>
              Channels
            </MenuItem>
            <ChannelsDropdown
              isHovered={openMenu === "channels"}
              setHovered={() => setOpenMenu("channels")}
            />
          </li>

          {/* About Us */}
          <li
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={() => handleMouseLeave("about")}
            onClick={() => handleMenuClick("about")}
            className="py-[35px]"
          >
            <MenuItem isLink={false} isIcon isHovered={openMenu === "about"}>
              About Us
            </MenuItem>
            <AboutUsDropdown
              isHovered={openMenu === "about"}
              setHovered={() => setOpenMenu("about")}
            />
          </li>

          <li className="py-[35px]">
            <MenuItem href="/blogs">Insights</MenuItem>
          </li>

          <li className="py-[35px]">
            <Link
              href="/contact"
              className="px-[30px] py-3 bg-[#FAF8F1] text-nowrap text-text-dark-blue hover:bg-bg-toxic-blue hover:text-white text-base leading-[130%] font-bold rounded-[100px]"
            >
              Get in touch
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`xl:hidden ${
            isOpen ? "bg-bg-dark-purple" : "bg-bg-light-blue"
          } w-[38px] h-[38px] rounded-full flex justify-center items-center`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <div>
              <NavCrossIcon />
            </div>
          ) : (
            <div className="space-y-[5px]">
              <div className="w-[16.66px] h-[2px] bg-bg-minty-blue rounded-full"></div>
              <div className="w-[16.66px] h-[2px] bg-bg-minty-blue rounded-full"></div>
              <div className="w-[16.66px] h-[2px] bg-bg-minty-blue rounded-full"></div>
            </div>
          )}
        </button>

        {/* Mobile Menu */}
        <MobileNavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </header>
  );
};

export default Navbar;
