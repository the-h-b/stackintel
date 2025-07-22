import React from 'react';
import Layout from '../../../../components/layouts/Layout';
import ProductHeader from '../../../../components/(products)/ProductHeader';
import ProductSection from '../../../../components/(products)/ProductSection';
import ProductFeatures from '../../../../components/(products)/ProductFeatures';
import ProductFooter from '../../../../components/(products)/ProductFooter';
import Link from 'next/link';

const DocumentationsPage = () => {
  const productData = {
    title: "Documentations",
    subtitle: "Comprehensive Developer Resources",
    description: "Complete documentation, guides, and resources to help developers integrate and build with StackRails UPI infrastructure efficiently and effectively.",
    icon: "📚",
    features: [
      {
        title: "API Documentation",
        description: "Detailed API references with examples and interactive testing tools",
        icon: "📖"
      },
      {
        title: "Integration Guides",
        description: "Step-by-step integration guides for different platforms and languages",
        icon: "🔧"
      },
      {
        title: "Code Examples",
        description: "Ready-to-use code samples in multiple programming languages",
        icon: "💻"
      },
      {
        title: "SDK Libraries",
        description: "Official SDKs for popular programming languages and frameworks",
        icon: "📦"
      },
      {
        title: "Testing Tools",
        description: "Sandbox environment and testing tools for development and QA",
        icon: "🧪"
      },
      {
        title: "Video Tutorials",
        description: "Comprehensive video tutorials and webinars for developers",
        icon: "🎥"
      }
    ],
    benefits: [
      "Reduce integration time from weeks to days",
      "Interactive API explorer and testing tools",
      "Community support and developer forums",
      "Regular updates and version management",
      "Multi-language support and examples",
      "24/7 developer support and assistance"
    ]
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
        <ProductHeader 
          title={productData.title}
          subtitle={productData.subtitle}
          description={productData.description}
          icon={productData.icon}
        />
        
        <ProductSection 
          title="Why Our Documentation Stands Out?"
          benefits={productData.benefits}
        />
        
        <ProductFeatures 
          title="Documentation Features"
          features={productData.features}
        />
        
        {/* Developer Hub CTA */}
        <div className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Developing?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Visit our comprehensive Developer Hub for APIs, SDKs, guides, and more
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/developers"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center gap-2"
              >
                <span>🚀</span>
                Visit Developer Hub
              </Link>
              <Link
                href="/developers/quickstart"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 inline-flex items-center gap-2"
              >
                <span>📚</span>
                Quick Start Guide
              </Link>
            </div>
          </div>
        </div>

        <ProductFooter 
          title="Complete Documentation Suite"
          description="Access comprehensive documentation, interactive guides, and developer resources to build with StackRails efficiently."
        />
      </div>
    </Layout>
  );
};

export default DocumentationsPage;