"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
type MobileMenuItemProps = {
  href?: string;
  children: React.ReactNode;
  isIcon?: boolean;
  isMobile?: boolean;
  isLink?: boolean;
  isHovered?: boolean;
  setIsHovered?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isLastItem?: boolean;
};

const MobileMenuItem = ({
  href,
  children,
  isIcon = false,
  // isMobile = false,
  isLink = true,
  isHovered,
  // setIsHovered,
  setIsOpen,
  isLastItem = false,
}: MobileMenuItemProps): React.ReactElement<MobileMenuItemProps> => {
  const pathName = usePathname();

  const getActiveClass = (pathName: string, href: string, isLink: boolean) => {
    if (isLink) {
      if (href === "/") {
        if (pathName === "/") {
          return "bg-[#D0FF7333] text-text-toxic-blue !mx-0";
        } else {
          return "";
        }
      } else if (pathName.includes(href)) {
        return "bg-[#D0FF7333] text-text-toxic-blue !mx-0";
      } else {
        return "";
      }
    } else {
 
      if (pathName.includes(children!.toString()?.toLowerCase())) {
        return "!bg-[#D0FF7333] text-text-toxic-blue !mx-0";
      } else {
        return "";
      }
    }
  };

  return (
    <>
      {isLink ? (
        <Link
          onClick={() => setIsOpen && setIsOpen(false)}
          href={href || "#"}
          className={`group ${getActiveClass(
            pathName,
            href || "/",
            isLink
          )} hover:bg-bg-light-blue text-text-light-blue hover:text-text-dark-blue text-base leading-[130%] font-bold flex justify-start sm:justify-center items-center gap-1.5 transition-all duration-[400ms] ease-in-out`}
        >
          <div className="mx-5 py-[21px] w-full flex justify-between sm:justify-center items-center gap-1.5 border-b border-white/10">
            <span>{children}</span>
            {isIcon &&
              (isHovered ? (
                <span className="text-[18px] leading-[130%] font-bold">-</span>
              ) : (
                <span className="text-[18px] leading-[130%] font-bold">+</span>
              ))}
          </div>
        </Link>
      ) : (
        <div
          // onMouseOver={() => setIsHovered && setIsHovered(true)}
          // onClick={() => setIsHovered && setIsHovered(true)}
          className={`group ${getActiveClass(pathName, href || "/", isLink)} ${
            isHovered && "!bg-bg-light-blue !text-text-dark-blue !mx-0"
          } hover:!bg-bg-light-blue text-text-light-blue hover:text-text-dark-blue text-base leading-[130%] font-bold flex justify-between sm:justify-center items-center gap-1.5 transition-all duration-[400ms] ease-in-out cursor-pointer`}
        >
          <div
            className={`mx-5 py-[21px] w-full flex justify-between sm:justify-center items-center gap-1.5 ${
              !isLastItem && "border-b border-white/10"
            }`}
          >
            <span>{children}</span>
            <span className="w-[16px] h-[23px] flex justify-center items-center">
              {isIcon &&
                (isHovered ? (
                  <span className="text-[18px] leading-[130%] font-bold">
                    -
                  </span>
                ) : (
                  <span className="text-[18px] leading-[130%] font-bold">
                    +
                  </span>
                ))}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenuItem;
