import React from 'react';
import { ArrowUpRight, BedDouble, Square, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectData } from '../data';

const FeaturedProjects = () => {
  const featuredListings = projectData.slice(0, 3);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="py-24 bg-zinc-50/50">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 gap-6">
        <motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  // Use 'max-w' for responsiveness and 'mx-auto' if you want it centered, 
  // or keep it left-aligned as per your design.
  className="w-full max-w-4xl" 
>
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4 md:mb-6 tracking-tight">
    Featured Projects
  </h2>
  
  <p className="text-zinc-600 text-base md:text-lg lg:text-xl leading-relaxed">
    Discover handpicked luxury listings in Chandigarh, Mohali, and Panchkula, 
    offering the perfect blend of sophistication and comfort. Our portfolio 
    features premium properties in prime locations, designed to match your aspirations. 
    Every listing is thoroughly verified to ensure quality, transparency, and trust. 
    Find your ideal home with confidence and ease.
  </p>
</motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to='/projects'>
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] group" style={{ color: '#008080' }}>
                All Listings 
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div 
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
>
  {featuredListings.map((project) => {
    const getConfig = project.stats.find(s => s.label === "CONFIGURATION")?.value || "N/A";
    const getArea = project.stats.find(s => s.label === "AREA")?.value || "N/A";
    const getType = project.stats.find(s => s.label === "TYPE")?.value;

    return (
      <motion.div 
        key={project.id} 
        variants={cardVariants}
        className="group bg-white border border-zinc-400 overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col rounded-sm"
      >
        {/* Image */}
        <div className="relative h-[220px] sm:h-[240px] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div 
            className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-wider shadow ${project.tagColor}`}
          >
            {project.tag}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex-grow">
          <div className="flex justify-between items-start mb-4">
            <div className="max-w-[70%]">
              <h3 className="text-lg sm:text-xl font-bold text-zinc-900 leading-tight mb-1 group-hover:text-[#008080] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-500 flex items-center gap-2 font-medium">
                <MapPin size={16} /> {project.location}
              </p>
            </div>
            <span className="text-lg sm:text-xl font-bold text-zinc-800">
              {project.price}
            </span>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-3 py-4 border-y border-zinc-100 mb-6">
            
            <div className="flex flex-col items-center gap-2 border-r border-zinc-100">
              <BedDouble size={26} className="text-zinc-500" />
              <span className="text-sm font-semibold text-zinc-700 uppercase">
                {getType || getConfig}
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 border-r border-zinc-100">
              <Square size={24} className="text-zinc-500" />
              <span className="text-sm font-semibold text-zinc-700 uppercase">
                {getArea}
              </span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <ShieldCheck size={26} className="text-[#008080]" />
              <span className="text-sm font-semibold text-zinc-700 uppercase">
                Verified
              </span>
            </div>

          </div>

          {/* Button */}
          <Link to={`/projects/${project.id}`}>
            <motion.button 
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 bg-zinc-900 text-white text-sm font-bold tracking-widest uppercase hover:cursor-pointer hover:bg-black transition-colors rounded-md"
            >
              View Details
            </motion.button>
          </Link>
        </div>
      </motion.div>
    );
  })}
</motion.div>
      </div>
    </section>
  );
};

const MapPin = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export default FeaturedProjects;