
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileMenuItem from "./MobileMenuItem";
import ServicesDropdownMobile from "./ServicesDropdownMobile";
import ChannelDropdownMobile from "./ChannelDropdownMobile";
import AboutDropdownMobile from "./AboutDropdownMobile";


const MobileNavMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isMobileServicesDropdownHovered, setIsMobileServicesDropdownHovered] =
    useState(false);

  const [
    isMobileChannelsDropdownHovered,
    setIsMobileChannelsDropdownHovered,
  ] = useState(false);

  const [isMobileAboutDropdownHovered, setIsMobileAboutDropdownHovered] =
    useState(false);

  const menuRef = React.useRef<HTMLUListElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && menuRef.current) {
      const top = menuRef.current.getBoundingClientRect().top;
      setHeight(window.innerHeight - top + "px");
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <ul
      ref={menuRef}
      // style={{
      //   maxHeight: isOpen
      //     ? window.innerWidth <= 640
      //       ? "calc(100vh - 78px)"
      //       : "calc(100vh - 160.45px)"
      //     : "0px",
      // }}
      style={{ maxHeight: height }}
      className={`bg-black w-full absolute z-[30] top-[140px] sm:top-[120.45px] left-0 overflow-hidden overflow-y-auto transition-all duration-1000 ease-in-out xl:hidden flex flex-col justify-start items-center ${
        isOpen && "border-t border-border-light-blue/10"
      } nav-scrollbar`}
    >
      <li
        // onMouseOver={() => {
        //   setIsMobileServicesDropdownHovered(true);
        // }}
        onClick={() =>
          setIsMobileServicesDropdownHovered(!isMobileServicesDropdownHovered)
        }
        // onMouseLeave={() => setIsMobileServicesDropdownHovered(false)}
        className="w-full"
      >
        <MobileMenuItem
          isLink={false}
          isIcon={true}
          isHovered={isMobileServicesDropdownHovered}
          setIsHovered={setIsMobileServicesDropdownHovered}
        >
          Services
        </MobileMenuItem>

        <ServicesDropdownMobile
          isHovered={isMobileServicesDropdownHovered}
          setHovered={setIsMobileServicesDropdownHovered}
          setIsOpen={setIsOpen}
        />
      </li>

      <li
        // onMouseOver={() => {
        //   setIsMobileChannelsDropdownHovered(true);
        // }}
        onClick={() =>
          setIsMobileChannelsDropdownHovered(
            !isMobileChannelsDropdownHovered
          )
        }
        // onMouseLeave={() => setIsMobileChannelsDropdownHovered(false)}
        className="w-full"
      >
        <MobileMenuItem
          isLink={false}
          isIcon={true}
          isHovered={isMobileChannelsDropdownHovered}
          setIsHovered={setIsMobileChannelsDropdownHovered}
        >
          Channels
        </MobileMenuItem>

        <ChannelDropdownMobile
          isHovered={isMobileChannelsDropdownHovered}
          setHovered={setIsMobileChannelsDropdownHovered}
          setIsOpen={setIsOpen}
        />
      </li>

      <li
        // onMouseOver={() => {
        //   setIsMobileChannelsDropdownHovered(false);
        // }}
        onClick={() =>
          setIsMobileAboutDropdownHovered(!isMobileAboutDropdownHovered)
        }
        // onMouseLeave={() => setIsMobileAboutDropdownHovered(false)}
        className="w-full"
      >
        <MobileMenuItem
          isLink={false}
          isIcon={true}
          isHovered={isMobileAboutDropdownHovered}
          setIsHovered={setIsMobileAboutDropdownHovered}
        >
          About Us
        </MobileMenuItem>

        <AboutDropdownMobile
          isHovered={isMobileAboutDropdownHovered}
          setHovered={setIsMobileAboutDropdownHovered}
          setIsOpen={setIsOpen}
        />
      </li>

     <li className="w-full">
        <MobileMenuItem href="/blogs" setIsOpen={setIsOpen}>
          Insights
        </MobileMenuItem>
      </li>

      <li className="pt-2.5 pb-[30px]">
        <Link
          onClick={() => setIsOpen && setIsOpen(false)}
          href="/contact-us"
          className="px-[30px] py-3 bg-[#FAF8F1] text-nowrap text-text-dark-blue text-base leading-[130%] font-bold rounded-[100px]"
        >
          Get in touch
        </Link>
      </li>
    </ul>
  );
};

export default MobileNavMenu;
