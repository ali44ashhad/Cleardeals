import React from 'react';
import { Globe, Share2, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-zinc-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-bold text-zinc-900 mb-6">Cleardeal.in</h3>
            <p className="text-zinc-400 text-xs leading-relaxed mb-6 max-w-[220px]">
              The most trusted real estate consultancy for luxury residential and high-yield commercial properties in the Chandigarh Tricity area.
            </p>
            <div className="flex gap-4 text-zinc-800">
               <Globe size={18} className="cursor-pointer hover:text-teal-600 transition-colors" />
               <Share2 size={18} className="cursor-pointer hover:text-teal-600 transition-colors" />
               <Mail size={18} className="cursor-pointer hover:text-teal-600 transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 mb-6">Quick Links</h4>
            <ul className=" text-xs text-zinc-500">
              <Link to='/projects'><li className="hover:text-zinc-900 cursor-pointer ">Residential Projects</li></Link>
              <Link to='/about'><li className="hover:text-zinc-900 cursor-pointer pt-3">About Us</li></Link>
              <Link to='/contact'><li className="hover:text-zinc-900 cursor-pointer pt-3">contact Us</li></Link>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 mb-6">Support</h4>
            <ul className="space-y-4 text-xs text-zinc-500">
               <Link to='/privacy-policy'>
                <li className="hover:text-zinc-900 cursor-pointer">Privacy Policy</li>
              </Link>
              <Link to='/term-condition'>
                <li className="hover:text-zinc-900 cursor-pointer pt-3">Terms & Conditions</li>
              </Link>
            </ul>
          </div>

          {/* Office */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 mb-6">Office</h4>
            <div className="text-xs text-zinc-500 leading-relaxed">
              <p>SCO 52, Sector 82</p>
              <p>JLPL Industrial Area, Mohali,</p>
              <p>140306</p>
              <p className="mt-4 font-bold text-zinc-900">+91 98XXX XXXXX</p>
            </div>
          </div>

        </div>
      </div>
      <div className="text-gray-500 mt-20 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-center items-center gap-4 text-xs tracking-wider ">
  <p className='text-center'>
    © {new Date().getFullYear()} Cleardeal.in. Premier Real Estate Brokerage in Chandigarh Tricity.
  </p>
 
</div>
    </footer>
  );
};

export default Footer;