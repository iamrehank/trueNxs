import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TEAM } from '../data';
import { Users, ArrowUpRight, Award, Clock, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import corporateCsrImage from '../assets/images/corporate_csr_1781205765498.jpg';
import imranImage from '../assets/images/imran.jpeg';

const teamImages: Record<string, string> = {
  'Imran Sayyed': imranImage,
};

interface AboutPageProps {
  onOpenCareers: () => void;
}

export default function AboutPage({ onOpenCareers }: AboutPageProps) {
  const [expandedLeader, setExpandedLeader] = useState<string | null>(null);

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
            Empowering Businesses Through Smart Outsourcing Solutions
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Trunex BPO Pvt. Ltd. is a trusted Business Process Outsourcing partner dedicated to helping businesses improve customer experiences, streamline operations, and accelerate growth. We combine skilled professionals, innovative technology, and proven business processes to deliver reliable, scalable, and cost-effective outsourcing solutions tailored to each client's unique needs.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            From customer support and lead generation to back-office operations and business process management, our experienced teams work as a seamless extension of your organization. Our commitment to quality, transparency, and continuous improvement enables businesses to reduce operational costs, increase productivity, and focus on achieving long-term success.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-[#131b2e] text-white rounded-2xl p-8 space-y-6 border border-slate-800 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#d95f00]/5 rounded-full blur-2xl pointer-events-none" />
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">By The Numbers</span>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <ShieldCheck size={15} className="text-cyan-400" />, value: '98.7%', label: 'Customer Satisfaction' },
                { icon: <Clock size={15} className="text-[#d95f00]" />, value: '24/7', label: 'Support Availability' },
                { icon: <Zap size={15} className="text-emerald-400" />, value: '4+ Years', label: 'Industry Experience' },
                { icon: <Users size={15} className="text-cyan-400" />, value: '50+', label: 'Dedicated Professionals' },
              ].map((stat, i) => (
                <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/8 space-y-2">
                  <div className="flex items-center gap-1.5">{stat.icon}</div>
                  <span className="text-2xl font-extrabold text-white block leading-none">{stat.value}</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-slate-700/60 pt-5 flex items-start gap-2.5 text-xs text-slate-400">
              <Award size={14} className="text-cyan-400 shrink-0 mt-0.5" />
              <span>Committed to delivering secure, reliable, and scalable outsourcing solutions with a customer-first approach.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h3 className="font-sans text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Meet the Leaders Driving Trunex BPO</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            At Trunex BPO Pvt. Ltd., our leadership team is committed to delivering operational excellence, fostering innovation, and building long-term client partnerships. Together, we bring expertise, strategic vision, and a customer-first approach to help businesses grow through reliable and scalable outsourcing solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM.map((leader, idx) => {
            const isExpanded = expandedLeader === leader.name;
            return (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between items-start space-y-6 hover:shadow-md transition-all">
                <div className="flex gap-4 items-center w-full">
                  {teamImages[leader.name] ? (
                    <img src={teamImages[leader.name]} alt={leader.name} className="w-16 h-16 rounded-full object-cover border border-slate-100 shrink-0" />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-cyan-100 border border-slate-100 flex items-center justify-center shrink-0">
                      <span className="text-cyan-700 font-extrabold text-lg">{leader.name.charAt(0)}</span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-sans text-base font-bold text-slate-900 leading-none">{leader.name}</h4>
                    <span className="text-xs font-semibold text-cyan-700 block mt-1.5">{leader.role}</span>
                  </div>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  <p className={isExpanded ? '' : 'line-clamp-3'}>{leader.bio}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <button
                      onClick={() => setExpandedLeader(isExpanded ? null : leader.name)}
                      className="text-cyan-700 hover:text-cyan-900 font-bold text-[11px] uppercase tracking-wide cursor-pointer focus:outline-none"
                    >
                      {isExpanded ? 'Show less' : 'Read Full Profile'}
                    </button>
                    {leader.linkedin && leader.linkedin !== '#' && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-slate-400 hover:text-cyan-700 uppercase tracking-wide transition-colors"
                      >
                        LinkedIn ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>


      {/* CSR */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 h-64 rounded-2xl overflow-hidden relative border border-slate-200">
          <img src={corporateCsrImage} alt="Corporate CSR" className="w-full h-full object-cover" />
        </div>
        <div className="lg:col-span-7 space-y-6">
          <span className="text-[10px] font-bold text-cyan-700 tracking-wider uppercase block">Corporate Accountability</span>
          <h3 className="font-sans text-2xl font-bold text-slate-900 tracking-tight">Environmental Metrics & CSR Commits</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Trunex enforces localized commitments to sustainable growth. We support digital literacy initiatives inside the Kalyan-Dombivli urban cluster, equipping youth with modern process and technology tools.
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
