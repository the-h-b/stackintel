import React from "react";
import Image from "next/image";
import ProductImg1 from "../../assets/product/p-1.png";
import ProductImg2 from "../../assets/product/p-2.png";
import ProductImg3 from "../../assets/product/p-3.png";

const Component = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#3F87F2] py-16 md:py-32 rounded-lg">
        <div className="p-8 md:p-32">
          <h1 className="font-light text-3xl md:text-5xl leading-snug md:leading-tight text-white">
            Lorem Ipsum is simply dummy text of the printing
          </h1>
          <hr className="w-[150px] md:w-[300px] my-4 md:my-8" />
          <p className="text-base md:text-lg mb-4 font-normal text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="grid place-items-center h-auto p-8">
          <Image
            src={ProductImg1}
            alt="Product 1"
            className="h-auto w-full max-w-[300px] md:max-w-[60%]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#E06699] py-16 md:py-32 rounded-lg">
        <div className="p-8 md:p-32">
          <h1 className="font-light text-3xl md:text-5xl leading-snug md:leading-tight text-white">
            Lorem Ipsum is simply dummy text of the printing
          </h1>
          <hr className="w-[150px] md:w-[300px] my-4 md:my-8" />
          <p className="text-base md:text-lg mb-4 font-normal text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="grid place-items-center h-auto p-8">
          <Image
            src={ProductImg2}
            alt="Product 2"
            className="h-auto w-full max-w-[300px] md:max-w-[60%]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#616AD3] py-16 md:py-32 rounded-lg">
        <div className="p-8 md:p-32">
          <h1 className="font-light text-3xl md:text-5xl leading-snug md:leading-tight text-white">
            Lorem Ipsum is simply dummy text of the printing
          </h1>
          <hr className="w-[150px] md:w-[300px] my-4 md:my-8" />
          <p className="text-base md:text-lg mb-4 font-normal text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="grid place-items-center h-auto p-8">
          <Image
            src={ProductImg3}
            alt="Product 3"
            className="h-auto w-full max-w-[300px] md:max-w-[60%]"
          />
        </div>
      </div>
    </>
  );
};

export default Component;
