import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, Cookie, Share2, UserCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const PrivacyPolicy = () => {
  // Animation Variants for the Container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation Variants for each section sliding from the left
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  const sections = [
    {
      icon: <Shield size={24} />,
      title: "Information Collection",
      content: "We collect information that you provide directly to us when you register for an account, list a property, or contact our consultants. This includes:",
      list: [
        "Identity Data: Name, government-issued IDs for verification.",
        "Contact Data: Email address, phone number, and mailing address.",
        "Property Data: Ownership documents, floor plans, and financial expectations.",
        "Financial Data: Transaction history and bank account details for settlement."
      ],
    },
    {
      icon: <Database size={24} />,
      title: "Use of Data",
      content: "Your data allows us to provide a high-end, personalized brokerage experience. We use your information to:",
      grid: [
        { label: "Service Delivery", desc: "Matching your profile with exclusive off-market listings and potential buyers." },
        { label: "Compliance", desc: "Fulfilling legal obligations related to Anti-Money Laundering (AML) and property laws." }
      ]
    },
    {
      icon: <Cookie size={24} />,
      title: "Cookies & Tracking",
      content: 'We use "Ambient Tracking" technologies—sophisticated, low-impact cookies that remember your property preferences and filtering history. These allow us to present a curated dashboard every time you return to the platform. You may disable these in your browser settings, though it may impact the precision of our recommendations.'
    },
    {
      icon: <Share2 size={24} />,
      title: "Third-party Disclosure",
      content: "Cleardeal.in does not sell, trade, or otherwise transfer your personally identifiable information to outside parties except for verified legal counsel, banking partners, and government regulatory bodies involved in the property transaction process."
    }
  ];

  const userRights = [
    "Right to Rectification",
    "Right to Erasure (Right to be Forgotten)",
    "Data Portability Request"
  ];

  return (
    <div className="pt-10 bg-zinc-50 min-h-screen font-sans selection:bg-teal-100 pb-20 overflow-x-hidden">
      <div className="container mx-auto px-6 py-12 md:py-20 lg:px-24">
        
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h4 className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em] text-[#008080] mb-4">
            Compliance & Legal
          </h4>
          <h1 className="text-4xl md:text-6xl font-semibold text-zinc-900 mb-8 tracking-tight">Privacy Policy</h1>
          <p className="text-zinc-600 text-base md:text-xl leading-relaxed max-w-4xl font-light">
            Last updated: October 24, 2024. Your privacy is paramount at Cleardeal.in. This policy outlines how we handle your personal data across our brokerage ecosystem.
          </p>
        </motion.header>

        {/* Dynamic Sections Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {sections.map((section, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInLeft}
              className="border border-zinc-200 p-8 md:p-14 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
                <div className="text-[#008080] p-4 bg-teal-50 rounded-xl shrink-0">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">{section.title}</h2>
                  <p className="text-base md:text-lg text-zinc-600 leading-relaxed mb-8">{section.content}</p>
                  
                  {section.list && (
                    <ul className="grid grid-cols-1 gap-4">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex gap-4 text-base md:text-lg text-zinc-700 items-start">
                          <span className="text-[#008080] font-bold mt-1">•</span> 
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.grid && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                      {section.grid.map((box, i) => (
                        <div key={i} className="bg-zinc-50 p-6 md:p-8 border-l-4 border-[#008080]">
                          <h4 className="text-xs font-black text-zinc-900 mb-3 uppercase tracking-[0.15em]">{box.label}</h4>
                          <p className="text-sm md:text-base text-zinc-500 leading-relaxed">{box.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* User Rights Section */}
          <motion.div 
            variants={fadeInLeft}
            className="border border-zinc-200 p-8 md:p-14 bg-white shadow-sm"
          >
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10">
              <div className="text-[#008080] p-4 bg-teal-50 rounded-xl shrink-0">
                <UserCheck size={24} />
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">User Rights</h2>
                <p className="text-base md:text-lg text-zinc-600 leading-relaxed mb-8">
                  You maintain full control over your digital footprint on our platform:
                </p>
                <div className="border-t border-zinc-100">
                  {userRights.map((right, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 10 }}
                      className="flex justify-between items-center py-6 border-b border-zinc-100 group cursor-pointer hover:bg-zinc-50 px-2 md:px-4 transition-all"
                    >
                      <span className="text-base md:text-lg text-zinc-800 font-medium">{right}</span>
                      <ChevronRight size={20} className="text-zinc-300 group-hover:text-[#008080] transition-colors" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Support CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#0a1120] py-16 md:py-24 px-6 md:px-8 text-center text-white rounded-sm"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Questions about your privacy?</h3>
          <p className="text-zinc-400 text-base md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Our Data Protection Officer is available for direct consultation regarding your sensitive information.
          </p>
          <Link to='/contact'>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 md:px-14 py-5 border border-teal-500/40 text-teal-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] hover:bg-teal-500 hover:text-white transition-all shadow-lg shadow-teal-900/20"
          >
            Contact DPO
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;