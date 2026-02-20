import React from "react";

const Testimonial = () => {
  return (
    <section className='section py-20 px-[6%] md:px-[5%]'>
      <div className='text-center mb-16'>
        <p className=' text-[15px] font-light leading-[1.8] text-black/50 mb-4'>
          Testimonials
        </p>
        <h2 className="font-['DM_Sans'] text-black text-4xl md:text-3xl font-bold leading-[1.2]">
          What Clients <em className='italic not-italic'>Say</em>
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto'>
        {/* Testimonial Card 1 */}
        <div className='bg-white p-10 rounded-[8px] border border-[#eee]'>
          <p className="font-['DM_Sans'] text-[14px] leading-[1.8] text-[#555] mb-6 italic">
            "Super personalized advice that fit my budget, and their business
            insurance options really covered all bases. Couldn't be happier!"
          </p>
          <p className="font-['DM_Sans'] text-[13px] font-semibold text-[#1a1a1a]">
            Jasmine Richards
          </p>
        </div>

        {/* Testimonial Card 2 */}
        <div className='bg-white p-10 rounded-[8px] border border-[#eee]'>
          <p className="font-['DM_Sans'] text-[14px] leading-[1.8] text-[#555] mb-6 italic">
            "Their business insurance expertise and comprehensive personal
            coverage options really set them apart. Worth considering!"
          </p>
          <p className="font-['DM_Sans'] text-[13px] font-semibold text-[#1a1a1a]">
            Monica Chandler
          </p>
        </div>

        {/* Testimonial Card 3 */}
        <div className='bg-white p-10 rounded-[8px] border border-[#eee]'>
          <p className="font-['DM_Sans'] text-[14px] leading-[1.8] text-[#555] mb-6 italic">
            "Had to file a claim recently. The team handled it smoothly. Zero
            stress, surprisingly quick resolution."
          </p>
          <p className="font-['DM_Sans'] text-[13px] font-semibold text-[#1a1a1a]">
            Thomas Krazinski
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
