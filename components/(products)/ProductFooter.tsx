import Image from "next/image";
import ProductFooterImg from "../../assets/product/product-footer.png";

const Component = () => {
  return (
    <div className="bg-[#3538CD] px-8 py-8 md:p-32">
      <div className="rounded p-4 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="my-auto">
            <h1 className="font-light text-2xl md:text-3xl text-white">
              Transforming Fintech, One Solution at a Time
            </h1>
            <p className="text-gray-200 my-4 md:mb-16 text-base md:text-xl">
              At StackIntel, we empower businesses with secure, scalable, and
              innovative payment solutions tailored to your needs. Join us in
              revolutionizing the future of financial technology.
            </p>
            <a
              href="#"
              className="inline-block px-4 py-3 border border-white text-white rounded text-sm md:text-base"
            >
              Learn More
            </a>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src={ProductFooterImg}
              alt="Innovative Fintech Solutions"
              className="h-auto w-[100%] md:w-[60%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
