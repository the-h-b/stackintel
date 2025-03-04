import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import CeritificationLogoPCI from "../../assets/static/certification_logo_pic.png";
import CeritificationLogoISO from "../../assets/static/certification_logo_iso.png";
import FooterLogo from "../../assets/static/stacklogo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-2 border-t-2 border-gray-300 mt-[6em] py-[3em] lg:py-[4em]">
      {/* Logo */}
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-start w-full">
        <div className="flex flex-col ">
          <Image
            src={FooterLogo}
            alt="footer logo"
            height={500}
            width={500}
            className="h-auto w-[40%] -ml-2 md:ml-0 lg:w-[30%]"
          />

          <div className="w-full px-2 flex flex-col justify-between items-start mx-auto mt-4 text-left mb-2 text-gray-500 text-md ">
            <div className="flex flex-col justify-start items-start">
              <div>
                <p className="text-lg text-gray-900 font-normal">Address</p>
                <p className="text-md text-gray-900 font-medium">Mumbai</p>
                <p className="pb-2 text-sm w-[80%] text-gray-700 font-normal">
                  #201, 2nd Floor, Arc Plaza Industrial Estate, Veera Desai
                  Road, Andheri West, Mumbai-400053
                </p>

                <p className="text-md text-gray-900 font-medium">Bangalore</p>
                <p className="pb-2 text-sm text-gray-700">
                  27th Main HSR Layout Bangalore 560102
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-800">contact</p>
                <a
                  href="tel:+918194866666"
                  className="text-sm pb-2 text-gray-700 "
                >
                  +91 81948 66666
                </a>
                <p className="text-sm pb-2 text-gray-700 ">
                  info@stackintel.in
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end items-end gap-x-4 gap-y-2 ">
          <p className="text-gray-700 font-medium">
            Follow us on our social media
          </p>
          <div className="flex flex-row justify-center items-center gap-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61567864861364"
              className="text-blue-800 bg-gray-300 rounded-full p-[8px] hover:text-gray-900 cursor-pointer"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="https://x.com/stackintelhq?s=11"
              className="text-blue-800 bg-gray-300 rounded-full p-[8px] hover:text-gray-900 cursor-pointer"
            >
              <FaXTwitter size={14} />
            </a>
            <a
              href="https://www.linkedin.com/company/stackintelofficial/about/?viewAsMember=true"
              className="text-blue-800 bg-gray-300 rounded-full p-[8px] hover:text-gray-900 cursor-pointer"
            >
              <FaLinkedinIn size={14} />
            </a>
            <a
              href="https://www.instagram.com/stackintelofficial/"
              className="text-blue-800 bg-gray-300 rounded-full p-[8px] hover:text-gray-900 cursor-pointer"
            >
              <FaInstagram size={14} />
            </a>
          </div>
          <div className="flex flex-row justify-end items-end gap-x-4">
            <Image
              src={CeritificationLogoPCI}
              alt="footer logo"
              className="h-auto w-[15%]"
            />
            <Image
              src={CeritificationLogoISO}
              alt="footer logo"
              className="h-auto w-[15%]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between w-full items-center mt-[4em]">
        <p className="text-gray-700 text-sm">
          © Stackintel, 2025. All rights reserved.
        </p>
        <div className="flex flex-row justify-evenly items-center gap-x-4">
          <Link href="/terms-and-conditions" className="text-gray-500 text-sm">
            Terms and Conditions
          </Link>
          <Link href="/privacy-policy" className="text-gray-500 text-sm">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
