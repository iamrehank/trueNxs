import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Inquiry } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import LocationDetails from './components/LocationDetails';
import CareersPortal from './components/CareersPortal';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const location = useLocation();

  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isCareersOpen, setIsCareersOpen] = useState(false);

  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  const [globalNotice, setGlobalNotice] = useState<{ message: string; type: 'info' | 'success' } | null>({
    message: 'Operational Notice: Regional compliance reports (SEC Form 10-K workflow upgrades) are now live inside iFAP Delivery Cells.',
    type: 'info'
  });

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const saved = localStorage.getItem('trunex_inquiries');
    if (saved) {
      setInquiries(JSON.parse(saved));
    } else {
      const seeds: Inquiry[] = [
        {
          id: 'inq-seed-1',
          name: 'Alexander Sterling',
          email: 'sterling.cx@fintechpay.com',
          serviceInterest: 'iFIN - Consumer Lending',
          message: 'Requested high-velocity document indexing alignment for real-time risk profiles. Current scope covers 45,000 credit accounts annually.',
          date: '2026-06-11 08:32 AM',
          status: 'Assigned'
        },
        {
          id: 'inq-seed-2',
          name: 'Sophia Chen',
          email: 's.chen@globalreit.sg',
          serviceInterest: 'iFAP - Finance & Accounting',
          message: 'Urgent compliance support for computerized XBRL tagging under SEC regulations ahead of Q3 reporting window.',
          date: '2026-06-10 14:15 PM',
          status: 'Reviewing'
        }
      ];
      setInquiries(seeds);
      localStorage.setItem('trunex_inquiries', JSON.stringify(seeds));
    }
  }, []);

  const handleAddInquiry = (newInq: Omit<Inquiry, 'id' | 'date' | 'status'>) => {
    const added: Inquiry = {
      ...newInq,
      id: `inq-${Date.now()}`,
      date: new Date().toLocaleString(),
      status: 'Received'
    };
    const updated = [added, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('trunex_inquiries', JSON.stringify(updated));
    setGlobalNotice({
      message: `Inquiry registered successfully! Your token is TRU-${Math.floor(Math.random() * 90000 + 10000)}`,
      type: 'success'
    });
    setTimeout(() => setGlobalNotice(null), 6000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative overflow-x-hidden font-sans pt-20">

      {/* Global Notice Banner */}
      {globalNotice && (
        <div className={`w-full py-3.5 px-6 shrink-0 text-xs font-medium flex items-center justify-between z-40 relative border-b ${
          globalNotice.type === 'success'
            ? 'bg-emerald-50 text-emerald-800 border-emerald-100'
            : 'bg-[#131b2e] text-slate-300 border-slate-800/60'
        }`}>
          <div className="max-w-[1280px] mx-auto w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${globalNotice.type === 'success' ? 'bg-emerald-500' : 'bg-cyan-400 animate-pulse'}`}></span>
              <span>{globalNotice.message}</span>
            </div>
            <button onClick={() => setGlobalNotice(null)} className="text-slate-450 hover:text-white transition-colors p-1 text-sm font-semibold cursor-pointer">✕</button>
          </div>
        </div>
      )}

      <Header />

      <main id="main-content" className="flex-grow max-w-[1280px] mx-auto w-full px-6 md:px-12 py-12 md:py-16">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/about" element={<AboutPage onOpenCareers={() => setIsCareersOpen(true)} />} />
            <Route path="/contact" element={
              <ContactPage
                onAddInquiry={handleAddInquiry}
                onOpenLocations={() => setIsLocationsOpen(true)}
              />
            } />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Modals */}
      {isLocationsOpen && <LocationDetails onClose={() => setIsLocationsOpen(false)} />}
      {isCareersOpen && <CareersPortal onClose={() => setIsCareersOpen(false)} />}

      <Footer onOpenLocations={() => setIsLocationsOpen(true)} />
    </div>
  );
}
