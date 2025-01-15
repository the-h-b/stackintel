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

  return (
    <>
      <nav className="sticky top-0 bg-[#EFF1F5]/25 backdrop-blur-md border border-white w-full h-auto z-[999]">
        <div className="max-w-7xl mx-auto px-2 flex flex-row justify-between items-center h-12 md:h-20">
          {/* Hero Image */}
          <Link href="/" className="w-[20%]">
            <Image
              src={HeroImage}
              alt="hero-image"
              height={200}
              width={500}
              className="h-auto w-[35%] md:w-[20%] lg:w-[70%]"
            />
          </Link>

          <div className="hidden lg:flex flex-row justify-center items-center gap-x-[4em]">
            <Link href="/about" className="text-[16px] tracking-wide">
              About Us
            </Link>
            <Link
              href="#features-section"
              className="text-[16px] tracking-wide"
            >
              Features
            </Link>
            <Link href="#scale-section" className="text-[16px] tracking-wide">
              Services
            </Link>
            <Link href="/products" className="text-[16px] tracking-wide">
              Products
            </Link>
            <Link className="text-[16px] tracking-wide" href="/contacts">
              Contact Us
            </Link>
          </div>

          {/* Get Started Button */}
          <div className="hidden lg:flex items-center">
            <Button buttonText={"Get Started"} onClick={handleOpenModal} />
          </div>

          {/* Hamburger menu */}
          <button className="block lg:hidden " onClick={handleMobileMenu}>
            <RxHamburgerMenu size={24} />
          </button>
        </div>
      </nav>

      {mobileMenu && (
        <div className="absolute top-24 right-2 border border-white p-6 rounded-lg lg:hidden flex flex-col justify-center items-center gap-y-[1em]">
          <Link
            href="#about-section"
            className="text-[16px] tracking-wide text-gray-700 hover:text-gray-900 transition-all"
          >
            About Us
          </Link>
          <Link
            href="#service-section"
            className="text-[16px] tracking-wide text-gray-700 hover:text-gray-900 transition-all"
          >
            Features
          </Link>
          <Link
            href="#scale-section"
            className="text-[16px] tracking-wide text-gray-700 hover:text-gray-900 transition-all"
          >
            Services
          </Link>
          {/* <Link
            href="/products"
            className="text-[16px] tracking-wide text-gray-700 hover:text-gray-900 transition-all"
          >
            Products
          </Link> */}
          <Link
            className="text-[16px] tracking-wide text-gray-700 hover:text-gray-900 transition-all"
            href="/contacts"
          >
            Contact Us
          </Link>
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
