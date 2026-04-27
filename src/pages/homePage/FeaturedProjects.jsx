import React from 'react';
import { ArrowUpRight, BedDouble, Square, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectData } from '../data';

const FeaturedProjects = () => {
  // Taking the first 3 projects from your data file for the Featured section
  const featuredListings = projectData.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Area */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-semibold text-zinc-900 mb-2">Featured Projects</h2>
            <p className="text-zinc-500 text-sm">Curated luxury listings in Chandigarh, Mohali & Panchkula</p>
          </div>
          <Link to='/projects'>
            <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#008080] group">
              All Listings <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredListings.map((project) => {
            // Helper to extract values from the 'stats' array in your data
            const getConfig = project.stats.find(s => s.label === "CONFIGURATION")?.value || "N/A";
            const getArea = project.stats.find(s => s.label === "AREA")?.value || "N/A";
            const getType = project.stats.find(s => s.label === "TYPE")?.value;

            return (
              <div key={project.id} className="group border border-zinc-100 hover:shadow-xl transition-shadow flex flex-col">
                {/* Image Container */}
                <div className="relative h-[250px] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-bold tracking-widest ${project.tagColor}`}>
                    {project.tag}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900">{project.title}</h3>
                      <p className="text-xs text-zinc-400 mt-1 flex items-center gap-1">
                        <MapPin size={12} /> {project.location}
                      </p>
                    </div>
                    <span className="text-lg font-bold text-zinc-800">{project.price}</span>
                  </div>

                  {/* Specs Row */}
                  <div className="flex justify-between py-6 border-y border-zinc-50 mb-6">
                    <div className="flex flex-col items-center gap-1 text-center">
                      <BedDouble size={16} className="text-zinc-400" />
                      <span className="text-[10px] text-zinc-500 font-medium">{getType || getConfig}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-center">
                      <Square size={16} className="text-zinc-400" />
                      <span className="text-[10px] text-zinc-500 font-medium">{getArea}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-center">
                      <ShieldCheck size={16} className="text-zinc-400" />
                      <span className="text-[10px] text-zinc-500 font-medium">Verified</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link to={`/projects/${project.id}`}>
                    <button className="w-full py-3 border border-zinc-200 text-[10px] font-bold tracking-widest text-[#008080] hover:bg-zinc-950 hover:text-white transition-colors uppercase">
                      View Detail
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Internal helper for location icon
const MapPin = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

export default FeaturedProjects;