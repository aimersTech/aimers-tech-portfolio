"use client";

import React, { useState } from "react";
import NavbarDowndownMenuItemMobile from "./NavbarDowndownMenuItemMobile";

const ServicesDropdownMobile = ({
  isHovered,
  setHovered,
  setIsOpen,
}: {
  isHovered: boolean;
  setHovered: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [servicesIndex, setServicesIndex] = useState(0);

  return (
    <div className={`${isHovered ? "max-h-[1000px]" : "max-h-0"} overflow-hidden transition-all duration-1000 ease-in-out`}>
      <NavbarDowndownMenuItemMobile
        isHovered={isHovered}
        setIsHovered={setHovered}
        dropdownMenuIndex={servicesIndex}
        setDropdownMenuIndex={setServicesIndex}
        dropdownMenuName="Ideation"
        index={0}
        activeBgColor="bg-bg-light-blue"
        activeTextColor="text-text-dark-blue"
        dropdownMenuLink="/services/ideation"
        setIsOpen={setIsOpen}
      />

      <NavbarDowndownMenuItemMobile
        isHovered={isHovered}
        setIsHovered={setHovered}
        dropdownMenuIndex={servicesIndex}
        setDropdownMenuIndex={setServicesIndex}
        dropdownMenuName="Design & UX"
        index={1}
        activeBgColor="bg-bg-light-blue"
        activeTextColor="text-text-dark-blue"
        dropdownMenuLink="/services/design"
        setIsOpen={setIsOpen}
      />

      <NavbarDowndownMenuItemMobile
        isHovered={isHovered}
        setIsHovered={setHovered}
        dropdownMenuIndex={servicesIndex}
        setDropdownMenuIndex={setServicesIndex}
        dropdownMenuName="Development"
        index={2}
        activeBgColor="bg-bg-light-blue"
        activeTextColor="text-text-dark-blue"
        dropdownMenuLink="/services/development"
        setIsOpen={setIsOpen}
      />

      <NavbarDowndownMenuItemMobile
        isHovered={isHovered}
        setIsHovered={setHovered}
        dropdownMenuIndex={servicesIndex}
        setDropdownMenuIndex={setServicesIndex}
        dropdownMenuName="Cloud Solutions"
        index={3}
        activeBgColor="bg-bg-light-blue"
        activeTextColor="text-text-dark-blue"
        dropdownMenuLink="/services/cloud"
        setIsOpen={setIsOpen}
      />

  
    </div>
  );
};

export default ServicesDropdownMobile;
