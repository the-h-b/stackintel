"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../../../components/layouts/Layout';
import ProductHeader from '../../../../components/(products)/ProductHeader';
import ProductSection from '../../../../components/(products)/ProductSection';
import ProductFeatures from '../../../../components/(products)/ProductFeatures';
import ProductFooter from '../../../../components/(products)/ProductFooter';

const PayinPage = () => {
  const productData = {
    title: "Payin Solutions",
    subtitle: "Accept Payments Seamlessly",
    description: "Comprehensive payment acceptance solutions that enable businesses to collect payments from customers through multiple channels with maximum security, efficiency, and optimized success rates.",
    icon: "📥",
    features: [
      {
        title: "100+ Payment Methods",
        description: "Accept payments via cards, UPI, wallets, net banking, EMI, BNPL, and international methods",
        icon: "💳"
      },
      {
        title: "Smart Payment Routing",
        description: "AI-powered intelligent routing to maximize success rates and minimize transaction costs",
        icon: "🎯"
      },
      {
        title: "Instant Settlements",
        description: "Get your money faster with instant, same-day, and T+1 settlement options",
        icon: "⚡"
      },
      {
        title: "Advanced Fraud Protection",
        description: "Machine learning-powered fraud detection with real-time risk scoring and prevention",
        icon: "🛡️"
      },
      {
        title: "Seamless Integration",
        description: "Developer-friendly APIs, SDKs, and plugins for quick integration with any platform",
        icon: "🔧"
      },
      {
        title: "Real-time Analytics",
        description: "Comprehensive dashboard with transaction monitoring, success rate optimization, and revenue insights",
        icon: "📊"
      }
    ],
    paymentMethods: [
      {
        category: "Cards",
        methods: ["Visa", "Mastercard", "RuPay", "American Express", "Diners Club"],
        icon: "💳"
      },
      {
        category: "Net Banking",
        methods: ["50+ Banks", "Corporate Banking", "IMPS", "NEFT"],
        icon: "🏦"
      },
      // {
      //   category: "Digital Wallets",
      //   methods: ["Paytm", "PhonePe", "Google Pay", "Amazon Pay", "MobiKwik"],
      //   icon: "📱"
      // },
      {
        category: "UPI",
        methods: ["All UPI Apps", "QR Codes", "UPI Intent", "UPI Collect"],
        icon: "🔄"
      },
      
      // {
      //   category: "Buy Now Pay Later",
      //   methods: ["Simpl", "LazyPay", "ePayLater", "ZestMoney"],
      //   icon: "📅"
      // },
      
    ],
    benefits: [
      "Increase conversion rates by up to 25% with optimized checkout experience",
      "Reduce payment failures by 40% with smart retry mechanisms and routing",
      "Lower transaction costs with competitive pricing and volume discounts",
      "Improve cash flow with instant and same-day settlement options",
      "Enhanced security with PCI DSS Level 1 compliance and tokenization",
      "24/7 customer support with dedicated account management",
      "Real-time reconciliation and automated financial reporting",
      "Mobile-optimized checkout for better user experience"
    ]
  };

  return (
    <Layout>
      <motion.div 
        className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50"
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

        {/* Payment Methods Section */}
        <motion.div 
          className="py-20 bg-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Accept All Payment Methods
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive payment acceptance across all popular methods and channels
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productData.paymentMethods.map((category, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="text-2xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.methods.map((method, methodIndex) => (
                      <motion.div 
                        key={methodIndex} 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: methodIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-green-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: methodIndex * 0.1 }}
                        ></motion.div>
                        <span className="text-sm text-gray-700">{method}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ProductSection 
            title="Why Choose Our Payin Solutions?"
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
            title="Advanced Payment Features"
            features={productData.features}
          />
        </motion.div>

        {/* Success Metrics Section */}
        <motion.div 
          className="py-20 bg-gradient-to-br from-gray-50 to-green-50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Proven Results for Businesses
              </h2>
              <p className="text-xl text-gray-600">
                Real metrics from our merchant partners
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { metric: "98.5%", label: "Average Success Rate", desc: "Industry-leading payment success" },
                { metric: "2.3s", label: "Average Processing Time", desc: "Lightning-fast transactions" },
                { metric: "25%", label: "Conversion Increase", desc: "Improved checkout experience" },
                { metric: "40%", label: "Failure Reduction", desc: "Smart routing optimization" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-green-600 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.metric}
                  </motion.div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <ProductFooter 
            title="Start Accepting Payments Today"
            description="Join thousands of merchants who trust our payin solutions for their payment acceptance needs. Get started in minutes with our easy integration."
          />
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default PayinPage;