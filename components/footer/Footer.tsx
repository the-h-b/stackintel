import React from "react";
import FooterLogo from "../../assets/static/stacklogo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-2  border-t-2 border-gray-300 mt-[6em] py-[3em] lg:py-[4em]">
      {/* Logo */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-start">
        <div>
          <Image
            src={FooterLogo}
            alt="footer logo"
            height={500}
            width={500}
            className="h-auto w-[40%] -ml-2 md:ml-0 lg:w-[30%]"
          />
        </div>
        <div className="grid grid-cols-2 gap-[4em] pt-6 lg:pt-0">
          <div>
            <h6 className="text-lg font-semibold mb-3 md:mb-6">Products</h6>
            <div className="flex flex-col justify-start items-start gap-y-2">
              <Link
                href="#"
                className="text-gray-600 text-sm hover:text-gray-800"
              >
                Debit/credit card Insurance
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm hover:text-gray-800"
              >
                Card Processor
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm hover:text-gray-800"
              >
                Fraud Detection
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm hover:text-gray-800"
              >
                Use Cases
              </Link>
            </div>
          </div>
          <div>
            <h6 className="text-lg font-semibold mb-6">Company</h6>
            <div className="flex flex-col justify-start items-start gap-y-2">
              <Link
                href="#"
                className="text-gray-600 text-sm hover:text-gray-800"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm hover:text-gray-800"
              >
                Team
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm hover:text-gray-800"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full items-center mt-[4em]">
        <p className="text-gray-700 text-sm">
          © Stackintel, 2024. All rights reserved.
        </p>
        <div className="flex flex-row justify-evenly items-center gap-x-4">
          <p className="text-gray-500 text-sm">Legal Notice</p>
          <p className="text-gray-500 text-sm">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
