"use client";
import React from "react";

const Cta = () => {
  const showPage = (page, type) => {
    console.log("Navigating to:", page, type);
  };

  return (
    <div>
      <section className='bg-[#f0ece5] py-20 px-[6%] md:px-[5%] text-center'>
        <h2 className="font-['DM_Sans'] text-black text-4xl md:text-3xl font-light leading-[1.2] mb-4">
          Ready to Get <em className='italic not-italic'>Protected?</em>
        </h2>
        <p className="font-['DM_Sans'] text-[15px] text-[#666] mb-8">
          Start your personalized quote today — it only takes a few minutes.
        </p>
        <button
          className="font-['DM_Sans'] text-[12px] font-semibold tracking-[1.5px] uppercase px-12 py-4 bg-[#1a1a1a] text-white border-none rounded-[4px] cursor-pointer transition-opacity duration-300 hover:opacity-80"
          onClick={() => showPage("quote", "homeowners")}>
          Get a Quote
        </button>
      </section>
    </div>
  );
};

export default Cta;
