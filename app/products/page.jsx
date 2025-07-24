import ProductFeatures from "../../components/(products)/ProductFeatures";
import ProductHeader from "../../components/(products)/ProductHeader";
import ProductItems from "../../components/(products)/ProductItems";
import ProductSection from "../../components/(products)/ProductSection";
import ProductSection2 from "../../components/(products)/ProductSection2";
import ProductFooter from "../../components/(products)/ProductFooter";

const page = () => {
  // Product data
  const headerData = {
    title: "Comprehensive Financial Technology Solutions",
    subtitle: "StackIntel Products",
    description: "Discover our suite of innovative fintech products designed to streamline your business operations, enhance security, and drive growth in the digital economy.",
    // icon: "🚀"
  };

  const featuresData = {
    title: "Powerful Features for Modern Business",
    features: [
      {
        title: "Advanced Security",
        description: "Enterprise-grade encryption and fraud detection to protect your data and transactions with multi-layer security protocols.",
        icon: "🔒"
      },
      {
        title: "Real-time Processing",
        description: "Lightning-fast transaction processing with real-time updates and instant notifications for seamless operations.",
        icon: "⚡"
      },
      {
        title: "Seamless Integration",
        description: "Easy-to-implement APIs and SDKs that integrate smoothly with your existing systems and workflows.",
        icon: "🔗"
      },
      {
        title: "Analytics & Insights",
        description: "Comprehensive dashboard with detailed analytics and actionable insights to drive informed business decisions.",
        icon: "📊"
      },
      {
        title: "24/7 Support",
        description: "Round-the-clock technical support and customer service to ensure your operations run smoothly.",
        icon: "🛟"
      },
      {
        title: "Scalable Solutions",
        description: "Flexible architecture that grows with your business, from startup to enterprise-level operations.",
        icon: "📈"
      }
    ]
  };

  const itemsData = {
    title: "Our Product Portfolio",
    items: [
      {
        title: "Card Stack",
        description: "Advanced platform for digital card issuance and management solutions.",
        href: "/products/card-issuance",
        icon: "💳"
      },
      {
        title: "StackInflow",
        description: "Comprehensive payment solutions for seamless financial transactions.",
        href: "/products/stackinflow",
        icon: "💰"
      },
      {
        title: "StackRails",
        description: "Next-generation UPI payment infrastructure with comprehensive documentation.",
        href: "https://developer.stackintel.in/",
        icon: "🚀"
      },
      {
        title: "Smart Stack",
        description: "Intelligent business management solutions with advanced automation capabilities.",
        href: "/products/smart-stack",
        icon: "🧠"
      }
    ]
  };

  const sectionData = {
    title: "Why Choose StackIntel for Your Financial Technology Needs",
    benefits: [
      "Industry-leading security standards with end-to-end encryption",
      "99.9% uptime guarantee with robust infrastructure",
      "Comprehensive API documentation and developer support",
      "Flexible pricing models to suit businesses of all sizes",
      "Regulatory compliance across multiple jurisdictions",
      "Advanced fraud detection and prevention systems"
    ]
  };

  const footerData = {
    title: "Ready to Transform Your Business with StackIntel?",
    description: "Join thousands of businesses that trust StackIntel for their financial technology needs. Get started today and experience the power of our comprehensive fintech solutions."
  };

  return (
    <>
      <div className="bg-background-color ">
        <ProductHeader 
          title={headerData.title}
          subtitle={headerData.subtitle}
          description={headerData.description}
          icon={headerData.icon}
        />
        <ProductFeatures 
          title={featuresData.title}
          features={featuresData.features}
        />
        <ProductItems 
          title={itemsData.title}
          items={itemsData.items}
        />
        <ProductSection 
          title={sectionData.title}
          benefits={sectionData.benefits}
        />
        <ProductSection2 />
        <ProductFooter 
          title={footerData.title}
          description={footerData.description}
        />
      </div>
    </>
  );
};

export default page;
