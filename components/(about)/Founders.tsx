"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import FounderImg1 from "../../assets/about/founder1.jpeg";
import FounderImg2 from "../../assets/about/founder2.jpeg";
import FounderImg3 from "../../assets/about/founder3.jpeg";
import { FaLinkedinIn } from "react-icons/fa";

const ScaleItems = [
  {
    id: 1,
    name: "Salil Chaturvedi",
    title: "Founder & CEO",
    link: "https://www.linkedin.com/in/salil-chaturvedi-492922300?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAE0F3i4BW3wq3CDoIqXKS93col3OqTdR0_U&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BdYWIuwgHQ1alCxLJg%2F7HTA%3D%3D",
    description:
      "With a decade of experience in fintech, Salil’s leadership drives StackIntel to continually innovate and deliver.",
    image: FounderImg2,
  },
  {
    id: 2,
    name: "Pankaj Gupta",
    title: "Co-Founder & CSO",
    link: "https://www.linkedin.com/in/kumarpankaj1985?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAPNQIUBwwWG1ayorjwAMqEG8E0bY1C2uQ4&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BYCiqi8%2FiSPyGB7WS6aK8qw%3D%3D",
    description:
      "A proven track record in operations and strategy ensures that StackIntel runs like a well-oiled machine",
    image: FounderImg1,
  },

  {
    id: 3,
    name: "Gaurav Gupta",
    title: "Co-Founder & CPO",
    link: "https://www.linkedin.com/in/gaurav-gupta-2ba14b36?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAd---4BMOAP2jEkPpsAyFwF5lyAe1nYLZ8&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BRD8v25csT4Sdktopz5oaLg%3D%3D",
    description:
      "Bringing creativity and strategy together, Gaurav leads our efforts to create impactful campaigns and build a global brand.",
    image: FounderImg3,
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
          Our founders believe in the power of integrity and transparency,
          ensuring that every aspect of our business operates with the highest
          ethical standards. They are committed to fostering an environment
          where every team member feels valued and empowered to contribute their
          best work.{" "}
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

export default Founders;
