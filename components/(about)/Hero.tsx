import React from "react";
import Image from "next/image";
import AboutHeroImg from "../../assets/about/Container.png";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl font-medium text-center">
        <span className="text-primaryColor">Get to Know</span>
        <br /> StackIntel
      </h1>
      <p className="text-gray-700 text-center pt-4">
        Discover the team driving innovation and shaping the <br />
        future of the payment in fintech world
      </p>
      <Image
        src={AboutHeroImg}
        alt="about-image"
        height={500}
        width={500}
        className="h-auto w-[80%] md:w-[60%] lg:w-[40%] mt-[2em] md:mt-[4em]"
      />
    </div>
  );
};

export default Hero;
