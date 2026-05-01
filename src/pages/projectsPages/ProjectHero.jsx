import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectData } from '../data';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectHero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Parent container handles the "Stagger" effect (one after another)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each card's appearance
        delayChildren: 0.3
      }
    }
  };

  // Item variant defines the "Slide up from lower side" animation
  const item = {
    hidden: { 
      opacity: 0, 
      y: 100 // Starts 100px below its final position
    },
    show: { 
      opacity: 1, 
      y: 0, // Moves to its natural position
      transition: { 
        type: "spring", 
        stiffness: 60, // Lower stiffness for a smoother, luxury float
        damping: 20,
        duration: 0.8
      }
    }
  };

  return (
    <div className="relative bg-slate-50 min-h-screen p-6 md:p-12 lg:px-20 overflow-hidden">
      
      {/* Background Decorative SVGs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.svg 
          animate={{ rotate: [0, 10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          viewBox="0 0 200 200" 
          className="absolute -left-32 top-1/4 w-[800px] h-[800px] text-blue-200/40 blur-[120px]"
          fill="currentColor"
        >
          <path d="M100,20 C110,45 140,45 150,20 C160,45 190,45 180,70 C205,80 205,110 180,120 C190,145 160,145 150,170 C140,145 110,145 100,170 C90,145 60,145 50,170 C40,145 10,145 20,120 C-5,110 -5,80 20,70 C10,45 40,45 50,20 C60,45 90,45 100,20 Z" />
        </motion.svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-100/10 blur-[150px] rounded-full" />
      </div>

      {/* Header Content */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-20 relative z-10"
      >
        <div className="inline-block px-4 py-1.5 mb-6 border border-blue-200 bg-blue-100/50 backdrop-blur-sm rounded-full">
          <p className="text-[11px] font-bold tracking-[0.25em] text-blue-700 uppercase">
            Exclusive Collection 2026
          </p>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 text-slate-900 tracking-tight max-w-4xl">
          Premium Real Estate <span className="text-blue-600">Listings</span>
        </h1>
        <p className="text-slate-600 text-lg mb-16 max-w-2xl leading-relaxed">
          Explore our handpicked selection of luxury estates across the tri-city.
        </p>
      </motion.div>

      {/* Grid Area with Staggered Slide-Up Effect */}
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show" // Animations trigger when the section comes into view
        viewport={{ once: true, amount: 0.1 }} // Only trigger once
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {projectData.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            className="group relative rounded-2xl border border-blue-100/50 bg-white/40 backdrop-blur-xl hover:bg-white/60 hover:border-blue-400 transition-all duration-500 shadow-xl shadow-blue-900/5"
          >
            {/* Video/Image Container */}
            <div className="relative h-[280px] overflow-hidden rounded-t-2xl bg-zinc-900">
               {/* Note: I've left the img here, but you can swap for the video code provided previously */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {project.tag && (
                <div className="absolute top-4 left-4 px-3 py-1 text-[10px] font-bold tracking-widest text-white z-10 rounded-lg shadow-lg"
                     style={{ backgroundColor: project.tagColor || '#2563eb' }}>
                  {project.tag.toUpperCase()}
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={14} className="text-blue-600" />
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{project.location}</p>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-blue-700 transition-colors">
                {project.title}
              </h3>
              <div className="flex justify-between items-center pt-6 border-t border-blue-50">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Guide Price</p>
                  <p className="text-2xl font-black text-slate-900 tracking-tighter">{project.price}</p>
                </div>
                <button 
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectHero;