"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import InvestorImg1 from "../../assets/about/investor1.jpg";
import { FaLinkedinIn } from "react-icons/fa";

const ScaleItems = [
  {
    id: 1,
    name: "Anuj Golecha",
    title: "Co-Founder at Beams Fintech Fund",
    link: "https://www.linkedin.com/in/anujgolecha?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABpEBuIBsFC9j6ts7imMXs32xMVbUi5ip0A&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Benv%2FGlkPRjGlC3IF1LRfEA%3D%3D",
    description: `Venture Catalysts, and 9 Unicorns Accelerator Fund BharatPe, Flobiz, and Dukaan Co-founded Creditwise Capital, focused on fintech for two decades "40 under 40" by AIWMI; recognized by PM Modi under NITI Aayog`,
    image: InvestorImg1,
  },
];

const Investors = () => {
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
          Investors and Experts Who Believe in Our Vision
        </motion.p>
        <motion.p
          className="text-md text-center lg:text-left text-gray-600"
          variants={itemVariants}
        >
          We are backed by visionary investors and industry experts who share
          our commitment to innovation and growth. Their support and insights
          drive us forward, helping us shape the future with confidence and
          purpose.
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
                className="h-auto w-32 lg:w-24 bg-gray-100 mb-6 rounded-full"
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
                  <a href={item.link} target="_blank">
                    <FaLinkedinIn size={20} />
                  </a>
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

export default Investors;
