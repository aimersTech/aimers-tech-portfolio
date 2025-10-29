"use client";

import React, { useState } from "react";
import NavbarDowndownMenuItemMobile from "./NavbarDowndownMenuItemMobile";

const ChannelDropdownMobile = ({
  isHovered,
  setHovered,
  setIsOpen,
}: {
  isHovered: boolean;
  setHovered: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [channelsIndex, setChannelsIndex] = useState(0);

  return (
    <div className={`${isHovered ? "max-h-[1000px]" : "max-h-0"} overflow-hidden transition-all duration-1000 ease-in-out`}>
      <NavbarDowndownMenuItemMobile
        isHovered={isHovered}
        setIsHovered={setHovered}
        dropdownMenuIndex={channelsIndex}
        setDropdownMenuIndex={setChannelsIndex}
        dropdownMenuName="Facebook"
        index={0}
        activeBgColor="bg-bg-light-green"
        activeTextColor="text-text-dark-green"
        dropdownMenuLink="/"
        setIsOpen={setIsOpen}
      />

      <NavbarDowndownMenuItemMobile
        isHovered={isHovered}
        setIsHovered={setHovered}
        dropdownMenuIndex={channelsIndex}
        setDropdownMenuIndex={setChannelsIndex}
        dropdownMenuName="LinkedIn"
        index={1}
        activeBgColor="bg-bg-light-green"
        activeTextColor="text-text-dark-green"
        dropdownMenuLink="/"
        setIsOpen={setIsOpen}
      />

      <NavbarDowndownMenuItemMobile
        isHovered={isHovered}
        setIsHovered={setHovered}
        dropdownMenuIndex={channelsIndex}
        setDropdownMenuIndex={setChannelsIndex}
        dropdownMenuName="GitHub"
        index={2}
        activeBgColor="bg-bg-light-green"
        activeTextColor="text-text-dark-green"
        dropdownMenuLink="/"
        setIsOpen={setIsOpen}
      />

      <NavbarDowndownMenuItemMobile
        isHovered={isHovered}
        setIsHovered={setHovered}
        dropdownMenuIndex={channelsIndex}
        setDropdownMenuIndex={setChannelsIndex}
        dropdownMenuName="YouTube"
        index={3}
        activeBgColor="bg-bg-light-green"
        activeTextColor="text-text-dark-green"
        dropdownMenuLink="/"
        setIsOpen={setIsOpen}
        lastItem={true}
      />
    </div>
  );
};

export default ChannelDropdownMobile;
