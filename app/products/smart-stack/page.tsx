"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../../components/layouts/Layout';
import ProductHeader from '../../../components/(products)/ProductHeader';
import ProductSection from '../../../components/(products)/ProductSection';
import ProductFeatures from '../../../components/(products)/ProductFeatures';
import ProductItems from '../../../components/(products)/ProductItems';
import ProductFooter from '../../../components/(products)/ProductFooter';

const SmartStackPage = () => {
  const productData = {
    title: "Smart Stack",
    subtitle: "Intelligent Business Management",
    description: "Revolutionary business management platform powered by artificial intelligence. Transform your expense management, financial operations, and business processes with intelligent automation and real-time insights.",
    icon: "🧠",
    features: [
      {
        title: "AI-Powered Automation",
        description: "Advanced machine learning algorithms automate routine tasks, data entry, and decision-making processes",
        icon: "🤖"
      },
      {
        title: "Intelligent Analytics",
        description: "Real-time business intelligence with predictive analytics and actionable insights",
        icon: "📊"
      },
      {
        title: "Smart OCR Technology",
        description: "Extract data from receipts, invoices, and documents with 99%+ accuracy using advanced OCR",
        icon: "📸"
      },
      {
        title: "Seamless Integration",
        description: "Connect with 100+ business tools including ERP, accounting, and productivity platforms",
        icon: "🔗"
      },
      {
        title: "Mobile-First Platform",
        description: "Full-featured mobile apps for iOS and Android with offline capabilities",
        icon: "📱"
      },
      {
        title: "Enterprise Security",
        description: "Bank-grade security with encryption, SSO, and compliance with global standards",
        icon: "🔒"
      }
    ],
    services: [
      {
        title: "Expense Management",
        description: "AI-powered expense tracking with automated policy compliance and real-time reporting",
        href: "/products/smart-stack/expense-management",
        icon: "💰"
      }
    ],
    aiCapabilities: [
      {
        title: "Smart Receipt Processing",
        description: "Automatically extract and categorize expense data from receipts and invoices",
        accuracy: "99.2%",
        icon: "📄"
      },
      {
        title: "Policy Compliance",
        description: "AI-powered policy enforcement with real-time violation detection",
        accuracy: "95%",
        icon: "📋"
      },
      {
        title: "Fraud Detection",
        description: "Machine learning algorithms detect suspicious patterns and potential fraud",
        accuracy: "98.5%",
        icon: "🛡️"
      },
      {
        title: "Predictive Analytics",
        description: "Forecast spending patterns and budget requirements with AI insights",
        accuracy: "92%",
        icon: "🔮"
      }
    ],
    benefits: [
      "Reduce manual processing time by 85% with intelligent automation",
      "Improve data accuracy by 95% with AI-powered validation and OCR",
      "Real-time visibility into business expenses with predictive insights",
      "Automated compliance monitoring and audit trail generation",
      "Mobile accessibility for remote teams with offline synchronization",
      "Customizable workflows with intelligent routing and approvals",
      "Integration with 100+ business applications and platforms",
      "Enterprise-grade security with SOC 2 Type II compliance"
    ]
  };

  return (
    <Layout>
      <motion.div 
        className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50"
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

        {/* AI Capabilities Section */}
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
                AI-Powered Intelligence
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                Advanced artificial intelligence capabilities that transform how you manage business operations
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {productData.aiCapabilities.map((capability, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="text-2xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {capability.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-900">{capability.title}</h3>
                    </div>
                    <motion.div 
                      className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      {capability.accuracy} Accuracy
                    </motion.div>
                  </div>
                  <p className="text-gray-600">{capability.description}</p>
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
          <ProductItems 
            title="Our Smart Solutions"
            items={productData.services}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ProductSection 
            title="Why Choose Smart Stack?"
            benefits={productData.benefits}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <ProductFeatures 
            title="Advanced Platform Features"
            features={productData.features}
          />
        </motion.div>

        {/* ROI Section */}
        <motion.div 
          className="py-20 bg-gradient-to-br from-gray-50 to-purple-50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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
                Measurable Business Impact
              </h2>
              <p className="text-2xl text-gray-600">
                Real results from companies using Smart Stack
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { metric: "85%", label: "Time Savings", desc: "Reduction in manual processing" },
                { metric: "95%", label: "Accuracy Improvement", desc: "With AI-powered validation" },
                { metric: "60%", label: "Cost Reduction", desc: "In operational expenses" },
                { metric: "3x", label: "Faster Processing", desc: "Compared to manual methods" }
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
                    className="text-3xl font-bold text-purple-600 mb-2"
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
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <ProductFooter 
            title="Transform Your Business Operations"
            description="Join forward-thinking companies using Smart Stack to automate and optimize their business processes with AI-powered intelligence."
          />
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default SmartStackPage;