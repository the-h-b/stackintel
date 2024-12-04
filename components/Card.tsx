import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const Card = ({ image, title, description }: CardProps) => {
  return (
    <div className="relative overflow-hidden flex flex-col items-center w-[300px] h-[450px] rounded-lg border border-white backdrop-blur-md bg-white/25 px-8 py-[2em]">
      {/* Image Section */}
      <div className="h-auto w-[90%]  overflow-hidden rounded-md mb-4">
        <Image
          src={image}
          alt="services-image"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute top-56 left-6 w-[90%]">
        {/* Title */}
        <p className="text-gray-950 text-left font-normal text-xl mb-2">
          {title}
        </p>
        {/* Description */}
        <p className="text-gray-700 text-left text-md">{description}</p>
      </div>
    </div>
  );
};

export default Card;
