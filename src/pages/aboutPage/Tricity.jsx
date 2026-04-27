import React from 'react';

const Tricity = () => {
  const timeline = [
    {
      year: '2012',
      title: 'Foundation',
      desc: 'Started as a boutique consultancy in Sector 17, focusing on luxury residential acquisitions.'
    },
    {
      year: '2017',
      title: 'Digital Expansion',
      desc: 'Launched Cleardeal.in, bridging the gap between traditional brokerage and modern tech transparency.'
    },
    {
      year: '2024',
      title: 'Market Leadership',
      desc: 'Leading the Tricity region with an exclusive portfolio of prime commercial and luxury residential assets.'
    }
  ];

  return (
    <section className="py-20 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Illustrative Graphic */}
        <div className="flex-1 w-full">
          <div className="bg-white p-4 shadow-sm border border-zinc-100">
            <img 
              src="https://images.unsplash.com/photo-1449156001533-cb39c853308c?auto=format&fit=crop&q=80" 
              alt="The Tricity Legacy" 
              className="w-full h-auto grayscale opacity-80"
            />
          </div>
        </div>

        {/* Right Side: Timeline Content */}
        <div className="flex-1">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#008080] mb-8">
            The Tricity Legacy
          </h4>
          
          <div className="space-y-12 relative before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-200">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-10 group">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1.5 w-2.5 h-2.5 bg-[#008080] rounded-full ring-4 ring-white"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <span className="text-xl font-bold text-[#008080]">{item.year}</span>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Tricity;