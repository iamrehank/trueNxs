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
              Service Excellence
            </span>
            <h3 className="font-sans text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Flexible BPO Solutions Built for Your Business
            </h3>
            <p className="text-slate-550 text-sm leading-relaxed">
              At Trunex BPO, we understand that every business has unique operational needs. That's why we offer flexible, scalable, and customized outsourcing solutions designed to support your growth. Whether you require customer support, lead generation, technical assistance, back-office operations, or dedicated remote teams, our services are tailored to align with your business objectives, ensuring efficiency, quality, and long-term success.
            </p>
            <div className="space-y-4 pt-2">
              {[
                'Flexible Engagement Models – Choose from dedicated teams, shared resources, or fully customized outsourcing solutions based on your business requirements.',
                '24/7 Multi-Channel Support – Deliver exceptional customer experiences through voice, chat, email, and back-office support whenever your customers need assistance.'
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
              <span className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest block mb-2">Ready to Grow?</span>
              <h4 className="font-sans text-xl font-bold text-slate-850 mb-3">Partner with Trunex BPO Today</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Tell us about your business goals, and our team will design a customized outsourcing solution that helps reduce operational costs, improve customer experience, and scale your business with confidence.
              </p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="bg-cyan-700 hover:bg-cyan-850 text-white w-full py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-sm text-center cursor-pointer"
            >
              Get Your Custom Proposal
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
