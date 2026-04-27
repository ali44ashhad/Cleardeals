import React from 'react';
import { Phone, Mail, MapPin, Lock, Map as MapIcon } from 'lucide-react';

const InquiryPage = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-200">
      {/* Navigation */}
    

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 animate-in">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
            Secure Your Future with Expert Real Estate Consultation
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed">
            Find your dream home in the Tricity. Fill out the form below and our senior consultants will get in touch with a curated portfolio matching your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Form */}
          <div className="lg:col-span-7 bg-white border border-zinc-200 p-8 md:p-12 shadow-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-black focus:ring-0 outline-none transition-all text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Phone Number</label>
                  <input type="text" placeholder="+91 98765 43210" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-black focus:ring-0 outline-none transition-all text-sm" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-black focus:ring-0 outline-none transition-all text-sm" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Preferred Location</label>
                  <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-black focus:ring-0 outline-none transition-all text-sm appearance-none cursor-pointer">
                    <option>Select Location</option>
                    <option>Chandigarh</option>
                    <option>Mohali</option>
                    <option>Panchkula</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Estimated Budget</label>
                  <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-black focus:ring-0 outline-none transition-all text-sm appearance-none cursor-pointer">
                    <option>Select Range</option>
                    <option>₹50L - ₹1Cr</option>
                    <option>₹1Cr - ₹5Cr</option>
                    <option>Above ₹5Cr</option>
                  </select>
                </div>
              </div>

              <button className="w-full bg-black text-white py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all mt-4">
                Schedule Free Consultation
              </button>

              <div className="flex gap-4 p-5 bg-zinc-50 border-l-2 border-teal-500 mt-8">
                <Lock className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-teal-700 mb-1">Privacy Guaranteed</h5>
                  <p className="text-zinc-500 text-[11px] leading-relaxed">
                    Your information is handled with the highest degree of confidentiality. We do not share your contact details with third-party telemarketers.
                  </p>
                </div>
              </div>
            </form>
          </div>

          {/* Right Side: Contact & Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact Card */}
            <div className="bg-[#0f172a] text-white p-10 space-y-10">
              <h3 className="text-2xl font-bold">Direct Contact</h3>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm"><Phone className="w-5 h-5" /></div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Phone</p>
                    <p className="text-lg font-medium">+91 172 456 7890</p>
                    <p className="text-xs text-zinc-500">Mon-Sat, 9am - 7pm IST</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm"><Mail className="w-5 h-5" /></div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Email</p>
                    <p className="text-lg font-medium">consult@cleardeal.in</p>
                    <p className="text-xs text-zinc-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Office Address</p>
                    <p className="text-lg font-medium leading-tight">SCO 124-126, First Floor, Sector 17-C, City Center, Chandigarh - 160017</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="relative h-64 bg-zinc-200 overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" alt="Map" className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button className="bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-3 shadow-xl hover:bg-zinc-100 transition-all">
                  <MapIcon className="w-4 h-4" /> View on Google Maps
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="border border-zinc-200 p-8 space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 text-center">Trusted by Investors</h4>
              <div className="flex justify-between items-center gap-4">
                {['PARTNER I', 'PARTNER II', 'PARTNER III'].map((partner) => (
                  <div key={partner} className="bg-zinc-100 px-4 py-2 text-[10px] font-bold text-zinc-400 tracking-widest rounded-sm">
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

   
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default InquiryPage;