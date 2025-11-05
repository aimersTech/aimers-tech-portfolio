"use client";

import React, { useState } from "react";
import NavbarDowndownMenuItemMobile from "./NavbarDowndownMenuItemMobile";

const InsightsDropdownMobile = ({
  isHovered,
  setHovered,
  setIsOpen,
}: {
  isHovered: boolean;
  setHovered: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [capabilityIndex, setCapabilityIndex] = useState(0);

  return (
    <div className={`${isHovered ? "max-h-[1000px]" : "max-h-0"} overflow-hidden transition-all duration-1000 ease-in-out`}>
      <NavbarDowndownMenuItemMobile
        isHovered={isHovered}
        setIsHovered={setHovered}
        dropdownMenuIndex={capabilityIndex}
        setDropdownMenuIndex={setCapabilityIndex}
        dropdownMenuName="Ideation"
        index={0}
        activeBgColor="bg-bg-light-blue"
        activeTextColor="text-text-dark-blue"
        dropdownMenuLink="/Insights"
        setIsOpen={setIsOpen}
      />

      <NavbarDowndownMenuItemMobile
        isHovered={isHovered}
        setIsHovered={setHovered}
        dropdownMenuIndex={capabilityIndex}
        setDropdownMenuIndex={setCapabilityIndex}
        dropdownMenuName="Design & UX"
        index={1}
        activeBgColor="bg-bg-light-blue"
        activeTextColor="text-text-dark-blue"
        dropdownMenuLink="/Insights"
        setIsOpen={setIsOpen}
      />

      <NavbarDowndownMenuItemMobile
        isHovered={isHovered}
        setIsHovered={setHovered}
        dropdownMenuIndex={capabilityIndex}
        setDropdownMenuIndex={setCapabilityIndex}
        dropdownMenuName="Development"
        index={2}
        activeBgColor="bg-bg-light-blue"
        activeTextColor="text-text-dark-blue"
        dropdownMenuLink="/Insights"
        setIsOpen={setIsOpen}
      />

      <NavbarDowndownMenuItemMobile
        isHovered={isHovered}
        setIsHovered={setHovered}
        dropdownMenuIndex={capabilityIndex}
        setDropdownMenuIndex={setCapabilityIndex}
        dropdownMenuName="Cloud Solutions"
        index={3}
        activeBgColor="bg-bg-light-blue"
        activeTextColor="text-text-dark-blue"
        dropdownMenuLink="/Insights"
        setIsOpen={setIsOpen}
      />

  
    </div>
  );
};

export default InsightsDropdownMobile;
