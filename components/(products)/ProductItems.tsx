import Image from "next/image";
import ProductDot from "../../assets/product/p-dot.png";
import ProductImg1 from "../../assets/product/pi-1.png";
import ProductImg2 from "../../assets/product/pi-2.png";
import ProductImg3 from "../../assets/product/pi-3.png";

const ProductInformation = [
  {
    id: 1,
    title: "Seamless Integration",
    description:
      "Effortlessly integrate our solutions into your existing systems with minimal disruption and maximum efficiency.",
    features: [
      "API-driven adaptability for custom needs",
      "Multi-platform support for web and mobile",
      "Real-time data synchronization",
      "Scalable infrastructure for growing businesses",
    ],
    image: ProductImg1,
  },
  {
    id: 2,
    title: "Advanced Security",
    description:
      "Ensure your data and transactions are secure with our enterprise-grade security features.",
    features: [
      "End-to-end encryption for sensitive data",
      "Advanced fraud detection algorithms",
      "Compliance with global standards like PCI DSS",
      "24/7 monitoring for proactive threat management",
    ],
    image: ProductImg2,
  },
  {
    id: 3,
    title: "Streamlined Operations",
    description:
      "Optimize your workflows with innovative tools designed to reduce complexity and increase efficiency.",
    features: [
      "Customizable dashboards for actionable insights",
      "Automated processes to save time",
      "Real-time reporting for better decision-making",
      "Flexible deployment options",
    ],
    image: ProductImg3,
  },
];

const Component = () => {
  return (
    <>
      {/* Title Section */}
      <div className="text-center py-16 px-8">
        <h6 className="text-[#2634BB] font-semibold text-sm md:text-base">
          Robust Solutions
        </h6>
        <h1 className="text-3xl md:text-5xl font-light my-5">
          Comprehensive Solutions, Tailored for You
        </h1>
      </div>

      {/* Content Sections */}
      {ProductInformation.map((product, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-16 md:py-24 md:px-32"
        >
          {/* Image */}
          <div className="flex justify-center items-center">
            <Image
              src={product.image}
              alt={`${product.title} illustration`}
              className="h-auto w-full max-w-md md:max-w-lg"
            />
          </div>

          {/* Text Content */}
          <div>
            <span className="text-[#2634BB] bg-[#E6E4FC] px-3 py-2 rounded uppercase font-semibold text-xs md:text-sm">
              {product.title}
            </span>
            <h1 className="my-6 text-2xl md:text-4xl lg:text-5xl font-light">
              {product.description}
            </h1>
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {product.features.map((feature, i) => (
                <div key={i} className="flex flex-col items-start space-y-2">
                  <Image
                    src={ProductDot}
                    alt="Dot icon"
                    className="h-auto w-8"
                  />
                  <h2 className="font-bold text-base md:text-lg">{feature}</h2>
                  <p className="text-gray-500 text-sm md:text-base">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Component;
