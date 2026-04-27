import React from 'react';

const OurExperts = () => {
  const experts = [
    {
      name: 'Neeraj Bansal',
      role: 'FOUNDER & MANAGING DIRECTOR',
      desc: '20+ years of strategic real estate advisory in Northern India.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Jatin Jain',
      role: 'HEAD OF LUXURY ASSETS',
      desc: 'Specializes in ultra-HNW property acquisitions in Chandigarh Parkview.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Madhav Bansal',
      role: 'COMMERCIAL STRATEGY',
      desc: 'Expert in Mohali IT-Park commercial leasing and institutional sales.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-900 mb-4">Our Experts</h2>
          <p className="text-zinc-500 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Guided by industry veterans with deep roots in the local market and global standards of service.
          </p>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="group flex flex-col border border-zinc-100 p-4 bg-white hover:shadow-xl transition-all duration-300">
              
              {/* Image Container */}
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img 
                  src={expert.image} 
                  alt={expert.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Text Content */}
              <div className="px-2 pb-4">
                <h3 className="text-lg font-bold text-zinc-900 mb-1">{expert.name}</h3>
                <h4 className="text-[10px] font-bold tracking-widest text-[#008080] uppercase mb-4">
                  {expert.role}
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {expert.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExperts;