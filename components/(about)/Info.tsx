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
            Our Vision
          </motion.h1>
          <motion.p
            className="text-gray-800 mt-2 text-2xl font-semibold leading-normal"
            variants={itemVariants}
          >
            At StackIntel, our vision is to transform the fintech industry by
            creating secure, scalable, and innovative payment solutions that
            empower businesses worldwide.
          </motion.p>
        </motion.div>
        <div className="pt-8 md:pt-0 w-[100%] md:w-[50%]">
          <p className="text-gray-700">
            StackIntel is committed to revolutionizing payment processing with
            cutting-edge solutions for prepaid, debit, and credit cards. We
            deliver seamless integration, operational efficiency, and advanced
            fraud management, ensuring transparency and reliability for all our
            clients. Our mission is to empower businesses by offering end-to-end
            solutions tailored to their unique needs.
          </p>
          <p className="text-gray-700 mt-4">
            With a global reach and a dedication to innovation, StackIntel
            enables faster go-to-market solutions and a customer-first approach,
            making us a trusted partner for businesses across the fintech
            spectrum.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Info;
