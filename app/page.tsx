import About from "@/components/(landing)/about/About";
import Hero from "@/components/(landing)/hero/Hero";
import Scale from "@/components/(landing)/scale/Scale";
import Service from "@/components/(landing)/services/Service";
import Cta from "@/components/(landing)/cta/Cta";
import PopupForm from "@/components/PopupForm";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Scale />
      <Cta />
    </>
  );
}
