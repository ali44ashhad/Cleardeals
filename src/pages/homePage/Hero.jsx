import React from 'react';
import Stats from './Stats';
import WhyClearDeal from './WhyClearDeal';
import FeaturedProjects from './FeaturedProjects';
import Process from './Process';
import CallToAction from './CallToAction';

const Hero = () => {
  return (
   <>
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image Tag */}
      <img 
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
        alt="Chandigarh Real Estate" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-block bg-[#008080] text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 mb-6">
            Established Trust
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Unwavering Integrity in Chandigarh's Real Estate Market.
          </h1>

          {/* Subtext */}
          <p className="text-lg text-gray-200 leading-relaxed mb-10 max-w-xl">
            Experience a new standard of brokerage. We combine data-driven precision with local expertise to secure your perfect space in the Tricity.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-zinc-900 transition-all">
              View Projects
            </button>
            <button className="border border-white/60 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>


    <Stats/>
    <WhyClearDeal/>
    <FeaturedProjects/>
    <Process/>
    <CallToAction/>
   </>
  );
};

export default Hero;