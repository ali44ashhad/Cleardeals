import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // 1. Import motion
import Stats from './Stats';
import WhyClearDeal from './WhyClearDeal';
import FeaturedProjects from './FeaturedProjects';
import Process from './Process';
import CallToAction from './CallToAction';

const Hero = () => {
  // Animation variants for the text container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays each child's animation
      },
    },
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <>
      <section className="relative w-full h-[98vh] min-h-[600px] flex items-center overflow-hidden pt-30">
        {/* Background Image - Slight scale-in effect */}
        <motion.video
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-bg1.mp4" type="video/mp4" />
        </motion.video>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
          <motion.div
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-block bg-[#008080] text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 mb-2"
            >
              Established Trust
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              Unwavering Integrity in Chandigarh's Real Estate Market.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-200 leading-relaxed mb-10 max-w-xl"
            >
              Experience a new standard of brokerage. We combine data-driven precision with local expertise to secure your perfect space in the Tricity.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to='/projects'>
                <button className="bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-zinc-900 transition-all active:scale-95">
                  View Projects
                </button>
              </Link>
              <Link to='/inquiry'>
                <button className="border border-white/60 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all active:scale-95">
                  Free Consultation
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Stats />
      <WhyClearDeal />
      <FeaturedProjects />
      <Process />
      <CallToAction />
    </>
  );
};

export default Hero;