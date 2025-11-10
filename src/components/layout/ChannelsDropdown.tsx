

import React, { useState } from "react";
import NavbarDropdownMainMenu from "./NavbarDropdownMainMenu";
import NavbarDowndownMenuItem from "./NavbarDowndownMenuItem";


const ChannelsDropdown = ({
  isHovered,
  setHovered,
}: {
  isHovered: boolean;
  setHovered: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [solutionIndex, setSolutionIndex] = useState(0);

  return (
    <div
      className={`xl:block rounded-3xl overflow-hidden ${isHovered && "py-[42.25px]"
        } px-[44.12px] bg-black absolute top-[108px] left-0 w-full ${isHovered ? "h-[400.5px]" : "h-0"
        } transition-all duration-[400ms] ease-in-out`}
    >
      <div className="absolute inset-0 z-0 w-full h-full bg-white/10"></div>
      <div className="relative z-[100] flex justify-between items-center gap-[145px]">
        <div className="flex-[3.93] max-w-[392.75px] space-y-10">
          <NavbarDropdownMainMenu
            menuTitle="Channels"
            menuDescription="Here at Aimers, we’re all about a channel. Our connective approach to services across different disciplines makes sure you have the perfect team for your project."
            menuLink="/channels"
            setIsHovered={setHovered}
          />
        </div>

        <div className="flex-[9.73] max-w-[972.73px] flex justify-between items-center gap-[96.17px]">
          <div className="w-full flex-[5.02] max-w-[502px]">
            <NavbarDowndownMenuItem
              isHovered={isHovered}
              setIsHovered={setHovered}
              dropdownMenuIndex={solutionIndex}
              setDropdownMenuIndex={setSolutionIndex}
              dropdownMenuName="Facebook"
              index={0}
              activeBgColor="bg-bg-light-blue"
              activeTextColor="text-text-dark-blue"
              dropdownMenuLink="https://www.facebook.com/profile.php?id=61578696980378"
            />

            <NavbarDowndownMenuItem
              isHovered={isHovered}
              setIsHovered={setHovered}
              dropdownMenuIndex={solutionIndex}
              setDropdownMenuIndex={setSolutionIndex}
              dropdownMenuName="LinkedIn"
              index={2}
              activeBgColor="bg-bg-light-blue"
              activeTextColor="text-text-dark-blue"
              dropdownMenuLink="https://www.linkedin.com/company/aimers-tech-global"
            />
            <NavbarDowndownMenuItem
              isHovered={isHovered}
              setIsHovered={setHovered}
              dropdownMenuIndex={solutionIndex}
              setDropdownMenuIndex={setSolutionIndex}
              dropdownMenuName="GitHub"
              index={3}
              activeBgColor="bg-bg-light-blue"
              activeTextColor="text-text-dark-blue"
              dropdownMenuLink="https://github.com/aimersTech"
            />

            <NavbarDowndownMenuItem
              isHovered={isHovered}
              setIsHovered={setHovered}
              dropdownMenuIndex={solutionIndex}
              setDropdownMenuIndex={setSolutionIndex}
              dropdownMenuName="YouTube"
              index={4}
              activeBgColor="bg-bg-light-blue"
              activeTextColor="text-text-dark-blue"
              dropdownMenuLink="https://www.youtube.com/@aimers.tech.global"
              isLastItem={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelsDropdown;
