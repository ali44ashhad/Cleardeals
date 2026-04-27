import React from 'react';
import { MapPin } from 'lucide-react';

const Map = () => {
  return (
    <div className="w-full px-6 py-12 bg-white">
      {/* Map Container: 
         - Relative positioning for the overlay
         - Overflow hidden to contain the grayscale image
         - Set a base height for mobile (h-[300px]) and larger for desktop (md:h-[500px])
      */}
      <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-sm border border-zinc-200">
        
        {/* Background Map Image:
           - Using an <img> tag for better performance per your preference
           - object-cover ensures it fills the container
           - grayscale and opacity-60 matches the 'EstateElite' muted theme
        */}
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
          alt="Location Map" 
          className="w-full h-full object-cover grayscale opacity-60"
        />

        {/* Centered Overlay Card:
           - absolute inset-0 with flex items-center justify-center to keep it perfectly centered
        */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-white px-8 py-10 md:px-12 md:py-14 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col items-center gap-4 animate-fade-in">
            
            {/* Pin Icon Container */}
            <div className="bg-black p-3 rounded-xl">
              <MapPin className="w-6 h-6 text-white" fill="white" />
            </div>

            {/* Label */}
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-zinc-900 whitespace-nowrap">
              EstateElite HQ
            </span>
          </div>
        </div>
      </div>

      {/* Optional: Inline style for the subtle fade-in of the center card */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Map;