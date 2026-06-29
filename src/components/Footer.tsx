import { useNavigate } from 'react-router-dom';
import { ExternalLink, Share2 } from 'lucide-react';
import tlogo from '../assets/images/tlogo.png';

interface FooterProps {
  onOpenLocations: () => void;
}

export default function Footer({ onOpenLocations }: FooterProps) {
  const navigate = useNavigate();

  const handleNav = (to: string) => {
    navigate(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-[#131b2e] text-white pt-24 pb-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center">
            <img src={tlogo} alt="Trunex BPO" className="h-20 w-auto object-contain " />
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Trunex BPO Pvt. Ltd. empowers businesses with reliable outsourcing solutions. We combine skilled professionals, innovative technology, and customer-focused strategies to deliver operational excellence, exceptional service, and sustainable business growth.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => { navigator.clipboard.writeText(window.location.href); }}
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-white/10 hover:border-cyan-400/30 transition-all cursor-pointer"
              title="Copy link to clipboard"
            >
              <Share2 size={16} />
            </button>
            <button
              onClick={onOpenLocations}
              className="px-3 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-slate-300 hover:text-cyan-400 hover:bg-white/10 hover:border-cyan-400/30 text-xs font-semibold transition-all cursor-pointer"
            >
              <ExternalLink size={14} />
              <span>Locations</span>
            </button>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-cyan-400 mb-6">Services</h4>
          <ul className="space-y-4">
            {[
              'Trunex Connect — Inbound Sales',
              'Trunex Support — Customer Care',
              'Trunex Growth — Lead Generation',
              'Trunex Ops — Back Office & BPO'
            ].map((label) => (
              <li key={label}>
                <button onClick={() => handleNav('/solutions')} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors cursor-pointer text-left focus:outline-none">
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-cyan-400 mb-6">Company</h4>
          <ul className="space-y-4">
            {[
              { label: 'About Us',            to: '/about' },
              { label: 'Careers',             to: '/about' },
              { label: 'Connect With Experts',to: '/contact' },
              { label: 'Global Offices',      to: '/contact' },
            ].map((link) => (
              <li key={link.label}>
                <button onClick={() => handleNav(link.to)} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors cursor-pointer text-left focus:outline-none">
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Row */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
        <div>© 2026 Trunex Global BPO Private Limited. All Rights Reserved.</div>
        <div className="flex gap-6">
          <a href="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          <a href="/cookie-policy" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
