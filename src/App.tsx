import { useState, useEffect } from 'react';
import { ActiveTab, Inquiry } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import SolutionsSection from './components/SolutionsSection';
import ContactForm from './components/ContactForm';
import QuoteCalculator from './components/QuoteCalculator';
import LocationDetails from './components/LocationDetails';
import CareersPortal from './components/CareersPortal';
import { SERVICES, TEAM } from './data';
import { 
  Building, 
  ShieldCheck, 
  Users, 
  ChevronRight, 
  Briefcase, 
  TrendingUp, 
  Globe, 
  Clock, 
  ChevronDown, 
  FileCheck, 
  ArrowUpRight,
  ExternalLink,
  Award,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  // Navigation active state
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  
  // Custom action overlays
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isCareersOpen, setIsCareersOpen] = useState(false);

  // Expanded leader state
  const [expandedLeader, setExpandedLeader] = useState<string | null>(null);

  // Expanded advisory board state
  const [showAdvisory, setShowAdvisory] = useState(false);

  // Shared localized inquiry inbox
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  // Page tracking notification banners
  const [globalNotice, setGlobalNotice] = useState<{message: string; type: 'info' | 'success'} | null>({
    message: "Operational Notice: Regional compliance reports (SEC Form 10-K workflow upgrades) are now live inside iFAP Delivery Cells.",
    type: "info"
  });

  // Seed inquiries from local storage or set defaults
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

    // Show temporary notification alert
    setGlobalNotice({
      message: `Inquiry registered successfully! Your token is TRU-${Math.floor(Math.random() * 90000 + 10000)}`,
      type: 'success'
    });

    // Auto clear notification after 6 seconds
    setTimeout(() => {
      setGlobalNotice(null);
    }, 6000);
  };

  const handlePageTransition = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative overflow-x-hidden font-sans pt-20">
      
      {/* Global Notice Banner */}
      {globalNotice && (
        <div 
          className={`w-full py-3.5 px-6 shrink-0 transition-all text-xs font-medium flex items-center justify-between z-40 relative border-b ${
            globalNotice.type === 'success' 
              ? 'bg-emerald-50 text-emerald-800 border-emerald-100' 
              : 'bg-[#131b2e] text-slate-300 border-slate-800/60'
          }`}
          id="global-notice-banner"
        >
          <div className="max-w-[1280px] mx-auto w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${globalNotice.type === 'success' ? 'bg-emerald-500' : 'bg-cyan-400 animate-pulse'}`}></span>
              <span>{globalNotice.message}</span>
            </div>
            <button 
              onClick={() => setGlobalNotice(null)} 
              className="text-slate-450 hover:text-white transition-colors p-1 text-sm font-semibold cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Corporate Header */}
      <Header 
        activeTab={activeTab} 
        onTabChange={handlePageTransition} 
        onOpenQuote={() => setIsQuoteOpen(true)} 
      />

      {/* Main View Segment with structural AnimatePresence */}
      <main className="flex-grow max-w-[1280px] mx-auto w-full px-6 md:px-12 py-12 md:py-16">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-24"
              id="home-page-container"
            >
              {/* Hero Banner Section */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[500px]">
                {/* Left Text Detail */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <span className="text-[10px] font-bold tracking-widest text-[#d95f00] bg-orange-50 border border-orange-100 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 uppercase">
                    <Sparkles size={11} className="text-orange-500 animate-pulse" />
                    Global BPO Excellence
                  </span>
                  
                  <h1 className="font-display text-4xl md:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-none">
                    True Service.<br />
                    <span className="text-cyan-700">Next-Level Performance.</span>
                  </h1>
                  
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
                    At Trunex, we drive efficiency for ambitious enterprises by coupling secure global operations with intelligent business processing. Our team manages your service delivery grids with rigor and clarity.
                  </p>

                  <div className="pt-4 flex flex-wrap gap-4 items-center">
                    <button
                      onClick={() => handlePageTransition('contact')}
                      className="bg-[#d95f00] hover:bg-[#b04d00] text-white px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                    >
                      Request Custom proposal
                    </button>
                    <button
                      onClick={() => handlePageTransition('solutions')}
                      className="border border-slate-205 text-slate-705 hover:border-slate-350 bg-white px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                    >
                      Browse strategic solutions
                    </button>
                  </div>
                </div>

                {/* Right Visual Frame */}
                <div className="lg:col-span-5 relative">
                  {/* Decorative glowing backdrops */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl -z-10"></div>
                  
                  {/* Interactive Dashboard mock */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-8 shadow-xl space-y-6 relative overflow-hidden">
                    <span className="absolute top-0 right-0 text-[9px] font-bold text-cyan-600 bg-cyan-50 px-3 py-1 uppercase rounded-bl-xl tracking-wider">
                      Verified SEC Platform
                    </span>
                    
                    <h3 className="font-display text-base font-bold text-slate-950 flex items-center gap-2">
                      <Building size={16} className="text-cyan-700" />
                      <span>Cluster Metrics</span>
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider mb-1">Retention Rate</span>
                        <span className="text-xl font-extrabold text-[#d95f00]">98.7%</span>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider mb-1">Node Locations</span>
                        <span className="text-xl font-extrabold text-slate-850">4 Global</span>
                      </div>
                    </div>

                    <div className="p-4 bg-cyan-50/20 border border-cyan-100/40 rounded-xl flex items-center gap-3.5">
                      <div className="w-8 h-8 rounded-full bg-cyan-150 flex items-center justify-center text-cyan-700 shrink-0">
                        <ShieldCheck size={16} />
                      </div>
                      <div className="text-xs">
                        <span className="font-bold text-slate-850 block mb-0.5">ISO Certified Operations</span>
                        <span className="text-slate-500">Fully aligned under ISO 9001 and ISO 27001 data blueprints.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Values "So, who we are?" */}
              <div className="space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                  <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    So, Who We Are?
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Trunex Global BPO private architecture bridges human empathy with modern workflow automation to ensure your metrics remain pristine.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Card 1 */}
                  <div className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-600"></div>
                    <span className="p-1 px-2.5 bg-cyan-50 hover:bg-cyan-100 text-cyan-800 rounded text-[10px] font-extrabold uppercase tracking-widest block w-fit mb-4">
                      Commitment One
                    </span>
                    <h3 className="font-sans text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Users size={18} className="text-[#d95f00]" />
                      <span>Client Centric Team Mapping</span>
                    </h3>
                    <p className="text-slate-550 text-sm leading-relaxed">
                      We recruit, train, and configure specialized offshore and nearshore teams that bind directly with your organizational DNA. We assign transition managers to streamline standard procedures without causing internal operational friction.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-600"></div>
                    <span className="p-1 px-2.5 bg-cyan-50 hover:bg-cyan-100 text-cyan-800 rounded text-[10px] font-extrabold uppercase tracking-widest block w-fit mb-4">
                      Commitment Two
                    </span>
                    <h3 className="font-sans text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <ShieldCheck size={18} className="text-[#d95f00]" />
                      <span>Rigid Quality Guidelines</span>
                    </h3>
                    <p className="text-slate-550 text-sm leading-relaxed">
                      Our centers operate with ISO quality controls, daily performance auditing, dual-continent system failover paths, and high-security file encryption vaults. We guarantee standard SLA adherence on every transactional record.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Teaser Segment */}
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div className="space-y-3">
                    <span className="text-[10px] font-extrabold text-cyan-700 tracking-wider uppercase">Strategic Competence</span>
                    <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Focus Service Pillars</h2>
                  </div>
                  <button
                    onClick={() => handlePageTransition('solutions')}
                    className="text-xs font-bold text-cyan-750 hover:text-cyan-900 flex items-center gap-1 group transition-colors cursor-pointer"
                  >
                    <span>Browse complete service blueprints</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {SERVICES.map((srv) => (
                    <div
                      key={srv.id}
                      onClick={() => handlePageTransition('solutions')}
                      className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group"
                    >
                      <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center mb-4 shrink-0 overflow-hidden">
                        <img src={srv.logoUrl} alt={srv.name} className="w-6 h-6 object-contain" />
                      </div>
                      <h4 className="font-sans font-bold text-sm text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
                        {srv.name}
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                        {srv.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Statistics Band */}
              <div className="bg-[#131b2e] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden border border-slate-800">
                <div className="absolute top-2/3 right-1/4 w-64 h-64 bg-cyan-700/20 rounded-full blur-3xl -z-10"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-800">
                  <div className="space-y-2 md:pr-6">
                    <span className="font-display text-4xl md:text-[46px] font-extrabold text-white leading-none">98.7%</span>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block">Client Retention SLA Ratio</span>
                    <p className="text-slate-450 text-xs">Our clients trust our transitions team for consistent, multi-year support pipelines.</p>
                  </div>
                  <div className="space-y-2 pt-8 md:pt-0 md:px-10">
                    <span className="font-display text-4xl md:text-[46px] font-extrabold text-white leading-none">1.2M+</span>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block">Secure Transacts Daily</span>
                    <p className="text-slate-450 text-xs">Processing intensive banking records, SEC filings, and high-volume consumer underwriting.</p>
                  </div>
                  <div className="space-y-2 pt-8 md:pt-0 md:pl-10">
                    <span className="font-display text-4xl md:text-[46px] font-extrabold text-white leading-none">&lt; 2 Hrs</span>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block">Incident Queue Resolution</span>
                    <p className="text-slate-450 text-xs font-medium">Bespoke expedited SLAs ensure mission-critical processes operate without interruption.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'solutions' && (
            <motion.div
              key="solutions-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-24"
              id="solutions-page-container"
            >
              {/* Strategic Domains Selector component */}
              <SolutionsSection onOpenCalculator={() => setIsQuoteOpen(true)} />

              {/* Directly embedded pricing detail / info section */}
              <div className="border-t border-slate-200/80 pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-6 space-y-6">
                    <span className="p-1 px-3 bg-orange-50 text-[#d95f00] rounded text-[10px] font-bold uppercase tracking-widest block w-fit">
                      SLA Architecture
                    </span>
                    <h3 className="font-sans text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Transactional SLAs Designed for Global Leaders
                    </h3>
                    <p className="text-slate-550 text-sm leading-relaxed">
                      We establish rigid operational standards suited to your business. Our pricing adjusts dynamically based on monthly process volume, complexity indexes, security requirements, and coverage timeline schedules.
                    </p>

                    <div className="space-y-4 pt-2">
                      <div className="flex gap-3 items-start">
                        <div className="w-5 h-5 rounded-full bg-cyan-150 text-cyan-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">✓</div>
                        <p className="text-xs text-slate-600">Standard Business Hours (8x5) or Comprehensive Round-the-Clock Operational Care (24/7/365).</p>
                      </div>
                      <div className="flex gap-3 items-start">
                        <div className="w-5 h-5 rounded-full bg-cyan-150 text-cyan-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">✓</div>
                        <p className="text-xs text-slate-600">Multi-point data masking & compliance barriers ensuring compliance for sensitive consumer credit logs.</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6 bg-white border border-slate-200 p-8 rounded-2xl flex flex-col justify-between h-64 hover:border-cyan-500/50 transition-all duration-300">
                    <div>
                      <span className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest block mb-2">Configure pricing model</span>
                      <h4 className="font-sans text-xl font-bold text-slate-850 mb-3">Custom pricing matrices in real-time.</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        Need details on unit rates or process-specific savings audits? Tap the quote builder below to calculate immediate estimates and request region audit documents.
                      </p>
                    </div>

                    <button
                      onClick={() => setIsQuoteOpen(true)}
                      className="bg-cyan-700 hover:bg-cyan-850 text-white w-full py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-sm text-center cursor-pointer"
                    >
                      Interactive quote calculator
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div
              key="about-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-24"
              id="about-page-container"
            >
              {/* Introduction Corporate Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-bold text-cyan-750 uppercase tracking-widest">
                    Corporate Overview
                  </span>
                  <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                    Trunex BPO balances institutional trust with high-tech precision.
                  </h2>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Trunex represents the evolution of strategic process outsourcing. We align highly educated human assets across regional delivery nodes inside Thane West (India) and Manila (Philippines) with custom CRM pipelines and proprietary software automation tools.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Under standard compliance architectures, our operational lines are checked against rigorous SOC2 audit reviews, HIPAA security controls, and SEC XBRL financial report guidelines. We serve public multinational giants and high-growth consumer FinTech enterprises who require absolute service continuity.
                  </p>
                </div>

                <div className="lg:col-span-5 bg-white border border-slate-200/80 p-8 rounded-2xl relative shadow-sm">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block mb-6">Service Quality Badges</span>
                  
                  <div className="space-y-5">
                    {[
                      { title: 'ISO 9001 Alignment', desc: 'Sustained process auditing benchmarks.' },
                      { title: 'ISO 27001 Certified Vaults', desc: 'Secure data transit and information integrity.' },
                      { title: 'SOC2 Security Standard', desc: 'Strict operational safeguards and audit checks.' }
                    ].map((badge, idx) => (
                      <div key={idx} className="flex gap-3 text-xs">
                        <div className="w-5 h-5 bg-[#d95f00]/10 text-[#d95f00] rounded-full flex items-center justify-center shrink-0 font-bold">✓</div>
                        <div>
                          <span className="font-bold text-slate-850 block">{badge.title}</span>
                          <span className="text-slate-500">{badge.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Leadership bios Section */}
              <div className="space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                  <span className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest block"></span >
                  <h3 className="font-sans text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Operations Leadership
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Our managing committee directs international operations and maps transition guidelines from a position of profound sector proficiency.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {TEAM.map((leader, idx) => {
                    const isExpanded = expandedLeader === leader.name;
                    return (
                      <div
                        key={idx}
                        className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between items-start space-y-6 hover:shadow-md transition-all relative"
                      >
                        <div className="flex gap-4 items-center w-full">
                          <img
                            src={leader.imageUrl}
                            alt={leader.name}
                            className="w-16 h-16 rounded-full object-cover border border-slate-100 shrink-0"
                          />
                          <div>
                            <h4 className="font-sans text-base font-bold text-slate-900 leading-none">
                              {leader.name}
                            </h4>
                            <span className="text-xs font-semibold text-cyan-700 block mt-1.5">
                              {leader.role}
                            </span>
                          </div>
                        </div>

                        <div className="text-xs text-slate-600 leading-relaxed">
                          <p className={isExpanded ? '' : 'line-clamp-3'}>
                            {leader.bio}
                          </p>
                          <button
                            onClick={() => setExpandedLeader(isExpanded ? null : leader.name)}
                            className="text-cyan-700 hover:text-cyan-900 font-bold block mt-2 text-[11px] uppercase tracking-wide cursor-pointer focus:outline-none"
                          >
                            {isExpanded ? 'Show less' : 'Read detailed bio'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Expanding Advisory Board Details */}
              <div className="bg-slate-100/50 border border-slate-200/60 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
                <button
                  onClick={() => setShowAdvisory(!showAdvisory)}
                  className="w-full flex justify-between items-center text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Users size={18} className="text-cyan-700 shrink-0" />
                    <span className="font-sans text-sm font-bold text-slate-850">
                      View Board of Directors & Strategic Advisors
                    </span>
                  </div>
                  <ChevronDown 
                    size={16} 
                    className={`text-slate-400 transition-transform ${showAdvisory ? 'rotate-180' : ''}`}
                  />
                </button>

                {showAdvisory && (
                  <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs animate-in slide-in-from-top-2 duration-300">
                    <div className="p-3 bg-white rounded-lg border border-slate-200/40">
                      <span className="font-bold text-slate-850 block">Dr. Robert V. Vance</span>
                      <span className="text-slate-500">Corporate Governance Advisory (ex-WFE Commission)</span>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200/40">
                      <span className="font-bold text-slate-850 block">Meera K. Patel</span>
                      <span className="text-slate-500">International Compliance Lead & Senior Advisory Counsel</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Environmental/CSR Priorities */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Image Placeholder hotlinked */}
                <div className="lg:col-span-5 h-64 rounded-2xl overflow-hidden relative border border-slate-200">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb4O_RwM15-Q562PZBS5FQqqHJdwObO8pFaeDqPzpnvyu2rhYcEKuB3TVYfoogVUlXI_2WBUsP71TRN6La2cx51dNvf9EhX0xyId-fgqoPhTixsTVstDd8kpguoYzwch2OcCShEghAvDQHMinD9N_ynJxxXctO786hTwTcgh_pbUn9R87AkhTyk04PifX0rHQN_YGEFva_R7cbuT5CBTCutnTb7SWj-78lIGAEOPatJhSIWHzr7rCiZ1cChJK-8rJr6rVuV33a2mM" 
                    alt="Corporate CSR" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <span className="text-[10px] font-bold text-cyan-700 tracking-wider uppercase block">Corporate Accountability</span>
                  <h3 className="font-sans text-2xl font-bold text-slate-900 tracking-tight">Environmental Metrics & CSR Commits</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Trunex Global BPO private architecture enforces localized commitments to sustainable growth. We support high-speed public education computing labs inside urban clusters of Thane and Manila, equipping youth with digital process tools.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    By scaling server deployments onto carbon-neutral cloud providers, we achieve cost reductions which are directly reflected in client SLAs, keeping overall energy overhead minimal.
                  </p>
                </div>
              </div>

              {/* Join the Team Action Banner */}
              <div className="bg-[#131b2e] text-white rounded-3xl p-8 md:p-12 text-center space-y-6 relative border border-slate-800">
                <h3 className="font-sans text-2xl md:text-3xl font-extrabold tracking-tight">
                  We are growing our operational nodes.
                </h3>
                <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
                  Trunex is scouting compliance professionals, CRM operators, and system automation architects for our global offices. Apply now to configure your path in our Talent Cluster.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsCareersOpen(true)}
                    className="bg-[#d95f00] hover:bg-[#b04d00] text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Browse Careers / Join Team</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'contact' && (
            <motion.div
              key="contact-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-16"
              id="contact-page-container"
            >
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest bg-cyan-150/40 px-3.5 py-1.5 rounded-full inline-block">
                  Support Hub
                </span>
                <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Connect With Our Experts
                </h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                  Have inquiries on CRM scalability, auditing compliance schedules, or automated ledger processing? Our transition staff are aligned to audit your requirements.
                </p>
              </div>

              {/* Dynamic Interactive Contact & Info Panel Row */}
              <ContactForm 
                inquiries={inquiries} 
                onAddInquiry={handleAddInquiry} 
                onOpenLocations={() => setIsLocationsOpen(true)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global MODAL overlays utilizing Portal-like floating state */}
      
      {/* Interactive Custom Quote Calculator overlay */}
      {isQuoteOpen && (
        <div className="fixed inset-0 bg-[#0f172a]/70 backdrop-blur-md flex items-center justify-center z-[100] p-4 md:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="max-w-4xl w-full">
            <QuoteCalculator 
              onSubmittingInquiry={handleAddInquiry} 
              onClose={() => setIsQuoteOpen(false)} 
            />
          </div>
        </div>
      )}

      {/* Locations Clock Timeline drawer overlay */}
      {isLocationsOpen && (
        <LocationDetails onClose={() => setIsLocationsOpen(false)} />
      )}

      {/* Careers Portal CV Uploading overlay */}
      {isCareersOpen && (
        <CareersPortal onClose={() => setIsCareersOpen(false)} />
      )}

      {/* Corporate Footer with navigation mapping */}
      <Footer 
        onTabChange={handlePageTransition} 
        onOpenLocations={() => setIsLocationsOpen(true)} 
      />
    </div>
  );
}
