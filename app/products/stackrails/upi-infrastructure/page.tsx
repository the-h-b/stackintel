import React from 'react';
import Layout from '../../../../components/layouts/Layout';
import ProductHeader from '../../../../components/(products)/ProductHeader';
import ProductSection from '../../../../components/(products)/ProductSection';
import ProductFeatures from '../../../../components/(products)/ProductFeatures';
import ProductFooter from '../../../../components/(products)/ProductFooter';
import { 
  HiOutlineTrendingUp, 
  HiOutlineChartBar, 
  HiOutlineShieldCheck
} from "react-icons/hi";
import { 
  HiOutlineBuildingLibrary, 
  HiOutlineBuilding,
  HiOutlineScale
} from "react-icons/hi2";

const UpiInfrastructurePage = () => {
  const productData = {
    title: "UPI Infrastructure",
    subtitle: "Enterprise-Grade UPI Solutions",
    description: "Robust and scalable UPI infrastructure designed for enterprises. Handle millions of UPI transactions with guaranteed uptime, security, and performance.",
    icon: <HiOutlineBuildingLibrary />,
    features: [
      {
        title: "Scalable Architecture",
        description: "Auto-scaling infrastructure that grows with your transaction volume",
        icon: <HiOutlineTrendingUp />
      },
      {
        title: "Multi-Bank Connectivity",
        description: "Direct connectivity with multiple banks for redundancy and optimization",
        icon: <HiOutlineBuilding />
      },
      {
        title: "Real-time Monitoring",
        description: "Advanced monitoring and alerting for proactive issue resolution",
        icon: <HiOutlineChartBar />
      },
      {
        title: "Load Balancing",
        description: "Intelligent load distribution across multiple servers and regions",
        icon: <HiOutlineScale />
      },
      {
        title: "Disaster Recovery",
        description: "Comprehensive backup and disaster recovery mechanisms",
        icon: <HiOutlineShieldCheck />
      },
      {
        title: "Performance Analytics",
        description: "Detailed performance metrics and transaction analytics",
        icon: <HiOutlineTrendingUp />
      }
    ],
    benefits: [
      "Handle 10,000+ transactions per second",
      "99.99% uptime with SLA guarantees",
      "Sub-second transaction processing",
      "Multi-region deployment for low latency",
      "Automated failover and recovery",
      "Comprehensive compliance and security"
    ]
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <ProductHeader 
          title={productData.title}
          subtitle={productData.subtitle}
          description={productData.description}
          icon={productData.icon}
        />
        
        <ProductSection 
          title="Why Choose Our UPI Infrastructure?"
          benefits={productData.benefits}
        />
        
        <ProductFeatures 
          title="Infrastructure Capabilities"
          features={productData.features}
        />
        
        <ProductFooter 
          title="Scale Your UPI Operations"
          description="Build on enterprise-grade UPI infrastructure trusted by leading financial institutions."
        />
      </div>
    </Layout>
  );
};

export default UpiInfrastructurePage;