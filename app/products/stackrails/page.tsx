"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../../components/layouts/Layout';
import ProductHeader from '../../../components/(products)/ProductHeader';
import ProductSection from '../../../components/(products)/ProductSection';
import ProductFeatures from '../../../components/(products)/ProductFeatures';
import ProductItems from '../../../components/(products)/ProductItems';
import ProductFooter from '../../../components/(products)/ProductFooter';
import { 
  HiOutlineCode, 
  HiOutlineShieldCheck,
  HiOutlineBookOpen
} from "react-icons/hi";
import { 
  HiOutlineRocketLaunch,
  HiOutlineBuildingLibrary,
  HiOutlineBolt,
  HiOutlineArrowPath
} from "react-icons/hi2";

const StackRailsPage = () => {
  const productData = {
    title: "StackRails",
    subtitle: "Next-Generation UPI Infrastructure",
    description: "Advanced UPI payment infrastructure with comprehensive documentation and developer-friendly tools. Build, deploy, and scale UPI-based payment solutions with confidence.",
    icon: <HiOutlineRocketLaunch />,
    features: [
      {
        title: "High-Performance Infrastructure",
        description: "Scalable UPI infrastructure capable of handling millions of transactions",
        icon: <HiOutlineBolt />
      },
      {
        title: "Developer-First Approach",
        description: "Comprehensive APIs, SDKs, and tools for seamless integration",
        icon: <HiOutlineCode />
      },
      {
        title: "Real-time Processing",
        description: "Instant UPI transaction processing with real-time status updates",
        icon: <HiOutlineArrowPath />
      },
      {
        title: "Advanced Security",
        description: "Multi-layered security with encryption, tokenization, and fraud detection",
        icon: <HiOutlineShieldCheck />
      }
    ],
    services: [
      {
        title: "UPI Infrastructure",
        description: "Robust and scalable UPI payment infrastructure for enterprises",
        href: "/products/stackrails/upi-infrastructure",
        icon: <HiOutlineBuildingLibrary />
      },
      {
        title: "Documentations",
        description: "Comprehensive documentation and developer resources",
        href: "/products/stackrails/documentations",
        icon: <HiOutlineBookOpen />
      },
      {
        title: "Developer Hub",
        description: "Complete developer portal with APIs, SDKs, and integration guides",
        href: "/developers",
        icon: <HiOutlineCode />
      }
    ],
    benefits: [
      "99.99% uptime with redundant infrastructure",
      "Sub-second transaction processing",
      "Comprehensive developer documentation",
      "24/7 technical support and monitoring",
      "Regulatory compliance and security standards",
      "Flexible pricing and transparent costs"
    ]
  };

  return (
    <Layout>
      <motion.div 
        className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ProductHeader 
          title={productData.title}
          subtitle={productData.subtitle}
          description={productData.description}
          icon={productData.icon}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ProductItems 
            title="Our UPI Services"
            items={productData.services}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ProductSection 
            title="Why Choose StackRails?"
            benefits={productData.benefits}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ProductFeatures 
            title="Infrastructure Features"
            features={productData.features}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <ProductFooter 
            title="Ready to Build on StackRails?"
            description="Join innovative companies building the future of UPI payments with our infrastructure."
          />
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default StackRailsPage;