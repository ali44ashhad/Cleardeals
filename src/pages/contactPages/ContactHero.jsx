import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Map from './Map';

const ContactHero = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 20 } 
    }
  };

  return (
    <>
      <section className="bg-white py-24 md:py-32 px-6 overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-teal-600 mb-6">
              Connect with Excellence
            </h4>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-zinc-900 mb-8 leading-[1.1]">
              Let's Discuss Your <br className="hidden md:block" />
              <span className="font-medium">Next Investment.</span>
            </h2>
            <div className="flex flex-col md:flex-row md:items-center gap-10">
              <p className="text-zinc-500 text-lg md:text-xl max-w-2xl leading-relaxed">
                Whether you're looking for a luxury estate or a strategic commercial investment
                in Chandigarh, our experts are ready to guide you through every step.
              </p>
              <div className="h-px bg-zinc-400 flex-grow hidden md:block"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Inquiry Form Card */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-7 bg-white border border-zinc-300 p-10 md:p-16 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] rounded-sm"
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#008080] mb-12">Inquiry Form</h3>

              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-900">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-0 py-4 bg-transparent border-b-2 border-zinc-100 focus:border-teal-600 outline-none transition-all text-lg" 
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-900">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-0 py-4 bg-transparent border-b-2 border-zinc-100 focus:border-teal-600 outline-none transition-all text-lg" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-900">Phone Number</label>
                    <input 
                      type="text" 
                      placeholder="+91 98765 43210" 
                      className="w-full px-0 py-4 bg-transparent border-b-2 border-zinc-100 focus:border-teal-600 outline-none transition-all text-lg" 
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-900">Interest Type</label>
                    <select className="w-full px-0 py-4 bg-transparent border-b-2 border-zinc-100 focus:border-teal-600 outline-none transition-all text-lg appearance-none cursor-pointer">
                      <option>Property Purchase</option>
                      <option>Commercial Lease</option>
                      <option>Investment Advisory</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-900">Your Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="How can we assist you?" 
                    className="w-full px-0 py-4 bg-transparent border-b-2 border-zinc-100 focus:border-teal-600 outline-none transition-all text-lg resize-none"
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-zinc-900 text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-4 hover:bg-teal-700 transition-all rounded-sm shadow-xl"
                >
                  Send Message <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* HQ Card */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-zinc-900 text-white p-12 space-y-10 rounded-sm relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                   <MapPin className="w-32 h-32" />
                </div>
                
                <div className="w-14 h-14 flex items-center justify-center border border-white/20 rounded-full">
                  <MapPin className="w-6 h-6 text-teal-400" />
                </div>
                
                <div>
                  <h4 className="text-xl font-bold tracking-tight mb-6 uppercase tracking-[0.1em]">Chandigarh HQ</h4>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-xs">
                    SCO 144-145, Sector 17-C, Near Bridge Market, Chandigarh 160017, India
                  </p>
                  <a href="#" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-teal-400 hover:text-teal-300 transition-colors">
                    Get Directions <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Call Us Card */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="bg-zinc-50 border border-zinc-100 p-10 flex items-start gap-8 rounded-sm transition-colors hover:border-teal-200"
              >
                <div className="bg-white p-4 shadow-sm rounded-full">
                  <Phone className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">Call Us</h4>
                  <p className="text-xl font-bold text-zinc-900 mb-1">+91 172 456 7890</p>
                  <p className="text-sm text-zinc-500 font-medium">Mon-Sat, 9am - 7pm</p>
                </div>
              </motion.div>

              {/* Email Us Card */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="bg-zinc-50 border border-zinc-100 p-10 flex items-start gap-8 rounded-sm transition-colors hover:border-teal-200"
              >
                <div className="bg-white p-4 shadow-sm rounded-full">
                  <Mail className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">Email Us</h4>
                  <p className="text-xl font-bold text-zinc-900 mb-1">invest@cleardeal.in</p>
                  <p className="text-sm text-zinc-500 font-medium">Response within 24 hours</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Map />
      </motion.div>
    </>
  );
};

export default ContactHero;