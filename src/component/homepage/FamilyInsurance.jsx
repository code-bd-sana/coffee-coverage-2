import React from "react";

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

const FamilyInsurance = () => {
  return (
    <section className='bg-[#f4f4f4] py-20'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-16'>
          <p className='tracking-[0.35em] text-xs text-gray-500 uppercase mb-4'>
            Coverage Solutions
          </p>
          <h2 className='text-5xl font-serif font-light text-gray-900'>
            Individuals & <span className='italic'>Families</span>
          </h2>
        </div>

        {/* Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {PERSONAL_SERVICES.map((service) => (
            <div
              key={service.id}
              className='bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition duration-300'>
              <div className='text-3xl mb-6'>{service.icon}</div>

              <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                {service.label}
              </h3>

              <p className='text-gray-600 text-sm leading-relaxed mb-6'>
                {service.desc}
              </p>

              <button className='text-sm font-semibold tracking-wide border-b border-black inline-flex items-center gap-2 hover:gap-3 transition-all duration-200'>
                GET A QUOTE →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyInsurance;
