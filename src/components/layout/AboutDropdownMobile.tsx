"use client";

import React, { useState } from "react";
import NavbarDowndownMenuItemMobile from "./NavbarDowndownMenuItemMobile";


const AboutDropdownMobile = ({
  isHovered,
  setHovered,
  setIsOpen,
}: {
  isHovered: boolean;
  setHovered: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [aboutIndex, setAboutIndex] = useState(0);

  return (
    <div className={`${isHovered ? "max-h-[1000px]" : "max-h-0"} overflow-hidden transition-all duration-1000 ease-in-out`}>
      <NavbarDowndownMenuItemMobile
        isHovered={isHovered}
        setIsHovered={setHovered}
        dropdownMenuIndex={aboutIndex}
        setDropdownMenuIndex={setAboutIndex}
        dropdownMenuName="Know Us"
        index={0}
        activeBgColor="bg-bg-light-blue"
        activeTextColor="text-text-dark-blue"
        dropdownMenuLink="/about/"
        setIsOpen={setIsOpen}
      />

      <NavbarDowndownMenuItemMobile
        isHovered={isHovered}
        setIsHovered={setHovered}
        dropdownMenuIndex={aboutIndex}
        setDropdownMenuIndex={setAboutIndex}
        dropdownMenuName="Join the Aimers"
        index={1}
        activeBgColor="bg-bg-light-blue"
        activeTextColor="text-text-dark-blue"
        dropdownMenuLink="/about/"
        setIsOpen={setIsOpen}
      />

      <NavbarDowndownMenuItemMobile
        isHovered={isHovered}
        setIsHovered={setHovered}
        dropdownMenuIndex={aboutIndex}
        setDropdownMenuIndex={setAboutIndex}
        dropdownMenuName="Contact Us"
        index={2}
        activeBgColor="bg-bg-light-blue"
        activeTextColor="text-text-dark-blue"
        dropdownMenuLink="/about/"
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default AboutDropdownMobile;
