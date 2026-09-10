import React, { useState } from 'react';
import { COMPANY_DETAILS, SERVICES_CATALOG } from '../../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [service, setService] = useState(defaultService || SERVICES_CATALOG[0].title);
  const [headcount, setHeadcount] = useState('12');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#131b2e]/80 backdrop-blur-sm animate-fadeIn font-sans">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200">
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#fea619]/20 text-[#855300] flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">request_quote</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-[#0b1c30] leading-tight">
                Request Staffing Quotation
              </h3>
              <span className="text-xs text-[#45464d]">Fast-track turnaround within 2 hours</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-4">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-display text-xs font-bold text-[#0b1c30] mb-1">
                  Required Discipline
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#eff4ff] border border-blue-100 px-3 py-2 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#fea619]"
                >
                  {SERVICES_CATALOG.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-display text-xs font-bold text-[#0b1c30] mb-1">
                    Headcount Needed
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={headcount}
                    onChange={(e) => setHeadcount(e.target.value)}
                    className="w-full bg-[#eff4ff] border border-blue-100 px-3 py-2 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#fea619]"
                  />
                </div>
                <div>
                  <label className="block font-display text-xs font-bold text-[#0b1c30] mb-1">
                    Deployment City
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gwalior / Pithampur"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#eff4ff] border border-blue-100 px-3 py-2 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#fea619]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-display text-xs font-bold text-[#0b1c30] mb-1">
                  Company / Organization Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Manufacturing Ltd."
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-[#eff4ff] border border-blue-100 px-3 py-2 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#fea619]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-display text-xs font-bold text-[#0b1c30] mb-1">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#eff4ff] border border-blue-100 px-3 py-2 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#fea619]"
                  />
                </div>
                <div>
                  <label className="block font-display text-xs font-bold text-[#0b1c30] mb-1">
                    Mobile Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98XXX XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#eff4ff] border border-blue-100 px-3 py-2 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#fea619]"
                  />
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-slate-600">
                <span className="font-bold text-slate-800 block mb-0.5">Statutory Standard:</span>
                All Infybright quotations include EPF (12%), ESIC (3.25%), Statutory Bonus (8.33%),
                uniform allowances, and verified GST invoice documentation.
              </div>

              <button
                type="submit"
                className="w-full bg-[#fea619] text-[#684000] hover:bg-[#855300] hover:text-white font-display text-sm font-bold py-3 rounded-lg transition-all shadow-md"
              >
                Send Proposal Request
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-3">
              <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-[32px]">check</span>
              </div>
              <h4 className="font-display text-lg font-bold text-slate-900">
                Quotation Request Submitted!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{name}</strong>. An official formal proposal for{' '}
                <strong>
                  {headcount} personnel ({service})
                </strong>{' '}
                at <strong>{company || location}</strong> has been assigned to our Central Operations desk.
              </p>
              <div className="pt-2 text-xs font-semibold text-slate-500">
                For instant assistance, dial {COMPANY_DETAILS.primaryPhone}.
              </div>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-[#131b2e] text-white text-xs font-bold rounded-lg"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
