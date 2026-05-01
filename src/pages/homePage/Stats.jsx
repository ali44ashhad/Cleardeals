import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const statsData = [
    { value: '₹250Cr+', label: 'Assets Managed' },
    { value: '500+', label: 'Families Served' },
    { value: '15+', label: 'Years Experience' },
    { value: '100%', label: 'Verified Listings' },
  ];

  // Container variants to stagger the children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  // Individual item variants for left-to-right motion
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0"
        >
          {statsData.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative flex flex-col items-center text-center px-4"
            >
              {/* Vertical Divider - Visible on Desktop */}
              {index !== statsData.length - 1 && (
                <div 
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12" 
                  style={{ backgroundColor: '#e5e7eb' }}
                ></div>
              )}
              
              {/* Vertical Divider - Visible on Mobile (only for even items) */}
              {index % 2 === 0 && (
                <div 
                  className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10" 
                  style={{ backgroundColor: '#e5e7eb' }}
                ></div>
              )}

              <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-3 tracking-tight">
                {item.value}
              </h2>
              <p className="text-[11px] md:text-sm uppercase tracking-[0.25em] font-black text-zinc-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;