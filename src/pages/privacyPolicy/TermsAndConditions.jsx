import React from 'react';
import { CheckCircle2, Briefcase, Scale } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-200">
      
      {/* 1. Navigation */}
    

      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24 animate-fade-in-up">
        
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Terms and Conditions</h1>
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
            <span>Effective Date: June 15, 2024</span>
            <span className="w-1 h-1 bg-zinc-300 rounded-full"></span>
            <span>Version 2.4.0</span>
          </div>
          <div className="h-px bg-zinc-200 w-full mt-8"></div>
        </header>

        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">1. Introduction</h2>
          <div className="space-y-4 text-zinc-600 leading-relaxed">
            <p>
              Welcome to EstateElite (Cleardeal.in). These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and EstateElite ("we," "us" or "our"), concerning your access to and use of our website and services.
            </p>
            <p>
              By accessing the site, you acknowledge that you have read, understood, and agreed to be bound by all of these Terms and Conditions. If you do not agree with all of these terms, then you are expressly prohibited from using the site and you must discontinue use immediately.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
          <div className="bg-zinc-50 border border-zinc-200 p-8 md:p-10 rounded-sm">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-5 h-5 text-zinc-800" />
              <h2 className="text-xl font-bold">2. Services Provided</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {[
                {
                  t: "Brokerage",
                  d: "Facilitation of property buying, selling, and leasing through our digital platform and physical office network."
                },
                {
                  t: "Advisory",
                  d: "Strategic real estate investment consulting and portfolio management for high-net-worth individuals."
                },
                {
                  t: "Verification",
                  d: "Comprehensive legal and structural due diligence for all properties listed on our premier marketplace."
                },
                {
                  t: "Digital Asset",
                  d: "Provision of high-resolution virtual tours, drone footage, and 3D architectural renderings."
                }
              ].map((item, idx) => (
                <div key={idx}>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">{item.t}</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User Obligations */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">3. User Obligations</h2>
          <p className="text-zinc-600 mb-8">As a user of the Site, you agree to:</p>
          <ul className="space-y-6">
            {[
              "Provide true, accurate, current, and complete registration information and maintain the accuracy of such information.",
              "Maintain the security of your password and identification, and take full responsibility for all activities that occur under your account.",
              "Use the platform only for lawful purposes and in accordance with the professional standards of the real estate industry."
            ].map((text, i) => (
              <li key={i} className="flex gap-4 items-start group">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0 transition-transform group-hover:scale-110" />
                <span className="text-zinc-600 leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Liability */}
        <section className="mb-16 border-l-2 border-black pl-8 py-2">
          <h2 className="text-2xl font-bold mb-6">4. Limitation of Liability</h2>
          <div className="space-y-6 italic text-zinc-700 leading-relaxed">
            <p>
              In no event will EstateElite or its directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
            </p>
            <p className="not-italic text-zinc-600">
              We make no warranties or representations about the accuracy or completeness of the site's content or the content of any websites linked to the site and we will assume no liability or responsibility for any errors, mistakes, or inaccuracies of content and materials.
            </p>
          </div>
        </section>

        {/* Governing Law */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">5. Governing Law</h2>
          <p className="text-zinc-600 leading-relaxed mb-8">
            These Terms and Conditions and your use of the Site are governed by and construed in accordance with the laws of the Republic of India, without regard to its conflict of law principles.
          </p>
          <div className="bg-white border border-zinc-200 p-6 flex items-center gap-6">
            <Scale className="w-5 h-5 text-zinc-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Jurisdiction: Courts of New Delhi, India
            </span>
          </div>
        </section>

        {/* Contact */}
        <div className="h-px bg-zinc-200 w-full mb-12"></div>
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div>
            <h4 className="font-bold mb-2">Questions?</h4>
            <p className="text-zinc-500 text-sm mb-6">
              Our legal team is available for any clarifications.
            </p>
            <button className="border border-zinc-300 text-zinc-600 px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
              Contact Legal Dept
            </button>
          </div>
          <div className="text-right">
            <div className="italic font-serif text-3xl text-zinc-300 mb-1">Elite Management</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 border-t border-zinc-400 pt-2 inline-block">
              Authorized Signatory
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-50 border-t border-zinc-200 px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-lg font-bold tracking-tighter uppercase">EstateElite</div>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            {['Privacy Policy', 'Terms & Conditions', 'Sitemap', 'Office Locations'].map(link => (
              <a key={link} href="#" className="hover:text-black">{link}</a>
            ))}
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            © 2024 ESTATEELITE LUXURY BROKERAGE. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;