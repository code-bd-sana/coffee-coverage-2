import AboutSection from "@/component/homepage/AboutSection";
import HeroSection from "@/component/homepage/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
    </div>
  );
}
