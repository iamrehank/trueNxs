import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TEAM } from '../data';
import { Users, ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutPageProps {
  onOpenCareers: () => void;
}

export default function AboutPage({ onOpenCareers }: AboutPageProps) {
  const [expandedLeader, setExpandedLeader] = useState<string | null>(null);
  const [showAdvisory, setShowAdvisory] = useState(false);

  return (
    <motion.div
      key="about"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="space-y-24"
    >
      {/* Corporate Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-bold text-cyan-750 uppercase tracking-widest">Corporate Overview</span>
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

      {/* Leadership */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h3 className="font-sans text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Operations Leadership</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Our managing committee directs international operations and maps transition guidelines from a position of profound sector proficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM.map((leader, idx) => {
            const isExpanded = expandedLeader === leader.name;
            return (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between items-start space-y-6 hover:shadow-md transition-all">
                <div className="flex gap-4 items-center w-full">
                  <img src={leader.imageUrl} alt={leader.name} className="w-16 h-16 rounded-full object-cover border border-slate-100 shrink-0" />
                  <div>
                    <h4 className="font-sans text-base font-bold text-slate-900 leading-none">{leader.name}</h4>
                    <span className="text-xs font-semibold text-cyan-700 block mt-1.5">{leader.role}</span>
                  </div>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  <p className={isExpanded ? '' : 'line-clamp-3'}>{leader.bio}</p>
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

      {/* Advisory Board */}
      <div className="bg-slate-100/50 border border-slate-200/60 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
        <button
          onClick={() => setShowAdvisory(!showAdvisory)}
          className="w-full flex justify-between items-center text-left focus:outline-none cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Users size={18} className="text-cyan-700 shrink-0" />
            <span className="font-sans text-sm font-bold text-slate-850">View Board of Directors & Strategic Advisors</span>
          </div>
          <ChevronDown size={16} className={`text-slate-400 transition-transform ${showAdvisory ? 'rotate-180' : ''}`} />
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

      {/* CSR */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 h-64 rounded-2xl overflow-hidden relative border border-slate-200">
          <img src="/src/assets/images/corporate_csr_1781205765498.jpg" alt="Corporate CSR" className="w-full h-full object-cover" />
        </div>
        <div className="lg:col-span-7 space-y-6">
          <span className="text-[10px] font-bold text-cyan-700 tracking-wider uppercase block">Corporate Accountability</span>
          <h3 className="font-sans text-2xl font-bold text-slate-900 tracking-tight">Environmental Metrics & CSR Commits</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Trunex Global BPO enforces localized commitments to sustainable growth. We support high-speed public education computing labs inside urban clusters of Thane and Manila, equipping youth with digital process tools.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            By scaling server deployments onto carbon-neutral cloud providers, we achieve cost reductions which are directly reflected in client SLAs, keeping overall energy overhead minimal.
          </p>
        </div>
      </div>

      {/* Join Team CTA */}
      <div className="bg-[#131b2e] text-white rounded-3xl p-8 md:p-12 text-center space-y-6 relative border border-slate-800">
        <h3 className="font-sans text-2xl md:text-3xl font-extrabold tracking-tight">We are growing our operational nodes.</h3>
        <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
          Trunex is scouting compliance professionals, CRM operators, and system automation architects for our global offices.
        </p>
        <button
          onClick={onOpenCareers}
          className="bg-[#d95f00] hover:bg-[#b04d00] text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-1.5 cursor-pointer"
        >
          <span>Browse Careers / Join Team</span>
          <ArrowUpRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}
