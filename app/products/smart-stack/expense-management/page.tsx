"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../../../components/layouts/Layout';
import ProductHeader from '../../../../components/(products)/ProductHeader';
import ProductSection from '../../../../components/(products)/ProductSection';
import ProductFeatures from '../../../../components/(products)/ProductFeatures';
import ProductFooter from '../../../../components/(products)/ProductFooter';

const ExpenseManagementPage = () => {
  const productData = {
    title: "Expense Management",
    subtitle: "AI-Powered Expense Intelligence",
    description: "Revolutionary expense management solution that combines artificial intelligence, machine learning, and advanced automation to transform how organizations handle expense tracking, approval workflows, and financial compliance.",
    // icon: "💰",
    features: [
      {
        title: "Advanced OCR & AI",
        description: "99.2% accurate data extraction from receipts, invoices, and documents with intelligent categorization",
        icon: "📸"
      },
      {
        title: "Smart Workflows",
        description: "AI-powered approval routing with dynamic workflows based on expense type, amount, and policies",
        icon: "⚙️"
      },
      {
        title: "Intelligent Compliance",
        description: "Real-time policy enforcement with AI-powered fraud detection and anomaly identification",
        icon: "📋"
      },
      {
        title: "Global Currency Support",
        description: "Handle 150+ currencies with real-time conversion rates and tax calculations",
        icon: "💱"
      },
      {
        title: "Predictive Analytics",
        description: "Advanced reporting with spending forecasts, budget alerts, and trend analysis",
        icon: "📊"
      },
      {
        title: "Enterprise Mobile App",
        description: "Full-featured mobile apps with offline capabilities and voice-to-text expense entry",
        icon: "📱"
      }
    ],
    expenseTypes: [
      {
        category: "Travel & Transportation",
        items: ["Flight bookings", "Hotel stays", "Car rentals", "Taxi/Uber rides", "Public transport"],
        icon: "✈️"
      },
      {
        category: "Meals & Entertainment",
        items: ["Business meals", "Client entertainment", "Team lunches", "Conference catering"],
        icon: "🍽️"
      },
      {
        category: "Office & Supplies",
        items: ["Office supplies", "Software subscriptions", "Equipment purchases", "Utilities"],
        icon: "🏢"
      },
      {
        category: "Professional Services",
        items: ["Consulting fees", "Legal services", "Training programs", "Conference fees"],
        icon: "👔"
      }
    ],
    automationFeatures: [
      {
        title: "Receipt Auto-Capture",
        description: "Automatically capture receipts via email forwarding, mobile scanning, or credit card integration",
        savings: "90% time reduction"
      },
      {
        title: "Smart Categorization",
        description: "AI automatically categorizes expenses based on merchant, amount, and historical patterns",
        savings: "95% accuracy"
      },
      {
        title: "Policy Enforcement",
        description: "Real-time policy checking with automatic flagging of violations and exceptions",
        savings: "80% compliance improvement"
      },
      {
        title: "Approval Automation",
        description: "Intelligent routing based on expense type, amount, department, and approval hierarchy",
        savings: "70% faster approvals"
      }
    ],
    benefits: [
      "Reduce expense processing time by 85% with end-to-end automation",
      "Eliminate 95% of manual data entry with advanced OCR and AI",
      "Improve policy compliance by 80% with real-time enforcement",
      "Real-time visibility into company spending with predictive insights",
      "Streamlined reimbursement processes with automated workflows",
      "Seamless integration with 50+ accounting and ERP systems",
      "Advanced fraud detection with machine learning algorithms",
      "Mobile-first experience with offline capabilities"
    ]
  };

  return (
    <Layout>
      <motion.div 
        className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50"
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

        {/* Expense Categories Section */}
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
                Handle All Expense Types
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive expense management across all business categories
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {productData.expenseTypes.map((type, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="text-3xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {type.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900">{type.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {type.items.map((item, itemIndex) => (
                      <motion.div 
                        key={itemIndex} 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-orange-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: itemIndex * 0.1 }}
                        ></motion.div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Automation Features Section */}
        <motion.div 
          className="py-20 bg-gradient-to-br from-gray-50 to-orange-50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
                Intelligent Automation
              </h2>
              <p className="text-xl text-gray-600">
                AI-powered features that eliminate manual work and improve accuracy
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {productData.automationFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    <motion.div 
                      className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      {feature.savings}
                    </motion.div>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ProductSection 
            title="Why Choose Our Expense Management?"
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
            title="Advanced AI Features"
            features={productData.features}
          />
        </motion.div>

        {/* ROI Calculator Section */}
        <motion.div 
          className="py-20 bg-white"
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
                Proven ROI for Businesses
              </h2>
              <p className="text-xl text-gray-600">
                Real savings achieved by our customers
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { metric: "85%", label: "Time Savings", desc: "Reduction in processing time" },
                { metric: "$50K", label: "Annual Savings", desc: "Average per 100 employees" },
                { metric: "95%", label: "Accuracy Rate", desc: "With AI-powered OCR" },
                { metric: "3 Days", label: "Faster Reimbursements", desc: "Automated workflows" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-orange-600 mb-2"
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
            title="Transform Your Expense Management"
            description="Join thousands of companies who have revolutionized their expense management with our AI-powered intelligent solution. Start your free trial today."
          />
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default ExpenseManagementPage;