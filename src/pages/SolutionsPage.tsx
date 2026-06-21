import { useNavigate } from 'react-router-dom';
import SolutionsSection from '../components/SolutionsSection';
import { motion } from 'motion/react';

export default function SolutionsPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      key="solutions"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="space-y-24"
    >
      <SolutionsSection />

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
              {[
                'Standard Business Hours (8x5) or Comprehensive Round-the-Clock Operational Care (24/7/365).',
                'Multi-point data masking & compliance barriers ensuring compliance for sensitive consumer credit logs.'
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-cyan-150 text-cyan-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">✓</div>
                  <p className="text-xs text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-white border border-slate-200 p-8 rounded-2xl flex flex-col justify-between h-64 hover:border-cyan-500/50 transition-all duration-300">
            <div>
              <span className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest block mb-2">Configure pricing model</span>
              <h4 className="font-sans text-xl font-bold text-slate-850 mb-3">Custom pricing matrices in real-time.</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Need details on unit rates or process-specific savings audits? Tap the quote builder below to calculate immediate estimates.
              </p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="bg-cyan-700 hover:bg-cyan-850 text-white w-full py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-sm text-center cursor-pointer"
            >
              Interactive Quote Calculator
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
