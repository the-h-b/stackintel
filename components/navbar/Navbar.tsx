"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeroImage from "../../assets/static/stacklogo.png";
import Button from "../Button";
import PopupForm from "../PopupForm";
import Link from "next/link";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 bg-[#EFF1F5]/25 backdrop-blur-md border border-white w-full h-auto z-[999]">
        <div className="max-w-7xl mx-auto px-2 flex flex-row justify-between items-center h-14 md:h-20">
          {/* Hero Image */}
          <Image
            src={HeroImage}
            alt="hero-image"
            height={200}
            width={500}
            className="h-auto w-[35%] md:w-[20%] lg:w-[15%]"
          />

          <div className="flex flex-row justify-center items-center gap-x-4">
            <Link href="#about-section">About Us</Link>
          </div>

          {/* Get Started Button */}
          <div className="block flex items-center">
            <Button buttonText={"Get Started"} onClick={handleOpenModal} />
          </div>
        </div>
      </nav>

      {/* PopupForm Modal */}
      <PopupForm
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default Navbar;
