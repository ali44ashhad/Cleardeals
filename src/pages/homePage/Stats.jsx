import React from 'react';

const Stats = () => {
  const statsData = [
    { value: '₹250Cr+', label: 'Assets Managed' },
    { value: '500+', label: 'Families Served' },
    { value: '15+', label: 'Years Experience' },
    { value: '100%', label: 'Verified Listings' },
  ];

  return (
    <section className="bg-white py-12 md:py-20 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">
                {item.value}
              </h2>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-zinc-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;