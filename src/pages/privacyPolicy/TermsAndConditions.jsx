import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Briefcase, Scale, ArrowRight } from 'lucide-react';

const TermsAndConditions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans selection:bg-zinc-200 overflow-x-hidden">
      
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-6 py-20 md:py-32"
      >
        
        {/* Header */}
        <motion.header variants={sectionVariants} className="mb-20">
          <h4 className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-[#006666] mb-6">
            Legal Framework
          </h4>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Terms and <span className="font-light italic text-zinc-500">Conditions</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-widest text-zinc-500 font-bold">
            <span className="bg-zinc-100 px-3 py-1 rounded-full">Effective: June 15, 2024</span>
            <span className="w-1 h-1 bg-zinc-300 rounded-full hidden md:block"></span>
            <span className="bg-zinc-100 px-3 py-1 rounded-full">Version 2.4.0</span>
          </div>
          <div className="h-[2px] bg-zinc-900 w-24 mt-12"></div>
        </motion.header>

        {/* 1. Introduction */}
        <motion.section variants={sectionVariants} className="mb-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-4">
            <span className="text-zinc-400 font-light">01</span> Introduction
          </h2>
          <div className="space-y-6 text-zinc-700 text-lg md:text-xl leading-relaxed font-light max-w-4xl">
            <p>
              Welcome to <span className="text-zinc-900 font-medium">EstateElite (Cleardeal.in)</span>. These Terms and Conditions constitute a legally binding agreement made between you and EstateElite concerning your access to our premier digital ecosystem.
            </p>
            <p>
              By accessing the site, you acknowledge that you have read, understood, and agreed to be bound by these protocols. If you do not agree, you must discontinue use of the platform immediately.
            </p>
          </div>
        </motion.section>

        {/* 2. Services */}
        <motion.section variants={sectionVariants} className="mb-24">
          <div className="bg-zinc-50 border border-zinc-200 p-10 md:p-16 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
               <Briefcase size={120} />
            </div>
            
            <div className="flex items-center gap-4 mb-12 relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="text-zinc-400 font-light">02</span> Services Provided
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 relative z-10">
              {[
                { t: "Brokerage", d: "High-end facilitation of property transactions through our proprietary digital platform." },
                { t: "Advisory", d: "Strategic investment consulting and asset management for sophisticated portfolios." },
                { t: "Verification", d: "Exhaustive legal and structural due diligence for all market-listed assets." },
                { t: "Digital Media", d: "Provision of high-fidelity virtual tours and 3D architectural renderings." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="space-y-3"
                >
                  <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#006666]">{item.t}</h4>
                  <p className="text-base md:text-lg text-zinc-600 leading-relaxed">{item.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 3. User Obligations */}
        <motion.section variants={sectionVariants} className="mb-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            <span className="text-zinc-400 font-light">03</span> User Obligations
          </h2>
          <ul className="space-y-8">
            {[
              "Provide accurate and complete registration data for institutional compliance.",
              "Maintain the security of your identification and take full responsibility for account activity.",
              "Operate within the platform according to the professional standards of the real estate industry."
            ].map((text, i) => (
              <motion.li 
                key={i} 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -10 }}
                className="flex gap-6 items-start group"
              >
                <div className="w-6 h-6 rounded-full border border-[#006666] flex items-center justify-center mt-1 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#006666] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-lg md:text-xl text-zinc-700 leading-relaxed font-light">{text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* 4. Liability */}
        <motion.section 
          variants={sectionVariants} 
          className="mb-24 border-l-4 border-zinc-900 pl-10 md:pl-16 py-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="text-zinc-400 font-light">04</span> Limitation of Liability
          </h2>
          <div className="space-y-8 text-zinc-700 leading-relaxed max-w-3xl">
            <p className="text-xl md:text-2xl font-light italic">
              "In no event will EstateElite or its directors be liable for direct, indirect, or consequential damages arising from site use, even if advised of such possibilities."
            </p>
            <p className="text-base md:text-lg text-zinc-600">
              We make no warranties regarding the absolute accuracy of site content or linked materials, assuming no liability for errors or technical inaccuracies.
            </p>
          </div>
        </motion.section>

        {/* 5. Governing Law */}
        <motion.section variants={sectionVariants} className="mb-32">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="text-zinc-400 font-light">05</span> Governing Law
          </h2>
          <p className="text-lg md:text-xl text-zinc-700 font-light mb-10 leading-relaxed">
            These protocols are governed by the laws of the Republic of India. Any disputes shall be resolved within the designated institutional framework.
          </p>
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-zinc-900 text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-6">
              <Scale className="w-8 h-8 text-[#00cccc]" />
              <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em]">
                Jurisdiction: Courts of Chandigarh & New Delhi
              </span>
            </div>
            <ArrowRight className="text-zinc-600 hidden md:block" />
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.div 
          variants={sectionVariants}
          className="pt-20 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-start md:items-end gap-16"
        >
          <div className="max-w-md">
            <h4 className="text-xl font-bold mb-4">Legal Inquiry</h4>
            <p className="text-zinc-600 text-lg font-light mb-8">
              Our compliance team is available for clarification regarding these protocols.
            </p>
            <motion.button 
              whileHover={{ backgroundColor: "#006666", color: "#fff", borderColor: "#006666" }}
              className="border border-zinc-300 text-zinc-900 px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300"
            >
              Contact Legal Dept
            </motion.button>
          </div>
          
          <div className="text-left md:text-right">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="italic font-serif text-5xl md:text-6xl text-zinc-300 mb-2 select-none"
            >
              Elite Management
            </motion.div>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 border-t border-zinc-200 pt-4 inline-block">
              Institutional Signatory
            </div>
          </div>
        </motion.div>

      </motion.main>
    </div>
  );
};

export default TermsAndConditions;