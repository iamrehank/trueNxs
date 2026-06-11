import { Inquiry } from '../types';
import ContactForm from '../components/ContactForm';
import { motion } from 'motion/react';

interface ContactPageProps {
  inquiries: Inquiry[];
  onAddInquiry: (inquiry: Omit<Inquiry, 'id' | 'date' | 'status'>) => void;
  onOpenLocations: () => void;
}

export default function ContactPage({ inquiries, onAddInquiry, onOpenLocations }: ContactPageProps) {
  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="space-y-16"
    >
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest bg-cyan-150/40 px-3.5 py-1.5 rounded-full inline-block">
          Support Hub
        </span>
        <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Connect With Our Experts
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          Have inquiries on CRM scalability, auditing compliance schedules, or automated ledger processing? Our transition staff are aligned to audit your requirements.
        </p>
      </div>
      <ContactForm inquiries={inquiries} onAddInquiry={onAddInquiry} onOpenLocations={onOpenLocations} />
    </motion.div>
  );
}
