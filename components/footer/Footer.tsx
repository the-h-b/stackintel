import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import CeritificationLogoPCI from "../../assets/static/certification_logo_pic.png";
import CeritificationLogoISO from "../../assets/static/certification_logo_iso.png";
import FooterLogo from "../../assets/static/stacklogo.png";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-2  border-t-2 border-gray-300 mt-[6em] py-[3em] lg:py-[4em]">
      {/* Logo */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-start">
        <div className="flex flex-col justify-start items-start">
          <Image
            src={FooterLogo}
            alt="footer logo"
            height={500}
            width={500}
            className="h-auto w-[40%] -ml-2 md:ml-0 lg:w-[30%]"
          />

          <div className="flex gap-4 my-5 px-3">
            <Image
              src={CeritificationLogoPCI}
              alt="footer logo"
              className="h-auto w-[130px]"
            />
            <Image
              src={CeritificationLogoISO}
              alt="footer logo"
              className="h-auto w-[100%]"
            />
          </div>
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
        <div className="grid grid-cols-2 gap-[4em] pt-6 lg:pt-0">
          {/* <div>
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
          </div> */}
          <div className="flex flex-col justify-start items-start gap-x-4 gap-y-2">
            <p className="text-gray-700 font-medium">
              Follow us on our social media
            </p>
            <div className="flex flex-row justify-start items-start gap-x-4">
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
