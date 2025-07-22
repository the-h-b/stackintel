"use client";
import React from "react";
import Image from "next/image";
import ProductSectionImg from "../../assets/product/p-s.png";
import ProductOverlayImg from "../../assets/product/p-overlay.png";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

interface ProductSectionProps {
  title: string;
  benefits: string[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, benefits }) => {
  return (
    <div className="relative bg-white py-16 px-8 md:grid md:grid-cols-2 overflow-hidden">
      {/* Overlay Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src={ProductOverlayImg}
          alt="Abstract Overlay"
          className="absolute hidden md:block top-32 left-16 lg:left-64 h-auto"
        />
      </motion.div>
      
      <motion.div 
        className="flex flex-col justify-center p-8 md:p-16 lg:p-32"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h5 
          className="text-[#3538CD] font-semibold text-sm md:text-base mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h5>
        
        <motion.h1 
          className="text-xl md:text-2xl lg:text-3xl my-5 font-light w-full md:w-[90%]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h1>
        
        <motion.div 
          className="space-y-3 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {benefits.slice(0, 4).map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-[#3538CD] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-600 text-sm md:text-base">{benefit}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.button 
          className="flex flex-row items-center gap-x-2 mt-4 text-[#3538CD] text-sm md:text-base hover:gap-x-3 transition-all duration-300 group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          Discover More 
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <BsArrowRight />
          </motion.div>
        </motion.button>
      </motion.div>
      
      <motion.div 
        className="flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={ProductSectionImg}
            alt="Product Benefits"
            className="h-auto w-[80%] md:w-[70%] lg:w-[50%] -ml-0 md:-ml-16"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductSection;
