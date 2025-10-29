
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const NavbarDowndownMenuItemMobile = ({
  dropdownMenuIcon,
  dropdownMenuName,
  className,
  dropdownMenuLink,
  isLastItem = false,
  isCaseStudy = false,
  isOverview = false,
  setIsOpen,
  secondaryClassName,
}: any & {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  secondaryClassName?: string;
}) => {
  return (
    <div>
      <Link
        onClick={() => setIsOpen && setIsOpen(false)}
        href={dropdownMenuLink || "/services"}
      >
        <div
          className={`group hover:bg-bg-light-blue flex justify-start sm:justify-center items-center gap-[17px] cursor-pointer transition-all duration-[400ms] ease-in-out ${className}`}
        >
          <div
            className={`mx-5 py-[18.5px] w-full flex justify-start sm:justify-center items-center gap-[17px] ${
              !isLastItem && "border-b border-[#FFFFFF1A]"
            }`}
          >
            <div
              className={`${
                  !isOverview && "w-[26px] h-[26px]"
              }`}
            >
              {dropdownMenuIcon}
            </div>
            <Button
              className={`!text-[16px] text-text-light-blue group-hover:text-text-dark-blue transition-all duration-[400ms] ease-in-out ${secondaryClassName}`}
            >
              {dropdownMenuName}
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NavbarDowndownMenuItemMobile;
