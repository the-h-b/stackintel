"use client";

import React from "react";
import Image from "next/image";
import IndustryLogo1 from "../../../assets/static/point1.png";
import IndustryLogo2 from "../../../assets/static/point2.png";
import IndustryLogo3 from "../../../assets/static/point3.png";
import { motion } from "framer-motion";

const industryItems = [
  {
    id: 1,
    title: "Cloud-Native Excellence",
    description:
      "Leverage the unmatched flexibility, speed, and power of our multi-cloud solutions—designed to adapt seamlessly to your needs.",
    image: IndustryLogo1,
  },
  {
    id: 2,
    title: "Scalability at Speed",
    description:
      "Scale effortlessly with high-capacity processing, lightning-fast performance, and rich data insights, ensuring zero disruption as you grow.",
    image: IndustryLogo2,
  },
  {
    id: 3,
    title: "Rich, Actionable Data",
    description:
      "Innovate and customize products faster with deeper insights to connect with customers while cutting operational costs.",
    image: IndustryLogo3,
  },
];

const About = () => {
  // Define animation variants for the container and items
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
    <motion.div
      className="flex flex-col justify-center items-center w-full mt-[2em] md:mt-[4em] lg:mt-[4em] px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.p
        className="text-gray-500 text-md md:text-lg font-medium tracking-wide pb-2 md:pb-5 lg:pb-6 text-center"
        variants={itemVariants}
      >
        Dominating markets with effortless cool
      </motion.p>
      <motion.p
        className="text-3xl text-center font-light pb-2 md:pb-5 lg:pb-6"
        variants={itemVariants}
      >
        The Fix You've Been Looking For
      </motion.p>
      <motion.p
        className="lg:w-[50%] text-lg text-center text-gray-500 pb-2 md:pb-5 lg:pb-6"
        variants={itemVariants}
      >
        24+ years of brilliance: We’re the wizards behind lightning-quick
        launches and worldwide growth.
      </motion.p>

      <motion.div
        className="flex flex-col lg:flex-row justify-center items-center w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        {/* Video Section */}
        <motion.div className="w-full md:w-[50%] mb-6" variants={itemVariants}>
          <video
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            className="h-auto w-full"
          >
            <source src="/atm-alpha.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Industry Items */}
        <motion.div
          className="flex flex-col justify-start lg:w-[40%] gap-y-10 md:gap-y-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
        >
          {industryItems.map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-row justify-start items-start gap-x-4"
              variants={itemVariants}
            >
              <div>
                <Image
                  src={item.image}
                  alt={`${item.title} logo`}
                  height={80}
                  width={80}
                  className="h-auto w-20 md:-mt-1 bg-gray-100 rounded-md border border-white"
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-y-2">
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="italic text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
