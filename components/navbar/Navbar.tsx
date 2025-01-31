"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeroImage from "../../assets/static/stacklogo.png";
import Button from "../Button";
import PopupForm from "../PopupForm";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
      <nav className="sticky top-0 bg-[#EFF1F5]/25 backdrop-blur-md border border-white w-full h-auto z-[999]">
        <div className="max-w-7xl mx-auto px-2 flex flex-row justify-between items-center h-12 md:h-20">
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

          <div className="hidden lg:flex flex-row justify-center items-center gap-x-6">
            <Link
              href="/about"
              className="text-[16px] text-gray-700 hover:text-gray-900 transition-all tracking-wide"
            >
              About Us
            </Link>
            <Link
              href="/products"
              className="text-[16px] text-gray-700 hover:text-gray-900 transition-all tracking-wide"
            >
              Products
            </Link>
            <a
              href="https://developer.stackintel.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] tracking-wide text-gray-700 hover:text-gray-900 transition-all"
            >
              Developers
            </a>
            <Link
              className="text-[16px] text-gray-700 hover:text-gray-900 transition-all tracking-wide"
              href="/contacts"
            >
              Contact Us
            </Link>

            {/* Option B: Keep Button and Redirect Using window.open */}

            <button
              onClick={handleOpenModal}
              className="hidden lg:block text-gray-700 hover:text-gray-900 transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Login Button */}
          <div className="hidden lg:flex items-center">
            <Button buttonText={"Login"} onClick={handleLogin} />
          </div>

          {/* Hamburger menu */}
          <button className="block lg:hidden" onClick={handleMobileMenu}>
            <RxHamburgerMenu size={24} />
          </button>
        </div>
      </nav>

      {mobileMenu && (
        <div className="absolute w-[40%] top-16 right-0 border border-white p-6 rounded-lg lg:hidden bg-gray-100 flex flex-col justify-center items-center gap-y-[1em] shadow-md">
          <Link
            href="/about"
            className="text-[16px] tracking-wide text-gray-700 hover:text-gray-900 transition-all"
          >
            About Us
          </Link>
          <Link
            href="/products"
            className="text-[16px] tracking-wide text-gray-700 hover:text-gray-900 transition-all"
          >
            Products
          </Link>
          <a
            href="http://45.119.13.152:5000/apix/cms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] tracking-wide text-gray-700 hover:text-gray-900 transition-all"
          >
            Developers
          </a>
          <Link
            className="text-[16px] tracking-wide text-gray-700 hover:text-gray-900 transition-all"
            href="/contacts"
          >
            Contact Us
          </Link>

          {/* Option A: Replace Button with Anchor Tag */}
          <div className="hidden lg:flex items-center mr-6">
            <a
              onClick={handleOpenModal}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </a>
          </div>

          {/* Option B: Keep Button and Redirect Using window.open */}
          {/* 
          <button
            onClick={() => window.open("https://corporate.stackintel.in/", "_blank", "noopener,noreferrer")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </button>
          */}

          <Button buttonText={"Login"} onClick={handleLogin} />
        </div>
      )}

      {/* PopupForm Modal */}
      <PopupForm
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default Navbar;
