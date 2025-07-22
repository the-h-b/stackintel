import React from 'react';
import Layout from '../../../components/layouts/Layout';
import ProductHeader from '../../../components/(products)/ProductHeader';
import ProductSection from '../../../components/(products)/ProductSection';
import ProductFeatures from '../../../components/(products)/ProductFeatures';
import ProductSection2 from '../../../components/(products)/ProductSection2';
import ProductFooter from '../../../components/(products)/ProductFooter';

const CardIssuancePage = () => {
  const productData = {
    title: "Card Issuance",
    subtitle: "Advanced Digital Card Solutions",
    description: "Transform your card issuance operations with our cutting-edge digital platform. Issue virtual and physical cards instantly, manage card lifecycles, and provide seamless customer experiences with enterprise-grade security and real-time monitoring capabilities.",
    icon: "💳",
    features: [
      {
        title: "Instant Card Issuance",
        description: "Issue virtual cards in seconds and physical cards within 24 hours with automated workflows and real-time provisioning",
        icon: "⚡"
      },
      {
        title: "Multi-Brand Support",
        description: "Full support for Visa, Mastercard, RuPay, and other major card networks with flexible BIN management",
        icon: "🏦"
      },
      {
        title: "Advanced Card Controls",
        description: "Granular spending controls, merchant restrictions, and real-time transaction limits with instant updates",
        icon: "🎛️"
      },
      {
        title: "Real-time Monitoring",
        description: "Comprehensive dashboard for tracking card usage, transactions, and performance metrics with detailed analytics",
        icon: "📊"
      },
      {
        title: "Security & Compliance",
        description: "PCI DSS Level 1 compliant with advanced fraud detection, tokenization, and multi-factor authentication",
        icon: "🔒"
      },
      {
        title: "White-label Solutions",
        description: "Fully customizable card designs and mobile apps with your branding and user experience",
        icon: "🎨"
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
      "Reduce card issuance time from days to minutes with instant virtual cards",
      "Lower operational costs by up to 60% with automated processes",
      "Enhanced security with tokenization, encryption, and fraud prevention",
      "Comprehensive analytics and reporting for data-driven decisions",
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
          icon={productData.icon}
        />
        
        <ProductSection 
          title="Why Choose Our Card Issuance Platform?"
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
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <p className="text-xl text-gray-600">
                From corporate cards to consumer programs, we've got you covered
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Corporate Cards", desc: "Employee expense management and corporate spending control", icon: "🏢" },
                { title: "Prepaid Cards", desc: "Gift cards, travel cards, and general purpose reloadable cards", icon: "🎁" },
                { title: "Credit Cards", desc: "Consumer and business credit card programs with flexible terms", icon: "💳" },
                { title: "Virtual Cards", desc: "Instant digital cards for online payments and subscriptions", icon: "📱" }
              ].map((useCase, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl mb-4">{useCase.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-sm text-gray-600">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <ProductFooter 
          title="Ready to Transform Your Card Issuance?"
          description="Join leading financial institutions who trust our platform for their card issuance needs. Get started today with our comprehensive card management solution."
        />
      </div>
    </Layout>
  );
};

export default CardIssuancePage;