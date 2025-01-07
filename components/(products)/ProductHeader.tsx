import React from "react";
import ProductHeroImg from "../../assets/product/product-header.png";
import ProductOverlayImg from "../../assets/product/p-overlay.png";
import Image from "next/image";

const Component = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen relative">
      <Image
        src={ProductOverlayImg}
        className="absolute -ml-8 md:-ml-[100px] h-auto hidden md:block"
        alt="Overlay"
      />
      <div className="flex flex-col justify-center items-start pl-[2em] md:pl-[4em]">
        <p className="text-base md:text-lg mb-4 text-[#2634BB] font-bold">
          Transforming Innovation Into Impact
        </p>
        <h1 className="font-light text-2xl md:text-5xl leading-snug md:leading-tight w-full md:w-[80%]">
          Empowering the FinTech with advanced solutions
          <br className="hidden md:block" />
          that redefine possibilities.
        </h1>
      </div>
      <div className="bg-[#2634BB] text-white p-8 md:p-4 flex items-center justify-center">
        <Image
          src={ProductHeroImg}
          alt="Company Logo"
          className="h-auto w-full md:w-[80%] -ml-4 md:-ml-16 lg:-ml-72 mt-8 md:mt-32"
        />
      </div>
    </div>
  );
};

export default Component;
