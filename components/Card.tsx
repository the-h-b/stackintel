"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface CardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const Card = ({ image, title, description }: CardProps) => {
  // Define animation variants for the text elements
  const textVariants = {
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
    <div className="relative overflow-hidden flex flex-col items-center w-[300px] h-[500px] rounded-lg border border-white backdrop-blur-md bg-white/25 px-8 py-[2em]">
      {/* Image Section */}
      <div className="h-auto w-[90%] overflow-hidden rounded-md mb-4">
        <Image
          src={image}
          alt="services-image"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute top-64 left-6 w-[90%]">
        {/* Title with Animation */}
        <motion.p
          className="text-gray-950 text-left font-normal text-xl mb-2"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
        >
          {title}
        </motion.p>
        {/* Description with Animation */}
        <motion.p
          className="text-gray-700 text-left text-md"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

export default Card;
