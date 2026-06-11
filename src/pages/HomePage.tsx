import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../data';
import {
  Building, ShieldCheck, Users, ChevronRight,
  TrendingUp, Sparkles, HeartHandshake, Calculator, Cpu
} from 'lucide-react';
import { motion } from 'motion/react';

function getServiceIcon(id: string) {
  switch (id) {
    case 'icare': return <HeartHandshake className="w-6 h-6 text-[#d95f00]" />;
    case 'ifap':  return <Calculator className="w-6 h-6 text-cyan-700" />;
    case 'ifin':  return <TrendingUp className="w-6 h-6 text-emerald-600" />;
    case 'iapps': return <Cpu className="w-6 h-6 text-indigo-600" />;
    default:      return <Building className="w-6 h-6 text-slate-650" />;
  }
}

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="space-y-24"
    >
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[500px]">
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
              onClick={() => navigate('/contact')}
              className="bg-[#d95f00] hover:bg-[#b04d00] text-white px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              Request Custom Proposal
            </button>
            <button
              onClick={() => navigate('/solutions')}
              className="border border-slate-205 text-slate-705 hover:border-slate-350 bg-white px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
            >
              Browse Strategic Solutions
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl -z-10"></div>
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-8 shadow-xl space-y-6 relative overflow-hidden">
            <span className="absolute top-0 right-0 text-[9px] font-bold text-cyan-600 bg-cyan-50 px-3 py-1 uppercase rounded-bl-xl tracking-wider">
              Verified SEC Platform
            </span>
            <h3 className="font-display text-base font-bold text-slate-950 flex items-center gap-2">
              <Building size={16} className="text-cyan-700" /><span>Cluster Metrics</span>
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

      {/* Who We Are */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">So, Who We Are?</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Trunex Global BPO private architecture bridges human empathy with modern workflow automation to ensure your metrics remain pristine.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { label: 'Commitment One', title: 'Client Centric Team Mapping', icon: <Users size={18} className="text-[#d95f00]" />, body: 'We recruit, train, and configure specialized offshore and nearshore teams that bind directly with your organizational DNA. We assign transition managers to streamline standard procedures without causing internal operational friction.' },
            { label: 'Commitment Two', title: 'Rigid Quality Guidelines', icon: <ShieldCheck size={18} className="text-[#d95f00]" />, body: 'Our centers operate with ISO quality controls, daily performance auditing, dual-continent system failover paths, and high-security file encryption vaults. We guarantee standard SLA adherence on every transactional record.' }
          ].map((card, i) => (
            <div key={i} className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-600"></div>
              <span className="p-1 px-2.5 bg-cyan-50 text-cyan-800 rounded text-[10px] font-extrabold uppercase tracking-widest block w-fit mb-4">{card.label}</span>
              <h3 className="font-sans text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">{card.icon}<span>{card.title}</span></h3>
              <p className="text-slate-550 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Service Teasers */}
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-3">
            <span className="text-[10px] font-extrabold text-cyan-700 tracking-wider uppercase">Strategic Competence</span>
            <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Focus Service Pillars</h2>
          </div>
          <button onClick={() => navigate('/solutions')} className="text-xs font-bold text-cyan-750 hover:text-cyan-900 flex items-center gap-1 group transition-colors cursor-pointer">
            <span>Browse complete service blueprints</span>
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv) => (
            <div key={srv.id} onClick={() => navigate('/solutions')} className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group">
              <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center mb-4 shrink-0">{getServiceIcon(srv.id)}</div>
              <h4 className="font-sans font-bold text-sm text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">{srv.name}</h4>
              <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{srv.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Band */}
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
  );
}
