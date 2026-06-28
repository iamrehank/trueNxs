import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Check, Send, Globe, Clock, Building, ArrowRight } from 'lucide-react';
import { LOCATIONS } from '../data';
import corporateMapImage from '../assets/images/corporate_map_1781205781835.jpg';

interface ContactFormProps {
  onAddInquiry: (inquiry: Omit<Inquiry, 'id' | 'date' | 'status'>) => void;
  onOpenLocations: () => void;
}

export default function ContactForm({ onAddInquiry, onOpenLocations }: ContactFormProps) {
  // Form input states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Trunex Connect - Inbound Sales');
  const [message, setMessage] = useState('');
  
  // Submit animation states
  const [submitted, setSubmitted] = useState(false);
  const [activeInput, setActiveInput] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    onAddInquiry({
      name,
      email,
      serviceInterest: service,
      message
    });

    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
    
    // Reset submission state after delay
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-form-main-grid">
      {/* Contact Form Section */}
      <div className="lg:col-span-7 bg-white border border-slate-200/80 p-8 md:p-12 rounded-2xl relative shadow-sm" id="form-card">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-cyan-600 rounded-t-2xl"></div>

        {submitted ? (
          <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto shadow-sm">
              <Check size={32} strokeWidth={3} className="animate-scale-up" />
            </div>
            <h3 className="font-sans text-2xl font-bold text-slate-950">Inquiry Received!</h3>
            <p className="text-slate-500 max-w-sm mx-auto text-sm leading-relaxed">
              Empowering your transition is our focus. Aditya Shah and the operations staff have been alerted. Expect an assignment update in your inbox shortly.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold text-cyan-600 hover:text-cyan-800 transition-colors cursor-pointer"
              >
                Submit another request
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name Input */}
              <div className="relative">
                <label 
                  className={`font-sans font-semibold text-[11px] uppercase tracking-wider block mb-2 transition-colors ${
                    activeInput === 'name' ? 'text-indigo-600' : 'text-slate-500'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={name}
                  onFocus={() => setActiveInput('name')}
                  onBlur={() => setActiveInput(null)}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-slate-200 focus:border-cyan-600 focus:ring-0 text-slate-900 placeholder-slate-350 transition-all pb-2 px-0 text-sm focus:outline-none"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <label 
                  className={`font-sans font-semibold text-[11px] uppercase tracking-wider block mb-2 transition-colors ${
                    activeInput === 'email' ? 'text-indigo-600' : 'text-slate-500'
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={email}
                  onFocus={() => setActiveInput('email')}
                  onBlur={() => setActiveInput(null)}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-slate-200 focus:border-cyan-600 focus:ring-0 text-slate-900 placeholder-slate-350 transition-all pb-2 px-0 text-sm focus:outline-none"
                />
              </div>
            </div>

            {/* Service Interest */}
            <div className="relative">
              <label 
                className={`font-sans font-semibold text-[11px] uppercase tracking-wider block mb-2 transition-colors ${
                  activeInput === 'service' ? 'text-indigo-600' : 'text-slate-500'
                }`}
              >
                Service Interest
              </label>
              <select
                value={service}
                onFocus={() => setActiveInput('service')}
                onBlur={() => setActiveInput(null)}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-slate-200 focus:border-cyan-600 focus:ring-0 text-slate-900 transition-all pb-2 px-0 text-sm focus:outline-none appearance-none cursor-pointer"
              >
                <option value="Trunex Connect - Inbound Sales">Trunex Connect — Inbound Sales & Warm Transfers</option>
                <option value="Trunex Support - Customer Care">Trunex Support — Customer Care & Technical Assistance</option>
                <option value="Trunex Growth - Lead Generation">Trunex Growth — Lead Generation & Performance Marketing</option>
                <option value="Trunex Ops - Back Office">Trunex Ops — Back Office & BPO</option>
                <option value="General Inquiry">General / Other Inquiry</option>
              </select>
            </div>

            {/* Message Area */}
            <div className="relative">
              <label 
                className={`font-sans font-semibold text-[11px] uppercase tracking-wider block mb-2 transition-colors ${
                  activeInput === 'message' ? 'text-indigo-600' : 'text-slate-500'
                }`}
              >
                Process Objectives & Requirements
              </label>
              <textarea
                required
                placeholder="Tell us about the process scope, expected transaction velocity, and key operational pain points..."
                value={message}
                onFocus={() => setActiveInput('message')}
                onBlur={() => setActiveInput(null)}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full bg-transparent border-0 border-b border-slate-200 focus:border-cyan-600 focus:ring-0 text-slate-900 placeholder-slate-350 transition-all pb-2 px-0 text-sm focus:outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full md:w-auto bg-cyan-700 hover:bg-cyan-800 text-white px-10 py-4 rounded-xl font-sans text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 group transition-all shadow-[0_4px_12px_rgba(6,182,212,0.15)] focus:ring-2 focus:ring-cyan-500/20 cursor-pointer"
            >
              <span>Send Inquiry</span>
              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </form>
        )}

      </div>

      {/* Info Cards Section */}
      <div className="lg:col-span-5 space-y-6" id="info-card-deck">
        {/* Corporate Office Card */}
        <div className="bg-white border border-slate-200/80 p-8 md:p-10 rounded-2xl relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-600/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
          
          <h3 className="font-sans text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <Building size={20} className="text-cyan-700" />
            <span>Corporate Office</span>
          </h3>

          <div className="space-y-6 text-sm">
            {/* Address */}
            <div className="flex gap-4">
              <MapPin className="text-cyan-600 shrink-0 mt-1" size={18} />
              <div>
                <p className="font-sans font-bold text-[11px] text-slate-400 uppercase tracking-wider mb-1">
                  Address
                </p>
                <p className="text-slate-700 leading-relaxed text-sm">
                  302, Siddharth Tower, Station Road,<br />
                  Kalyan West, Maharashtra 421301
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <Phone className="text-cyan-600 shrink-0 mt-1" size={18} />
              <div>
                <p className="font-sans font-bold text-[11px] text-slate-400 uppercase tracking-wider mb-1">
                  Phone Operations
                </p>
                <p className="text-slate-700 text-sm font-semibold">+91 (0251) 500 0123</p>
                <p className="text-slate-500 text-xs">+91 98765 43210 (Escalations)</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <Mail className="text-cyan-600 shrink-0 mt-1" size={18} />
              <div>
                <p className="font-sans font-bold text-[11px] text-slate-400 uppercase tracking-wider mb-1">
                  Legal Email
                </p>
                <p className="text-slate-700 text-sm font-semibold">contact@trunexbpo.com</p>
              </div>
            </div>
          </div>

          {/* Pulsing Status indicator */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-600"></span>
            </div>
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Global Support Active
            </span>
          </div>
        </div>

        {/* Map Placeholder Container */}
        <div 
          className="h-64 rounded-2xl overflow-hidden relative group border border-slate-200/80 shadow-sm cursor-pointer"
          onClick={onOpenLocations}
        >
          <img 
            alt="Corporate Map" 
            className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-all duration-700" 
            src={corporateMapImage}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent"></div>
          
          <div className="absolute bottom-6 left-6">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenLocations();
              }}
              className="bg-white/95 text-cyan-800 border border-cyan-700/10 backdrop-blur-sm px-4 py-2.5 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-cyan-700 hover:text-white hover:border-cyan-700 transition-all shadow-md shrink-0 cursor-pointer"
            >
              <Globe size={13} />
              <span>View Global Locations</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
