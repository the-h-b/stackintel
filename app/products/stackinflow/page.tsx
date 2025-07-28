import React from 'react';
import Layout from '../../../components/layouts/Layout';
import ProductHeader from '../../../components/(products)/ProductHeader';
import ProductSection from '../../../components/(products)/ProductSection';
import ProductFeatures from '../../../components/(products)/ProductFeatures';
import ProductItems from '../../../components/(products)/ProductItems';
import ProductFooter from '../../../components/(products)/ProductFooter';
import { 
  HiOutlineChartBar, 
  HiOutlineShieldCheck, 
  HiOutlineGlobeAlt,
  HiOutlineCurrencyDollar
} from "react-icons/hi";
import { 
  HiOutlineArrowPath, 
  HiOutlineCpuChip, 
  HiOutlineBolt
} from "react-icons/hi2";

const StackInflowPage = () => {
  const productData = {
    title: "StackInflow",
    subtitle: "Comprehensive Payment Solutions",
    description: "Complete payment infrastructure for modern businesses. Handle both incoming and outgoing payments with enterprise-grade security, real-time processing, and intelligent routing for maximum success rates.",
    icon: <HiOutlineCurrencyDollar />,
    features: [
      {
        title: "Multi-Channel Payments",
        description: "Accept payments through 100+ channels including cards, UPI, wallets, net banking, and international methods",
        icon: <HiOutlineArrowPath />
      },
      {
        title: "Smart Payment Routing",
        description: "AI-powered routing to optimize success rates and minimize transaction costs across multiple processors",
        icon: <HiOutlineCpuChip />
      },
      {
        title: "Real-time Processing",
        description: "Process payments instantly with sub-second response times and real-time status updates",
        icon: <HiOutlineBolt />
      },
      {
        title: "Advanced Analytics",
        description: "Comprehensive dashboard with detailed analytics, success rate optimization, and business intelligence",
        icon: <HiOutlineChartBar />
      },
      {
        title: "Secure Infrastructure",
        description: "Bank-grade security with PCI DSS Level 1 compliance, tokenization, and advanced fraud detection",
        icon: <HiOutlineShieldCheck />
      },
      {
        title: "Global Reach",
        description: "Support for international payments with multi-currency processing and local payment methods",
        icon: <HiOutlineGlobeAlt />
      }
    ],
    // services: [
    //   {
    //     title: "Payin",
    //     description: "Accept payments from customers through multiple payment methods with optimized success rates",
    //     href: "/products/stackinflow/payin",
    //     icon: "📥"
    //   },
    //   {
    //     title: "Payout",
    //     description: "Send payments to vendors, employees, and partners efficiently with bulk processing capabilities",
    //     href: "/products/stackinflow/payout",
    //     icon: "📤"
    //   }
    // ],
    industryStats: [
      { label: "Transaction Success Rate", value: "99.2%", description: "Industry-leading success rates" },
      { label: "Processing Speed", value: "<2s", description: "Average transaction time" },
      { label: "Uptime Guarantee", value: "99.99%", description: "SLA-backed availability" },
      { label: "Payment Methods", value: "100+", description: "Supported globally" }
    ],
    benefits: [
      "99.99% uptime with redundant infrastructure and automatic failover",
      "Support for 100+ payment methods including emerging digital wallets",
      "Real-time transaction monitoring with instant alerts and notifications",
      "Automated reconciliation and comprehensive financial reporting",
      "24/7 technical support with dedicated account management",
      "Competitive pricing with transparent fee structure",
      "Advanced fraud prevention with machine learning algorithms",
      "Seamless integration with existing business systems"
    ]
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <ProductHeader 
          title={productData.title}
          subtitle={productData.subtitle}
          description={productData.description}
          icon={productData.icon}
        />

        {/* Industry Stats Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-2xl text-gray-600">
                Performance metrics that speak for themselves
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {productData.industryStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* <ProductItems 
          title="Our Payment Services"
          items={productData.services}
        /> */}
        
        <ProductSection 
          title="Why Choose StackInflow?"
          benefits={productData.benefits}
        />
        
        <ProductFeatures 
          title="Advanced Platform Features"
          features={productData.features}
        />

        {/* Integration Section */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Easy Integration, Powerful Results
              </h2>
              <p className="text-2xl text-gray-600">
                Book a demo in minutes with our developer-friendly APIs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "RESTful APIs",
                  description: "Simple, well-documented APIs that integrate with any platform",
                  features: ["JSON responses", "Webhook support", "Rate limiting", "API versioning"]
                },
                {
                  title: "SDKs & Libraries",
                  description: "Official SDKs for popular programming languages",
                  features: ["Node.js", "Python", "PHP", "Java", "React Native"]
                },
                {
                  title: "Testing Environment",
                  description: "Comprehensive sandbox for development and testing",
                  features: ["Test transactions", "Mock responses", "Debug tools", "Simulation modes"]
                }
              ].map((integration, index) => (
                <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{integration.title}</h3>
                  <p className="text-gray-600 mb-6">{integration.description}</p>
                  <ul className="space-y-2">
                    {integration.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <ProductFooter 
          title="Ready to Streamline Your Payments?"
          description="Join thousands of businesses who trust StackInflow for their payment processing needs. Start accepting payments in minutes."
        />
      </div>
    </Layout>
  );
};

export default StackInflowPage;