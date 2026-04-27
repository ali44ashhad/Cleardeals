import React from 'react';
import { MapPin, Phone, Download, Map as MapIcon } from 'lucide-react';
import { projectData } from '../data';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectData.find((p) => p.id === id);

    if (!project) return <div className="p-20 text-center font-bold">Project Not Found</div>;

    const gridImages =
        Array.isArray(project.imageGrid) && project.imageGrid.length > 0
            ? project.imageGrid
            : [
                { id: 1, src: project.image, alt: project.title },
                { id: 2, src: project.image, alt: project.title },
                { id: 3, src: project.image, alt: project.title },
                { id: 4, src: project.image, alt: project.title },
            ];

    return (
        <div className="min-h-screen bg-white text-zinc-900">
            {/* 1. Hero Section - Styled exactly like the image */}
            <div className="relative h-[65vh] w-full">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                {/* White Floating Title Box */}
                <div className="absolute bottom-12 left-6 md:left-12 bg-white p-8 md:p-10 shadow-2xl max-w-xl">
                    <div className="flex gap-2 mb-4">
                        <span className={`text-[10px] font-bold px-3 py-1 tracking-widest ${project.tagColor}`}>
                            {project.tag} COLLECTION
                        </span>
                        <span className="text-[10px] font-bold px-3 py-1 bg-teal-50 text-teal-700 tracking-widest">
                            ● Verified Listing
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                    <div className="flex items-center gap-2 text-zinc-400 text-sm">
                        <MapPin size={16} />
                        <span>{project.location}</span>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-6 md:px-12 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-8">
                        {/* Stats Bar */}
                        <div className="grid grid-cols-2 md:grid-cols-4 border border-zinc-100 shadow-sm mb-16">
                            {project.stats.map((stat, i) => (
                                <div key={i} className="p-6 border-r border-zinc-100 last:border-0">
                                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{stat.label}</p>
                                    <p className="text-lg font-bold">{stat.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* About */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold mb-8">About {project.title}</h2>
                            <div className="space-y-6 text-zinc-500 leading-relaxed">
                                <p>{project.description.intro}</p>
                                <p>{project.description.details}</p>
                            </div>
                        </section>

                        {/* Amenities Grid - Dynamic sizing based on content */}
                        <section>
                            <h2 className="text-3xl font-bold mb-8">World-Class Amenities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.amenities.map((item, i) => (
                                    <div key={i} className={`relative min-h-[160px] p-8 flex flex-col justify-center border border-zinc-100 overflow-hidden transition-hover hover:shadow-lg ${item.color} ${item.isImage ? 'md:col-span-1' : ''}`}>
                                        {item.isImage ? (
                                            <>
                                                <img src={item.image} className="absolute inset-0 w-full h-full object-cover" alt="" />
                                                <div className="absolute inset-0 bg-black/20" />
                                                <span className="relative text-white font-bold border border-white/50 px-4 py-2 text-xs uppercase tracking-widest self-center">
                                                    {item.name}
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <div className="mb-4 text-zinc-800"><item.icon size={24} /></div>
                                                <h4 className="text-lg font-bold mb-2">{item.name}</h4>
                                                {item.desc && <p className="text-xs opacity-70">{item.desc}</p>}
                                            </>
                                        )}
                                    </div>
                                ))}
                                <div className="bg-zinc-100 min-h-[160px] flex flex-col items-center justify-center cursor-pointer group">
                                    <MapIcon className="mb-2 group-hover:scale-110 transition-transform" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Sports Court</span>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* RIGHT SIDEBAR - Sticky Inquiry Form */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-10 space-y-6">
                            <div className="bg-white border border-zinc-100 p-8 shadow-2xl">
                                <h3 className="text-2xl font-bold mb-2">Request Information</h3>
                                <p className="text-zinc-400 text-[11px] mb-8">Our senior advisor will contact you within 24 hours.</p>

                                <form className="space-y-4">
                                    <input type="text" placeholder="Full Name" className="w-full border border-zinc-200 p-3 text-sm outline-none focus:border-black" />
                                    <input type="email" placeholder="Email Address" className="w-full border border-zinc-200 p-3 text-sm outline-none focus:border-black" />
                                    <div className="flex border border-zinc-200 p-3">
                                        <span className="text-zinc-400 text-sm mr-2">+91</span>
                                        <input type="text" placeholder="Phone Number" className="w-full text-sm outline-none" />
                                    </div>
                                    <textarea placeholder="Message (Optional)" rows="3" className="w-full border border-zinc-200 p-3 text-sm outline-none focus:border-black resize-none" />
                                    <button className="w-full bg-black text-white py-4 font-bold text-[10px] tracking-widest uppercase hover:bg-zinc-800 transition-all">
                                        Send Enquiry
                                    </button>
                                </form>

                                <div className="mt-8 pt-8 border-t border-zinc-100 text-center">
                                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Or speak with us directly</p>
                                    <a href={`tel:${project.contact}`} className="flex items-center justify-center gap-3 text-xl font-bold text-[#008080]">
                                        <Phone size={20} /> {project.contact}
                                    </a>
                                </div>
                            </div>

                            {/* Download Brochure */}
                            <button className="w-full bg-[#00e5ff]/10 text-teal-900 border border-[#00e5ff]/30 p-6 flex justify-between items-center group hover:bg-[#00e5ff]/20 transition-all">
                                <div className="text-left">
                                    <p className="text-xs font-bold uppercase tracking-widest">Project Brochure</p>
                                    <p className="text-[10px] opacity-60">PDF ({project.brochureSize})</p>
                                </div>
                                <Download className="group-hover:translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <section className="">
                <section className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[90vh] md:h-[110vh] mb-24">
                    {gridImages.map((img, index) => (
                        <div
                            key={img.id ?? index}
                            className={`${index === 0 ? "md:col-span-2 md:row-span-2" : index === 1 ? "md:col-span-2" : "col-span-1"} overflow-hidden rounded-sm group`}
                        >
                            <img src={img.src} alt={img.alt ?? project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    ))}
                </section>
            </section>

            {/* Neighborhood Mapping Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8">The Neighborhood</h2>
                <div className="relative mb-12 border border-zinc-100 p-2 rounded-sm overflow-hidden shadow-sm">
                    <img src={project.neighborhood?.mapImage} alt="Map" className="w-full h-[400px] object-cover grayscale" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black text-white px-6 py-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                            <MapPin size={16} /> Project Location
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {project.neighborhood && (
                        <section className="mb-16">


                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {project.neighborhood.locations.map((loc, i) => (
                                    <div key={i} className="flex items-center gap-4 border-l border-zinc-200 pl-6">
                                        <loc.icon className="text-teal-600" size={24} />
                                        <div>
                                            <h4 className="font-bold text-sm tracking-tight">{loc.name}</h4>
                                            <p className="text-xs text-zinc-400">{loc.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;