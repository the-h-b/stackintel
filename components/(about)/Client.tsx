"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ClientLogo1 from "../../assets/about/logo1.png";
import ClientLogo2 from "../../assets/about/logo2.png";
import ClientLogo3 from "../../assets/about/logo3.png";
import ClientLogo4 from "../../assets/about/logo4.png";

const ScaleItems = [
  {
    id: 1,
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: ClientLogo1,
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: ClientLogo2,
  },
  {
    id: 3,
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: ClientLogo3,
  },
  {
    id: 4,
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: ClientLogo4,
  },
];

const Client = () => {
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
      className="flex flex-col lg:flex-row justify-center items-start w-full mt-[4em] md:mt-[6em] lg:mt-[10em] gap-x-[5em] px-4"
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
          Notre environment
        </motion.p>
        <motion.p
          className="text-4xl text-center lg:text-left font-light"
          variants={itemVariants}
        >
          Lorem Ipsum is simply the dummy text of printing
        </motion.p>
        <motion.p
          className="text-md text-center lg:text-left text-gray-600"
          variants={itemVariants}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </motion.p>
      </motion.div>

      <motion.div
        className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 md:gap-x-[2em] gap-y-[2em] md:gap-y-[4em] mt-12 lg:mt-0"
        variants={containerVariants}
      >
        {ScaleItems.map((item) => (
          <motion.div
            key={item.id}
            className="flex flex-col justify-start items-start gap-x-2"
            variants={itemVariants}
          >
            <div>
              <Image
                src={item.image}
                alt={`${item.title} logo`}
                height={200}
                width={200}
                className="h-auto w-32 lg:w-24 bg-gray-100 "
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

export default Client;
