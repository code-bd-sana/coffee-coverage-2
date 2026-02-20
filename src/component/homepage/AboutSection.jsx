"use client";
import Image from "next/image";
import aboutImage from "../../../public/about.jpg";

const AboutSection = () => {
  const showPage = (page, type) => {
    console.log("Navigating to:", page, type);
  };

  return (
    <section
      className='bg-[#1a1a1a] text-white px-[6%] py-[100px] md:px-[5%] md:py-[60px]'
      id='about-section'>
      <div className='max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 items-center'>
        {/* Text Content */}
        <div>
          <p className="font-['DM_Sans'] text-[15px] font-light leading-[1.8] text-white/50 mb-4">
            Your Advisor
          </p>
          <h2 className="font-['DM_Sans'] text-white text-4xl md:text-3xl font-bold leading-[1.2] mb-6">
            Kevin <em className='italic not-italic'>Vignolo</em>
          </h2>
          <p className="font-['DM_Sans'] text-[15px] font-light leading-[1.8] text-white/70 mb-4">
            With over 6 years of experience in the insurance industry, Kevin
            serves as a trusted advisor to homeowners and business owners
            throughout South Florida, delivering tailored risk management
            solutions.
          </p>
          <p className="font-['DM_Sans'] text-[15px] font-light leading-[1.8] text-white/70 mb-8">
            Based in Miami, Kevin has a deep understanding of Florida's
            ever-changing insurance climate. His passion for understanding each
            client's distinct needs enables him to craft sophisticated coverage
            strategies that go beyond standard protection.
          </p>
          <button
            className="inline-block px-8 py-3 bg-white  text-black border-none rounded-md font-['DM_Sans'] text-base font-medium cursor-pointer transition-colors duration-300 hover:bg-blue-700"
            onClick={() => showPage("quote", "homeowners")}>
            Work with Kevin
          </button>
        </div>

        {/* Image */}
        <div className='relative w-full h-full min-h-[400px] md:min-h-[350px] md:max-h-[400px] bg-[#2a3a4a] rounded-xl overflow-hidden aspect-[1/1.2] md:aspect-auto'>
          <Image
            src={aboutImage}
            alt='Kevin Vignolo - Insurance Advisor, Miami FL'
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            className='object-cover object-[center_15%]'
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
