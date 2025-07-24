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
    title: "StackIntel Payout Solutions",
    subtitle: "Send Payments Efficiently",
    description: "Comprehensive payout capabilities for businesses to disburse funds to vendors, employees, partners, and customers—with speed, security, transparency, and full automation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
      </svg>
    ),
    features: [
      {
        title: "Bulk Payout Processing",
        description: "Execute up to 100,000 payments at once with intelligent batch handling.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        )
      },
      {
        title: "Multi-Mode Transfers",
        description: "IMPS, NEFT, RTGS, UPI, digital wallets, and international wires.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        )
      },
      {
        title: "Real-time Verification",
        description: "Instant beneficiary checks via penny-drop and account validation.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        title: "Smart Workflows",
        description: "Schedule automated payouts, multi-level approvals, and rule-based triggers.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      },
      {
        title: "Compliance & Audit",
        description: "Built-in TDS computation, regulatory reports, and full audit trails.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )
      },
      {
        title: "Advanced Tracking",
        description: "Live status updates, detailed history, and failure analysis dashboards.",
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
      "Minutes-Not-Hours Processing: Automate payouts to reduce processing time from hours to minutes.",
      "Up to 70% Cost Savings: Streamlined workflows cut operational overhead significantly.",
      "Timely Payments: Boost vendor and employee satisfaction with on-time disbursements.",
      "Enterprise-Grade Security: Enforce multi-level approvals and real-time fraud detection.",
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
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
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
              <p className="text-2xl text-gray-600">
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