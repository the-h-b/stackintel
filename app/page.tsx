import About from "@/components/(landing)/about/About";
import Hero from "@/components/(landing)/hero/Hero";
import Scale from "@/components/(landing)/scale/Scale";
import Service from "@/components/(landing)/services/Service";
import Cta from "@/components/(landing)/cta/Cta";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div id="hero-section">
          <Hero />
        </div>
        <div id="about-section">
          <About />
        </div>
        <div id="service-section">
          <Service />
        </div>
        <div id="scale-section">
          <Scale />
        </div>
        {/* <div id="innovation-section">
        <Innovation />
      </div> */}
        <Cta />
      </div>
    </>
  );
}
