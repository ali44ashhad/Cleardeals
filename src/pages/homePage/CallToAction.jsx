import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-zinc-100 py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Ready to find your clear deal?</h2>
        <p className="text-zinc-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Schedule a complimentary strategy session with our senior advisors to map out your real estate journey.
        </p>

        <form className="flex flex-col md:flex-row items-center justify-center gap-0 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your Email Address" 
            className="w-full md:flex-1 px-6 py-4 bg-white border-none focus:ring-1 focus:ring-zinc-300 outline-none text-sm"
            required
          />
          <button className="w-full md:w-auto bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
            Get Free Consultation
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;