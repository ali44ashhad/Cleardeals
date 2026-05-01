import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import footerBg from "../assets/footer-bg.jpg"
import linkedIn from "../assets/linkedin.webp"
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twiter.png"

const Footer = () => {
  return (
    <footer className="relative py-10 border-t border-zinc-200 overflow-hidden">
      {/* Background Image Block */}
      <div className="absolute inset-0 z-0">
        <img 
          src={footerBg} 
          alt="Footer Background" 
          className="w-full h-full object-cover opacity-5" 
        />
        {/* Subtle white-to-transparent fade to keep it clean */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white"></div> */}
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-5">

          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold text-zinc-950 mb-8">Cleardeal.in</h3>
            <p className="text-zinc-700 text-base leading-relaxed mb-10 max-w-[300px]">
              The most trusted real estate consultancy for luxury residential and high-yield commercial properties in the Chandigarh Tricity area.
            </p>
            
            <div className="flex items-center gap-6">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <motion.img   
      whileHover={{ scale: 1.15 }}
      src={facebook} 
      alt="Facebook" 
      className="w-8 h-8 object-cover transition-all duration-300 cursor-pointer"
    />
  </a>

  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <motion.img 
      whileHover={{ scale: 1.15 }}
      src={instagram} 
      alt="Instagram" 
      className="w-8 h-8 object-cover transition-all duration-300 cursor-pointer"
    />
  </a>

  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <motion.img 
      whileHover={{ scale: 1.15 }}
      src={linkedIn} 
      alt="LinkedIn" 
      className="w-8 h-8 object-contain transition-all duration-300 cursor-pointer"
    />
  </a>

  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <motion.img 
      whileHover={{ scale: 1.15 }}
      src={twitter} 
      alt="Twitter" 
      className="w-8 h-8 object-contain transition-all duration-300 cursor-pointer"
    />
  </a>
</div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-950 mb-10">Quick Links</h4>
            <ul className="text-base text-zinc-700 space-y-5">
              <li>
                <Link to='/projects' className="hover:text-teal-700 transition-colors cursor-pointer font-medium">Residential Projects</Link>
              </li>
              <li>
                <Link to='/about' className="hover:text-teal-700 transition-colors cursor-pointer font-medium">About Us</Link>
              </li>
              <li>
                <Link to='/contact' className="hover:text-teal-700 transition-colors cursor-pointer font-medium">Contact Us</Link>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-950 mb-10">Support</h4>
            <ul className="text-base text-zinc-700 space-y-5">
              <li>
                <Link to='/privacy-policy' className="hover:text-teal-700 transition-colors cursor-pointer font-medium">Privacy Policy</Link>
              </li>
              <li>
                <Link to='/term-condition' className="hover:text-teal-700 transition-colors cursor-pointer font-medium">Terms & Conditions</Link>
              </li>
            </ul>
          </motion.div>

          {/* Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-950 mb-2">Office</h4>
            <div className="text-base text-zinc-700 leading-relaxed space-y-1">
              <p>SCO 124-126, First Floor, Sector 17-C,</p>
              <p> Chandigarh - 160017</p>
              <p>140306</p>
              <div className="pt-6">
                <p className="text-zinc-500 text-xs uppercase tracking-widest">Email Us</p>
                <p className="font-bold text-zinc-700 text-lg tracking-tight">invest@cleardeal.in</p>
              </div>
              <div className="pt-6">
                <p className="text-zinc-500 text-xs uppercase tracking-widest">Direct Line</p>
                <p className="font-bold text-zinc-700 text-lg tracking-tight">+91 172 456 7890</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-zinc-600 pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-center items-center gap-4 text-sm font-medium tracking-wide relative z-10"
      >
        <p className='text-center opacity-80'>
          © {new Date().getFullYear()} Cleardeal.in. Premier Real Estate Brokerage in Chandigarh Tricity.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;