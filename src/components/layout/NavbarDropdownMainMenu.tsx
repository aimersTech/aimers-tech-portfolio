
import GreenArrowIcon from "@/styles/Svgs/GreenArrowIcon";
import Link from "next/link";
import React from "react";

const NavbarDropdownMainMenu = ({
  menuTitle,
  menuDescription,
  menuLink,
  setIsHovered,
}: {
  menuTitle: string;
  menuDescription: string;
  menuLink: string;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <h2 className="text-text-light-blue text-4xl">{menuTitle}</h2>

      <p className="mt-6 text-text-light-blue text-lg">
        {menuDescription}
      </p>

      <div
        className={`mt-10 group flex justify-start items-center gap-2.5 hover:gap-[5px] transition-all duration-[400ms] ease-in-out`}
      >
        <div className="w-[20px] group-hover:w-[25px] transition-all duration-[400ms] ease-in-out">
          <GreenArrowIcon className="group-hover:!fill-white" />
        </div>
        <Link
          onClick={() => setIsHovered(false)}
          href={menuLink}
          className="text-text-light-blue transition-all duration-[400ms] ease-in-out text-[18px] leading-[130%] font-bold"
        >
           Overview
        </Link>
      </div>
    </div>
  );
};

export default NavbarDropdownMainMenu;
