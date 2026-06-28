import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check, ExternalLink, Share2 } from 'lucide-react';

interface FooterProps {
  onOpenLocations: () => void;
}

export default function Footer({ onOpenLocations }: FooterProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }, 1200);
  };

  const handleNav = (to: string) => {
    navigate(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-[#131b2e] text-white pt-24 pb-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="font-sans text-2xl font-extrabold tracking-tight text-white">Trunex</span>
            <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full mt-2"></span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Trunex Global BPO balances institutional trust with high-tech precision. Providing systematic reliability and human-centric operations for the modern enterprise.
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

        {/* Newsletter */}
        <div className="space-y-6">
          <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-cyan-400">Stay Updated</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Subscribe to our newsletter for global business insights, compliance changes (SEC/XBRL), and BPO innovations.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-3">
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your work email"
                className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/20 transition-all"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-cyan-300 disabled:opacity-50 p-1 bg-slate-900 border border-slate-700/60 rounded-md transition-colors cursor-pointer"
              >
                {isSubmitting
                  ? <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                  : <ArrowRight size={16} />
                }
              </button>
            </div>
            {subscribed && (
              <div className="flex items-center gap-2 text-emerald-400 text-xs animate-in fade-in duration-300">
                <div className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>Thank you! You have successfully subscribed to Trunex Updates.</span>
              </div>
            )}
          </form>
          <p className="text-xs text-slate-500">By joining, you agree to our Security Policies and Data Terms.</p>
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
