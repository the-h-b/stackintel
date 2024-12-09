"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ScaleLogo from "../../../assets/static/scale.png";

const ScaleItems = [
  {
    id: 1,
    title: "Cloud-Native Mojo",
    description:
      "Experience unmatched scalability and lightning-fast performance. Our cloud-native infrastructure adapts effortlessly to your business needs, ensuring seamless growth without the typical bottlenecks.",
    image: ScaleLogo,
  },
  {
    id: 2,
    title: "Global Superpowers",
    description:
      "Break barriers and expand your reach with ease. Issue and manage cards across the globe with uninterrupted efficiency, backed by our robust and reliable platform. Empower your business to operate seamlessly.",
    image: ScaleLogo,
  },
  {
    id: 3,
    title: "API's that Wow",
    description:
      "Simplify integration with our sophisticated, developer-friendly APIs. Designed for ease and efficiency, they empower you to seamlessly embed advanced card-issuing capabilities into your ecosystem.",
    image: ScaleLogo,
  },
  {
    id: 4,
    title: "Your ROI",
    description:
      "Achieve faster time-to-market, significantly lower operational costs, and the agility to innovate effortlessly. With our solution, growth becomes second nature, and your business stays ahead of the curve.",
    image: ScaleLogo,
  },
];

const Scale = () => {
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
      className="flex flex-col lg:flex-row justify-center items-center w-full mt-[4em] md:mt-[6em] lg:mt-[10em] gap-x-[5em] px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the component is in view
    >
      {/* Left Column with Animated Text */}
      <motion.div
        className="w-full lg:w-1/4 flex flex-col justify-center items-center lg:justify-start lg:items-start gap-y-4 md:gap-y-5"
        variants={containerVariants}
      >
        <motion.p className="text-lg text-gray-600" variants={itemVariants}>
          Scale without Limit
        </motion.p>
        <motion.p
          className="text-4xl text-center lg:text-left font-light"
          variants={itemVariants}
        >
          Innovation at your <br /> Fingertips
        </motion.p>
        <motion.p
          className="text-md text-center lg:text-left text-gray-600"
          variants={itemVariants}
        >
          Wherever you’re headed, we’re already there. With local expertise and
          round-the-clock support, you’re unstoppable.
        </motion.p>
      </motion.div>

      {/* Right Column with Animated Grid Items */}
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

      {/* Inline Styles for Optional Custom Animations or Responsiveness */}
      {/* You can remove this section if not needed */}
      <style jsx>{`
        /* Example: Adding custom styles if necessary */
      `}</style>
    </motion.div>
  );
};

export default Scale;
