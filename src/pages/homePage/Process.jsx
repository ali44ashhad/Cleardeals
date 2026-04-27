import React from 'react';
import { Quote } from 'lucide-react';

const Process = () => {
  const steps = [
    { id: '01', title: 'Requirement Audit', desc: 'Beyond just BHKs, we understand your lifestyle and long-term investment goals.' },
    { id: '02', title: 'Curation & Verification', desc: 'Every site visit is preceded by a legal health check and structural audit of the listing.' },
    { id: '03', title: 'Transparent Negotiation', desc: 'Direct interface with builders/sellers with no markup or hidden commissions from our end.' },
    { id: '04', title: 'Handover & Registry', desc: 'End-to-end management of the registry process and final keys handover.' },
  ];

  return (
    // Added flex and items-center to the section to ensure vertical alignment if needed
    <section className="bg-[#0a1120] py-20 text-white overflow-hidden min-h-screen flex items-center justify-center">
      
      {/* 1. Reduced gap to 4 for closer blocks
        2. mx-auto ensures horizontal centering
        3. Changed items-center to items-stretch or items-center based on preference
      */}
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row gap-4 items-center justify-center">
        
        {/* Left Side: Process Steps */}
        <div className="flex-1 py-4 w-full">
          <h2 className="text-3xl font-bold mb-4">The Clear Deal Process</h2>
          <p className="text-gray-400 mb-8 max-w-lg text-sm leading-relaxed">
            We've eliminated the stress of property buying by creating a standardized, four-step transparency framework.
          </p>

          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.id} className="flex gap-5 group">
                <div className="flex-shrink-0 w-9 h-9 border border-teal-500/30 flex items-center justify-center text-teal-500 text-[10px] font-bold">
                  {step.id}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed max-w-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Centered Testimonial Block */}
        <div className="flex-1 w-full flex justify-center lg:justify-center">
          <div className="bg-[#151d2e]/50 p-6 md:p-10 w-full max-w-xl flex items-center justify-center">
            <div className="bg-[#151d2e] p-10 relative shadow-2xl border border-white/5 w-full">
               <div className="mb-6 text-teal-500 flex justify-center">
                  <Quote size={40} fill="currentColor" className="opacity-20" />
               </div>
               <div className="border-l-2 border-teal-500 pl-6">
                  <p className="text-lg italic text-gray-300 leading-relaxed mb-6">
                    "The team at Cleardeal saved us months of searching. Their report on the property's legal history was eye-opening and eventually saved us from a bad investment."
                  </p>
                  <p className="text-teal-500 text-sm font-semibold tracking-wider">— Vikramjit Singh, Mohali</p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;