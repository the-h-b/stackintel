import Client from "@/components/(about)/Client";
import Founders from "@/components/(about)/Founders";
import Hero from "@/components/(about)/Hero";
import Info from "@/components/(about)/Info";
import Investors from "@/components/(about)/Investors";
import Section3 from "@/components/(about)/Section3";
import React from "react";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Hero />
      <Info />
      <Section3 />
      {/* <Client /> */}
      <Founders />
      <Investors />
    </div>
  );
};

export default page;
