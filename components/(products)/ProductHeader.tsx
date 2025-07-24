"use client";
import React from "react";
import ProductHeroImg from "../../assets/product/product-header.png";
import ProductOverlayImg from "../../assets/product/p-overlay.png";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProductHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  icon?: string; 
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ title, subtitle, description, icon }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={ProductOverlayImg}
          className="absolute -ml-8 md:-ml-[100px] h-auto hidden md:block"
          alt="Overlay"
        />
      </motion.div>
      
      <motion.div 
        className="flex flex-col justify-center items-start pl-[2em] md:pl-[4em] relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg md:text-3xl text-[#2634BB] font-bold">
            {subtitle}
          </p>
        </motion.div>
        
        <motion.h1 
          className="font-light text-2xl md:text-5xl leading-snug md:leading-tight w-full md:w-[90%] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          className="text-gray-600 text-base md:text-lg w-full md:w-[85%] leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {description}
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="bg-gradient-to-br from-[#2634BB] to-[#1e2a9e] text-white p-8 md:p-4 flex items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
          animate={{ x: [-1000, 1000] }}
          transition={{ duration: 2, delay: 1.5 }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <Image
            src={ProductHeroImg}
            alt="Product Illustration"
            className="h-auto w-full md:w-[80%] -ml-4 md:-ml-16 lg:-ml-72 mt-8 md:mt-32 relative z-10"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductHeader;
