import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projectData } from '../data';
import { Search, MapPin, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const ProjectHero = () => {
    const navigate = useNavigate();
  
    return (
      <div className=" bg-white min-h-screen p-6 md:p-12">
        <h1 className="pt-20 text-3xl font-bold mb-8 text-zinc-900">Premium Real Estate Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div key={project.id} className="group border border-zinc-100 bg-white hover:shadow-xl transition-all">
              <div className="relative h-[240px] overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {project.tag && <div className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-bold tracking-widest ${project.tagColor}`}>{project.tag}</div>}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-1">{project.title}</h3>
                <p className="text-xs text-zinc-400 flex items-center gap-1.5 mb-6"><MapPin size={12} /> {project.location}</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Starting From</p>
                    <span className="text-xl font-bold text-zinc-800">{project.price}</span>
                  </div>
                  {/* NAVIGATION TRIGGER */}
                  <button 
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className="py-2.5 px-6 border border-zinc-200 text-[10px] font-bold tracking-widest text-[#008080] hover:bg-zinc-950 hover:text-white transition-colors"
                  >
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default ProjectHero;