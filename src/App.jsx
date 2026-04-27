import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './pages/homePage/Hero';
import ProjectHero from './pages/projectsPages/ProjectHero';
import AboutHero from './pages/aboutPage/AboutHero';
import ContactHero from './pages/contactPages/ContactHero';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import TermsAndConditions from './pages/privacyPolicy/TermsAndConditions';
import InquiryPage from './pages/contactPages/InquiryPage';
import ProjectDetail from './pages/projectsPages/ProjectDetail';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Start loading and scroll to top immediately on route change
    setLoading(true);
    window.scrollTo(0, 0);

    // Set a timeout to remove the loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Inline Loading Component */}
      {loading && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-zinc-100 border-t-[#008080] rounded-full animate-spin"></div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Loading</p>
          </div>
        </div>
      )}

      <Navbar />

      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/projects' element={<ProjectHero />}/>
        <Route path='/about' element={<AboutHero />} />
        <Route path='/contact' element={<ContactHero />} />
        <Route path='/inquiry' element={<InquiryPage />}/>

        <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
        <Route path='/term&condition' element={<TermsAndConditions />}/>


        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;