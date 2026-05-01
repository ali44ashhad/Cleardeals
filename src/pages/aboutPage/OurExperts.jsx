import React from 'react';
import { motion } from "framer-motion";

const OurExperts = () => {

  const experts = [
    {
      name: 'Neeraj Bansal',
      role: 'Founder & Managing Director',
      desc: 'With over two decades of experience in real estate advisory, he brings deep market insights and strategic leadership, guiding clients towards high-value investments across Northern India.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Jatin Jain',
      role: 'Head of Luxury Assets',
      desc: 'Specializing in ultra high-net-worth property acquisitions, he curates exclusive luxury residences and ensures clients receive unmatched value, privacy, and sophistication.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Madhav Bansal',
      role: 'Commercial Strategy',
      desc: 'An expert in commercial real estate, he focuses on IT park leasing and institutional sales, delivering strategic solutions that maximize long-term business growth.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800'
    }
  ];

  // 🔥 Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-3xl font-bold tracking-[0.25em] uppercase text-[#008080] mb-4">
            Our Experts
          </h2>
          <p className="text-zinc-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Our team of seasoned professionals brings unmatched expertise, industry knowledge, 
            and a client-first approach to deliver exceptional real estate experiences with 
            precision, trust, and long-term value.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group flex flex-col bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500"
            >

              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 mb-1">
                  {expert.name}
                </h3>

                <h4 className="text-xs font-bold tracking-widest text-[#008080] uppercase mb-3">
                  {expert.role}
                </h4>

                <p className="text-sm text-zinc-600 leading-relaxed">
                  {expert.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default OurExperts;