import { useState } from 'react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';
import { ShieldCheck, Target, ArrowRight, Zap, RefreshCw, BarChart } from 'lucide-react';

interface SolutionsSectionProps {
  onOpenCalculator: () => void;
}

export default function SolutionsSection({ onOpenCalculator }: SolutionsSectionProps) {
  const [selectedSrv, setSelectedSrv] = useState<ServiceItem>(SERVICES[0]);

  return (
    <div className="space-y-16" id="solutions-section-root">
      
      {/* Intro Metrics Banner / Title header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest bg-cyan-100/40 px-3/5 py-1.5 rounded-full inline-block">
          Enterprise Competence
        </span>
        <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Strategic Domain Expertise
        </h2>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed">
          At Trunex, we do not simply supply headcount. We engineer high-powered, technology-wrapped operations that drive compliance, lower overhead, and scale seamlessly with your seasonal transaction trends.
        </p>
      </div>

      {/* Grid selector / Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4" id="solutions-selector-grid">
        {SERVICES.map((srv) => {
          const isActive = selectedSrv.id === srv.id;
          return (
            <button
              key={srv.id}
              onClick={() => setSelectedSrv(srv)}
              className={`p-6 rounded-2xl border text-left transition-all hover:shadow-md cursor-pointer flex items-center gap-4 relative group focus:outline-none ${
                isActive
                  ? 'bg-white border-cyan-600 shadow-md scale-[1.02]'
                  : 'bg-slate-50 border-slate-200/85 hover:border-slate-300'
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-0 w-[4px] h-full bg-cyan-600 rounded-l-2xl"></div>
              )}
              
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-100 shadow-sm shrink-0 overflow-hidden">
                <img 
                  src={srv.logoUrl} 
                  alt={srv.name} 
                  className="w-8 h-8 object-contain group-hover:scale-105 transition-transform" 
                />
              </div>

              <div>
                <div className="flex items-center gap-1">
                  <span className="font-sans text-lg font-bold text-slate-900">
                    {srv.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-extrabold font-mono border border-slate-200 rounded px-1">
                    {srv.id.toUpperCase()}
                  </span>
                </div>
                <p className="text-xs text-slate-500 truncate w-44">
                  {srv.badge}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Focus detail panel layout */}
      <div 
        className="bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative overflow-hidden"
        id="solutions-focus-card"
      >
        {/* Soft background decor */}
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-cyan-50 rounded-full blur-3xl -z-10"></div>

        {/* Left Side: General description and capabilities */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="text-[10px] font-extrabold tracking-widest text-[#d95f00] bg-orange-50 px-3 py-1 rounded-full uppercase block w-fit mb-3">
              {selectedSrv.badge}
            </span>
            <h3 className="font-sans text-2xl md:text-3.5xl font-extrabold text-slate-900 leading-tight">
              {selectedSrv.title}
            </h3>
            <p className="text-slate-550 leading-relaxed text-sm md:text-base pt-4">
              {selectedSrv.longDescription}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-sans text-xs font-extrabold text-slate-850 uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck className="text-cyan-700" size={16} />
              <span>Core Operational Deliverables:</span>
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {selectedSrv.features.map((feat, idx) => (
                <div key={idx} className="flex gap-2.5 items-start text-xs text-slate-600">
                  <span className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-800 shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="leading-normal">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={onOpenCalculator}
              className="bg-cyan-700 hover:bg-cyan-850 text-white px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md  cursor-pointer"
            >
              Configure Cost Estimate
            </button>
            <a 
              href="#quote-calc"
              onClick={(e) => {
                e.preventDefault();
                alert(`Detailed workflow specifications for Trunex ${selectedSrv.name} comply with SOC2, GDPR, and ISO standards. Request an audit deck from our transition team.`);
              }}
              className="border border-slate-205 text-slate-600 hover:border-slate-350 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              Inquire SLA Standards
            </a>
          </div>
        </div>

        {/* Right Side: Case Study highlight */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#131b2e] to-[#1a253e] text-white rounded-2xl p-8 shadow-sm space-y-6 relative border border-slate-800">
          <span className="p-1 px-2.5 bg-cyan-500/10 text-cyan-400 rounded-md text-[10px] font-extrabold uppercase tracking-widest block w-fit">
            Proven Performance
          </span>

          <h4 className="font-sans text-lg font-bold">
            {selectedSrv.caseStudy.title}
          </h4>

          {/* Metric visualization */}
          <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              Measurable Success Metric
            </span>
            <span className="text-2xl md:text-3.5xl font-extrabold text-cyan-400 tracking-tight block">
              {selectedSrv.caseStudy.metrics}
            </span>
          </div>

          <p className="text-slate-400 text-xs leading-relaxed">
            {selectedSrv.caseStudy.summary}
          </p>

          <div className="border-t border-slate-800/80 pt-5 flex items-center gap-4 text-[11px] text-slate-500 justify-between">
            <span>Audit Year: 2026</span>
            <span className="font-bold text-cyan-400 flex items-center gap-1">
              <BarChart size={13} /> Secure Verified Case
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
