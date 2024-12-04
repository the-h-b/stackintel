import React from "react";
import Image from "next/image";
import IndustryImage from "../../../assets/gifs/industry.gif";
import IndustryLogo1 from "../../../assets/static/point1.png";
import IndustryLogo2 from "../../../assets/static/point2.png";
import IndustryLogo3 from "../../../assets/static/point3.png";

const industryItems = [
  {
    id: 1,
    title: "Cloud-Native Excellence",
    description:
      "Leverage the unmatched flexibility, speed, and power of our multi-cloud solutions—designed to adapt seamlessly to your needs.",
    image: IndustryLogo1,
  },
  {
    id: 2,
    title: "Scalability at Speed",
    description:
      "Scale effortlessly with high-capacity processing, lightning-fast performance, and rich data insights, ensuring zero disruption as you grow.",
    image: IndustryLogo2,
  },
  {
    id: 3,
    title: "Rich, Actionable Data",
    description:
      "Innovate and customize products faster with deeper insights to connect with customers while cutting operational costs.",
    image: IndustryLogo3,
  },
];

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-[4em] md:mt-[6em] lg:mt-[10em]">
      <p className="text-gray-500 text-md md:text-lg font-medium tracking-wide pb-2 md:pb-5 lg:pb-6">
        Dominating markets with effortless cool
      </p>
      <p className="text-3xl text-center font-light pb-2 md:pb-5 lg:pb-6">
        The Fix You've Been Looking For
      </p>
      <p className="lg:w-[50%] text-lg text-center text-gray-500 pb-2 md:pb-5 lg:pb-6">
        24+ years of brilliance: We’re the wizards behind lightning-quick
        launches and worldwide growth.
      </p>

      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="lg:w-[50%]">
          <Image
            src={IndustryImage}
            alt="industry-image"
            height={1000}
            width={1000}
            className="h-full w-full lg:w-[80%]"
          />
        </div>

        <div className="flex flex-col justify-start mt-[4em] lg:w-[40%] gap-y-10 md:gap-y-14">
          {industryItems.map((items) => (
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
                  className="h-auto w-20 md:-mt-1 bg-gray-100 rounded-md border border-white"
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
    </div>
  );
};

export default About;
