import React from 'react';
import { COMPANY_DETAILS } from '../data/companyData';

export const StatsCounterSection: React.FC = () => {
  const stats = [
    {
      id: 'clients',
      icon: 'sentiment_very_satisfied',
      metric: COMPANY_DETAILS.enterpriseClientsCount,
      title: 'Happy Corporate Clients',
      desc: 'Automotive, logistics, real estate, and government institutions',
    },
    {
      id: 'years',
      icon: 'calendar_month',
      metric: `${COMPANY_DETAILS.experienceYears} Yrs`,
      title: 'Years in Business',
      desc: 'A decade of uncompromised reliability and operational growth',
    },
    {
      id: 'branches',
      icon: 'domain',
      metric: COMPANY_DETAILS.branchesCount,
      title: 'Regional Branches',
      desc: 'Headquartered in Gwalior with nodes spanning central trade zones',
    },
    {
      id: 'consultations',
      icon: 'coffee',
      metric: '100+',
      title: 'Strategic Consultations',
      desc: 'Direct boardroom strategy sessions solving complex manpower quotas',
    },
  ];

  return (
    <section className="bg-[#131b2e] text-white py-14 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((item) => (
            <div
              key={item.id}
              className="bg-[#1e293b]/70 border border-slate-700/60 p-6 rounded-xl flex flex-col items-center justify-center space-y-2 hover:border-[#fea619]/40 transition-colors"
            >
              <span className="material-symbols-outlined text-[36px] text-[#fea619]">
                {item.icon}
              </span>
              <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#fea619] tracking-tight">
                {item.metric}
              </span>
              <span className="font-display text-sm sm:text-base font-bold text-white">
                {item.title}
              </span>
              <p className="text-xs text-[#bec6e0] leading-relaxed max-w-[220px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
