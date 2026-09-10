import React from 'react';
import { COMPANY_DETAILS } from '../data/companyData';

export const OperationalBanner: React.FC = () => {
  return (
    <section className="bg-[#eff4ff] py-2.5 px-4 sm:px-6 lg:px-8 border-b border-blue-100">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5 text-xs">
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          <span className="inline-flex items-center gap-1.5 bg-[#fea619]/20 text-[#684000] px-2.5 py-1 rounded font-bold uppercase tracking-wider text-[11px]">
            <span className="material-symbols-outlined text-[16px] text-[#855300]">verified_user</span>
            PSARA LICENSED AGENCY
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[#e5eeff] text-[#45464d] px-2.5 py-1 rounded font-bold uppercase tracking-wider text-[11px]">
            <span className="material-symbols-outlined text-[16px] text-[#855300]">military_tech</span>
            CENTRAL BOARD OF TAXES &amp; CUSTOMS ACCREDITED
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-[#45464d] font-bold uppercase tracking-wider text-[11px]">
            <span className="material-symbols-outlined text-[16px] text-[#855300]">bolt</span>
            24/7 RAPID DISPATCH PATROL READY
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#45464d] font-medium">
          <span>Central Hub: Gwalior • Bhopal • Indore</span>
          <a
            href={`tel:${COMPANY_DETAILS.primaryPhone}`}
            className="text-[#855300] font-bold hover:underline"
          >
            • Call {COMPANY_DETAILS.primaryPhone}
          </a>
        </div>
      </div>
    </section>
  );
};
