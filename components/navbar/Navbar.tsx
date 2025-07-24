"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import HeroImage from "../../assets/static/stacklogo.png";
import Button from "../Button";
import PopupForm from "../PopupForm";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoChevronDown } from "react-icons/io5";
const Navbar = () => {
  const pathname = usePathname();
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
  const handleProductsDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setProductsDropdown(!productsDropdown);
  };
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && event.target && !dropdownRef.current.contains(event.target as Node)) {
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
      name: "Card Stack",
      description: "Facilitating the secure and swift authorization, clearing, and settlement of electronic payments between cardholders, merchants, and financial institutions.",
      features: [  
        { name: "Card Issuance", href: "/products/card-issuance" },
      ],
      href: "/products/card-issuance",
      
    },
    {
      name: "StackInflow",
      description: "Comprehensive payment solutions for seamless financial transactions.",
      features: [
        { name: "Payin", href: "/products/stackinflow/payin" },
        
      ],
      href: "/products/stackinflow",
      
    },
    {
      name: "StackRails",
      description: "Comprehensive financial platform enabling businesses to execute efficient outbound payments via secure NEFT and IMPS systems.",
      features: [
        { name: "Payout", href: "/products/stackinflow/payout" },
      ],
      href: "/products/stackinflow/payout",
      
    },
    {
      name: "Smart Stack",
      description: "Automating expense management, providing real-time financial control and insights from capture to reporting.",
      features: [
        { name: "Expense Management", href: "/products/smart-stack/expense-management" }
      ],
      href: "/products/smart-stack",
      
    }
  ];
  return (
    <>
      <nav className="sticky top-0 bg-gradient-to-r from-white/40 via-blue-50/30 to-white/40 backdrop-blur-2xl border-b border-white/40 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)] w-full h-auto z-[999]">
        <div className="max-w-7xl mx-auto px-4 flex flex-row justify-between items-center h-14 md:h-20">
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
          <div className="hidden lg:flex flex-row justify-center items-center gap-x-8">
            <Link
              href="/about"
              className="relative text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 tracking-wide group py-2"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={handleProductsDropdown}
                className="relative flex items-center gap-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 tracking-wide group py-2"
              >
                Products
                <IoChevronDown 
                  className={`w-4 h-4 transition-all duration-300 ${productsDropdown ? 'rotate-180 text-blue-600' : 'group-hover:text-blue-600'}`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </button>
              
              {productsDropdown && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[900px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/60 overflow-hidden z-50">
                  {/* Arrow Pointer */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-white/95 border-l border-t border-gray-100/60 transform rotate-45 backdrop-blur-xl"></div>
                  </div>
                  
                  {/* Products Row */}
                  <div className="flex divide-x divide-gray-100/60">
                    {products.map((product, index) => (
                      <div key={index} className="flex-1 p-6 hover:bg-gradient-to-b hover:from-blue-50/30 hover:to-indigo-50/20 group">
                        {/* Product Header */}
                        <Link
                          href={product.href}
                          className="block mb-4"
                          onClick={() => setProductsDropdown(false)}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                            </div>
                            <h3 className="font-bold text-gray-900 text-base group-hover:text-blue-700">{product.name}</h3>
                          </div>
                          <p className="text-xs text-gray-600 leading-relaxed mb-3">{product.description}</p>
                        </Link>
                        
                        {/* Feature List */}
                        {product.features && (
                          <div className="space-y-1">
                            {product.features.map((feature, featureIndex) => (
                              <Link
                                key={featureIndex}
                                href={feature.href}
                                className="block px-3 py-2 text-xs text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg"
                                onClick={() => setProductsDropdown(false)}
                              >
                                • {feature.name}
                              </Link>
                            ))}
                          </div>
                        )}
                        
                        {/* Learn More Link */}
                        <Link
                          href={product.href}
                          className="inline-flex items-center gap-1 mt-3 text-xs text-blue-600 hover:text-blue-700 font-medium"
                          onClick={() => setProductsDropdown(false)}
                        >
                          <span>Learn more</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    ))}
                  </div>
                  
                  {/* Footer */}
                  <div className="bg-gradient-to-r from-gray-50/50 to-blue-50/30 px-6 py-4 border-t border-gray-100/60">
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-600">Explore our complete product ecosystem</p>
                      <Link
                        href="/products"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-semibold rounded-xl shadow-md hover:shadow-lg"
                        onClick={() => setProductsDropdown(false)}
                      >
                        <span>View All</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div> 
            
            <Link
              href="/developers"
              className="relative text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 tracking-wide group py-2"
            >
              Developers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            <Link
              className="relative text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 tracking-wide group py-2"
              href="/contacts"
            >
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            <button
              onClick={handleOpenModal}
              className="hidden lg:block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Book a Demo
            </button>
          </div>
          {/* Login Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={handleLogin}
              className="px-6 py-2.5 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl border border-gray-200 hover:bg-white hover:text-blue-600 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Login
            </button>
          </div>
          {/* Hamburger menu */}
          <button
            className="block lg:hidden p-2 rounded-lg hover:bg-white/20 transition-all duration-300"
            onClick={handleMobileMenu}
            aria-label="Open mobile menu"
            title="Open mobile menu"
          >
            <RxHamburgerMenu size={24} className="text-gray-700 hover:text-blue-600" />
          </button>
        </div>
      </nav>
      {mobileMenu && (
        <div className="absolute w-[70%] top-16 right-4 border border-white/30 p-6 rounded-2xl lg:hidden bg-white/95 backdrop-blur-xl flex flex-col justify-center items-center gap-y-4 shadow-2xl animate-slide-in-from-top-2">
          <Link
            href="/about"
            className="text-base font-medium tracking-wide text-gray-700 hover:text-blue-600 transition-all duration-300 py-2"
          >
            About Us
          </Link>
          
          {/* Mobile Products Dropdown */}
          <div className="w-full">
            <button
              onClick={handleProductsDropdown}
              className="flex items-center justify-center gap-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 tracking-wide w-full py-2"
            >
              Products
              <IoChevronDown 
                className={`w-4 h-4 transition-all duration-300 ${productsDropdown ? 'rotate-180 text-blue-600' : ''}`}
              />
            </button>
            
            {productsDropdown && (
              <div className="w-full mt-3 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-gray-100/60 overflow-hidden">
                {/* Mobile Products List */}
                <div className="divide-y divide-gray-100/40">
                  {products.map((product, index) => (
                    <div key={index} className="p-4 hover:bg-blue-50/30">
                      {/* Product Header */}
                      <Link
                        href={product.href}
                        className="flex items-center gap-3 mb-3"
                        onClick={() => {
                          setProductsDropdown(false);
                          setMobileMenu(false);
                        }}
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm">{product.name}</h4>
                          <p className="text-xs text-gray-600">{product.description}</p>
                        </div>
                      </Link>
                      
                      {/* Feature List */}
                      {product.features && (
                        <div className="ml-11 space-y-1">
                          {product.features.slice(0, 3).map((feature, featureIndex) => (
                            <Link
                              key={featureIndex}
                              href={feature.href}
                              className="block text-xs text-gray-600 hover:text-blue-600 py-1"
                              onClick={() => {
                                setProductsDropdown(false);
                                setMobileMenu(false);
                              }}
                            >
                              • {feature.name}
                            </Link>
                          ))}
                          {product.features.length > 3 && (
                            <span className="block text-xs text-gray-500 py-1">
                              +{product.features.length - 3} more features
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Mobile Footer */}
                <div className="bg-gray-50/50 px-4 py-3 border-t border-gray-100/60">
                  <Link
                    href="/products"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-semibold rounded-lg shadow-md"
                    onClick={() => {
                      setProductsDropdown(false);
                      setMobileMenu(false);
                    }}
                  >
                    <span>View All Products</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <Link
            href="/developers"
            className="text-base font-medium tracking-wide text-gray-700 hover:text-blue-600 transition-all duration-300 py-2"
            onClick={() => setMobileMenu(false)}
          >
            Developers
          </Link>
          <Link
            className="text-base font-medium tracking-wide text-gray-700 hover:text-blue-600 transition-all duration-300 py-2"
            href="/contacts"
          >
            Contact Us
          </Link>
          <button
            onClick={handleOpenModal}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md mt-2"
          >
            Book a Demo
          </button>
          <button
            onClick={handleLogin}
            className="px-6 py-3 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl border border-gray-200 hover:bg-white hover:text-blue-600 hover:border-blue-300 transition-all duration-300 shadow-sm"
          >
            Login
          </button>
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