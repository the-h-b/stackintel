"use client";

import React from "react";
import Image from "next/image";
import Card from "@/components/Card";
import ServiceImage1 from "../../../assets/static/services/service1.png";
import ServiceImage2 from "../../../assets/static/services/service2.png";
import ServiceImage3 from "../../../assets/static/services/service3.png";
import ServiceImage4 from "../../../assets/static/services/service4.png";
import ServiceImage5 from "../../../assets/static/services/service5.png";
import ServiceImage6 from "../../../assets/static/services/service6.png";
import { motion } from "framer-motion";

const cardContents = [
  {
    id: 1,
    title: "Prepaid Card Management",
    description: `Enable seamless issuance, management, and transaction processing for prepaid cards. Our platform supports multiple use cases, including gift cards, payroll cards, and digital wallets, ensuring flexibility, compliance, and real-time control.`,
    image: ServiceImage1,
  },
  {
    id: 2,
    title: "Card Issuer Switch",
    description:
      "A powerful, scalable, and secure switching platform that enables seamless authorization, routing, and transaction processing between banks, networks, and fintechs. Ensure high availability, low latency, and superior performance for all card transactions.",
    image: ServiceImage6,
  },
  {
    id: 3,
    title: "Access Control",
    description:
      "Enhance security with robust access control solutions for banking and financial applications. Implement multi-factor authentication, biometric verification, and tokenized transactions to safeguard sensitive data and ensure compliance.",
    image: ServiceImage5,
  },
  {
    id: 4,
    title: "Fraud & Risk Management",
    description:
      "Mitigate fraud risks with AI-powered transaction monitoring and real-time anomaly detection. Our system continuously analyzes patterns to detect suspicious activities, prevent fraud, and protect customer trust.",
    image: ServiceImage2,
  },
  {
    id: 5,
    title: "Banking as a Service",
    description:
      "Launch banking products with ease using our comprehensive BaaS platform. From account management to payment processing, we provide seamless API-driven banking solutions for fintechs, corporates, and enterprises.",
    image: ServiceImage3,
  },
  {
    id: 6,
    title: "Corporate Expense Management System",
    description:
      "Simplify corporate spending with a smart, automated expense management platform. Gain real-time insights, set spending limits, and streamline approvals for better financial control and efficiency",
    image: ServiceImage4,
  },
];

const Service = () => {
  // Define animation variants for the container and text items
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
    <div className="relative flex flex-col justify-center items-center mt-[4em] md:mt-[6em] lg:mt-[10em] overflow-hidden px-4">
      {/* Background Blobs with Animations */}
      <div className="absolute -left-[400px] top-32 w-32 h-20 bg-purple-500 rounded-full blur-2xl opacity-50 animate-leftfloat"></div>
      <div className="absolute -left-[300px] top-48 w-24 h-24 bg-pink-400 rounded-full blur-2xl opacity-40 animate-leftfloat2"></div>
      <div className="absolute -left-[400px] top-80 w-28 h-28 bg-blue-300 rounded-full blur-2xl opacity-50 animate-leftfloat3"></div>

      {/* Purple Circle with Blur Effect */}
      <div className="absolute left-[90px] top-[140px] w-32 h-32 bg-purple-700 rounded-full blur-3xl opacity-40 animate-leftfloat4"></div>

      {/* Right Side Blurred Blobs */}
      <div className="absolute right-32 top-24 w-28 h-28 bg-green-300 rounded-full blur-2xl opacity-40 animate-rightfloat"></div>
      <div className="absolute right-10 top-64 w-24 h-24 bg-yellow-300 rounded-full blur-2xl opacity-50 animate-rightfloat2"></div>

      {/* Animated Text Section */}
      <motion.div
        className="flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Trigger every time 20% of the component is in view
      >
        <motion.p
          className="text-gray-500 text-md md:text-lg font-semibold tracking-wide pb-2 md:pb-5 lg:pb-6"
          variants={itemVariants}
        >
          Product
        </motion.p>
        <motion.p
          className="text-3xl font-light pb-2 md:pb-5 lg:pb-6"
          variants={itemVariants}
        >
          Built for Game-Changers
        </motion.p>
        <motion.p
          className="w-full md:w-[50%] text-md md:text-lg font-medium text-center text-gray-500 pb-2 md:pb-5 lg:pb-6"
          variants={itemVariants}
        >
          Why Settle When You Can Soar?
        </motion.p>
      </motion.div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 mt-10">
        {cardContents.map((content) => (
          <div key={content.id}>
            <Card
              image={content.image}
              title={content.title}
              description={content.description}
            />
          </div>
        ))}
      </div>

      {/* Inline Styles for Background Animations */}
      <style jsx>{`
        @keyframes floatHorizontalLeft {
          0% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(100px);
          }
          100% {
            transform: translateX(0px);
          }
        }

        @keyframes floatHorizontalRight {
          0% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(-30px);
          }
          100% {
            transform: translateX(0px);
          }
        }

        .animate-leftfloat {
          animation: floatHorizontalLeft 8s ease-in-out infinite;
        }

        .animate-leftfloat2 {
          animation: floatHorizontalLeft 10s ease-in-out infinite;
        }

        .animate-leftfloat3 {
          animation: floatHorizontalLeft 12s ease-in-out infinite;
        }

        .animate-leftfloat4 {
          animation: floatHorizontalLeft 14s ease-in-out infinite;
        }

        .animate-rightfloat {
          animation: floatHorizontalRight 9s ease-in-out infinite;
        }

        .animate-rightfloat2 {
          animation: floatHorizontalRight 11s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Service;
