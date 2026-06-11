import React, { useState, useMemo } from 'react';
import { HelpCircle, Sparkles, Building, Briefcase, Zap, CheckCircle2 } from 'lucide-react';

interface QuoteCalculatorProps {
  onSubmittingInquiry: (inquiry: { name: string; email: string; serviceInterest: string; message: string }) => void;
  onClose: () => void;
}

export default function QuoteCalculator({ onSubmittingInquiry, onClose }: QuoteCalculatorProps) {
  // Config state
  const [selectedServices, setSelectedServices] = useState<string[]>(['icare']);
  const [volume, setVolume] = useState<number>(5000);
  const [hours, setHours] = useState<'business-hours' | '24-7'>('24-7');
  const [sla, setSla] = useState<'standard' | 'expedited'>('standard');

  // Contact State for locking in proposal
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [lockedIn, setLockedIn] = useState(false);

  // Toggle selected service checklist
  const handleToggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(id => id !== serviceId));
      }
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  // Perform operational costing arithmetic
  const priceMetrics = useMemo(() => {
    // base pricing per incident/transaction unit
    let baseRate = 0;
    selectedServices.forEach(srv => {
      if (srv === 'icare') baseRate += 1.85; // $1.85 per contact
      if (srv === 'ifap') baseRate += 3.50;  // $3.50 per report/tagging unit
      if (srv === 'ifin') baseRate += 4.20;  // $4.20 per underwriting file
      if (srv === 'iapps') baseRate += 6.00; // $6.00 per consultation process unit
    });

    // Multi-service bundling discount (more services = lower unit rate)
    const discountFactor = selectedServices.length > 1 ? (1 - (selectedServices.length * 0.05)) : 1;

    // SLA multipliers
    const slaMultiplier = sla === 'expedited' ? 1.35 : 1.0;

    // Coverage hours multiplier
    const hoursMultiplier = hours === '24-7' ? 1.4 : 1.0;

    // Volume breaks (higher volume lowers unit processing charges)
    let volumeDiscount = 1.0;
    if (volume > 20000) volumeDiscount = 0.75;
    else if (volume > 10000) volumeDiscount = 0.85;
    else if (volume > 5000) volumeDiscount = 0.92;

    const finalUnitRate = baseRate * discountFactor * slaMultiplier * hoursMultiplier * volumeDiscount;
    const monthlyCharge = Math.round(finalUnitRate * volume);

    // standard administrative internal baseline in-house calculation (incorporating overhead, equipment, training, salaries)
    const inHouseCost = Math.round(monthlyCharge * 2.85);
    const monthlySavings = inHouseCost - monthlyCharge;

    return {
      unitRate: finalUnitRate.toFixed(2),
      monthlyCharge,
      inHouseCost,
      monthlySavings
    };
  }, [selectedServices, volume, hours, sla]);

  const handleSubmitProposal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const srvLabels = selectedServices.map(id => id.toUpperCase()).join(', ');
    const proposalBrief = `Custom Quote Proposal locked in: services=[${srvLabels}], volume=${volume} units, coverage=${hours}, SLA=${sla}. Projected monthly estimate: $${priceMetrics.monthlyCharge.toLocaleString()}`;

    onSubmittingInquiry({
      name,
      email,
      serviceInterest: `PROPOSAL: ${selectedServices[0].toUpperCase()}`,
      message: proposalBrief
    });

    setLockedIn(true);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-xl relative overflow-hidden" id="quote-calculator-container">
      {/* Soft color decorative glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-100/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100/40 rounded-full blur-3xl -z-10"></div>

      <div className="flex justify-between items-start mb-8">
        <div>
          <span className="text-xs font-bold text-cyan-600 tracking-wider uppercase flex items-center gap-1.5 mb-2">
            <Sparkles size={14} className="animate-spin text-orange-500" />
            Interactive Pricing Portal
          </span>
          <h3 className="font-sans text-2xl font-bold text-slate-900">
            Configure Your Custom Operations
          </h3>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left configurations */}
        <div className="lg:col-span-7 space-y-8">
          {/* Services Checklist */}
          <div>
            <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-4 block">
              1. Select Service Elements (Multi-select)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'icare', name: 'iCARE CRM Solutions', desc: 'Customer Acquisition & Loyalty' },
                { id: 'ifap', name: 'iFAP SEC Reporting', desc: 'Accounts Payable & XBRL' },
                { id: 'ifin', name: 'iFIN Lending Administration', desc: 'Consumer Credit Lifecycle' },
                { id: 'iapps', name: 'iAPPS Automation Consulting', desc: 'Robotics & System Integration' }
              ].map(srv => {
                const isSelected = selectedServices.includes(srv.id);
                return (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => handleToggleService(srv.id)}
                    className={`text-left p-4 rounded-xl border text-sm transition-all focus:outline-none cursor-pointer flex flex-col justify-between h-24 ${
                      isSelected
                        ? 'border-cyan-600 bg-cyan-50/50 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className={`font-semibold ${isSelected ? 'text-cyan-800' : 'text-slate-800'}`}>
                        {srv.name}
                      </span>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-cyan-600 bg-cyan-600 text-white' : 'border-slate-300'
                      }`}>
                        {isSelected && <span className="text-[10px] font-bold">✓</span>}
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 leading-tight">
                      {srv.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Incident Volume Slider */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
                2. Monthly Process/Transaction Volume
              </label>
              <span className="text-sm font-extrabold text-cyan-700 bg-cyan-50 px-3 py-1 rounded-md">
                {volume.toLocaleString()} units / month
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full cursor-pointer accent-cyan-600 h-2 bg-slate-100 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-2">
              <span>1,000 units</span>
              <span>10,000 units</span>
              <span>25,000 units</span>
              <span>50,000+ max scale</span>
            </div>
          </div>

          {/* Coverage & SLA Radios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2 block">
                3. Service Coverage Hours
              </label>
              <div className="flex rounded-lg bg-slate-100 p-1">
                <button
                  type="button"
                  onClick={() => setHours('business-hours')}
                  className={`flex-1 text-center py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    hours === 'business-hours' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Business Hours (8x5)
                </button>
                <button
                  type="button"
                  onClick={() => setHours('24-7')}
                  className={`flex-1 text-center py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    hours === '24-7' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Full Coverage (24/7/365)
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2 block">
                4. Resolution Turnaround SLA
              </label>
              <div className="flex rounded-lg bg-slate-100 p-1">
                <button
                  type="button"
                  onClick={() => setSla('standard')}
                  className={`flex-1 text-center py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    sla === 'standard' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Standard (24h)
                </button>
                <button
                  type="button"
                  onClick={() => setSla('expedited')}
                  className={`flex-1 text-center py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    sla === 'expedited' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Expedited Custom
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Cost Summary Panel */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#131b2e] text-white rounded-xl p-6 shadow-md border border-slate-800 relative">
            <span className="absolute top-4 right-4 text-[10px] font-bold text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-full uppercase tracking-widest">
              Live estimate
            </span>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">
              Estimated Monthly Cost
            </span>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-sans text-4xl font-extrabold text-white">
                ${priceMetrics.monthlyCharge.toLocaleString()}
              </span>
              <span className="text-xs text-slate-400">/ month</span>
            </div>

            <div className="border-t border-slate-800 pt-4 space-y-3 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Estimated rate per unit:</span>
                <span className="font-semibold text-cyan-400">${priceMetrics.unitRate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Selected services:</span>
                <span className="font-semibold">{selectedServices.length} lines</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">SLA priority:</span>
                <span className="font-semibold uppercase tracking-wider">{sla}</span>
              </div>
            </div>

            {/* In-House Comparison */}
            <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs text-amber-400 font-bold">
                <Building size={14} />
                <span>Typical Administrative In-House Cost:</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-slate-400 text-xs">Self-managed team:</span>
                <span className="text-slate-200 text-sm line-through font-semibold">${priceMetrics.inHouseCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-baseline border-t border-slate-800/80 pt-2 text-emerald-400 text-sm font-extrabold">
                <span>Trunex Annual Savings:</span>
                <span>${(priceMetrics.monthlySavings * 12).toLocaleString()} / yr</span>
              </div>
            </div>
          </div>

          {/* Form to Lock In this Quote */}
          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50">
            {lockedIn ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="font-sans text-base font-bold text-slate-850">
                  Quote Proposal Lodged!
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Our Transition Team has received this exact config. We will reach out to you within 2 business hours.
                </p>
                <button
                  onClick={() => setLockedIn(false)}
                  className="text-xs text-cyan-700 font-bold hover:underline"
                >
                  Draft another operational setup
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitProposal} className="space-y-4">
                <span className="text-[11px] font-bold text-slate-800 uppercase tracking-widest block">
                  Assign this Proposal to Your Account
                </span>
                <div className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Your legal name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-cyan-600 focus:outline-none focus:ring-1 focus:ring-cyan-600/10"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Corporate email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-cyan-600 focus:outline-none focus:ring-1 focus:ring-cyan-600/10"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#131b2e] hover:bg-slate-800 text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer cursor-pointers"
                >
                  <Sparkles size={14} className="text-cyan-400" />
                  <span>Lock In Quote & Schedule Audit</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
