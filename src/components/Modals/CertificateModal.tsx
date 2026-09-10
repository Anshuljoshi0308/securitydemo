import React from 'react';
import { CertificationItem } from '../../types';

interface CertificateModalProps {
  certificate: CertificationItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#131b2e]/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#855300] text-[28px]">
              verified
            </span>
            <div>
              <h3 className="font-display font-bold text-lg text-[#0b1c30] leading-tight">
                {certificate.title}
              </h3>
              <span className="text-xs text-[#45464d] font-semibold">{certificate.authority}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Certificate Image Frame */}
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 flex items-center justify-center p-2 shadow-inner">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="max-h-[380px] w-auto object-contain rounded shadow"
            />
          </div>

          {/* Details & Authentication */}
          <div className="bg-[#eff4ff] p-4 rounded-xl border border-blue-100 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="font-display font-bold text-sm text-[#0b1c30]">
                {certificate.badgeTitle}
              </span>
              <span className="bg-[#131b2e] text-white px-3 py-1 rounded text-xs font-mono font-bold">
                {certificate.regNumber}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed">
              {certificate.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs border-t border-blue-200 text-[#0b1c30]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#855300] text-[18px]">verified</span>
                <span className="font-semibold">{certificate.signatory}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#855300] text-[18px]">event_available</span>
                <span>{certificate.validity}</span>
              </div>
            </div>
          </div>

          {/* Verification Points */}
          <div className="space-y-2">
            <span className="font-display text-xs font-bold text-[#0b1c30] uppercase tracking-wider block">
              Official Compliance Verifications
            </span>
            <ul className="space-y-2 text-xs text-[#45464d]">
              {certificate.verificationDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#855300] text-[16px] flex-shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between rounded-b-2xl flex-wrap gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="material-symbols-outlined text-[16px] text-green-600">lock</span>
            <span>Cryptographically Verified against GST / Quality Council Registry</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-white border border-slate-200 text-xs font-bold rounded-lg hover:bg-slate-50 flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Print Credential</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#855300] text-white text-xs font-bold rounded-lg hover:bg-[#684000]"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
