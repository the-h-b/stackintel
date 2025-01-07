import Image from "next/image";
import ProductSectionImg from "../../assets/product/p-s.png";
import ProductOverlayImg from "../../assets/product/p-overlay.png";
import { BsArrowRight } from "react-icons/bs";

const Component = () => {
  return (
    <div className="relative bg-white py-16 px-8 md:grid md:grid-cols-2">
      {/* Overlay Image */}
      <Image
        src={ProductOverlayImg}
        alt="Abstract Overlay"
        className="absolute hidden md:block top-32 left-16 lg:left-64 h-auto"
      />
      <div className="flex flex-col justify-center p-8 md:p-16 lg:p-32">
        <h5 className="text-[#3538CD] font-semibold text-sm md:text-base">
          Empowering Fintech
        </h5>
        <h1 className="text-xl md:text-2xl lg:text-3xl my-5 font-light w-full md:w-[80%]">
          Revolutionizing payment solutions with innovation, security, and
          scalability tailored to your business needs.
        </h1>
        <button className="flex flex-row items-center gap-x-2 mt-4 text-[#3538CD] text-sm md:text-base">
          Discover More <BsArrowRight />
        </button>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={ProductSectionImg}
          alt="Fintech Product"
          className="h-auto w-[80%] md:w-[70%] lg:w-[50%] -ml-0 md:-ml-16"
        />
      </div>
    </div>
  );
};

export default Component;
