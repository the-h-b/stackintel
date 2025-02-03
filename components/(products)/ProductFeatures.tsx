"use client"; // If you're using app router in Next.js and want client-side code
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Replace these imports with your actual images
import ProductImg1 from "../../assets/product/p-1.png";
import ProductImg2 from "../../assets/product/p-2.png";
import ProductImg3 from "../../assets/product/p-3.png";
import ProductImg4 from "../../assets/product/p-4.png";
import ProductImg5 from "../../assets/product/p-5.png";
import ProductImg6 from "../../assets/product/p-6.png";

export default function StackedStickySections() {
  return (
    <div className="relative w-full h-[600vh]">
      {/* 
        1) FIRST SECTION - STICKY
           - This section stays pinned at the top until the scroll 
             moves on to reveal the second.
       */}
      <motion.section
        className="sticky top-0 h-screen bg-[#3F87F2] flex flex-col md:grid md:grid-cols-2 py-16 md:py-32 rounded-lg"
        style={{ zIndex: 30 }}
      >
        {/* Left Content */}
        <div className="p-8 md:p-32">
          <h1 className="font-light text-3xl md:text-5xl leading-snug md:leading-tight text-white">
            Prepaid Card Management System
          </h1>
          <hr className="w-[150px] md:w-[300px] my-4 md:my-8" />
          <p className="text-base md:text-lg mb-4 font-normal text-white">
            Enable seamless issuance, management, and transaction processing for
            prepaid cards. Our platform supports multiple use cases, including
            gift cards, payroll cards, and digital wallets, ensuring
            flexibility, compliance, and real-time control.
          </p>
        </div>

        {/* Right Content (Image) */}
        <div className="grid place-items-center h-auto p-8">
          <Image
            src={ProductImg1}
            alt="Product 1"
            className="h-auto w-full max-w-[300px] md:max-w-[60%]"
          />
        </div>
      </motion.section>

      {/* 
        2) SECOND SECTION - STICKY
           - Also pinned at the top. As the user scrolls past the first 
             section’s threshold, this one becomes the “active” sticky.
       */}
      <motion.section
        className="sticky top-0 h-screen bg-[#E06699] flex flex-col md:grid md:grid-cols-2 py-16 md:py-32 rounded-lg"
        style={{ zIndex: 50 }}
      >
        <div className="p-8 md:p-32">
          <h1 className="font-light text-3xl md:text-5xl leading-snug md:leading-tight text-white">
            Card Issuer Switch
          </h1>
          <hr className="w-[150px] md:w-[300px] my-4 md:my-8" />
          <p className="text-base md:text-lg mb-4 font-normal text-white">
            A powerful, scalable, and secure switching platform that enables
            seamless authorization, routing, and transaction processing between
            banks, networks, and fintechs. Ensure high availability, low
            latency, and superior performance for all card transactions.
          </p>
        </div>
        <div className="grid place-items-center h-auto p-8">
          <Image
            src={ProductImg6}
            alt="Product 2"
            className="h-auto w-full max-w-[300px] md:max-w-[60%]"
          />
        </div>
      </motion.section>

      {/* 
        2) SECOND SECTION - STICKY
           - Also pinned at the top. As the user scrolls past the first 
             section’s threshold, this one becomes the “active” sticky.
       */}
      <motion.section
        className="sticky top-0 h-screen bg-[#3F87F2] flex flex-col md:grid md:grid-cols-2 py-16 md:py-32 rounded-lg"
        style={{ zIndex: 50 }}
      >
        <div className="p-8 md:p-32">
          <h1 className="font-light text-3xl md:text-5xl leading-snug md:leading-tight text-white">
            Access Control
          </h1>
          <hr className="w-[150px] md:w-[300px] my-4 md:my-8" />
          <p className="text-base md:text-lg mb-4 font-normal text-white">
            Enhance security with robust access control solutions for banking
            and financial applications. Implement multi-factor authentication,
            biometric verification, and tokenized transactions to safeguard
            sensitive data and ensure compliance.
          </p>
        </div>
        <div className="grid place-items-center h-auto p-8">
          <Image
            src={ProductImg5}
            alt="Product 2"
            className="h-auto w-full max-w-[300px] md:max-w-[60%]"
          />
        </div>
      </motion.section>

      {/* 
        2) SECOND SECTION - STICKY
           - Also pinned at the top. As the user scrolls past the first 
             section’s threshold, this one becomes the “active” sticky.
       */}
      <motion.section
        className="sticky top-0 h-screen bg-[#E06699] flex flex-col md:grid md:grid-cols-2 py-16 md:py-32 rounded-lg"
        style={{ zIndex: 50 }}
      >
        <div className="p-8 md:p-32">
          <h1 className="font-light text-3xl md:text-5xl leading-snug md:leading-tight text-white">
            Fraud & Risk Management
          </h1>
          <hr className="w-[150px] md:w-[300px] my-4 md:my-8" />
          <p className="text-base md:text-lg mb-4 font-normal text-white">
            Mitigate fraud risks with AI-powered transaction monitoring and
            real-time anomaly detection. Our system continuously analyzes
            patterns to detect suspicious activities, prevent fraud, and protect
            customer trust.
          </p>
        </div>
        <div className="grid place-items-center h-auto p-8">
          <Image
            src={ProductImg2}
            alt="Product 2"
            className="h-auto w-full max-w-[300px] md:max-w-[60%]"
          />
        </div>
      </motion.section>
      {/* 
        2) SECOND SECTION - STICKY
           - Also pinned at the top. As the user scrolls past the first 
             section’s threshold, this one becomes the “active” sticky.
       */}
      <motion.section
        className="sticky top-0 h-screen bg-[#3F87F2] flex flex-col md:grid md:grid-cols-2 py-16 md:py-32 rounded-lg"
        style={{ zIndex: 50 }}
      >
        <div className="p-8 md:p-32">
          <h1 className="font-light text-3xl md:text-5xl leading-snug md:leading-tight text-white">
            Banking as a Service (BaaS)
          </h1>
          <hr className="w-[150px] md:w-[300px] my-4 md:my-8" />
          <p className="text-base md:text-lg mb-4 font-normal text-white">
            Launch banking products with ease using our comprehensive BaaS
            platform. From account management to payment processing, we provide
            seamless API-driven banking solutions for fintechs, corporates, and
            enterprises.
          </p>
        </div>
        <div className="grid place-items-center h-auto p-8">
          <Image
            src={ProductImg3}
            alt="Product 2"
            className="h-auto w-full max-w-[300px] md:max-w-[60%]"
          />
        </div>
      </motion.section>

      {/* 
        3) THIRD SECTION - NORMAL SCROLL
           - This is not sticky. Once the user has scrolled past the 
             second sticky section, they just continue normally with this one.
       */}
      <motion.section
        className="sticky top-0 h-screen bg-[#616AD3] grid grid-cols-1 md:grid-cols-2 py-16 md:py-32 rounded-lg"
        style={{ zIndex: 50 }}
      >
        <div className="p-8 md:p-32">
          <h1 className="font-light text-3xl md:text-5xl leading-snug md:leading-tight text-white">
            Corporate Expense Management System
          </h1>
          <hr className="w-[150px] md:w-[300px] my-4 md:my-8" />
          <p className="text-base md:text-lg mb-4 font-normal text-white">
            Simplify corporate spending with a smart, automated expense
            management platform. Gain real-time insights, set spending limits,
            and streamline approvals for better financial control and efficiency
          </p>
        </div>
        <div className="grid place-items-center h-auto p-8">
          <Image
            src={ProductImg4}
            alt="Product 3"
            className="h-auto w-full max-w-[300px] md:max-w-[60%]"
          />
        </div>
      </motion.section>
    </div>
  );
}
