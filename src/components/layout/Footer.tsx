import Image from "next/image";
import logo from "../../assets/logo.png";
import {
  footerData,
  footerSocialIcons,
} from "@/constants/footerData";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-6 sm:px-6 lg:px-8 py-10 flex flex-col gap-10">
        <div className="flex justify-between flex-wrap gap-8">
          {/* first section with logo  */}
          <div className="flex flex-col gap-5 max-w-sm">
            <div className="flex justify-center xs:justify-start items-center gap-3">
              <Image
                src={logo}
                alt="aimers-tech-logo"
                className="h-10 w-10 md:h-15 md:w-15 rounded-full"
              />
              <h2 className="text-button font-bold font-dmsans text-lg md:text-xl">
                Aimers Tech Global
              </h2>
            </div>
            <p className="text-white font-dmsans text-sm">
              Innovating Tomorrow, Today. We transform ideas into powerful
              digital solutions.
            </p>
            <div className="flex gap-1">
              <MapPin className="text-[#00D9FF]" />
              <p className="text-white font-dmsans text-sm">
                Khagan Bazar, Ashulia, Savar, Dhaka
              </p>
            </div>
          </div>

          {/* company */}
          <div className="flex flex-col gap-3 md:gap-5 mt-3">
            <div className="w-fit">
              <h2 className="text-white font-bold font-dmsans text-lg md:text-xl">
                {footerData.company.heading}
              </h2>
              <hr className="h-1 text-white" />
            </div>
            {footerData.company.options.map((optn: string, idx: number) => (
              <p key={idx} className="text-white text-sm">
                {optn}
              </p>
            ))}
          </div>

          {/* services */}
          <div className="flex flex-col gap-3 md:gap-5 mt-3">
            <div className="w-fit">
              <h2 className="text-white font-bold font-dmsans text-lg md:text-xl">
                {footerData.services.heading}
              </h2>
              <hr className="h-1 text-white" />
            </div>
            {footerData.services.options.map((optn: string, idx: number) => (
              <p key={idx} className="text-white text-sm">
                {optn}
              </p>
            ))}
          </div>

          {/* support */}
          <div className="flex flex-col gap-3 md:gap-5 mt-3">
            <div className="w-fit">
              <h2 className="text-white font-bold font-dmsans text-lg md:text-xl">
                {footerData.support.heading}
              </h2>
              <hr className="h-1 text-white" />
            </div>
            {footerData.support.options.map((optn: string, idx: number) => (
              <p key={idx} className="text-white text-sm">
                {optn}
              </p>
            ))}
          </div>
        </div>

        {/* Socials and Copyrights */}
        <div className="relative flex flex-col gap-3 md:gap-0 md:flex-row w-full items-center justify-between">
          {/* Left side - icons */}
          <div className="flex gap-3 md:gap-5 items-center">
            {footerSocialIcons.map(({ href, target, rel, icon: Icon }, idx) => (
              <a key={idx} href={href} target={target} rel={rel}>
                <Icon className="text-[#00D9FF] h-6 w-6 hover:text-cyan-300 cursor-pointer" />
              </a>
            ))}
          </div>

          {/* Center - copyright */}
          <p className="md:absolute md:top-0 left-1/2 md:-translate-x-1/2 text-white text-sm">
            © {new Date().getFullYear()} Aimers Tech. All rights reserved.
          </p>
        </div>

        <hr className="bg-white" />
      </div>
    </footer>
  );
}
