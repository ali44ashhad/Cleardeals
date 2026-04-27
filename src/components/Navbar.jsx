import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: 'projects' },
    { name: 'About Us', href: 'about' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-slate-800">
        Cleardeal.in
      </div>

      {/* Desktop Navigation (Hidden below 992px) */}
      <div className="hidden lg:flex items-center gap-8">
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group py-2">
              <a 
                href={link.href} 
                className="text-slate-500 font-medium transition-colors group-hover:text-slate-800"
              >
                {link.name}
              </a>
              {/* Animated Bluish Underline */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button (Desktop) */}
      <div className="hidden lg:block">
        <button className="bg-black text-white px-6 py-2.5 text-sm font-semibold tracking-wider hover:bg-zinc-800 transition-all uppercase">
          Enquire Now
        </button>
      </div>

      {/* Hamburger Icon (Visible below 992px) */}
      <button 
        className="lg:hidden text-slate-800" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Drawer (992px Breakpoint) */}
      <div className={`fixed top-0 right-0 h-full w-1/2 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[60] lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <button className="self-end mb-8" onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
          
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-gray-50 pb-2">
                <a 
                  href={link.href} 
                  className="text-lg font-medium text-slate-700"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto pb-10">
            <Link to='/inquiry'>
            <button className="w-full bg-black text-white py-4 font-bold uppercase text-xs tracking-widest">
              Enquire Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;