"use client";
import React from "react";

const Footer = () => {
  // Personal Lines লিংক with proper quote paths
  const personalLines = [
    { name: "Homeowners Insurance", link: "/quote/homeowners" },
    { name: "Auto Insurance", link: "/quote/auto" },
    { name: "Flood Insurance", link: "/quote/flood" },
    { name: "High-Value Property", link: "/quote/high-value-property" },
    { name: "Personal Umbrella", link: "/quote/personal-umbrella" },
  ];

  // Commercial Lines লিংক with proper quote paths
  const commercialLines = [
    { name: "General Liability", link: "/quote/general-liability" },
    { name: "Commercial Property", link: "/quote/commercial-property" },
    { name: "Workers Compensation", link: "/quote/workers-comp" },
    { name: "Business Auto", link: "/quote/business-auto" },
    { name: "Professional Liability", link: "/quote/professional-liability" },
  ];

  return (
    <footer className='bg-[#111] text-white/50 pt-16 pb-10 px-[6%] md:px-[5%]'>
      <div className='max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
        {/* Brand Column */}
        <div>
          <p className='text-white text-[18px] font-semibold tracking-[1px] mb-4'>
            KEVIN VIGNOLO
          </p>
          <p className="font-['DM_Sans'] text-[13px] leading-[1.7]">
            Coffee & Coverage
            <br />
            Miami, FL 33143
            <br />
            (954) 997-1616
            <br />
            <a
              href='mailto:kvignolo@bbdins.com'
              className='text-[#999] underline hover:text-white transition-colors duration-200'>
              kvignolo@bbdins.com
            </a>
          </p>
        </div>

        {/* Personal Lines Column */}
        <div>
          <p className="font-['DM_Sans'] text-[11px] tracking-[2px] uppercase text-white/30 mb-4">
            Personal Lines
          </p>
          <div>
            {personalLines.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block w-full text-left font-['DM_Sans'] text-[13px] text-white/50 bg-transparent border-none py-1 transition-colors duration-200 hover:text-white cursor-pointer no-underline">
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Commercial Lines Column */}
        <div>
          <p className="font-['DM_Sans'] text-[11px] tracking-[2px] uppercase text-white/30 mb-4">
            Commercial Lines
          </p>
          <div>
            {commercialLines.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block w-full text-left font-['DM_Sans'] text-[13px] text-white/50 bg-transparent border-none py-1 transition-colors duration-200 hover:text-white cursor-pointer no-underline">
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Empty column for spacing (optional) */}
        <div></div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-[1200px] mx-auto border-t border-white/8 pt-6 font-['DM_Sans'] text-[12px] text-white/25 flex flex-wrap justify-between gap-2">
        <span>© 2026 Kevin Vignolo Insurance. All rights reserved.</span>
        <span>Miami, Florida</span>
      </div>
    </footer>
  );
};

export default Footer;
