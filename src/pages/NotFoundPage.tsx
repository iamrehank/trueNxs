import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6"
    >
      <span className="text-[10px] font-bold tracking-widest text-[#d95f00] bg-orange-50 border border-orange-100 px-3.5 py-1.5 rounded-full uppercase">
        404 — Page Not Found
      </span>
      <h1 className="font-display text-5xl font-extrabold text-slate-900">Oops.</h1>
      <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-cyan-700 hover:bg-cyan-800 text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
      >
        Back to Home
      </button>
    </motion.div>
  );
}
