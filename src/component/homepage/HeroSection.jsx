"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80",
    tag: "Miami's Trusted Insurance Advisor",
    title: "Protecting What",
    emphasis: "Matters Most",
    description:
      "Personalized insurance solutions designed around you — your home, your family, your business.",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tag: "Comprehensive Coverage",
    title: "Secure Your",
    emphasis: "Family's Future",
    description:
      "Life insurance and retirement planning tailored to your unique needs and goals.",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    tag: "Business Protection",
    title: "Safeguard Your",
    emphasis: "Enterprise",
    description:
      "Commercial insurance solutions to protect your business assets and operations.",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 0.5;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const handleGetQuote = () => {
    // Implement quote navigation
    console.log("Navigate to quote");
  };

  const handleServicesClick = () => {
    const element = document.getElementById("services-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className='hero relative h-[calc(100vh-72px)] mt-[72px] overflow-hidden bg-black'
      id='hero'>
      {/* Slides */}
      <div id='heroSlides'>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide absolute inset-0 overflow-hidden transition-opacity duration-[1600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              index === currentSlide
                ? "active opacity-100 z-[1]"
                : "opacity-0 z-0"
            }`}>
            <div className='hero-slide-photo absolute inset-[-5%] w-[110%] h-[110%] will-change-transform'>
              <Image
                src={slide.imageUrl}
                alt={`Slide ${index + 1}`}
                fill
                className='object-cover object-[center_60%]'
                priority={index === 0}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
              />
            </div>
          </div>
        ))}
      </div>

      {/* Overlays */}
      <div className='hero-vignette absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_30%,_rgba(0,0,0,0.6)_100%)] pointer-events-none'></div>
      <div className='hero-gradient absolute bottom-0 left-0 right-0 h-[60%] z-[3] bg-gradient-to-t from-black/75 to-transparent pointer-events-none'></div>
      <div className='hero-top-grad absolute top-0 left-0 right-0 h-[25%] z-[3] bg-gradient-to-b from-black/40 to-transparent pointer-events-none'></div>

      {/* Content */}
      <div className='hero-content absolute bottom-[12%] left-[6%] z-[5] max-w-[700px] animate-[slideUp_1s_0.5s_ease_both]'>
        <div className="hero-tag font-['DM_Sans'] text-[11px] tracking-[4px] uppercase text-white/60 mb-5 pl-[44px] relative">
          <span className='absolute left-0 top-1/2 w-[32px] h-px bg-white/40 -translate-y-1/2'></span>
          {slides[currentSlide].tag}
        </div>
        <h1 className='hero-h1 text-[clamp(36px,5.5vw,72px)] font-light text-white leading-[1.08] mb-6 tracking-[-0.5px]'>
          {slides[currentSlide].title}
          <br />
          <em className='font-normal italic'>
            {slides[currentSlide].emphasis}
          </em>
        </h1>
        <p className="hero-p font-['DM_Sans'] text-[clamp(14px,1.5vw,17px)] font-light text-white/70 leading-[1.65] max-w-[480px] mb-9">
          {slides[currentSlide].description}
        </p>
        <div className='hero-btns flex gap-4 flex-wrap'>
          <button
            className="btn-primary font-['DM_Sans'] text-[12px] font-semibold tracking-[1.5px] uppercase px-9 py-[14px] bg-white text-[#1a1a1a] border-none rounded transition-transform hover:-translate-y-0.5"
            onClick={handleGetQuote}>
            Get a Quote
          </button>
          <button
            className="btn-outline font-['DM_Sans'] text-[12px] font-medium tracking-[1.5px] uppercase px-9 py-[14px] bg-transparent text-white border border-white/35 rounded transition-colors hover:bg-white/10"
            onClick={handleServicesClick}>
            Our Services
          </button>
        </div>
      </div>

      {/* Indicators */}
      <div className='hero-indicators absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-10'>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`hero-ind h-[2px] rounded-[1px] cursor-pointer transition-all duration-500 ${
              index === currentSlide ? "w-8 bg-white" : "w-4 bg-white/30"
            }`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className='hero-progress absolute bottom-0 left-0 right-0 h-[3px] z-10 bg-white/10'>
        <div
          className='hero-progress-bar h-full bg-gradient-to-r from-white/30 to-white/80 transition-[width] duration-[150ms] linear'
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
