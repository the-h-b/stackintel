import Image from "next/image";
import { BsArrowRight, BsBook } from "react-icons/bs";
import ProductOverlayImg2 from "../../assets/product/p-overlay-2.png";
import ProductOverlayImg from "../../assets/product/p-overlay.png";

const Component = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 bg-white py-16 relative px-8 md:px-32">
      {/* Overlay Images */}
      <Image
        src={ProductOverlayImg}
        className="absolute right-0 -top-16 h-auto hidden md:block"
        alt="Abstract Overlay 1"
      />
      <Image
        src={ProductOverlayImg2}
        className="absolute h-auto hidden md:block"
        alt="Abstract Overlay 2"
      />

      {/* Left Section: Introduction */}
      <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
        <h5 className="text-[#3538CD] font-semibold">Tailored Solutions</h5>
        <h1 className="text-2xl md:text-3xl my-5 md:w-[80%]">
          Empowering Businesses with Innovative Payment Solutions
        </h1>
        <p className="text-gray-500 w-full md:w-[70%] mb-3">
          At StackIntel, we deliver cutting-edge, customizable fintech solutions
          designed to meet the unique needs of businesses across industries.
        </p>
        <p className="text-gray-500 w-full md:w-[70%]">
          Our commitment to innovation and scalability ensures your business
          thrives in today’s fast-paced digital economy.
        </p>
      </div>

      {/* Right Section: Features */}
      <div className="col-span-12 md:col-span-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Personalized Solutions",
              description:
                "Custom-built fintech tools tailored to streamline your workflows and drive efficiency.",
              linkText: "Discover our tools",
            },
            {
              title: "Advanced Security",
              description:
                "Enterprise-grade encryption and fraud detection to protect your data and transactions.",
              linkText: "Explore security features",
            },
            {
              title: "Seamless Integration",
              description:
                "Effortlessly integrate our solutions into your existing systems with minimal downtime.",
              linkText: "Learn more about integration",
            },
            {
              title: "Real-Time Analytics",
              description:
                "Access actionable insights and make data-driven decisions with our advanced analytics tools.",
              linkText: "See analytics in action",
            },
          ].map((feature, index) => (
            <div key={index} className="p-4 md:p-8">
              <div className="flex gap-3">
                <div className="text-[#3538CD] font-bold mt-1 text-xl">
                  <BsBook />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{feature.title}</h4>
                  <p className="mt-3 text-sm md:text-base">
                    {feature.description}
                  </p>
                  <a
                    className="flex flex-row items-center gap-x-2 mt-4 text-[#3538CD] text-sm font-semibold"
                    href="#"
                  >
                    {feature.linkText} <BsArrowRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Component;
