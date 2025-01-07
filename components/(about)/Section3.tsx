"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ScaleLogo from "../../assets/static/scale.png";

const ScaleItems = [
  {
    id: 1,
    title: "Trust",
    description:
      "We prioritize building lasting relationships with our clients by ensuring transparency, reliability, and ethical practices at every step.",
    image: ScaleLogo,
  },
  {
    id: 2,
    title: "Innovation",
    description:
      "Driving progress in the fintech industry by delivering cutting-edge solutions tailored to meet the dynamic needs of businesses worldwide.",
    image: ScaleLogo,
  },
  {
    id: 3,
    title: "Customer-Centricity",
    description:
      "We design our services with a user-first approach, ensuring a seamless, intuitive, and impactful experience for our customers.",
    image: ScaleLogo,
  },
];

const Section3 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <motion.div
      className="flex flex-col lg:flex-row justify-center items-start w-full mt-[4em] md:mt-[6em] lg:mt-[10em] gap-x-[2em] px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        className="w-full lg:w-2/4 flex flex-col justify-center items-center lg:justify-start lg:items-start gap-y-4 md:gap-y-5"
        variants={containerVariants}
      >
        <motion.p className="text-lg text-primaryColor" variants={itemVariants}>
          Our Core Values
        </motion.p>
        <motion.p
          className="text-4xl text-center lg:text-left font-light"
          variants={itemVariants}
        >
          Empowering Fintech with Integrity, Innovation, and Customer-Centricity
        </motion.p>
      </motion.div>

      <motion.div
        className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 md:gap-x-[2em] gap-y-[2em] md:gap-y-[4em] mt-12 lg:mt-0"
        variants={containerVariants}
      >
        {ScaleItems.map((item) => (
          <motion.div
            key={item.id}
            className="flex flex-row justify-start items-start gap-x-2"
            variants={itemVariants}
          >
            <div>
              <Image
                src={item.image}
                alt={`${item.title} logo`}
                height={200}
                width={200}
                className="h-auto w-32 lg:w-28 bg-gray-100 rounded-md border border-white"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-y-4">
              <motion.p
                className="text-lg font-semibold"
                variants={itemVariants}
              >
                {item.title}
              </motion.p>
              <motion.p
                className="italic text-gray-600"
                variants={itemVariants}
              >
                {item.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Section3;
