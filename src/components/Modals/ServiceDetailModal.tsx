import React from 'react';
import { ServiceItem } from '../../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#131b2e]/80 backdrop-blur-sm animate-fadeIn font-sans">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#eff4ff] text-[#855300] flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">
                {service.iconName}
              </span>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-[#0b1c30] leading-tight">
                {service.title}
              </h3>
              <span className="text-xs text-[#855300] font-bold uppercase tracking-wider font-display">
                {service.categoryTag}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-6">
          <p className="text-sm text-[#45464d] leading-relaxed">
            {service.detailedDescription}
          </p>

          {/* Operational Deliverables */}
          <div className="space-y-3">
            <span className="font-display text-xs font-bold text-[#0b1c30] uppercase tracking-wider block">
              Core Scope of Deliverables
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#0b1c30]">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#855300] text-[18px] flex-shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment Provided */}
          <div className="space-y-3">
            <span className="font-display text-xs font-bold text-[#0b1c30] uppercase tracking-wider block">
              Standard Issue Machinery &amp; Kit Provided
            </span>
            <div className="flex flex-wrap gap-2">
              {service.equipmentProvided.map((eq, idx) => (
                <span
                  key={idx}
                  className="bg-[#eff4ff] text-[#0b1c30] px-3 py-1 rounded-md text-xs font-medium border border-blue-100"
                >
                  {eq}
                </span>
              ))}
            </div>
          </div>

          {/* Target Industries */}
          <div className="space-y-2">
            <span className="font-display text-xs font-bold text-[#0b1c30] uppercase tracking-wider block">
              Suited For Industrial Environments
            </span>
            <p className="text-xs text-[#45464d]">
              {service.targetIndustries.join(' • ')}
            </p>
          </div>

          {/* Statutory Note */}
          <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-[#855300]">
            <span className="font-bold block mb-0.5">Statutory &amp; Quality Guarantee:</span>
            <span>{service.complianceNotes}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between rounded-b-2xl flex-wrap gap-3">
          <span className="text-xs text-slate-500">
            Emergency mobilization available within 24 hours.
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-slate-200 bg-white text-xs font-bold rounded-lg text-slate-700 hover:bg-slate-50"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(service.title);
              }}
              className="px-5 py-2 bg-[#fea619] hover:bg-[#855300] hover:text-white text-[#684000] text-xs font-bold rounded-lg transition-colors shadow-sm"
            >
              Request Deployment for this Division
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
