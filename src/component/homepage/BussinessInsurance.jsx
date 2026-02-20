import React from "react";

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

const BussinessInsurance = () => {
  return (
    <section className='bg-[#f4f4f4] py-20'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-16'>
          <p className='tracking-[0.35em] text-xs text-gray-500 uppercase mb-4'>
            Coverage Solutions
          </p>
          <h2 className='text-5xl font-serif font-light text-gray-900'>
            Business <span className='italic'>Insurance</span>
          </h2>
        </div>

        {/* Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {BUSINESS_SERVICES.map((service) => (
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

export default BussinessInsurance;
