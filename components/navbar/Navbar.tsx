"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import HeroImage from "../../assets/static/stacklogo.png";
import Button from "../Button";
import PopupForm from "../PopupForm";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoChevronDown } from "react-icons/io5";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleLogin = () => {
    window.open(
      "http://corporates.stackintel.in/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleProductsDropdown = () => {
    setProductsDropdown(!productsDropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const products = [
    {
      name: "ProfileX",
      description: "Comprehensive identity verification and risk assessment solutions.",
      features: ["Onboarding", "Profiling", "Fraud Prevention", "Skip Tracing", "Nominee Tracing"],
      href: "/products/profilex"
    },
    {
      name: "CollectBot",
      description: "Integrate frictionless payment solutions in your product.",
      features: ["Payin", "Payout", "Virtual Account Number"],
      href: "/products/collectbot"
    },
    {
      name: "Consent Management",
      description: "Build user trust with respectful data processing and retention practices.",
      features: ["DPDP Consent Manager", "Blutic B2C"],
      href: "/products/consent-management"
    },
    {
      name: "UPI Svitch",
      description: "Streamline your payments with our powerful UPI infrastructure.",
      features: ["UPI Infrastructure"],
      href: "/products/upi-svitch"
    }
  ];

  return (
    <>
      <nav className="sticky top-0 bg-[#EFF1F5]/25 backdrop-blur-md border border-white w-full h-auto z-[999]">
        <div className="max-w-7xl mx-auto px-2 flex flex-row justify-between items-center h-12 md:h-20">
          {/* Hero Image */}
          <Link href="/">
            <Image
              src={HeroImage}
              alt="hero-image"
              height={200}
              width={500}
              className="h-auto w-[35%] md:w-[30%] lg:w-[30%] cursor-pointer"
            />
          </Link>

          <div className="hidden lg:flex flex-row justify-center items-center gap-x-6">
            <Link
              href="/about"
              className="text-[16px] text-gray-700 hover:text-gray-900 transition-all tracking-wide"
            >
              About Us
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={handleProductsDropdown}
                className="flex items-center gap-1 text-[16px] text-gray-700 hover:text-gray-900 transition-all tracking-wide"
              >
                Products
                <IoChevronDown 
                  className={`w-4 h-4 transition-transform ${productsDropdown ? 'rotate-180' : ''}`}
                />
              </button>
              
              {productsDropdown && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 py-4 z-50">
                  <div className="flex flex-row gap-4 px-4">
                    {products.map((product, index) => (
                      <Link
                        key={index}
                        href={product.href}
                        className="flex-1 min-w-[200px] px-4 py-3 hover:bg-white/20 transition-all duration-300 rounded-lg"
                        onClick={() => setProductsDropdown(false)}
                      >
                        <div className="mb-3">
                          <h3 className="font-semibold text-gray-900 text-sm mb-1">{product.name}</h3>
                          <p className="text-xs text-gray-700 leading-relaxed mb-3">{product.description}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                          {product.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full text-center"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-white/20 mt-4 pt-3 px-4">
                    <Link
                      href="/products"
                      className="inline-block px-4 py-2 text-sm text-blue-600 hover:text-blue-800 font-medium hover:bg-white/20 rounded-lg transition-all duration-300"
                      onClick={() => setProductsDropdown(false)}
                    >
                      View All Products →
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <a
              href="https://developer.stackintel.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] tracking-wide text-gray-700 hover:text-gray-900 transition-all"
            >
              Developers
            </a>
            <Link
              className="text-[16px] text-gray-700 hover:text-gray-900 transition-all tracking-wide"
              href="/contacts"
            >
              Contact Us
            </Link>

            {/* Option B: Keep Button and Redirect Using window.open */}

            <button
              onClick={handleOpenModal}
              className="hidden lg:block text-gray-700 hover:text-gray-900 transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Login Button */}
          <div className="hidden lg:flex items-center">
            <Button buttonText={"Login"} onClick={handleLogin} />
          </div>

          {/* Hamburger menu */}
          <button
            className="block lg:hidden"
            onClick={handleMobileMenu}
            aria-label="Open mobile menu"
            title="Open mobile menu"
          >
            <RxHamburgerMenu size={24} />
          </button>
        </div>
      </nav>

      {mobileMenu && (
        <div className="absolute w-[60%] top-16 right-0 border border-white/20 p-6 rounded-lg lg:hidden bg-white/10 backdrop-blur-md flex flex-col justify-center items-center gap-y-[1em] shadow-md">
          <Link
            href="/about"
            className="text-[16px] tracking-wide text-gray-700 hover:text-gray-900 transition-all"
          >
            About Us
          </Link>
          
          {/* Mobile Products Dropdown */}
          <div className="w-full">
            <button
              onClick={handleProductsDropdown}
              className="flex items-center justify-center gap-1 text-[16px] text-gray-700 hover:text-gray-900 transition-all tracking-wide w-full"
            >
              Products
              <IoChevronDown 
                className={`w-4 h-4 transition-transform ${productsDropdown ? 'rotate-180' : ''}`}
              />
            </button>
            
            {productsDropdown && (
              <div className="w-full mt-2 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 py-2">
                {products.map((product, index) => (
                  <Link
                    key={index}
                    href={product.href}
                    className="block px-4 py-2 hover:bg-white/20 transition-all duration-300 rounded-lg mx-1"
                    onClick={() => {
                      setProductsDropdown(false);
                      setMobileMenu(false);
                    }}
                  >
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900 text-sm">{product.name}</h3>
                      <p className="text-xs text-gray-700 mt-1">{product.description}</p>
                    </div>
                  </Link>
                ))}
                <div className="border-t border-white/20 mt-1 pt-1">
                  <Link
                    href="/products"
                    className="block px-4 py-2 text-sm text-blue-600 hover:text-blue-800 font-medium text-center hover:bg-white/20 rounded-lg transition-all duration-300 mx-1"
                    onClick={() => {
                      setProductsDropdown(false);
                      setMobileMenu(false);
                    }}
                  >
                    View All Products →
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <a
            href="https://developer.stackintel.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] tracking-wide text-gray-700 hover:text-gray-900 transition-all"
          >
            Developers
          </a>
          <Link
            className="text-[16px] tracking-wide text-gray-700 hover:text-gray-900 transition-all"
            href="/contacts"
          >
            Contact Us
          </Link>

          {/* Option A: Replace Button with Anchor Tag */}
          <div className="hidden lg:flex items-center mr-6">
            <a
              onClick={handleOpenModal}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </a>
          </div>

          {/* Option B: Keep Button and Redirect Using window.open */}
          {/* 
          <button
            onClick={() => window.open("https://corporate.stackintel.in/", "_blank", "noopener,noreferrer")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </button>
          */}

          <Button buttonText={"Login"} onClick={handleLogin} />
        </div>
      )}

      {/* PopupForm Modal */}
      <PopupForm
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default Navbar;
