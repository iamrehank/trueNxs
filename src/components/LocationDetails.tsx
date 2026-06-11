import { useState, useEffect } from 'react';
import { LOCATIONS } from '../data';
import { GlobalLocation } from '../types';
import { Clock, Phone, MapPin, Mail, ExternalLink, Globe } from 'lucide-react';

interface LocationDetailsProps {
  onClose: () => void;
}

export default function LocationDetails({ onClose }: LocationDetailsProps) {
  const [selectedLoc, setSelectedLoc] = useState<GlobalLocation>(LOCATIONS[0]);
  const [localTimes, setLocalTimes] = useState<Record<string, string>>({});

  // Calculate local times dynamically
  useEffect(() => {
    const updateTimes = () => {
      const times: Record<string, string> = {};
      LOCATIONS.forEach(loc => {
        try {
          const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: loc.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          });
          times[loc.id] = formatter.format(new Date());
        } catch (e) {
          times[loc.id] = new Date().toLocaleTimeString();
        }
      });
      setLocalTimes(times);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#0f172a]/70 backdrop-blur-md flex items-center justify-center z-[100] p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-slate-100">
        
        {/* Left Side: Locations Navigation Column */}
        <div className="bg-slate-50 p-6 md:p-8 md:w-80 shrink-0 border-r border-slate-100 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="p-1 px-1.5 bg-cyan-100 text-cyan-850 rounded text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1">
                <Globe size={11} /> Global Offices
              </span>
            </div>
            
            <h3 className="font-sans text-xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Corporate Nodes
            </h3>
            
            <div className="space-y-2.5">
              {LOCATIONS.map(loc => {
                const isSelected = selectedLoc.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLoc(loc)}
                    className={`w-full text-left p-4 rounded-2xl transition-all cursor-pointer border focus:outline-none flex flex-col gap-1 ${
                      isSelected
                        ? 'bg-white border-cyan-500 shadow-md scale-[1.02]'
                        : 'bg-transparent border-transparent hover:bg-slate-100/70 text-slate-600'
                    }`}
                  >
                    <span className="font-bold text-sm text-slate-850">
                      {loc.city}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                      {loc.country}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t border-slate-200/80 text-xs text-slate-400">
            Trunex processes millions of secure international records across ISO clusters.
          </div>
        </div>

        {/* Right Side: Location Info Container */}
        <div className="flex-1 p-6 md:p-10 flex flex-col justify-between overflow-y-auto bg-white relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors z-10 cursor-pointer text-sm"
          >
            ✕
          </button>

          <div>
            <div className="flex justify-between items-baseline mb-6 border-b border-slate-100 pb-5 pr-8">
              <div>
                <h4 className="font-sans text-2xl font-bold text-slate-900 leading-tight">
                  {selectedLoc.city} Delivery Center
                </h4>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">
                  Trunex HQ / Service Cluster
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              {/* Card Address */}
              <div className="space-y-1.5 p-5 rounded-2xl bg-slate-50/50 border border-slate-100">
                <div className="flex items-center gap-2 text-cyan-700 font-bold text-xs uppercase tracking-wider">
                  <MapPin size={15} />
                  <span>Physical Address</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed pt-1.5">
                  {selectedLoc.address}
                </p>
              </div>

              {/* Dynamic local clock */}
              <div className="space-y-1.5 p-5 rounded-2xl bg-cyan-50/20 border border-cyan-100/50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-cyan-700 font-bold text-xs uppercase tracking-wider">
                    <Clock size={15} />
                    <span>Local Current Time</span>
                  </div>
                  <span className="font-mono text-xl font-extrabold text-cyan-800 tracking-tight block pt-3 leading-none">
                    {localTimes[selectedLoc.id] || '--:--:--'}
                  </span>
                </div>
                <span className="text-[10px] text-cyan-700 font-bold uppercase tracking-wider block">
                  Timezone: {selectedLoc.timezone}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest leading-none">
                Contact Routing Information
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 border border-slate-100 rounded-xl hover:border-slate-200 transition-all">
                  <Phone size={16} className="text-slate-400 shrink-0" />
                  <div className="text-xs">
                    <span className="text-slate-400 block font-semibold mb-0.5">Primary Hotline</span>
                    <span className="font-mono font-bold text-slate-800">{selectedLoc.phone}</span>
                  </div>
                </div>

                {selectedLoc.alternativePhone && (
                  <div className="flex items-center gap-3 p-4 border border-slate-100 rounded-xl hover:border-slate-200 transition-all">
                    <Phone size={16} className="text-slate-400 shrink-0" />
                    <div className="text-xs">
                      <span className="text-slate-400 block font-semibold mb-0.5">Escalation Backup</span>
                      <span className="font-mono font-bold text-slate-800">{selectedLoc.alternativePhone}</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3 p-4 border border-slate-100 rounded-xl hover:border-slate-200 transition-all">
                  <Mail size={16} className="text-slate-400 shrink-0" />
                  <div className="text-xs">
                    <span className="text-slate-400 block font-semibold mb-0.5">Operational Desk</span>
                    <a href={`mailto:${selectedLoc.email}`} className="font-medium text-cyan-700 hover:underline">{selectedLoc.email}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end gap-3 shrink-0">
            <button
              onClick={onClose}
              className="bg-slate-900 text-white hover:bg-slate-800 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close Cluster View
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
