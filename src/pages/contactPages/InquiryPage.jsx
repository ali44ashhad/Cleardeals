import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Lock, Map as MapIcon, ChevronDown } from 'lucide-react';

const InquiryPage = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-200">
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mb-20 md:mb-28"
        >
          {/* Increased Text Sizes */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.05]">
            Secure Your Future with <span className="text-[#006666]">Expert Consultation</span>
          </h1>
          <p className="text-zinc-500 text-xl md:text-2xl leading-relaxed max-w-2xl font-light">
            Find your dream home in the Tricity. Our senior consultants curate portfolios specifically for your lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Form */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 bg-white border border-zinc-200 p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 focus:border-[#006666] focus:ring-0 outline-none transition-all text-base" />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400">Phone Number</label>
                  <input type="text" placeholder="+91 98765 43210" className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 focus:border-[#006666] focus:ring-0 outline-none transition-all text-base" />
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="space-y-3">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 focus:border-[#006666] focus:ring-0 outline-none transition-all text-base" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} className="space-y-3 relative">
                  <label className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400">Preferred Location</label>
                  <div className="relative">
                    <select className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 focus:border-[#006666] outline-none transition-all text-base appearance-none cursor-pointer">
                      <option>Select Location</option>
                      <option>Chandigarh</option>
                      <option>Mohali</option>
                      <option>Panchkula</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-3 relative">
                  <label className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400">Estimated Budget</label>
                  <div className="relative">
                    <select className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 focus:border-[#006666] outline-none transition-all text-base appearance-none cursor-pointer">
                      <option>Select Range</option>
                      <option>₹50L - ₹1Cr</option>
                      <option>₹1Cr - ₹5Cr</option>
                      <option>Above ₹5Cr</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                  </div>
                </motion.div>
              </div>

              <motion.button 
                variants={itemVariants}
                whileHover={{ scale: 1.01, backgroundColor: "#18181b" }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-black text-white py-6 text-sm font-bold uppercase tracking-[0.3em] transition-all mt-6 shadow-xl"
              >
                Schedule Free Consultation
              </motion.button>

              <motion.div 
                variants={itemVariants}
                className="flex gap-6 p-6 bg-zinc-50 border-l-4 border-[#006666] mt-10"
              >
                <Lock className="w-6 h-6 text-[#006666] mt-1 flex-shrink-0" />
                <div>
                  <h5 className="text-xs font-black uppercase tracking-widest text-[#006666] mb-1">Privacy Guaranteed</h5>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Your details are encrypted. We strictly follow a zero-spam policy and never share data with third-party telemarketers.
                  </p>
                </div>
              </motion.div>
            </form>
          </motion.div>

          {/* Right Side: Contact & Info */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Contact Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0f172a] text-white p-12 space-y-12"
            >
              <h3 className="text-3xl font-bold tracking-tight">Direct Contact</h3>
              
              <div className="space-y-10">
                <div className="flex gap-8 group">
                  <div className="w-14 h-14 bg-white/5 flex items-center justify-center rounded-sm group-hover:bg-[#006666] transition-colors"><Phone className="w-6 h-6" /></div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-2">Phone</p>
                    <p className="text-xl font-medium">+91 172 456 7890</p>
                    <p className="text-sm text-zinc-500 mt-1">Mon-Sat, 9am - 7pm IST</p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-14 h-14 bg-white/5 flex items-center justify-center rounded-sm group-hover:bg-[#006666] transition-colors"><Mail className="w-6 h-6" /></div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-2">Email</p>
                    <p className="text-xl font-medium">invest@cleardeal.in</p>
                    <p className="text-sm text-zinc-500 mt-1">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-14 h-14 bg-white/5 flex items-center justify-center rounded-sm group-hover:bg-[#006666] transition-colors"><MapPin className="w-6 h-6" /></div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-2">Headquarters</p>
                    <p className="text-xl font-medium leading-snug">SCO 124-126, First Floor, Sector 17-C, Chandigarh - 160017</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Preview with Motion */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative h-72 bg-zinc-200 overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                alt="Map" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button 
                  whileHover={{ y: -5 }}
                  className="bg-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-4 shadow-2xl hover:bg-zinc-100 transition-all"
                >
                  <MapIcon className="w-4 h-4" /> View on Google Maps
                </motion.button>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="border border-zinc-200 p-10 space-y-8"
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 text-center">Institutional Partners</h4>
              <div className="flex justify-around items-center opacity-40 grayscale">
                 <div className="text-lg font-bold">HDFC</div>
                 <div className="text-lg font-bold">SBI</div>
                 <div className="text-lg font-bold">AXIS</div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InquiryPage;