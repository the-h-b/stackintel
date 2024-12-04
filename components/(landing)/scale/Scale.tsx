import React from "react";
import Image from "next/image";
import ScaleLogo from "../../../assets/static/scale.png";

const ScaleItems = [
  {
    id: 1,
    title: "Cloud-Native Mojo",
    description:
      "Experience unmatched scalability and lightning-fast performance. Our cloud-native infrastructure adapts effortlessly to your business needs, ensuring seamless growth without the typical bottlenecks.",
    image: ScaleLogo,
  },
  {
    id: 2,
    title: "Global Superpowers",
    description:
      "Break barriers and expand your reach with ease. Issue and manage cards across the globe with uninterrupted efficiency, backed by our robust and reliable platform. Empower your business to operate seamlessly.",
    image: ScaleLogo,
  },
  {
    id: 3,
    title: "API's that Wow",
    description:
      "Simplify integration with our sophisticated, developer-friendly APIs. Designed for ease and efficiency, they empower you to seamlessly embed advanced card-issuing capabilities into your ecosystem.",
    image: ScaleLogo,
  },
  {
    id: 4,
    title: "Your ROI",
    description:
      "Achieve faster time-to-market, significantly  lower operational costs, and the agility to innovate effortlessly. With our solution, growth becomes second nature, and your business stays ahead of the curve.",
    image: ScaleLogo,
  },
];

const Scale = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-4/4 mt-[4em] md:mt-[6em] lg:mt-[10em] gap-x-[5em]">
      <div className="w-full lg:w-1/4 flex flex-col justify-center items-center lg:justify-start lg:items-start gap-y-4 md:gap-y-5">
        <p className="text-lg text-gray-600">Scale wihtout Limit</p>
        <p className="text-4xl text-center lg:text-left font-light">
          Innovation at your <br /> Fingertips
        </p>
        <p className="text-md text-center lg:text-left font-gray-600">
          Wherever you’re headed, we’re already there. With local expertise and
          round-the- clock support, you’re unstoppable.
        </p>
      </div>
      <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 md:gap-x-[2em] gap-y-[2em] md:gap-y-[4em] mt-12 lg:mt-0">
        {ScaleItems.map((items) => (
          <div
            key={items.id}
            className="flex flex-row justify-start items-start gap-x-2"
          >
            <div>
              <Image
                src={items.image}
                alt="points-logo"
                height={200}
                width={200}
                className="h-auto w-32 lg:w-28 bg-gray-100 rounded-md border border-white"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-y-4">
              <p className="text-lg font-semibold">{items.title}</p>
              <p className="italic text-gray-600">{items.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scale;
