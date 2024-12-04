import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../assets/static/stacklogo.png";
import { HamburgerMenuIcon } from "../icons";
import Button from "../Button";

// Navbar Items
const navItems = [
  {
    id: 1,
    title: "Product",
    url: "/product",
  },
  {
    id: 2,
    title: "Company",
    url: "/company",
  },
  {
    id: 3,
    title: "Feature",
    url: "/fetaure",
  },
  {
    id: 4,
    title: "Use Cases",
    url: "/use-cases",
  },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-[#EFF1F5]/25 backdrop-blur-md border border-white w-full h-auto z-[999]">
      <div className="max-w-7xl mx-auto px-2 flex flex-row justify-between items-center h-14 md:h-20">
        {/* Hero Image */}
        <Image
          src={HeroImage}
          alt="hero-image"
          height={200}
          width={500}
          className="h-auto w-[35%] md:w-[20%] lg:w-[15%]"
        />

        {/* Navbar */}
        <div className="hidden lg:flex flex-row justify-center items-center gap-x-14">
          {navItems.map((navItems) => (
            <Link
              key={navItems.id}
              href={navItems.url}
              className="font-normal text-gray-700 tracking-wide"
            >
              {navItems.title}
            </Link>
          ))}
        </div>

        {/* Get in touch */}
        <div className="hidden lg:block flex items-center">
          <Button buttonText={"Get in Touch"} />
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden block flex items-center mr-4">
          <HamburgerMenuIcon iconSize={24} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
