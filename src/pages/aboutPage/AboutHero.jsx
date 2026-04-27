import React from 'react';
import AboutGrid from './AboutGrid';
import Tricity from './Tricity';
import OurExperts from './OurExperts';

const AboutHero = () => {
  return (
   <>
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-white">
      {/* Background Image with Opacity Mask */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
          alt="Background Architecture" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#008080] mb-6">
            Established in Chandigarh
          </h4>
          <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 leading-tight mb-8">
            Pioneering Clarity in Chandigarh's Real Estate.
          </h1>
          <div className="space-y-6 text-zinc-500 text-sm md:text-base leading-relaxed max-w-2xl">
            <p>
              At Cleardeal.in, we transform complex property transactions into seamless experiences through unwavering transparency and market-leading expertise.
            </p>
            <p>
              Our journey began with a simple observation: the real estate market needed a voice of truth. Today, we stand as the region's most trusted consultancy for luxury residential and commercial investments.
            </p>
          </div>
        </div>
      </div>
    </section>
    <AboutGrid/>
    <Tricity/>
    <OurExperts/>
   </>
  );
};

export default AboutHero;