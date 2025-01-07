"use client";

import React from "react";
import { motion } from "framer-motion";

const Info = () => {
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
    <>
      {/* Animated CTA Section */}
      <motion.div
        className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-x-[2em] mt-[4em] bg-[#444CE7]/10 backdrop-blur-md py-16 px-4 md:px-6 lg:px-16 rounded-lg"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div
          className="flex flex-col justify-start items-start md:w-[50%]"
          variants={containerVariants}
        >
          <motion.h1
            className="text-lg text-primaryColor font-semibold"
            variants={itemVariants}
          >
            Notre Vision
          </motion.h1>
          <motion.p
            className="text-gray-800 mt-2 text-2xl font-semibold leading-normal"
            variants={itemVariants}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </motion.p>
        </motion.div>
        <div className="pt-8 md:pt-0 w-[100%] md:w-[50%]">
          <p className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500sLorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500sLorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Info;
