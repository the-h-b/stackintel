import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import HeroImage from "../../../assets/gifs/hero.gif";
import BackgroundBlurImage from "../../../assets/static/background/hero-blur.svg";
import BackgroundBlurImage2 from "../../../assets/static/background/hero-blur2.svg";

const Hero = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row md:justify-between justify-center items-center gap-y-4">
      {/* left column */}
      <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-y-6 md:w-[50%]">
        <h1 className="text-4xl md:text-6xl text-center  lg:text-left  text-primaryColor">
          Revolutionalize <br /> Card Issuing.
        </h1>
        <h6 className="text-lg text-center lg:text-left text-gray-700 w-[95%] md:w-[80%]">
          Empowering fintechs, traditional banks, and digital pioneers to
          disrupt the card game like never before.
        </h6>
        <Button buttonText={"Book a Demo"} />
      </div>

      <Image
        src={BackgroundBlurImage}
        alt="background-image"
        height={500}
        width={600}
        className="h-auto w-[18%] absolute -top-10 left-0"
      />
      <Image
        src={BackgroundBlurImage2}
        alt="background-image"
        height={500}
        width={600}
        className="h-auto w-[18%] absolute top-0 left-10"
      />

      {/* Right column */}
      <div className="w-[90%] md:w-[50%]">
        <Image
          src={HeroImage}
          alt="hero-image"
          width={1000}
          height={1000}
          className="h-auto w-[100%]"
        />
      </div>
    </div>
  );
};

export default Hero;
