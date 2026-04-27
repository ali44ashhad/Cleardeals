import React from 'react';
import { ShieldCheck, BarChart3, MapPin, CheckCircle2 } from 'lucide-react';

const WhyClearDeal = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-zinc-800 mb-2">Why Cleardeal.in?</h2>
          <div className="w-16 h-[2px] bg-[#008080]"></div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Total Transparency - Large Card */}
          <div className="md:col-span-2 relative bg-zinc-50 p-10 overflow-hidden min-h-[300px] flex flex-col justify-center">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
              alt="Transparency" 
              className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale"
            />
            <div className="relative z-10">
              <ShieldCheck className="text-[#008080] mb-6" size={32} />
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Total Transparency</h3>
              <p className="text-zinc-500 max-w-md leading-relaxed">
                No hidden fees, no back-door deals. Every transaction is documented and explained with absolute clarity from start to finish.
              </p>
            </div>
          </div>

          {/* Market Intelligence - Dark Card */}
          <div className="bg-black p-10 flex flex-col justify-center text-white">
            <BarChart3 className="text-amber-400 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-4">Market Intelligence</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Advanced analytics and historical pricing data help us predict market trends in Zirakpur, Mohali, and Chandigarh.
            </p>
          </div>

          {/* Hyper-Local Experts - Grey Card */}
          <div className="bg-zinc-100 p-10 flex flex-col justify-center">
            <MapPin className="text-[#008080] mb-6" size={32} />
            <h3 className="text-xl font-bold text-zinc-900 mb-4">Hyper-Local Experts</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Our agents don't just know the Tricity; they live here. We know every upcoming infrastructure project and neighborhood nuance.
            </p>
          </div>

          {/* Services - White Bordered Card */}
          <div className="md:col-span-2 border border-zinc-100 p-10 flex flex-col sm:flex-row items-center justify-around gap-8">
            <div className="flex items-center gap-4">
              <CheckCircle2 className="text-[#008080]" size={24} />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900">Legal Assistance</h4>
                <p className="text-xs text-zinc-500">Dedicated legal team for paperwork.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle2 className="text-[#008080]" size={24} />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900">Loan Facilitation</h4>
                <p className="text-xs text-zinc-500">Direct tie-ups with leading banks.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyClearDeal;