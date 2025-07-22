"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../../../components/layouts/Layout';
import ProductHeader from '../../../../components/(products)/ProductHeader';
import ProductSection from '../../../../components/(products)/ProductSection';
import ProductFeatures from '../../../../components/(products)/ProductFeatures';
import ProductFooter from '../../../../components/(products)/ProductFooter';

const PayoutPage = () => {
  const productData = {
    title: "Payout Solutions",
    subtitle: "Send Payments Efficiently",
    description: "Comprehensive payout solutions that enable businesses to send payments to vendors, employees, partners, and customers with speed, security, transparency, and complete automation capabilities.",
    icon: "📤",
    features: [
      {
        title: "Bulk Payout Processing",
        description: "Process up to 100,000 payments simultaneously with intelligent batch processing and queue management",
        icon: "📋"
      },
      {
        title: "Multi-Mode Transfers",
        description: "Support for IMPS, NEFT, RTGS, UPI, wallet transfers, and international wire transfers",
        icon: "🔄"
      },
      {
        title: "Real-time Verification",
        description: "Instant beneficiary verification with penny drop testing and account validation",
        icon: "✅"
      },
      {
        title: "Smart Workflows",
        description: "Automated payout schedules, multi-level approvals, and conditional processing rules",
        icon: "⚙️"
      },
      {
        title: "Compliance & Audit",
        description: "Built-in TDS calculation, regulatory reporting, and complete audit trail management",
        icon: "📋"
      },
      {
        title: "Advanced Tracking",
        description: "Real-time status updates, detailed transaction history, and failure analysis",
        icon: "🔍"
      }
    ],
    payoutTypes: [
      {
        title: "Vendor Payments",
        description: "Automate supplier and vendor payments with approval workflows",
        features: ["Bulk processing", "Invoice matching", "Tax calculations", "Approval chains"],
        icon: "🏢"
      },
      {
        title: "Employee Payroll",
        description: "Streamlined salary and reimbursement processing",
        features: ["Salary disbursement", "Expense reimbursements", "Bonus payments", "Tax deductions"],
        icon: "👥"
      },
      {
        title: "Customer Refunds",
        description: "Quick and efficient customer refund processing",
        features: ["Instant refunds", "Partial refunds", "Refund tracking", "Customer notifications"],
        icon: "💰"
      },
      {
        title: "Partner Commissions",
        description: "Automated commission and incentive payments",
        features: ["Commission calculation", "Performance bonuses", "Referral payments", "Revenue sharing"],
        icon: "🤝"
      }
    ],
    benefits: [
      "Reduce payout processing time from hours to minutes with automation",
      "Lower operational costs by up to 70% with streamlined processes",
      "Improve vendor and employee satisfaction with timely payments",
      "Enhanced security with multi-level approvals and fraud detection",
      "Complete audit trail and compliance reporting for regulatory requirements",
      "24/7 support for critical payout operations with dedicated SLA",
      "Real-time reconciliation and automated financial reporting",
      "Scalable infrastructure supporting millions of transactions"
    ]
  };

  return (
    <Layout>
      <motion.div 
        className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50"
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

        {/* Payout Types Section */}
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
                Complete Payout Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Handle all types of business payments with automated workflows and compliance
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {productData.payoutTypes.map((type, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
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
                    <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {type.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-purple-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.1 }}
                        ></motion.div>
                        <span className="text-sm text-gray-700">{feature}</span>
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
            title="Why Choose Our Payout Solutions?"
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
            title="Advanced Payout Features"
            features={productData.features}
          />
        </motion.div>

        {/* Processing Capabilities Section */}
        <motion.div 
          className="py-20 bg-gradient-to-br from-gray-50 to-purple-50"
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
                Enterprise-Scale Processing
              </h2>
              <p className="text-xl text-gray-600">
                Built for high-volume, mission-critical payout operations
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { metric: "100K+", label: "Transactions/Hour", desc: "High-volume processing capacity" },
                { metric: "99.8%", label: "Success Rate", desc: "Reliable payout delivery" },
                { metric: "<30s", label: "Processing Time", desc: "Fast transaction execution" },
                { metric: "24/7", label: "Support Available", desc: "Round-the-clock assistance" }
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
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <ProductFooter 
            title="Streamline Your Payouts Today"
            description="Join leading enterprises who trust our payout solutions for their disbursement needs. Automate your payment processes and improve operational efficiency."
          />
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default PayoutPage;