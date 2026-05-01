import React from 'react';
import { Quote, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import video from '../../assets/cleardeals.mp4';

const Process = () => {
  const steps = [
    { id: '01', title: 'Requirement Audit', desc: 'Beyond just BHKs, we understand your lifestyle and long-term investment goals.' },
    { id: '02', title: 'Curation & Verification', desc: 'Every site visit is preceded by a legal health check and structural audit of the listing.' },
    { id: '03', title: 'Transparent Negotiation', desc: 'Direct interface with builders/sellers with no markup or hidden commissions from our end.' },
    { id: '04', title: 'Handover & Registry', desc: 'End-to-end management of the registry process and final keys handover.' },
  ];

  return (
    <div className="relative w-full bg-white">
      {/* --- STICKY IMAGE SECTION (90vh) --- */}
      <section className="sticky top-0 h-[90vh] w-full overflow-hidden z-0">
      <video 
  src={video} 
  className="w-full h-full object-cover" 
  autoPlay 
  muted 
  loop 
  playsInline
>
  Your browser does not support the video tag.
</video>
        {/* Deep Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        
        {/* Hero Content inside Sticky Section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter"
          >
            CLEARDEAL
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 w-32 bg-teal-500 mb-6"
          />
          <p className="text-gray-300 text-sm md:text-lg uppercase tracking-[0.5em] font-medium">
            The Gold Standard of Real Estate
          </p>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to Reveal</span>
          <ArrowDown size={16} />
        </motion.div>
      </section>

      {/* --- NEXT SECTION (Slides OVER the Image) --- */}
      {/* 
          CRITICAL: 
          1. relative z-10 (Higher than the sticky section)
          2. mt-0 (Starts immediately after the 90vh container space)
          3. bg-white (Must have a solid background to hide the image below)
      */}
      <section className="relative z-10 bg-white py-32 shadow-[0_-30px_100px_rgba(0,0,0,0.2)]">
        
        {/* Subtle Side Pattern */}
        <div className="absolute top-0 left-0 w-1/3 h-full pointer-events-none opacity-20">
          <img
            src="https://www.transparenttextures.com/patterns/cubes.png"
            alt="Pattern"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-20 relative z-20">
          <div className="flex flex-col lg:flex-row gap-20 items-start justify-center">
            
            {/* Left Side: Process Steps */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full"
            >
              <h2 className="text-4xl md:text-7xl font-bold text-zinc-950 mb-10 tracking-tight leading-none">
                The <span className="text-[#006666]">Process.</span>
              </h2>
              <p className="text-zinc-500 mb-16 max-w-lg text-xl leading-relaxed">
                We've built a standardized framework to ensure every transaction is 
                uniquely transparent and legally fortified.
              </p>

              <div className="grid gap-12">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-8 group"
                  >
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center text-zinc-950 text-xl font-black border-2 border-zinc-200 bg-white group-hover:border-[#006666] group-hover:text-[#006666] transition-all duration-500">
                      {step.id}
                    </div>
                    <div>
                      <h3 className="text-2xl text-zinc-900 font-bold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-800 leading-relaxed max-w-sm">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side: High-Contrast Testimonial */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full lg:sticky lg:top-32"
            >
              <div className="bg-zinc-950 p-12 md:p-16 relative shadow-2xl border border-zinc-800 rounded-sm">
                <Quote size={60} className="text-[#006666] opacity-30 mb-8" fill="currentColor" />
                <div className="border-l-2 pl-8 border-[#006666]">
                  <p className="text-2xl md:text-3xl italic text-zinc-100 leading-relaxed mb-10 font-light">
                    "The team at Cleardeal saved us months of searching. Their report on the property's legal history was eye-opening."
                  </p>
                  <p className="text-[#006666] text-xs font-black tracking-[0.3em] uppercase">
                    — Vikramjit Singh, Mohali
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Process;