import React from 'react';
import { Shield, Database, Cookie, Share2, UserCheck, ChevronRight } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <Shield size={24} />, // Increased icon size
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
    <div className="pt-10 bg-zinc-50 min-h-screen font-sans selection:bg-teal-100 pb-20">
      <div className="container mx-auto px-6 py-20 lg:px-24">
        
        {/* Header Section */}
        <header className="mb-16">
          <h4 className="text-[12px] font-bold uppercase tracking-[0.4em] text-[#008080] mb-4">
            Compliance & Legal
          </h4>
          <h1 className="text-4xl md:text-5xl font-semibold text-zinc-900 mb-8">Privacy Policy</h1>
          <p className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-4xl">
            Last updated: October 24, 2024. Your privacy is paramount at Cleardeal.in. This policy outlines how we handle your personal data across our brokerage ecosystem.
          </p>
        </header>

        {/* Dynamic Sections Grid - All Forced to White Background */}
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div key={idx} className="border border-zinc-200 p-10 lg:p-14 bg-white shadow-sm">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="text-[#008080] p-3 bg-teal-50 rounded-lg">{section.icon}</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-zinc-900 mb-6">{section.title}</h2>
                  <p className="text-base md:text-lg text-zinc-600 leading-relaxed mb-8">{section.content}</p>
                  
                  {/* Lists */}
                  {section.list && (
                    <ul className="space-y-4">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex gap-4 text-base md:text-lg text-zinc-700">
                          <span className="text-[#008080] font-bold">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Grids */}
                  {section.grid && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      {section.grid.map((box, i) => (
                        <div key={i} className="bg-[#EFEEED] p-8 border-l-4 border-[#008080]">
                          <h4 className=" text-sm font-bold text-zinc-900 mb-3 uppercase tracking-wider">{box.label}</h4>
                          <p className="text-sm md:text-base text-zinc-600 leading-relaxed">{box.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* User Rights Section - White Background */}
          <div className="border border-zinc-200 p-10 lg:p-14 bg-white shadow-sm">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="text-[#008080] p-3 bg-teal-50 rounded-lg"><UserCheck size={24} /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-zinc-900 mb-6">User Rights</h2>
                <p className="text-base md:text-lg text-zinc-600 leading-relaxed mb-8">
                  You maintain full control over your digital footprint on our platform:
                </p>
                <div className="border-t border-zinc-100">
                  {userRights.map((right, i) => (
                    <div key={i} className="flex justify-between items-center py-6 border-b border-zinc-100 group cursor-pointer hover:bg-zinc-50 px-4 transition-colors">
                      <span className="text-base md:text-lg text-zinc-800 font-medium">{right}</span>
                      <ChevronRight size={20} className="text-zinc-300 group-hover:text-[#008080] transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Support Box */}
        <div className="mt-16 bg-[#0a1120] py-20 px-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Questions about your privacy?</h3>
          <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Our Data Protection Officer is available for direct consultation regarding your sensitive information.
          </p>
          <button className="px-12 py-4 border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-[0.2em] hover:bg-teal-500 hover:text-white transition-all">
            Contact DPO
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default PrivacyPolicy;