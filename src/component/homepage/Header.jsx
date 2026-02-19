"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Services data
  const PERSONAL_SERVICES = [
    {
      id: "homeowners",
      label: "Homeowners Insurance",
      icon: "🏠",
      desc: "Protect your home and everything in it with comprehensive coverage tailored to your lifestyle.",
    },
    {
      id: "condo",
      label: "Condos / Co-Ops",
      icon: "🏢",
      desc: "Specialized coverage for condo and co-op owners, low and high-rises.",
    },
    {
      id: "renters",
      label: "Renters Insurance",
      icon: "🔑",
      desc: "Affordable protection for your personal belongings, liability, and living expenses.",
    },
    {
      id: "auto",
      label: "Auto Insurance",
      icon: "🚗",
      desc: "Full coverage for your vehicles with competitive rates from top-rated carriers.",
    },
    {
      id: "boat",
      label: "Boat Insurance",
      icon: "⛵",
      desc: "Comprehensive marine coverage for watercraft on Biscayne Bay and beyond.",
    },
    {
      id: "life",
      label: "Life Insurance",
      icon: "❤️",
      desc: "Secure your family's financial future with term and permanent life insurance solutions.",
    },
    {
      id: "jewelry",
      label: "Jewelry & Collections",
      icon: "💎",
      desc: "Specialized coverage for fine jewelry, watches, art, wine, and valuable collections.",
    },
    {
      id: "umbrella",
      label: "Umbrella Insurance",
      icon: "☂️",
      desc: "Extra liability protection that goes beyond the limits of your standard policies.",
    },
  ];

  const BUSINESS_SERVICES = [
    {
      id: "general-liability",
      label: "General Liability",
      icon: "🛡️",
      desc: "Protect your business from third-party claims of bodily injury and property damage.",
    },
    {
      id: "workers-comp",
      label: "Workers Compensation",
      icon: "👷",
      desc: "Coverage for employee injuries and illnesses that occur in the workplace.",
    },
    {
      id: "commercial-property",
      label: "Commercial Property",
      icon: "🏗️",
      desc: "Safeguard your business property, equipment, and inventory from loss.",
    },
    {
      id: "commercial-auto",
      label: "Commercial Auto",
      icon: "🚛",
      desc: "Fleet and commercial vehicle insurance for businesses of every size.",
    },
    {
      id: "professional-liability",
      label: "Professional Liability",
      icon: "⚖️",
      desc: "Errors & omissions coverage for professional service providers.",
    },
    {
      id: "cyber",
      label: "Cyber Insurance",
      icon: "🔒",
      desc: "Protection against data breaches, cyber attacks, and digital threats.",
    },
    {
      id: "directors-officers",
      label: "Directors & Officers",
      icon: "📋",
      desc: "D&O liability coverage protecting leadership from personal losses.",
    },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobile = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (page, serviceId = null) => {
    if (page === "quote" && serviceId) {
      router.push(`/quote/${serviceId}`);
    } else if (page === "personal" || page === "business") {
      // For service items, navigate to quote with service ID
      if (serviceId) {
        router.push(`/quote/${serviceId}`);
      }
    } else if (page === "home") {
      router.push("/");
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 px-[5%] ${
        scrolled
          ? "bg-white/97 backdrop-blur-xl border-b border-black/8"
          : "bg-black/15 border-b border-white/15"
      }`}>
      <div className='flex items-center justify-between h-[72px] max-w-[1400px] mx-auto'>
        {/* Logo */}
        <button
          onClick={() => handleNavigation("home")}
          className='flex items-baseline gap-2 cursor-pointer'>
          <span
            className={`text-[22px] font-bold tracking-[1px] transition-colors duration-300 ${
              scrolled ? "text-[#1a1a1a]" : "text-white"
            }`}>
            KEVIN VIGNOLO
          </span>
          <span
            className={`font-['DM_Sans'] text-[10px] tracking-[2px] uppercase opacity-60 transition-colors duration-300 ${
              scrolled ? "text-[#1a1a1a]" : "text-white"
            }`}>
            Insurance
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className='hidden lg:flex items-center gap-8'>
          {/* Individuals & Families Dropdown */}
          <div className='relative group'>
            <button
              className={`font-['DM_Sans'] text-[13px] font-medium tracking-[0.5px] uppercase py-2 transition-colors duration-300 flex items-center gap-1 ${
                scrolled ? "text-[#1a1a1a]" : "text-white"
              }`}>
              Individuals & Families
              <span className='text-[10px]'>▼</span>
            </button>
            <div className='absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.15)] py-4 min-w-[300px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-250 translate-y-2 group-hover:translate-y-0'>
              <div className=' gap-1'>
                {PERSONAL_SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleNavigation("personal", service.id)}
                    className='flex items-start gap-3 px-4 py-3 hover:bg-[#f5f3f0] transition-colors duration-150 text-left group/item'>
                    <span className='text-xl'>{service.icon}</span>
                    <div>
                      <div className="font-['DM_Sans'] text-[13px] font-medium text-[#333] group-hover/item:text-[#1a1a1a]">
                        {service.label}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Businesses Dropdown */}
          <div className='relative group'>
            <button
              className={`font-['DM_Sans'] text-[13px] font-medium tracking-[0.5px] uppercase py-2 transition-colors duration-300 flex items-center gap-1 ${
                scrolled ? "text-[#1a1a1a]" : "text-white"
              }`}>
              Businesses
              <span className='text-[10px]'>▼</span>
            </button>
            <div className='absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.15)] py-4 min-w-[300px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-250 translate-y-2 group-hover:translate-y-0'>
              <div className=' gap-1'>
                {BUSINESS_SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleNavigation("business", service.id)}
                    className='flex items-start gap-3 px-4 py-3 hover:bg-[#f5f3f0] transition-colors duration-150 text-left group/item'>
                    <span className='text-xl'>{service.icon}</span>
                    <div>
                      <div className="font-['DM_Sans'] text-[13px] font-medium text-[#333] group-hover/item:text-[#1a1a1a]">
                        {service.label}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* About Link */}
          <button
            onClick={() => {
              document
                .getElementById("about-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`font-['DM_Sans'] text-[13px] font-medium tracking-[0.5px] uppercase py-2 transition-colors duration-300 ${
              scrolled ? "text-[#1a1a1a]" : "text-white"
            }`}>
            About
          </button>

          {/* Quote Button */}
          <button
            onClick={() => handleNavigation("quote", "homeowners")}
            className={`font-['DM_Sans'] text-[12px] font-semibold tracking-[1.5px] uppercase py-2.5 rounded transition-all duration-300  ${
              scrolled
                ? "bg-[#1a1a1a] text-white px-8"
                : "bg-white text-[#1a1a1a] px-8"
            }`}>
            Get a Quote
          </button>
        </nav>

        {/* Mobile Burger */}
        <button onClick={toggleMobile} className='block lg:hidden p-2'>
          <div
            className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${
              mobileMenuOpen
                ? "rotate-45 translate-y-2 bg-[#1a1a1a]"
                : scrolled
                  ? "bg-[#1a1a1a]"
                  : "bg-white"
            }`}
          />
          <div
            className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${
              mobileMenuOpen
                ? "opacity-0"
                : scrolled
                  ? "bg-[#1a1a1a]"
                  : "bg-white"
            }`}
          />
          <div
            className={`w-6 h-0.5 transition-all duration-300 ${
              mobileMenuOpen
                ? "-rotate-45 -translate-y-2 bg-[#1a1a1a]"
                : scrolled
                  ? "bg-[#1a1a1a]"
                  : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-[#eee] transition-all duration-300 overflow-hidden ${
          mobileMenuOpen
            ? "max-h-[80vh] py-6 px-[5%] overflow-y-auto"
            : "max-h-0"
        }`}>
        {/* Individuals Section */}
        <div className="font-['DM_Sans'] text-[11px] tracking-[2px] uppercase text-[#999] mt-0 mb-3">
          INDIVIDUALS & FAMILIES
        </div>
        <div className='space-y-1'>
          {PERSONAL_SERVICES.map((service) => (
            <button
              key={service.id}
              onClick={() => handleNavigation("personal", service.id)}
              className='flex items-center gap-3 w-full text-left py-2.5 px-3 hover:bg-[#f5f3f0] rounded transition-colors duration-150'>
              <span className='text-lg'>{service.icon}</span>
              <span className="font-['DM_Sans'] text-[14px] text-[#333]">
                {service.label}
              </span>
            </button>
          ))}
        </div>

        {/* Businesses Section */}
        <div className="font-['DM_Sans'] text-[11px] tracking-[2px] uppercase text-[#999] mt-6 mb-3">
          BUSINESSES
        </div>
        <div className='space-y-1'>
          {BUSINESS_SERVICES.map((service) => (
            <button
              key={service.id}
              onClick={() => handleNavigation("business", service.id)}
              className='flex items-center gap-3 w-full text-left py-2.5 px-3 hover:bg-[#f5f3f0] rounded transition-colors duration-150'>
              <span className='text-lg'>{service.icon}</span>
              <span className="font-['DM_Sans'] text-[14px] text-[#333]">
                {service.label}
              </span>
            </button>
          ))}
        </div>

        {/* About Link */}
        <button
          onClick={() => {
            document
              .getElementById("about-section")
              ?.scrollIntoView({ behavior: "smooth" });
            setMobileMenuOpen(false);
          }}
          className="block w-full text-left py-3 px-3 mt-4 font-['DM_Sans'] text-[14px] text-[#333] hover:bg-[#f5f3f0] rounded">
          About
        </button>

        {/* Mobile Quote Button */}
        <button
          onClick={() => handleNavigation("quote", "homeowners")}
          className="w-full mt-6 py-3.5 bg-[#1a1a1a] text-white border-none rounded font-['DM_Sans'] text-[13px] font-semibold tracking-[1px] uppercase  transition-transform duration-300">
          Get a Quote
        </button>
      </div>
    </header>
  );
};

export default Header;
