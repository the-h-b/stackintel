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
    <div className="relative bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div 
            className="flex flex-col justify-center"
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
              className="text-2xl md:text-3xl lg:text-4xl my-5 font-light text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h1>
            
            <motion.div 
              className="space-y-4 mb-8"
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
                  <p className="text-gray-600 text-base leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.button 
              className="flex flex-row items-center gap-x-2 mt-4 text-[#3538CD] text-base hover:gap-x-3 transition-all duration-300 group w-fit"
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
          
          {/* Image Section */}
          <motion.div 
            className="relative flex justify-center items-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Overlay Image */}
            <motion.div
              className="absolute -top-8 -left-8 z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src={ProductOverlayImg}
                alt="Abstract Overlay"
                className="w-24 h-24 opacity-60"
              />
            </motion.div>
            
            {/* Main Product Image */}
            <motion.div
              className="relative z-20"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={ProductSectionImg}
                alt="Product Benefits"
                className="w-full max-w-md h-auto rounded-lg shadow-lg"
                priority
              />
            </motion.div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl -z-10 transform rotate-3"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
