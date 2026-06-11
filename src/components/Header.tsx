import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
}

const navItems = [
  { to: '/',          label: 'Home',       end: true },
  { to: '/solutions', label: 'Solutions',  end: false },
  { to: '/about',     label: 'About Us',   end: false },
  { to: '/contact',   label: 'Contact',    end: false },
];

export default function Header({ onOpenQuote }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (to: string) => {
    navigate(to);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="app-header" className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300 h-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-full flex justify-between items-center">

        {/* Brand */}
        <button onClick={() => handleNav('/')} className="flex items-center gap-2 group cursor-pointer focus:outline-none" aria-label="Trunex Home">
          <span className="font-sans text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-cyan-700 transition-colors">Trunex</span>
          <span className="h-2 w-2 rounded-full bg-cyan-600 animate-pulse mt-2 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={({ isActive }) =>
                `font-medium text-[15px] pb-1 transition-all duration-300 relative focus:outline-none cursor-pointer ${
                  isActive ? 'text-cyan-700' : 'text-slate-600 hover:text-cyan-700'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-600 rounded-full" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => handleNav('/contact')} className="flex items-center gap-2 text-sm text-slate-600 hover:text-cyan-700 font-medium transition-colors">
            <PhoneCall size={16} />
            <span>Support</span>
          </button>
          <button
            onClick={onOpenQuote}
            className="bg-[#d95f00] hover:bg-[#b04d00] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-[0_2px_8px_rgba(217,95,0,0.25)] hover:shadow-[0_4px_12px_rgba(217,95,0,0.4)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile buttons */}
        <div className="flex items-center gap-3 md:hidden">
          <button onClick={onOpenQuote} className="bg-[#d95f00] hover:bg-[#b04d00] text-white px-3.5 py-2 rounded-lg text-xs font-semibold transition-all shadow-sm">
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-cyan-700 hover:bg-slate-50 rounded-lg transition-all focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-6 py-8 space-y-4 flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.to}
                onClick={() => handleNav(item.to)}
                className="text-left text-lg font-semibold py-2.5 border-b border-slate-50 transition-colors text-slate-600 hover:text-cyan-700"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => handleNav('/contact')}
                className="flex items-center justify-center gap-2 border border-slate-200 text-slate-600 py-3 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-all"
              >
                <PhoneCall size={16} />
                <span>Contact Sales & Support</span>
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
                className="bg-cyan-700 text-white w-full py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-md flex items-center justify-center gap-1 hover:bg-cyan-800 transition-all"
              >
                <span>Request Custom Quote</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
