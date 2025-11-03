
import Link from "next/link";
import React from "react";
import ButtonText from "../shared/ButtonText";
export type TNavbarDropdownMainMenuProps = {
    isHovered: boolean;
    setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
    dropdownMenuIndex: number;
    setDropdownMenuIndex: React.Dispatch<React.SetStateAction<number>>;

    dropdownMenuName: string;
    index: number;
    activeBgColor: string;
    activeTextColor: string;
    className?: string;
    dropdownMenuLink?: string;
    isLastItem?: boolean;
}

const NavbarDowndownMenuItem = ({
  isHovered,
  setIsHovered,
  dropdownMenuIndex,
  setDropdownMenuIndex,
  dropdownMenuName,
  index,
  activeBgColor,
  activeTextColor,
  className,
  dropdownMenuLink,
  isLastItem = false,
}: TNavbarDropdownMainMenuProps ) => {
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
