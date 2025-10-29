
// import { TNavbarDropdownMainMenuProps } from "@/types/TNavbarDropdownMainMenuProps";
import Link from "next/link";
import React from "react";
import ButtonText from "../shared/ButtonText";

const NavbarDowndownMenuItem = ({
  isHovered,
  setIsHovered,
  dropdownMenuIndex,
  setDropdownMenuIndex,
  dropdownMenuIcon,
  dropdownMenuName,
  index,
  activeBgColor,
  activeTextColor,
  className,
  dropdownMenuLink,
  isLastItem = false,
}: any ) => {
  return (
    <div>
      <Link
        href={dropdownMenuLink || "/solutions"}
        onClick={() => isHovered && setIsHovered(false)}
      >
        <div
          onMouseOver={() => setDropdownMenuIndex(index)}
          className={`group p-6 pt-[25.5px] pb-[26.5px] ${
            index === dropdownMenuIndex && activeBgColor
          } ${
            !isLastItem && "border-b border-[#FFFFFF1A]"
          } flex justify-start items-center gap-2.5 cursor-pointer transition-all duration-[400ms] ease-in-out ${className}`}
        >
          <div className="w-8 h-8">{dropdownMenuIcon}</div>
          <ButtonText
            className={` ${
              index === dropdownMenuIndex
                ? activeTextColor
                : "text-text-light-blue"
            } transition-all duration-[400ms] ease-in-out`}
          >
            {dropdownMenuName}
          </ButtonText>
        </div>
      </Link>
    </div>
  );
};

export default NavbarDowndownMenuItem;
