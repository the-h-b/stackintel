"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import BackgroundBlurImage from "../../../assets/static/background/hero-blur.svg";
import BackgroundBlurImage2 from "../../../assets/static/background/hero-blur2.svg";
import { motion } from "framer-motion";
import PopupForm from "@/components/PopupForm";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger the animation of children by 0.3 seconds
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col h-screen lg:flex-row lg:justify-between justify-center items-center gap-y-4">
      {/* Left Column with Staggered Animation */}
      <motion.div
        className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-y-6 md:w-[50%]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Trigger every time the element is 20% in view
      >
        <motion.h1
          className="text-4xl md:text-6xl text-center lg:text-left text-primaryColor"
          variants={itemVariants}
        >
          Revolutionalize <br /> Card Issuing.
        </motion.h1>
        <motion.h6
          className="text-lg text-center lg:text-left text-gray-700 w-[95%] md:w-[80%]"
          variants={itemVariants}
        >
          Empowering fintechs, traditional banks, and digital pioneers to
          disrupt the card game like never before.
        </motion.h6>
        <motion.div variants={itemVariants}>
          <Button buttonText={"Book Demo"} onClick={handleOpenModal} />
        </motion.div>
      </motion.div>

      {/* Background Blur Images */}
      <Image
        src={BackgroundBlurImage}
        alt="background-image"
        height={500}
        width={600}
        className="h-auto w-[18%] absolute -top-10 left-0"
      />
      <Image
        src={BackgroundBlurImage2}
        alt="background-image"
        height={500}
        width={600}
        className="h-auto w-[18%] absolute top-0 left-10"
      />

      {/* Right Column */}
      <div className="w-full md:w-[90%]">
        <video
          src="/atm-alpha.webm"
          autoPlay
          loop
          muted
          className="h-auto w-[100%]"
        />
      </div>
      <PopupForm
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};

export default Hero;
