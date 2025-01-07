"use client"; // If you're using app router in Next.js and want client-side code
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Replace these imports with your actual images
import ProductImg1 from "../../assets/product/p-1.png";
import ProductImg2 from "../../assets/product/p-2.png";
import ProductImg3 from "../../assets/product/p-3.png";

export default function StackedStickySections() {
  return (
    <div className="relative w-full h-[400vh]">
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
            Lorem Ipsum is simply dummy text of the printing 1
          </h1>
          <hr className="w-[150px] md:w-[300px] my-4 md:my-8" />
          <p className="text-base md:text-lg mb-4 font-normal text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
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
            Lorem Ipsum is simply dummy text of the printing 2
          </h1>
          <hr className="w-[150px] md:w-[300px] my-4 md:my-8" />
          <p className="text-base md:text-lg mb-4 font-normal text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
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
            Lorem Ipsum is simply dummy text of the printing 3
          </h1>
          <hr className="w-[150px] md:w-[300px] my-4 md:my-8" />
          <p className="text-base md:text-lg mb-4 font-normal text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="grid place-items-center h-auto p-8">
          <Image
            src={ProductImg3}
            alt="Product 3"
            className="h-auto w-full max-w-[300px] md:max-w-[60%]"
          />
        </div>
      </motion.section>
    </div>
  );
}
