import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../data';
import {
  Building, ShieldCheck, Users, ChevronRight,
  TrendingUp, Sparkles, PhoneCall, HeartHandshake, Briefcase
} from 'lucide-react';
import { motion } from 'motion/react';

function getServiceIcon(id: string) {
  switch (id) {
    case 'connect': return <PhoneCall className="w-6 h-6 text-[#d95f00]" />;
    case 'support': return <HeartHandshake className="w-6 h-6 text-cyan-700" />;
    case 'growth':  return <TrendingUp className="w-6 h-6 text-emerald-600" />;
    case 'ops':     return <Briefcase className="w-6 h-6 text-indigo-600" />;
    default:        return <Building className="w-6 h-6 text-slate-650" />;
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
            At Trunex BPO, we help businesses scale faster with reliable, cost-effective, and technology-driven outsourcing solutions. From customer support and lead generation to back-office operations and sales support, our experienced teams become an extension of your business—delivering exceptional service, operational efficiency, and measurable results.
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="bg-[#131b2e] text-white rounded-2xl p-7 md:p-9 shadow-2xl relative overflow-hidden border border-slate-800">

            {/* Decorative glows */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-[#d95f00]/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between mb-8 relative">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse block" />
                Performance Overview
              </span>
              <span className="text-[9px] text-slate-500 font-semibold uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-1 rounded-md">2025</span>
            </div>

            {/* Stats */}
            <div className="space-y-4 mb-8 relative">
              <div className="p-5 bg-white/5 border border-white/8 rounded-xl flex items-center justify-between group hover:bg-white/8 transition-colors">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-2">Years of Experience</span>
                  <div className="flex items-end gap-1.5 leading-none">
                    <span className="text-4xl font-extrabold text-white">4+</span>
                    <span className="text-sm text-slate-400 mb-1">Years</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#d95f00]/15 border border-[#d95f00]/20 flex items-center justify-center shrink-0">
                  <TrendingUp size={22} className="text-[#d95f00]" />
                </div>
              </div>

              <div className="p-5 bg-white/5 border border-white/8 rounded-xl flex items-center justify-between group hover:bg-white/8 transition-colors">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-2">Monthly Sales Generated</span>
                  <div className="flex items-end gap-1.5 leading-none">
                    <span className="text-4xl font-extrabold text-cyan-400">300+</span>
                    <span className="text-sm text-slate-400 mb-1">Sales</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <PhoneCall size={22} className="text-cyan-400" />
                </div>
              </div>
            </div>

            {/* Footer trust signal */}
            <div className="border-t border-white/10 pt-5 flex items-center gap-3 relative">
              <div className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </div>
              <span className="text-xs text-slate-400">Operations active — serving clients across multiple industries</span>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">So, Who We Are?</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            At Trunex Global BPO, we help businesses grow by providing reliable, scalable, and high-performing outsourcing solutions. From customer support and sales to back-office operations, our experienced professionals become an extension of your team—delivering exceptional service, improving efficiency, and reducing operational costs while maintaining the highest standards of quality.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { label: 'Commitment One', title: 'Client-Centric Team Mapping', icon: <Users size={18} className="text-[#d95f00]" />, body: 'Every business is unique, and so is our approach. We carefully recruit, train, and manage dedicated teams that align with your goals, processes, and company culture. Whether you need customer support, sales, lead generation, or back-office assistance, we build teams that integrate seamlessly with your operations and deliver measurable results from day one.' },
            { label: 'Commitment Two', title: 'Quality Without Compromise', icon: <ShieldCheck size={18} className="text-[#d95f00]" />, body: 'Quality is at the core of everything we do. Our dedicated quality assurance team continuously monitors performance, provides regular coaching, and follows strict compliance standards to ensure every customer interaction meets your expectations. With transparent reporting, secure processes, and continuous improvement, we help your business maintain outstanding service quality and customer satisfaction.' }
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
            <p className="text-slate-450 text-xs">We are committed to delivering exceptional customer experiences through consistent service quality, quick response times, and customer-focused support across every interaction.</p>
          </div>
          <div className="space-y-2 pt-8 md:pt-0 md:px-10">
            <span className="font-display text-4xl md:text-[46px] font-extrabold text-white leading-none">10,000+</span>
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block">Customer Interactions Monthly</span>
            <p className="text-slate-450 text-xs">Our experienced sales and support teams consistently generate qualified leads, appointments, and successful conversions, helping clients accelerate business growth.</p>
          </div>
          <div className="space-y-2 pt-8 md:pt-0 md:pl-10">
            <span className="font-display text-4xl md:text-[46px] font-extrabold text-white leading-none">24/7</span>
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block">Customer Support</span>
            <p className="text-slate-450 text-xs font-medium">Our dedicated teams provide around-the-clock voice, chat, and email support, ensuring your customers receive timely assistance whenever they need it.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
