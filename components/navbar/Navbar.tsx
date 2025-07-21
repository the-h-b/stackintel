"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeroImage from "../../assets/static/stacklogo.png";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleLogin = () => {
    window.open(
      "http://corporates.stackintel.in/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <nav className="sticky top-0 bg-gradient-to-r from-white/40 via-blue-50/30 to-white/40 backdrop-blur-2xl border-b border-white/40 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)] w-full h-auto z-[999]">
        <div className="max-w-7xl mx-auto px-4 flex flex-row justify-between items-center h-14 md:h-20">
          {/* Hero Image */}
          <Link href="/">
            <Image
              src={HeroImage}
              alt="hero-image"
              height={200}
              width={500}
              className="h-auto w-[35%] md:w-[30%] lg:w-[30%] cursor-pointer"
            />
          </Link>

          <div className="hidden lg:flex flex-row justify-center items-center gap-x-8">
            <Link
              href="/about"
              className="relative text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 tracking-wide group py-2"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            
            <Link
              href="/products"
              className="relative text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 tracking-wide group py-2"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            
            <a
              href="https://developer.stackintel.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 tracking-wide group py-2"
            >
              Developers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
            
            <Link
              className="relative text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 tracking-wide group py-2"
              href="/contacts"
            >
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          </div>

          {/* Login Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={handleLogin}
              className="px-6 py-2.5 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl border border-gray-200 hover:bg-white hover:text-blue-600 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Login
            </button>
          </div>

          {/* Hamburger menu */}
          <button
            className="block lg:hidden p-2 rounded-lg hover:bg-white/20 transition-all duration-300"
            onClick={handleMobileMenu}
            aria-label="Open mobile menu"
            title="Open mobile menu"
          >
            <RxHamburgerMenu size={24} className="text-gray-700 hover:text-blue-600" />
          </button>
        </div>
      </nav>

      {mobileMenu && (
        <div className="absolute w-[70%] top-16 right-4 border border-white/30 p-6 rounded-2xl lg:hidden bg-white/95 backdrop-blur-xl flex flex-col justify-center items-center gap-y-4 shadow-2xl animate-slide-in-from-top-2">
          <Link
            href="/about"
            className="text-base font-medium tracking-wide text-gray-700 hover:text-blue-600 transition-all duration-300 py-2"
            onClick={() => setMobileMenu(false)}
          >
            About Us
          </Link>
          
          <Link
            href="/products"
            className="text-base font-medium tracking-wide text-gray-700 hover:text-blue-600 transition-all duration-300 py-2"
            onClick={() => setMobileMenu(false)}
          >
            Products
          </Link>
          
          <a
            href="https://developer.stackintel.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium tracking-wide text-gray-700 hover:text-blue-600 transition-all duration-300 py-2"
            onClick={() => setMobileMenu(false)}
          >
            Developers
          </a>
          
          <Link
            className="text-base font-medium tracking-wide text-gray-700 hover:text-blue-600 transition-all duration-300 py-2"
            href="/contacts"
            onClick={() => setMobileMenu(false)}
          >
            Contact Us
          </Link>

          <button
            onClick={() => {
              handleLogin();
              setMobileMenu(false);
            }}
            className="px-6 py-3 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl border border-gray-200 hover:bg-white hover:text-blue-600 hover:border-blue-300 transition-all duration-300 shadow-sm"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
