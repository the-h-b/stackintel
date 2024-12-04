"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import InnovationImage1 from "../../../assets/static/innovation/innovation1.png";
import InnovationImage2 from "../../../assets/static/innovation/innovation2.png";
import InnovationImage3 from "../../../assets/static/innovation/innovation3.png";
import InnovationImage4 from "../../../assets/static/innovation/innovation3.png";

const Innovation = () => {
  const content = [
    {
      title: "Accelerated Growth & Faster Launches",
      description:
        "Get ahead of the competition with rapid deployment. Our advanced tools and seamless integration ensure that your products hit the market in record time, letting you seize opportunities before anyone else.",
    },
    {
      title: "Cost Efficiency",
      description:
        "Cut down on unnecessary overheads and operational expenses. Our scalable, cloud-native solutions allow you to grow without the burden of skyrocketing costs, so you can focus on innovation and expansion.",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Deliver a seamless and intuitive payment experience that your customers will love. From instant card issuance to secure and hassle-free transactions, we help you foster loyalty and drive customer retention.",
    },
    {
      title: "Operational Excellence",
      description:
        "Gain access to real-time, actionable insights that keep you in control. Our enriched data analytics and state-of-the-art fraud prevention systems ensure smooth operations, letting you focus on what matters most—your business growth.",
    },
  ];

  const images = [
    InnovationImage1,
    InnovationImage2,
    InnovationImage3,
    InnovationImage4,
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[10em] gap-y-4 md:gap-y-6">
        <p className="text-gray-500 text-lg font-medium">
          Scalable Innovation at Your Fingertips
        </p>
        <p className="text-3xl text-center font-light text-gray-800">
          What You Gain When You Partner with Us
        </p>
        <p className="text-gray-500 text-center text-lg font-medium">
          Launch anywhere, scale everywhere, and redefine payments on your
          terms.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-2 mt-[6em] md:mt-[8em] lg:mt-[10em] flex gap-x-8">
        {/* Left side: Sticky vertical line and pill */}
        <div className="w-1/4 relative">
          <div className="sticky top-20">
            <div className="relative h-[80vh]">
              {/* Main vertical line */}
              <div className="absolute left-[20px] top-0 w-1 bg-gray-300 h-full" />
              {/* Pill line */}
              <div className="absolute left-[20px] top-0 w-[4px] h-full bg-primaryColor rounded-full" />
            </div>
          </div>
        </div>

        {/* Middle column: Content (Points) */}
        <div className="w-2/4 flex flex-col gap-y-[6em] lg:gap-y-[10em]">
          {content.map((item, index) => (
            <motion.div
              key={index}
              onViewportEnter={() => setActiveIndex(index)}
              // Configure viewport threshold: amount = 0.15 means 15% of the element needs to be in view
              viewport={{ once: false, amount: 1 }}
            >
              <h3 className="text-xl md:text-3xl font-light text-gray-500 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 text-lg">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Right Side Image Display - Make it sticky */}
        <div className="w-2/4">
          <div className="sticky top-20">
            <motion.div
              key={activeIndex}
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="w-full flex justify-center"
            >
              <Image
                src={images[activeIndex]}
                alt={`Innovation ${activeIndex + 1}`}
                className="max-w-[80%] h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Innovation;
