import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../../assets/about-img.jpg';

const Tricity = () => {
  const timeline = [
    {
      year: '2012',
      title: 'Foundation',
      desc: 'Started as a boutique consultancy in Sector 17, focusing on luxury residential acquisitions.'
    },
    {
      year: '2017',
      title: 'Digital Expansion',
      desc: 'Launched Cleardeal.in, bridging the gap between traditional brokerage and modern tech transparency.'
    },
    {
      year: '2024',
      title: 'Market Leadership',
      desc: 'Leading the Tricity region with an exclusive portfolio of prime commercial and luxury residential assets.'
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Illustrative Graphic (Slides from Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full"
        >
          <div className="bg-white p-6 shadow-xl border-2 border-zinc-200">
            <img 
              src={aboutImage} 
              alt="The Tricity Legacy" 
              className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </motion.div>

        {/* Right Side: Timeline Content */}
        <div className="flex-1">
          <motion.h4 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.5em] text-[#008080] mb-10"
          >
            The Tricity Legacy
          </motion.h4>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-300"
          >
            {timeline.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="relative pl-12 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-3.5 h-3.5 bg-[#008080] rounded-full ring-4 ring-white group-hover:scale-125 transition-transform duration-300"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                  <span className="text-2xl font-black text-[#008080] tracking-tight">
                    {item.year}
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold text-zinc-900 mb-3 group-hover:text-[#008080] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-base text-zinc-600 leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Tricity;