
import Image from "next/image";
import React, { useState } from "react";
import NavbarDropdownMainMenu from "./NavbarDropdownMainMenu";
import NavbarDowndownMenuItem from "./NavbarDowndownMenuItem";


const AboutUsDropdown = ({
  isHovered,
  setHovered,
}: {
  isHovered: boolean;
  setHovered: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [solutionIndex, setSolutionIndex] = useState(0);

  return (
    <div
      className={`xl:block overflow-hidden ${
        isHovered && "py-[42.25px]"
      } px-[44.12px] bg-bg-dark-blue absolute top-[120px] left-0 w-full ${
        isHovered ? "h-[469.5px]" : "h-0"
      } transition-all duration-[400ms] ease-in-out`}
    >
      <div className="absolute inset-0 z-0 w-full h-full bg-white/10"></div>
      <div className="relative z-[100] flex justify-between items-center gap-[145px]">
        <div className="flex-[3.93] max-w-[392.75px] space-y-10">
          <NavbarDropdownMainMenu
            menuTitle="About Us"
            menuDescription="Here at Aimers, we’re all about a mission. Our connective approach to About Us across different disciplines makes sure you have the perfect team for your project."
            menuLink="/about"
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
              dropdownMenuName="Know Us"
              index={0}
              activeBgColor="bg-bg-light-blue"
              activeTextColor="text-text-dark-blue"
              dropdownMenuLink="/about/know-us"
            />

            <NavbarDowndownMenuItem
              isHovered={isHovered}
              setIsHovered={setHovered}
              dropdownMenuIndex={solutionIndex}
              setDropdownMenuIndex={setSolutionIndex}
              dropdownMenuName="Join the Aimers"
              index={1}
              activeBgColor="bg-bg-light-blue"
              activeTextColor="text-text-dark-blue"
              dropdownMenuLink="/about/join-the-aimers"
            />

            <NavbarDowndownMenuItem
              isHovered={isHovered}
              setIsHovered={setHovered}
              dropdownMenuIndex={solutionIndex}
              setDropdownMenuIndex={setSolutionIndex}
              dropdownMenuName="Contact Us"
              index={2}
              activeBgColor="bg-bg-light-blue"
              activeTextColor="text-text-dark-blue"
              dropdownMenuLink="/about/contact-us"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDropdown;
