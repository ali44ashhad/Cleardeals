import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Path check: ensure the double dots correctly point to your assets folder
import footerBg from '../../assets/footer-bg.jpg'; 

const CallToAction = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      className="relative w-full overflow-hidden flex items-center justify-center bg-black" // 1. Changed to black background to make the image visible
      style={{ height: '70vh' }}
    >
      {/* Background Architectural Block */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }} // 2. Increased opacity significantly to debug visibility
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <img 
          src={footerBg} 
          alt="Modern Architecture" 
          className="w-full h-full object-cover-contain" // 3. Added grayscale for that classy look
        />
        {/* 4. Dark gradient overlay so the text remains readable over the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-[#496A8A]/20" />
      </motion.div>

      <motion.div 
        className="relative z-10 max-w-4xl mx-auto text-center px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h4 
          variants={childVariants}
          className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00cccc] mb-4" // Brightened teal for dark bg
        >
          Take the next step
        </motion.h4>

        <motion.h2 
          variants={childVariants}
          className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight tracking-tight"
        >
          Ready to find your <span className="font-semibold italic text-[#00cccc]">Clear Deal?</span>
        </motion.h2>

        <motion.p 
          variants={childVariants}
          className="text-zinc-400 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Schedule a strategy session with our advisors to map out your real estate journey.
        </motion.p>

        <motion.form 
          variants={childVariants}
          className="flex flex-col md:flex-row items-stretch justify-center gap-0 max-w-xl mx-auto shadow-2xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full md:flex-1 px-8 py-5 bg-white/10 backdrop-blur-md border border-white/20 outline-none text-white text-sm placeholder:text-zinc-500 focus:bg-white/20 transition-all"
            required
          />
          <motion.button 
            whileHover={{ backgroundColor: "#008888", scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto bg-[#006666] text-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all shrink-0"
          >
            Consult Now
            <ArrowRight className="w-3 h-3" />
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default CallToAction;