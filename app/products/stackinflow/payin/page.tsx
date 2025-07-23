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
    title: "StackIntel PayIn Solutions",
    subtitle: "Accept Payments Seamlessly",
    description: "A unified payment-acceptance engine that lets businesses collect funds across cards, UPI, wallets, BNPL, net-banking and international rails—backed by enterprise-grade security, intelligent routing, and lightning-fast settlements.",
    icon: "📥",
    features: [
      {
        title: "100+ Payment Methods",
        description: "Cards (Visa, MC, RuPay), UPI, wallets, net-banking, EMI, BNPL and global options.",
        icon: "💳"
      },
      {
        title: "Intelligent Routing",
        description: "Data-driven path selection maximizes success and minimizes cost per transaction.",
        icon: "🎯"
      },
      {
        title: "Instant & Same-Day Settlements",
        description: "Flexibility to receive funds on your timetable—no more waiting weeks to reconcile.",
        icon: "⚡"
      },
      {
        title: "Enterprise-Grade Fraud Protection",
        description: "Real-time risk scoring and ML-powered anomaly detection keep chargebacks at bay.",
        icon: "🛡️"
      },
      {
        title: "Developer-Friendly Integration",
        description: "REST APIs, SDKs, plugins and webhooks for rapid integration with any stack.",
        icon: "🔧"
      },
      {
        title: "Real-time Analytics",
        description: "Live dashboards, success-rate heatmaps, revenue reports and custom KPIs.",
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
      "Boost Conversions by up to 25% Streamlined checkout flows and adaptive UIs keep more customers through the finish line.",
      "Cut Failure Rates by 40% Smart retry logic and dynamic route-switching ensure your transactions succeed the first time.",
      "Lower transaction costs with competitive pricing and volume discounts",
      "Accelerate cash flow with instant, same-day, or T+1 settlements so funds hit your account when you need them.",
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
                { metric: "2.3s", label: "Average Processing Time", desc: "Lightning-fast customer experience" },
                { metric: "25%", label: "Conversion Increase", desc: "25% Conversion Lift	Smoother checkout drives more sales" },
                { metric: "40%", label: "Failure Reduction", desc: "40% Failure Reduction	Smarter routing keeps payments flowing" }
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
            title="Ready to turn every checkout into a win?"
            description="Contact StackIntel today to see a live demo and start accepting payments with confidence."
          />
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default PayinPage;