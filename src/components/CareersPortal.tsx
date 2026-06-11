import React, { useState, useRef } from 'react';
import { JOB_OPENINGS } from '../data';
import { JobOpening } from '../types';
import { Briefcase, MapPin, CheckCircle2, ChevronRight, Upload, Paperclip, Send, ArrowLeft, Terminal } from 'lucide-react';

interface CareersPortalProps {
  onClose: () => void;
}

export default function CareersPortal({ onClose }: CareersPortalProps) {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  
  // Drag & drop state
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form submission feedback
  const [applied, setApplied] = useState(false);

  const handleSelectJob = (job: JobOpening) => {
    setSelectedJob(job);
    setApplied(false);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setResumeFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !selectedJob) return;

    setApplied(true);
    setName('');
    setEmail('');
    setLinkedIn('');
    setCoverLetter('');
    setResumeFile(null);
  };

  return (
    <div className="fixed inset-0 bg-[#0f172a]/70 backdrop-blur-md flex items-center justify-center z-[100] p-4 md:p-6 animate-in fade-in duration-200" id="careers-portal-overlay">
      <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-slate-100">
        
        {/* Header */}
        <div className="bg-[#131b2e] text-white p-6 md:p-8 flex justify-between items-center shrink-0">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase bg-cyan-400/10 px-3 py-1 rounded-full">
              Work With Trunex
            </span>
            <h3 className="font-sans text-2xl font-bold mt-2">
              Corporate Careers
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 hover:bg-white/5 rounded-full transition-colors cursor-pointer text-sm"
          >
            ✕
          </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-slate-50/50">
          {!selectedJob ? (
            /* Open Positions list */
            <div className="space-y-6">
              <div className="max-w-xl">
                <h4 className="font-sans text-lg font-bold text-slate-850 mb-2">
                  Launch Your Career at Trunex
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Join our high-performance service hubs globally. We offer intensive training modules, secure workspace configurations, and rapid internal growth trails.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {JOB_OPENINGS.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          {job.department}
                        </span>
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <h5 className="font-sans text-base font-bold text-slate-900 mb-1">
                        {job.title}
                      </h5>
                      <span className="text-slate-550 text-xs flex items-center gap-1.5 font-medium">
                        <MapPin size={13} className="text-slate-400" />
                        {job.location}
                      </span>
                    </div>

                    <button
                      onClick={() => handleSelectJob(job)}
                      className="bg-cyan-700 hover:bg-cyan-800 text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shrink-0"
                    >
                      <span>Review & Apply</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Active Job details & Application Form combo */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Back to listings, details */}
              <div className="lg:col-span-5 space-y-6">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-cyan-700 transition-colors focus:outline-none cursor-pointer"
                >
                  <ArrowLeft size={14} />
                  <span>Back to Open Positions</span>
                </button>

                <div className="space-y-4">
                  <span className="text-[10px] font-bold tracking-wider text-cyan-700 uppercase bg-cyan-50 px-2.5 py-1 rounded-full block w-fit">
                    {selectedJob.department}
                  </span>
                  <h4 className="font-sans text-xl font-bold text-slate-900 leading-tight">
                    {selectedJob.title}
                  </h4>
                  <span className="text-slate-500 text-sm flex items-center gap-1.5 font-medium">
                    <MapPin size={14} className="text-slate-400" />
                    {selectedJob.location} • {selectedJob.type}
                  </span>
                  
                  <div className="border-t border-slate-200/80 pt-4 space-y-4">
                    <div>
                      <p className="text-xs font-extrabold text-slate-600 uppercase tracking-widest mb-1"></p>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {selectedJob.description}
                      </p>
                    </div>

                    <div>
                      <h5 className="font-sans text-xs font-extrabold text-slate-800 uppercase tracking-widest mb-2.5">
                        Requirements:
                      </h5>
                      <ul className="space-y-2">
                        {selectedJob.requirements.map((req, idx) => (
                          <li key={idx} className="flex gap-2 text-xs text-slate-600 leading-relaxed items-start">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-600 mt-1.5 shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form panel */}
              <div className="lg:col-span-7 bg-white border border-slate-205 rounded-2xl p-6 md:p-8 shadow-sm">
                {applied ? (
                  <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                    <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto shadow-sm">
                      <CheckCircle2 size={28} />
                    </div>
                    <h5 className="font-sans text-xl font-bold text-slate-900">
                      Application Submitted!
                    </h5>
                    <p className="text-slate-500 text-xs leading-relaxed max-w-sm mx-auto">
                      Thank you for submitting your application to Trunex. Your qualifications are queued for assessment. Our regional recruitment team will connect with you via email shortly.
                    </p>
                    <button
                      onClick={() => setApplied(false)}
                      className="text-xs font-bold text-cyan-600 hover:underline"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitApplication} className="space-y-6">
                    <h5 className="font-sans text-sm font-bold text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-3">
                      Submit Online Application
                    </h5>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your legal name"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:border-cyan-600 focus:outline-none focus:ring-1 focus:ring-cyan-600/10"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your.email@domain.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:border-cyan-600 focus:outline-none focus:ring-1 focus:ring-cyan-600/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                        LinkedIn Profile (Optional)
                      </label>
                      <input
                        type="url"
                        value={linkedIn}
                        onChange={(e) => setLinkedIn(e.target.value)}
                        placeholder="https://linkedin.com/in/username"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:border-cyan-600 focus:outline-none focus:ring-1 focus:ring-cyan-600/10"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                        Professional Summary
                      </label>
                      <textarea
                        value={coverLetter}
                        onChange={(e) => setCoverLetter(e.target.value)}
                        placeholder="Provide a brief snapshot of your professional experience..."
                        rows={3}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:border-cyan-600 focus:outline-none focus:ring-1 focus:ring-cyan-600/10 resize-none"
                      />
                    </div>

                    {/* Resume Upload supporting drag and drop or click upload */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        Upload Current CV/Resume (PDF/DOCX)
                      </label>
                      
                      <div
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                        className={`border-2 border-dashed rounded-xl p-6 text-center transition-all flex flex-col items-center justify-center cursor-pointer ${
                          dragActive 
                            ? 'border-cyan-600 bg-cyan-50/20' 
                            : resumeFile 
                              ? 'border-emerald-500 bg-emerald-500/5' 
                              : 'border-slate-200 hover:border-slate-300 bg-slate-50/20'
                        }`}
                        onClick={triggerFileSelect}
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          onChange={handleFileChange}
                        />

                        {resumeFile ? (
                          <div className="flex flex-col items-center gap-2 text-emerald-600">
                            <Paperclip size={24} />
                            <span className="text-xs font-bold">{resumeFile.name}</span>
                            <span className="text-[10px] text-slate-500">
                              {(resumeFile.size / 1024).toFixed(1)} KB • Click or drag to change
                            </span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-2 text-slate-400">
                            <Upload size={24} className="text-slate-300 group-hover:scale-105 transition-transform" />
                            <span className="text-xs font-semibold text-slate-600">
                              Drag & Drop your Resume here
                            </span>
                            <span className="text-[10px] text-slate-400">
                              or click to browse local folders (Max 10MB)
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#131b2e] hover:bg-slate-800 text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer cursor-pointers"
                    >
                      <Send size={13} className="text-cyan-400" />
                      <span>Submit Application</span>
                    </button>
                  </form>
                )}
              </div>

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-5 px-8 border-t border-slate-100 flex justify-between items-center text-xs shrink-0">
          <span className="text-slate-400 font-medium">Trunex Global BPO private Recruitment Portal</span>
          {selectedJob && (
            <button
              onClick={() => setSelectedJob(null)}
              className="font-bold text-cyan-700 hover:underline"
            >
              Back to positions
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
