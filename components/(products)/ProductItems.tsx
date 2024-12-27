import Image from "next/image";
import ProductDot from "../../assets/product/p-dot.png";
import ProductImg1 from "../../assets/product/pi-1.png";
import ProductImg2 from "../../assets/product/pi-2.png";
import ProductImg3 from "../../assets/product/pi-3.png";

const Component = () => {
  return (
    <>
      {/* Title Section */}
      <div className="text-center py-16 px-8">
        <h6 className="text-[#2634BB] font-bold text-sm md:text-base">
          Lorem Ipsum
        </h6>
        <h1 className="text-3xl md:text-5xl font-light my-5">
          Lorem Ipsum is simply dummy text
        </h1>
      </div>

      {/* Content Sections */}
      {[ProductImg1, ProductImg2, ProductImg3].map((img, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-16 md:py-24 md:px-32"
        >
          {/* Image */}
          <div className="flex justify-center items-center">
            <Image
              src={img}
              alt=""
              className="h-auto w-full max-w-md md:max-w-lg"
            />
          </div>

          {/* Text Content */}
          <div>
            <span className="text-[#2634BB] bg-[#E6E4FC] px-3 py-2 rounded uppercase font-bold text-xs md:text-sm">
              Lorem IPSUM
            </span>
            <h1 className="my-6 text-2xl md:text-4xl lg:text-5xl font-light">
              Lorem Ipsum is simply dummy text 
            </h1>
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex flex-col items-start space-y-2">
                    <Image src={ProductDot} alt="" className="h-auto w-8" />
                    <h2 className="font-bold text-base md:text-lg">
                      Lorem Ipsum
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since.
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Component;
