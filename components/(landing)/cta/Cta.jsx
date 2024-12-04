import Button from "@/components/Button";
import React from "react";
import Image from "next/image";
import CTAImage from "../../../assets/static/cta.png";

const Cta = () => {
  return (
    <>
      <div className="flex flex-col justify-center lg:flex-row lg:justify-between items-center gap-x-[6em] mt-[10em] border border-white bg-white/25 backdrop-blur-sm py-6 px-4 md:px-6 lg:px-10 rounded-lg mt-[20em]">
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-4xl font-normal lg:font-light">
            Faster, Simpler, Seamless, Secure
          </h1>
          <p className="text-gray-500 mt-4 text-lg">
            Introducing a Processing platform designed to prevent fraud before
            it occurs, exceed cardholder expectations, and adapt seamlessly to
            whatever comes next
          </p>
        </div>
        <div className="pt-8 md:pt-0">
          <Image
            src={CTAImage}
            alt="ctaimage"
            height={800}
            width={800}
            className="h-auto w-[100%]"
          />
        </div>
      </div>

      <div className="w-full mx-auto flex flex-col justify-center items-center gap-y-4 mt-[4em]">
        <p className="font-normal text-lg text-gray-500 ">
          Let's Build Greatness Together
        </p>
        <p className="text-3xl text-center font-light text-gray-800">
          Your Vision. Our Platform. Endless Possibilities
        </p>
        <p className="font-normal text-lg text-gray-500 text-center">
          Why wait? Let’s reshape payments and make innovation the new norm.Book
          <br />
          Your Demo Now and let’s turn your card-issuing dreams into reality.
        </p>
        <Button buttonText="Get Demo" />
      </div>
    </>
  );
};

export default Cta;
