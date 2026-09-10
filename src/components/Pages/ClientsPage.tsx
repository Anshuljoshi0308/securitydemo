import React from 'react';
import { CLIENTS_LIST } from '../../data/companyData';
import { ClientItem } from '../../types';

interface ClientsPageProps {
  onOpenQuote: () => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onOpenQuote }) => {
  const caseStudies = [
    {
      title: 'Perimeter Access Control & Guarding at Multi-Acre Automotive Plant',
      client: 'Motherson Sumi Systems Limited',
      challenge: 'High-traffic 24/7 entry gates with over 1,200 daily workers and 150 heavy commercial cargo trucks.',
      solution: 'Deployed 45 PSARA-certified security guards, motorized patrol buggies, automated boom barrier logging, and visitor biometric verification.',
      outcome: 'Zero cargo theft or unauthorized trespassing over 36 consecutive operational months.',
    },
    {
      title: 'Heavy Logistics Loading & Dispatch Turnaround Under Strict Demurrage',
      client: 'TAFE Tractors & Farm Equipment',
      challenge: 'Unloading raw engine castings and dispatching finished tractors without railway demurrage penalties.',
      solution: 'Supplied dedicated 30-member loading squads equipped with hydraulic pallet jacks and lumbar safety belts working in 3 synchronized 8-hour shifts.',
      outcome: '100% on-time turnaround; demurrage costs reduced to absolute zero.',
    },
    {
      title: 'Environment Regulatory Access & Institutional Facility Sanitation',
      client: 'Madhya Pradesh Pollution Control Board (MPPCB)',
      challenge: 'Ensuring strict confidentiality of regulatory documents and spotless green hygiene across high-ranking government headquarters.',
      solution: 'Comprehensive deployment of vetted unarmed security personnel and mechanized daily housekeeping teams.',
      outcome: 'Commended in official annual audit for spotless compliance and punctuality.',
    },
  ];

  return (
    <div className="py-12 bg-[#f8f9ff] space-y-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#131b2e] text-white rounded-2xl p-8 sm:p-12 lg:p-16 border border-slate-800 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#3f465c]/60 text-[#fea619] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-display">
            <span className="material-symbols-outlined text-[14px]">stars</span>
            <span>ENTERPRISE CLIENTELE &amp; INDUSTRIAL AUDIT TRACK RECORD</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl">
            Trusted by Leaders of Indian Manufacturing, Heavy Engineering, and Governance.
          </h1>
          <p className="text-sm sm:text-base text-[#bec6e0] leading-relaxed max-w-3xl">
            Our enterprise partners choose Infybright because we eliminate workforce turnover, guarantee
            statutory protection, and deliver disciplined on-ground execution.
          </p>
        </div>
      </section>

      {/* Featured Clients Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-display text-xs text-[#855300] font-bold uppercase tracking-wider">
            PARTNER DIRECTORY
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0b1c30]">
            Featured Enterprise Partners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENTS_LIST.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#855300] font-display font-extrabold text-lg">
                    {client.badgeInitial}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#0b1c30] leading-snug">
                      {client.name}
                    </h3>
                    <span className="text-xs text-slate-500 font-semibold">{client.subtitle}</span>
                  </div>
                </div>

                <div className="text-xs font-bold text-[#855300] bg-amber-50 px-2.5 py-1 rounded inline-block">
                  {client.sector}
                </div>

                <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed">
                  {client.deploymentSummary}
                </p>

                {client.quote && (
                  <div className="p-3 bg-slate-50 border-l-2 border-[#855300] text-xs italic text-slate-700">
                    "{client.quote}"
                  </div>
                )}
              </div>

              <div className="pt-4 mt-4 border-t flex items-center justify-between text-xs text-slate-500">
                <span>Engagement: Multi-Year Contract</span>
                <span className="text-green-600 font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  <span>Active Site</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-display text-xs text-[#855300] font-bold uppercase tracking-wider">
            MEASURED RESULTS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0b1c30]">
            Case Studies in Enterprise Defense &amp; Manpower
          </h2>
        </div>

        <div className="space-y-6">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3">
                <h3 className="font-display text-lg font-bold text-[#0b1c30]">{study.title}</h3>
                <span className="bg-[#eff4ff] text-[#855300] text-xs font-bold px-3 py-1 rounded-full self-start sm:self-auto">
                  {study.client}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 block">The Operational Challenge:</span>
                  <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-[#855300] block">The Infybright Solution:</span>
                  <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-green-700 block">Proven Outcome:</span>
                  <p className="text-slate-600 leading-relaxed">{study.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <button
            onClick={onOpenQuote}
            className="bg-[#fea619] text-[#684000] px-8 py-3 rounded-lg font-display text-sm font-bold hover:bg-[#855300] hover:text-white transition-all shadow-md"
          >
            Schedule an On-Site Enterprise Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
