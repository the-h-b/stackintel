import Image from "next/image";
import { BsArrowRight, BsBook } from "react-icons/bs";
import ProductOverlayImg2 from "../../assets/product/p-overlay-2.png";
import ProductOverlayImg from "../../assets/product/p-overlay.png";

const Component = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 bg-white py-16 relative px-8 md:px-32">
      <Image
        src={ProductOverlayImg}
        className="absolute right-0 -top-16 h-auto hidden md:block"
        alt="Overlay"
      />
      <Image
        src={ProductOverlayImg2}
        className="absolute h-auto hidden md:block"
        alt="Overlay 2"
      />
      <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
        <h5 className="text-[#3538CD] font-semibold">Lorem Ipsum</h5>
        <h1 className="text-2xl md:text-3xl my-5 md:w-[80%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h1>
        <p className="text-gray-500 w-full md:w-[70%] mb-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p className="text-gray-500 w-full md:w-[70%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="col-span-12 md:col-span-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array(4)
            .fill("_")
            .map((_, index) => {
              return (
                <div key={index} className="p-4 md:p-8">
                  <div className="flex gap-3">
                    <div className="text-[#3538CD] font-bold mt-1 text-xl">
                      <BsBook />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">
                        Une solution personnalisée
                      </h4>
                      <p className="mt-3 text-sm md:text-base">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <a className="flex flex-row items-center gap-x-2 mt-4 text-[#3538CD] text-sm font-semibold">
                        Découvrir les outils? <BsArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Component;
