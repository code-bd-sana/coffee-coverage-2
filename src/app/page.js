import AboutSection from "@/component/homepage/AboutSection";
import BussinessInsurance from "@/component/homepage/BussinessInsurance";
import Cta from "@/component/homepage/Cta";
import FamilyInsurance from "@/component/homepage/FamilyInsurance";
import HeroSection from "@/component/homepage/HeroSection";
import Testimonial from "@/component/homepage/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FamilyInsurance />
      <BussinessInsurance />
      <AboutSection />
      <Testimonial />
      <Cta />
    </div>
  );
}
