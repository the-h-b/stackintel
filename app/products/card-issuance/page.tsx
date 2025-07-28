import React from 'react';
import Layout from '../../../components/layouts/Layout';
import ProductHeader from '../../../components/(products)/ProductHeader';
import ProductSection from '../../../components/(products)/ProductSection';
import ProductFeatures from '../../../components/(products)/ProductFeatures';
import ProductSection2 from '../../../components/(products)/ProductSection2';
import ProductFooter from '../../../components/(products)/ProductFooter';
import { 
  HiOutlineChartBar, 
  HiOutlineShieldCheck, 
  HiOutlineGift,
  HiOutlineCreditCard
} from "react-icons/hi";
import { 
  HiOutlineBolt,
  HiOutlineBuilding,
  HiOutlineCog6Tooth,
  HiOutlinePaintBrush,
  HiOutlineBuildingOffice2,
  HiOutlineDevicePhoneMobile
} from "react-icons/hi2";

const CardIssuancePage = () => {
  const productData = {
    title: "Card Processing and Issuance - Made Easy with StackIntel",
    subtitle: "Advanced Digital Card Solutions",
    description: "Launch and manage your own card programs—virtual, physical, or hybrid—in minutes, not months. Our API-first platform gives you full lifecycle control, enterprise-grade security, and real-time insights, so you can focus on growing your business, not your infrastructure.",
    // icon: "💳",
    features: [
      {
        title: "Instant Card Issuance",
        description: "Virtual cards ready in seconds; physical cards live within 24 hrs.",
        icon: <HiOutlineBolt />
      },
      {
        title: "Multi-Network Support",
        description: "Multi-Network Support	Issue Visa, Mastercard, RuPay, and more under your own BIN.",
        icon: <HiOutlineBuilding />
      },
      {
        title: "Advanced Spend Controls",
        description: "Advanced Spend Controls	Real-time merchant filters, velocity rules, and dynamic limits.",
        icon: <HiOutlineCog6Tooth />
      },
      {
        title: "White-Label Branding",
        description: "Fully customize card art, packaging, and mobile app UI.",
        icon: <HiOutlinePaintBrush />
      },
      {
        title: "Security & Compliance",
        description: "PCI DSS Level 1 compliant with advanced fraud detection, tokenization, and multi-factor authentication",
        icon: <HiOutlineShieldCheck />
      },
      {
        title: "Real-Time Monitoring",
        description: "Live dashboards, transaction alerts, and usage breakdowns.",
        icon: <HiOutlineChartBar />
      }
    ],
    additionalFeatures: [
      {
        title: "Card Lifecycle Management",
        description: "Complete card lifecycle management from issuance to closure with automated workflows",
        items: [
          "Automated card activation and PIN generation",
          "Card blocking and unblocking capabilities",
          "Replacement card issuance for lost/stolen cards",
          "Card renewal and expiry management",
          "Bulk card operations and management"
        ]
      },
      {
        title: "Integration Capabilities",
        description: "Seamless integration with existing systems and third-party services",
        items: [
          "RESTful APIs for easy integration",
          "Webhook notifications for real-time updates",
          "Core banking system integration",
          "KYC and AML compliance integration",
          "Payment gateway and processor connectivity"
        ]
      },
      {
        title: "Analytics & Reporting",
        description: "Comprehensive reporting and analytics for business insights",
        items: [
          "Real-time transaction monitoring",
          "Card usage analytics and trends",
          "Revenue and profitability reports",
          "Compliance and audit reports",
          "Custom dashboard and KPI tracking"
        ]
      }
    ],
    benefits: [
      "Instant Go-Live: Spin up virtual cards instantly and ship physical cards in 24 hours—no more waiting days for provisioning.",
      "Cost-Efficient Automation: Slash operational overhead by up to 60% with end-to-end automation: onboarding, activation, PIN management, renewals, and more.",
      "Bank-Grade Security: Tokenization, AES encryption, multi-factor authentication, and built-in fraud detection keep you PCI-DSS Level 1 compliant.",
      "Data-Driven Decisions: In-depth analytics, customizable dashboards, and exportable reports put spending trends, revenue metrics, and compliance at your fingertips.",
      "24/7 customer support and technical monitoring",
      "Scalable infrastructure supporting millions of cards",
      "Regulatory compliance with global standards",
      "White-label solutions for brand consistency"
    ]
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <ProductHeader 
          title={productData.title}
          subtitle={productData.subtitle}
          description={productData.description}
        />
        
        <ProductSection 
          title="Why Choose Our Card Processing and Issuance Platform?"
          benefits={productData.benefits}
        />
        
        <ProductFeatures 
          title="Core Platform Features"
          features={productData.features}
        />

        {/* Additional Features Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Card Management Solutions
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to launch, manage, and scale your card program
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {productData.additionalFeatures.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Perfect for Every Use Case
              </h2>
              <p className="text-2xl text-gray-600">
                From corporate cards to consumer programs, we've got you covered
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Corporate Expense", desc: "Issue employee cards with pre-configured budgets and automated expense feeds.", icon: <HiOutlineBuildingOffice2 /> },
                { title: "Prepaid & Gift", desc: "Launch reloadable gift, campus, or payroll cards with simple bulk issuance.", icon: <HiOutlineGift /> },
                { title: "Virtual-Only Programs", desc: "Enable one-time or subscription-based digital cards for online spend.", icon: <HiOutlineCreditCard /> },
                { title: "Co-Brand & Partner Cards", desc: "White-label partner programs, loyalty or fuel cards under your branding.", icon: <HiOutlineDevicePhoneMobile /> }
              ].map((useCase, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl mb-4 flex justify-center text-blue-600">{useCase.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-sm text-gray-600">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <ProductFooter 
          title="Ready to transform your card business? "
          description="Contact us today to schedule a demo and see how StackIntel can get your card program live in days."
        />
      </div>
    </Layout>
  );
};

export default CardIssuancePage;