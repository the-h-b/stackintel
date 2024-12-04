"use client";

import Card from "@/components/Card";
import React from "react";
import ServiceImage1 from "../../../assets/static/services/service1.svg";
import ServiceImage2 from "../../../assets/static/services/service2.svg";
import ServiceImage3 from "../../../assets/static/services/service3.svg";

const cardContents = [
  {
    id: 1,
    title: "Instant Card Insurance",
    description:
      "Issue prepaid and debit cards instantly, at scale, for any customer base.",
    image: ServiceImage1,
  },
  {
    id: 2,
    title: "Real-Time Data Insights",
    description:
      "Access multi-layered, enriched data for actionable insights and customer connection.",
    image: ServiceImage2,
  },
  {
    id: 3,
    title: "Fraud Prevention",
    description:
      "Comprehensive encryption ensures your business is protected at all stages.",
    image: ServiceImage3,
  },
];

const Service = () => {
  return (
    <div className="relative flex flex-col justify-center items-center mt-[4em] md:mt-[6em] lg:mt-[10em] ">
      {/* Left side blurred blobs (moving slightly to the right and back) */}
      <div className="absolute -left-20 top-20 w-32 h-32 bg-purple-500 rounded-full blur-2xl opacity-50 animate-leftfloat"></div>
      <div className="absolute -left-16 top-48 w-24 h-24 bg-pink-400 rounded-full blur-2xl opacity-40 animate-leftfloat2"></div>
      <div className="absolute -left-10 top-80 w-28 h-28 bg-blue-300 rounded-full blur-2xl opacity-50 animate-leftfloat3"></div>

      {/* Purple circle with blur effect (center-left-ish) - also moving horizontally */}
      <div className="absolute left-0 top-0 w-40 h-40 bg-purple-400 rounded-full blur-3xl opacity-30 animate-leftfloat4"></div>

      {/* Right side blurred blobs (moving slightly to the left and back) */}
      <div className="absolute -right-16 top-24 w-28 h-28 bg-green-300 rounded-full blur-2xl opacity-40 animate-rightfloat"></div>
      <div className="absolute -right-10 top-64 w-24 h-24 bg-yellow-300 rounded-full blur-2xl opacity-50 animate-rightfloat2"></div>

      <p className="text-gray-500 text-md md:text-lg font-semibold tracking-wide pb-2 md:pb-5 lg:pb-6">
        Product
      </p>
      <p className="text-3xl font-light pb-2 md:pb-5 lg:pb-6">
        Built for Game-Changers
      </p>
      <p className="w-[50%] text-md md:text-lg font-medium text-center text-gray-500 pb-2 md:pb-5 lg:pb-6">
        Why Settle When You Can Soar?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 mt-10">
        {cardContents.map((content) => (
          <div key={content.id}>
            <Card
              image={content.image}
              title={content.title}
              description={content.description}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes floatHorizontalLeft {
          0% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(300px);
          }
          100% {
            transform: translateX(0px);
          }
        }

        @keyframes floatHorizontalRight {
          0% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(-30px);
          }
          100% {
            transform: translateX(0px);
          }
        }

        .animate-leftfloat {
          animation: floatHorizontalLeft 8s ease-in-out infinite;
        }

        .animate-leftfloat2 {
          animation: floatHorizontalLeft 10s ease-in-out infinite;
        }

        .animate-leftfloat3 {
          animation: floatHorizontalLeft 12s ease-in-out infinite;
        }

        .animate-leftfloat4 {
          animation: floatHorizontalLeft 14s ease-in-out infinite;
        }

        .animate-rightfloat {
          animation: floatHorizontalRight 9s ease-in-out infinite;
        }

        .animate-rightfloat2 {
          animation: floatHorizontalRight 11s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Service;
