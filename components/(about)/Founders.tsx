"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ClientLogo1 from "../../assets/about/logo1.png";
import ClientLogo2 from "../../assets/about/logo2.png";
import ClientLogo3 from "../../assets/about/logo3.png";
import { FaLinkedinIn } from "react-icons/fa";

const ScaleItems = [
  {
    id: 1,
    name: "Salil Chaturvedi",
    title: "Founder & CEO",
    description:
      "Founded and exited two startups, taking them from product stage to successful exitStrong background in both sales strategy and product developmentDeeply embedded in the Fintech community, with extensive connections to large Fintech clients and industry leaders",
    image: ClientLogo1,
  },
  {
    id: 2,
    name: "Salil Chaturvedi",
    title: "Founder & CEO",
    description:
      "Founded and exited two startups, taking them from product stage to successful exitStrong background in both sales strategy and product developmentDeeply embedded in the Fintech community, with extensive connections to large Fintech clients and industry leaders",
    image: ClientLogo2,
  },
  {
    id: 3,
    name: "Salil Chaturvedi",
    title: "Founder & CEO",
    description:
      "Founded and exited two startups, taking them from product stage to successful exitStrong background in both sales strategy and product developmentDeeply embedded in the Fintech community, with extensive connections to large Fintech clients and industry leaders",
    image: ClientLogo3,
  },
];

const Founders = () => {
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
          Meet Our Leadership Team
        </motion.p>
        <motion.p
          className="text-4xl text-center lg:text-left font-light"
          variants={itemVariants}
        >
          Meet the Visionaries behind Stackintel
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
        className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 md:gap-x-[1em] gap-y-[2em] md:gap-y-[2em] mt-12 lg:mt-0"
        variants={containerVariants}
      >
        {ScaleItems.map((item) => (
          <motion.div
            key={item.id}
            className="flex flex-col  bg-white rounded-lg border-white/25 filter backdrop-blur-sm justify-center items-center gap-x-2 p-12"
            variants={itemVariants}
          >
            <div>
              <Image
                src={item.image}
                alt={`${item.title} logo`}
                height={200}
                width={200}
                className="h-auto w-32 lg:w-24 bg-gray-100 mb-6"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-y-4 w-full">
              <motion.div className="flex flex-row justify-between items-center gap-x-[4em]">
                <div>
                  <motion.p
                    className="text-md text-primaryColor font-semibold"
                    variants={itemVariants}
                  >
                    {item.name}
                  </motion.p>
                  <motion.p
                    className="text-md text-gray-900 font-semibold"
                    variants={itemVariants}
                  >
                    {item.title}
                  </motion.p>
                </div>
                <motion.p className="text-primaryColor border rounded-full border-primaryColor p-2">
                  <FaLinkedinIn size={20} />
                </motion.p>
              </motion.div>
              <motion.p
                className="italic text-gray-500 text-center"
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

export default Founders;
