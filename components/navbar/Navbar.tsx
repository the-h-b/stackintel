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
    window.location.href = "https://corporate.stackintel.in/";
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

          <div className="hidden lg:flex flex-row justify-center items-center gap-x-[1.5em]">
            <Link href="/about" className="text-[16px] tracking-wide">
              About Us
            </Link>
            <Link href="/products" className="text-[16px] tracking-wide">
              Products
            </Link>
            <Link className="text-[16px] tracking-wide" href="/contacts">
              Contact Us
            </Link>
            <a
              href="https://stackintel-team.postman.co/workspace/Team-Workspace~37e40ee7-a79a-41f7-8c91-53e7916c54fa/collection/39119156-c2b545aa-930e-4dba-be90-bcfec7fa0890"
              className="text-[16px] tracking-wide"
            >
              Developer
            </a>
            <div className="hidden lg:flex items-center mr-6">
              <button onClick={handleOpenModal}>Get Started</button>
            </div>
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
          <Link
            className="text-[16px] tracking-wide text-gray-700 hover:text-gray-900 transition-all"
            href="/contacts"
          >
            Contact Us
          </Link>
          <a
            href="https://stackintel-team.postman.co/workspace/Team-Workspace~37e40ee7-a79a-41f7-8c91-53e7916c54fa/collection/39119156-c2b545aa-930e-4dba-be90-bcfec7fa0890"
            className="text-[16px] tracking-wide text-gray-700 hover:text-gray-900 transition-all tracking-wide"
          >
            Developer
          </a>
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
