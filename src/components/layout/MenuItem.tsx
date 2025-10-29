"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type MenuItemProps = {
  href?: string;
  children: React.ReactNode;
  isIcon?: boolean;
  isMobile?: boolean;
  isLink?: boolean;
  isHovered?: boolean;
  setIsHovered?: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuItem = ({
  href,
  children,
  isIcon = false,
  isMobile = false,
  isLink = true,
  isHovered,
  setIsHovered,
}: MenuItemProps): React.ReactElement<MenuItemProps> => {
  const pathName = usePathname();

  const getActiveClass = (pathName: string, href: string, isLink: boolean) => {
    if (isLink) {
      if (href === "/") {
        if (pathName === "/") {
          return "bg-[#FAF8F1] text-text-toxic-blue";
        } else {
          return "";
        }
      } else if (pathName.includes(href)) {
        return "bg-[#FAF8F1] text-text-toxic-blue";
      } else {
        return "";
      }
    } else {
      console.log("Hello");
      console.log(children);
      if (pathName.includes(children!.toString()?.toLowerCase())) {
        return "!bg-[#FAF8F1] text-text-toxic-blue";
      } else {
        return "";
      }
    }
  };

  return (
    <>
      {isLink ? (
        <Link
          href={href || "#"}
          className={`group ${getActiveClass(
            pathName,
            href || "/",
            isLink
          )} hover:bg-bg-light-blue ${isMobile ? "px-5" : "px-3 min-[1400px]:px-6"
            } py-3 text-text-light-blue hover:text-text-dark-blue text-base leading-[130%] font-bold flex justify-center items-center gap-1.5 transition-all duration-[400ms] ease-in-out`}
        >
          <span>{children}</span>
          {isIcon &&
            (isHovered ? (
              <span className="text-[18px] leading-[130%] font-bold">-</span>
            ) : (
              <span className="text-[18px] leading-[130%] font-bold">+</span>
            ))}
        </Link>
      ) : (
        <div
          onMouseOver={() => setIsHovered && setIsHovered(true)}
          className={`hover:bg-bg-light-blue ${getActiveClass(
            pathName,
            href || "/",
            isLink
          )} ${isMobile ? "px-6" : "px-3 min-[1400px]:px-6"} ${isHovered && "!bg-bg-light-blue !text-text-dark-blue"
            } py-3 text-text-light-blue hover:text-text-dark-blue text-base leading-[130%] font-bold flex justify-center items-center gap-1.5 transition-all duration-[400ms] ease-in-out cursor-pointer`}
        >
          <span>{children}</span>
          <span className="w-[16px] h-[23px] flex justify-center items-center">
            {isIcon &&
              (isHovered ? (
                <span className="text-[18px] leading-[130%] font-bold">-</span>
              ) : (
                <span className="text-[18px] leading-[130%] font-bold">+</span>
              ))}
          </span>
        </div>
      )}
    </>
  );
};

export default MenuItem;
