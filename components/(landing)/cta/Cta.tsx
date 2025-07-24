"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import CTAImage from "../../../assets/static/cta.png";
import { motion } from "framer-motion";
import PopupForm from "@/components/PopupForm";

const Cta = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Define animation variants for the container and text items
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
      },
    },
  };

  return (
    <>
      {/* Animated CTA Section */}
      <motion.div
        className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-x-[6em] mt-[10em] border border-white bg-white/25 backdrop-blur-sm py-6 px-4 md:px-6 lg:px-10 rounded-lg"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the component is in view
      >
        {/* Left Column with Animated Text */}
        <motion.div
          className="flex flex-col justify-start items-start"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl font-normal lg:font-light"
            variants={itemVariants}
          >
            Faster, Simpler, Seamless, Secure
          </motion.h1>
          <motion.p
            className="text-gray-500 mt-4 text-lg"
            variants={itemVariants}
          >
            Introducing a Processing platform designed to prevent fraud before
            it occurs, exceed cardholder expectations, and adapt seamlessly to
            whatever comes next
          </motion.p>
        </motion.div>

        {/* Image Section (Static) */}
        <div className="pt-8 md:pt-0 w-[60%] md:w-[50%] lg:w-[30%]">
          <Image
            src={CTAImage}
            alt="ctaimage"
            height={800}
            width={800}
            className="h-auto w-full"
          />
        </div>
      </motion.div>

      {/* Animated Lower CTA Section */}
      <motion.div
        className="w-full mx-auto flex flex-col justify-center items-center gap-y-4 mt-[4em] px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.p
          className="font-normal text-lg text-gray-500"
          variants={itemVariants}
        >
          Let's Build Greatness Together
        </motion.p>
        <motion.p
          className="text-3xl text-center font-light text-gray-800"
          variants={itemVariants}
        >
          Your Vision. Our Platform. Endless Possibilities
        </motion.p>
        <motion.p
          className="font-normal text-lg text-gray-500 text-center"
          variants={itemVariants}
        >
          Why wait? Let’s reshape payments and make innovation the new norm.
          <br />
          Book Your Demo Now and let’s turn your card-issuing dreams into
          reality.
        </motion.p>
        {/* Button remains static */}
        <Button buttonText="Get Demo" onClick={handleOpenModal} />
      </motion.div>
      <PopupForm
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default Cta;
