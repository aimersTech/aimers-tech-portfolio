"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from '../../assets/Aimers logo.svg';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full container mx-auto px-4 sm:px-6 lg:px-8 lg:ps-0 z-50   text-white ">
      <div className="relative ">
        {/* Hexagon pattern background */}
        {/* <div className="absolute inset-0 opacity-70">
          <div className="w-full h-full bg-[linear-gradient(120deg,#0ff_1px,transparent_1px),linear-gradient(60deg,#0ff_1px,transparent_1px)] bg-[length:60px_104px]"></div>
        </div> */}

        {/* Navbar Content */}
        <div className="relative  flex justify-between items-center py-1 px-4 ">
          {/* Logo */}
          <div className="font-bold text-xl md:text-2xl  ">
            <Link href="/">
            <Image src={logo} alt="AIMERS Logo" width={144} height={76} className="" />
            </Link>
         
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6 md:gap-8 text-sm md:text-base font-medium">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact us</Link>
            <Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link>
            <Link href="/blogs" className="hover:text-cyan-400 transition-colors">Insights</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-cyan-400 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black border-t border-cyan-500">
            <nav className="flex flex-col items-center py-4 space-y-4">
               <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact us</Link>
            <Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link>
            <Link href="/blogs" className="hover:text-cyan-400 transition-colors">Insights</Link>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
}