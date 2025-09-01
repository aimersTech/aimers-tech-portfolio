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
    <nav className="bg-black text-white z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 flex items-center justify-between py-2 ">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="block">
            <Image
              src={logo}
              alt="AIMERS Logo"
              width={144}
              height={76}
              className="h-auto w-[120px] md:w-[144px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-8 text-sm md:text-base font-medium">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
          <Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact us</Link>
          <Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link>
          <Link href="/blogs" className="hover:text-cyan-400 transition-colors">Insights</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-cyan-400 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-cyan-500">
          <nav className="flex flex-col items-center py-4 space-y-4 text-sm font-medium">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact us</Link>
            <Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link>
            <Link href="/blogs" className="hover:text-cyan-400 transition-colors">Insights</Link>
          </nav>
        </div>
      )}
    </nav>

  );
}