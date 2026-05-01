import React from 'react';
import { ShieldCheck, Eye, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutGrid = () => {
  return (
    <section className="pt-20 pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Our Mission - Black Card (Slides from Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-black p-10 flex flex-col justify-center min-h-[350px] border-2 border-zinc-800 shadow-2xl"
          >
            <h3 className="text-white text-3xl font-bold mb-8 underline underline-offset-[12px] decoration-[#008080] decoration-2">
              Our Mission
            </h3>
            <p className="text-zinc-300 text-lg leading-relaxed">
              To redefine the brokerage experience in the Tricity by delivering institutional-grade data and personalized service, ensuring every client moves forward with absolute confidence.
            </p>
          </motion.div>

          {/* Trust Card (Slides from Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="bg-zinc-50 p-10 border-1 border-zinc-400 flex flex-col justify-center group hover:border-[#008080] transition-colors"
          >
            <div className="flex items-center gap-4 mb-6">
              <ShieldCheck className="text-[#008080]" size={36} />
              <h4 className="text-zinc-900 text-2xl font-extrabold">Trust</h4>
            </div>
            <p className="text-zinc-600 text-base leading-relaxed">
              Built on a foundation of ethical practices and a track record of high-stakes successful closures across the luxury segment.
            </p>
          </motion.div>

          {/* Clarity Card (Slides from Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-zinc-50 p-10 border-2 border-zinc-300 flex flex-col justify-center shadow-md group hover:border-[#008080] transition-colors"
          >
            <div className="flex items-center gap-4 mb-6">
              <Eye className="text-[#008080]" size={36} />
              <h4 className="text-zinc-900 text-2xl font-extrabold">Clarity</h4>
            </div>
            <p className="text-zinc-600 text-base leading-relaxed">
              No hidden fees, no opaque contracts. We provide a crystal-clear view of the market landscape with deep-dive analytics.
            </p>
          </motion.div>

          {/* Proven Results (Slides from Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 bg-zinc-100 overflow-hidden border-2 border-zinc-300 shadow-lg"
          >
            <div className="p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <Trophy className="text-[#008080]" size={32} />
                <h4 className="text-zinc-900 text-2xl font-bold">Proven Results</h4>
              </div>
              <p className="text-zinc-700 text-lg leading-relaxed">
                Over <span className="font-bold text-[#008080]">₹500Cr</span> in properties successfully managed across Chandigarh, Mohali, and Panchkula.
              </p>
            </div>
            <div className="h-64 sm:h-full relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
                alt="Results" 
                className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Excellence (Slides from Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="bg-[#c2fcfc] p-10 flex flex-col items-center justify-center text-center text-[#008080] border-2 border-[#7ef9f9] shadow-inner"
          >
            <span className="text-7xl font-black mb-3">12+</span>
            <span className="text-sm font-bold uppercase tracking-[0.3em] leading-tight">
              Years of <br /> Excellence
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutGrid;