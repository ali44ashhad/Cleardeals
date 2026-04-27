import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight, ArrowRight } from 'lucide-react';
import Map from './Map';

const ContactHero = () => {
  return (
    <>
        <section className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600 mb-4">
            Connect with Excellence
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 mb-6">
            Let's Discuss Your Next Investment.
          </h2>
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <p className="text-zinc-500 text-sm md:text-base max-w-xl leading-relaxed">
              Whether you're looking for a luxury estate or a strategic commercial investment 
              in Chandigarh, our experts are ready to guide you.
            </p>
            <div className="h-px bg-zinc-200 flex-grow hidden md:block"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inquiry Form Card */}
          <div className="lg:col-span-7 bg-white border border-zinc-100 p-8 md:p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-10">Inquiry Form</h3>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-900">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-black outline-none transition-all text-sm rounded-sm" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-900">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-black outline-none transition-all text-sm rounded-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-900">Phone Number</label>
                  <input type="text" placeholder="+91 98765 43210" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-black outline-none transition-all text-sm rounded-sm" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-900">Interest Type</label>
                  <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-black outline-none transition-all text-sm rounded-sm appearance-none cursor-pointer">
                    <option>Property Purchase</option>
                    <option>Commercial Lease</option>
                    <option>Investment Advisory</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-900">Your Message</label>
                <textarea rows="4" placeholder="How can we assist you?" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-black outline-none transition-all text-sm rounded-sm resize-none"></textarea>
              </div>

              <button className="bg-black text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-zinc-800 transition-all rounded-sm">
                Send Message <ArrowRight className="w-3 h-3" />
              </button>
            </form>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* HQ Card */}
            <div className="bg-black text-white p-10 space-y-8 rounded-sm">
              <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full">
                <MapPin className="w-4 h-4 text-teal-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-tight mb-4">Chandigarh HQ</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-10 max-w-[240px]">
                  SCO 144-145, Sector 17-C, Near Bridge Market, Chandigarh 160017, India
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-teal-400 hover:text-teal-300 transition-colors">
                  Get Directions <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Call Us Card */}
            <div className="bg-zinc-50 border border-zinc-100 p-8 flex items-start gap-6 rounded-sm">
              <Phone className="w-5 h-5 text-teal-600 mt-1" />
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Call Us</h4>
                <p className="text-sm font-bold text-zinc-900 mb-1">+91 172 456 7890</p>
                <p className="text-xs text-zinc-500">Mon-Sat, 9am - 7pm</p>
              </div>
            </div>

            {/* Email Us Card */}
            <div className="bg-zinc-50 border border-zinc-100 p-8 flex items-start gap-6 rounded-sm">
              <Mail className="w-5 h-5 text-teal-600 mt-1" />
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Email Us</h4>
                <p className="text-sm font-bold text-zinc-900 mb-1">invest@cleardeal.in</p>
                <p className="text-xs text-zinc-500">Response within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Map/>
    </>
  );
};

export default ContactHero;