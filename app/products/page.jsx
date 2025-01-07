import ProductFeatures from "../../components/(products)/ProductFeatures";
import ProductHeader from "../../components/(products)/ProductHeader";
import ProductItems from "../../components/(products)/ProductItems";
import ProductSection from "../../components/(products)/ProductSection";
import ProductSection2 from "../../components/(products)/ProductSection2";
import ProductFooter from "../../components/(products)/ProductFooter";

const page = () => {
  return (
    <>
      <div className="bg-background-color ">
        <ProductHeader />
        <ProductFeatures />
        <ProductItems />
        <ProductSection />
        <ProductSection2 />
        <ProductFooter />
      </div>
    </>
  );
};

export default page;
