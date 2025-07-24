"use client";
import React from "react";
import Image from "next/image";
import ProductFooterImg from "../../assets/product/product-footer.png";
import { motion } from "framer-motion";

interface ProductFooterProps {
  title: string;
  description: string;
}

const ProductFooter: React.FC<ProductFooterProps> = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-br from-[#3538CD] to-[#2634BB] px-8 py-8 md:p-32 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 50%, #ffffff 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, #ffffff 0%, transparent 50%)",
            "radial-gradient(circle at 40% 50%, #ffffff 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="rounded p-4 md:p-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="my-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h1 
              className="font-light text-2xl md:text-3xl text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h1>
            
            <motion.p 
              className="text-gray-200 my-4 md:mb-16 text-base md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/contacts"
                className="inline-block px-6 py-3 border-2 border-white text-white rounded-xl text-sm md:text-base font-semibold hover:bg-white hover:text-[#3538CD] transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  Book a Demo Today
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              animate={{ y: [0, -10, 0] }}
              style={{ animationDuration: "3s", animationIterationCount: "infinite" }}
            >
              <Image
                src={ProductFooterImg}
                alt="Book a Demo Today"
                className="h-auto w-[100%] md:w-[60%]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductFooter;
