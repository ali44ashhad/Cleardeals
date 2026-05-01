import React from 'react';
import { ShieldCheck, BarChart3, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyClearDeal = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="text-4xl font-bold text-zinc-900 mb-4 tracking-tight">Why Cleardeal.in?</h2>
          <div className="w-20 h-[3px]" style={{ backgroundColor: '#008080' }}></div>
          <p className="text-zinc-500 text-lg w-4xl">At Cleardeals, we combine expertise, integrity, and innovation to deliver exceptional results. Our team is dedicated to providing seamless solutions with accuracy and attention to detail. We strive to create a dependable and stress-free experience that sets us apart.</p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          
          {/* Total Transparency - Large Hero Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="md:col-span-2 relative p-12 overflow-hidden min-h-[350px] flex flex-col justify-end group"
            style={{ backgroundColor: '#18181b' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
              alt="Transparency" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <ShieldCheck style={{ color: '#ffffff' }} size={40} strokeWidth={2.5} />
                <h3 className="text-3xl font-bold text-white">Total Transparency</h3>
              </div>
              <p className="text-zinc-200 text-lg max-w-xl leading-relaxed">
                No hidden fees, no back-door deals. Every transaction is documented and explained with absolute clarity from start to finish.
              </p>
            </div>
          </motion.div>

          {/* Market Intelligence - Dark Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="p-10 flex flex-col justify-center transition-all"
            style={{ backgroundColor: '#000000' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <BarChart3 style={{ color: '#fbbf24' }} size={32} />
              <h3 className="text-2xl font-bold text-white">Market Intel</h3>
            </div>
            <p className="text-zinc-400 text-base leading-relaxed">
              Advanced analytics and historical pricing data help us predict market trends in Zirakpur, Mohali, and Chandigarh.
            </p>
          </motion.div>

          {/* Hyper-Local Experts - Grey Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="p-10 flex flex-col justify-center"
            style={{ backgroundColor: '#e4e4e7' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <MapPin style={{ color: '#008080' }} size={32} />
              <h3 className="text-2xl font-bold text-zinc-900">Local Experts</h3>
            </div>
            <p className="text-zinc-600 text-base leading-relaxed font-medium">
              Our agents don't just know the Tricity; they live here. We know every upcoming infrastructure project and neighborhood nuance.
            </p>
          </motion.div>

          {/* Professional Legal Assistance - Wide Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="md:col-span-2 p-10 flex flex-col md:flex-row items-center gap-8 border-1 transition-colors"
            style={{ borderColor: '#8F8D8D' }}
          >
            <div className="flex-shrink-0 p-4 rounded-full" style={{ backgroundColor: '#f0fdfa' }}>
               <CheckCircle2 style={{ color: '#008080' }} size={48} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">Professional Legal Assistance</h3>
              <p className="text-zinc-500 text-base leading-relaxed">
                Partner with our dedicated legal team for reliable, end-to-end support in handling 
                documentation, compliance, and paperwork. We streamline complex processes with precision
                and care, ensuring everything is completed accurately.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default WhyClearDeal;