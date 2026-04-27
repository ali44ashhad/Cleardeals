import React from 'react';
import { ShieldCheck, Eye } from 'lucide-react';

const AboutGrid = () => {
  return (
    <section className="pt-20 pb-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Our Mission - Black Card */}
          <div className="bg-black p-10 flex flex-col justify-center min-h-[300px]">
            <h3 className="text-white text-xl font-bold mb-6 underline underline-offset-8 decoration-[#008080]">Our Mission</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              To redefine the brokerage experience in the Tricity by delivering institutional-grade data and personalized service, ensuring every client moves forward with absolute confidence.
            </p>
          </div>

          {/* Trust Card */}
          <div className="bg-zinc-50 p-10 border border-zinc-100 flex flex-col justify-center">
            <ShieldCheck className="text-[#008080] mb-6" size={28} />
            <h4 className="text-zinc-900 font-bold mb-4">Trust</h4>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Built on a foundation of ethical practices and a track record of high-stakes successful closures.
            </p>
          </div>

          {/* Clarity Card */}
          <div className="bg-zinc-50 p-10 border border-zinc-100 flex flex-col justify-center">
            <Eye className="text-[#008080] mb-6" size={28} />
            <h4 className="text-zinc-900 font-bold mb-4">Clarity</h4>
            <p className="text-zinc-500 text-xs leading-relaxed">
              No hidden fees, no opaque contracts. We provide a crystal-clear view of the market landscape.
            </p>
          </div>

          {/* Proven Results - Spans 2 columns */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 bg-zinc-100 overflow-hidden">
            <div className="p-10 flex flex-col justify-center">
              <h4 className="text-zinc-900 font-bold mb-4">Proven Results</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Over ₹500Cr in properties successfully managed across Chandigarh, Mohali, and Panchkula.
              </p>
            </div>
            <div className="h-48 sm:h-full relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
                alt="Results" 
                className="w-full h-full object-cover grayscale opacity-50"
              />
            </div>
          </div>

          {/* Excellence - Cyan Card */}
          <div className="bg-[#7ef9f9] p-10 flex flex-col items-center justify-center text-center text-[#008080]">
            <span className="text-4xl font-bold mb-2">12+</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Years of Excellence</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutGrid;