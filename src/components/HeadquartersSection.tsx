import React, { useState } from 'react';
import { COMPANY_DETAILS, BRANCH_HUBS } from '../data/companyData';

export const HeadquartersSection: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState(BRANCH_HUBS[0]);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#eff4ff]" id="headquarters">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="font-display text-xs text-[#855300] font-bold uppercase tracking-wider">
            COMMAND DIRECTORY &amp; LOCATIONS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0b1c30] font-extrabold tracking-tight">
            Regional Head Office &amp; Deployment Hubs
          </h2>
          <p className="text-sm sm:text-base text-[#45464d] leading-relaxed">
            Our headquarters in Gwalior anchors command-and-control operations, while 10+ operational hubs
            ensure immediate tactical response across Madhya Pradesh and neighboring industrial states.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Detailed Headquarters Contact & Statutory Registrations */}
          <div className="lg:col-span-5 bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <span className="material-symbols-outlined text-[#855300] text-[32px]">
                business
              </span>
              <div>
                <span className="block font-display text-lg font-bold text-[#0b1c30]">
                  Corporate Headquarters
                </span>
                <span className="font-display text-xs text-[#45464d] font-semibold">
                  Central Dispatch &amp; Recruitment Center
                </span>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-1.5">
              <span className="font-display text-xs font-bold text-[#0b1c30] uppercase tracking-wider block">
                Primary Postal Location
              </span>
              <p className="text-sm text-[#45464d] leading-relaxed">
                {COMPANY_DETAILS.hqAddress}
              </p>
            </div>

            {/* Hotlines */}
            <div className="space-y-2">
              <span className="font-display text-xs font-bold text-[#0b1c30] uppercase tracking-wider block">
                Direct Telecommunications
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  className="bg-[#eff4ff] hover:bg-[#dce9ff] p-3 rounded-lg flex items-center gap-2.5 text-xs text-[#0b1c30] font-bold transition-colors"
                  href={`tel:${COMPANY_DETAILS.primaryPhone}`}
                >
                  <span className="material-symbols-outlined text-[#855300] text-[18px]">call</span>
                  <span>{COMPANY_DETAILS.primaryPhone}</span>
                </a>
                <a
                  className="bg-[#eff4ff] hover:bg-[#dce9ff] p-3 rounded-lg flex items-center gap-2.5 text-xs text-[#0b1c30] font-bold transition-colors"
                  href={`tel:+7314987524`}
                >
                  <span className="material-symbols-outlined text-[#855300] text-[18px]">phone_android</span>
                  <span>{COMPANY_DETAILS.altPhone}</span>
                </a>
              </div>
            </div>

            {/* Electronic Dispatch */}
            <div className="space-y-2">
              <span className="font-display text-xs font-bold text-[#0b1c30] uppercase tracking-wider block">
                Official Electronic Inquiries
              </span>
              <div className="space-y-2">
                <a
                  className="bg-[#eff4ff] hover:bg-[#dce9ff] p-3 rounded-lg flex items-center gap-2.5 text-xs text-[#0b1c30] font-medium transition-colors"
                  href={`mailto:${COMPANY_DETAILS.primaryEmail}`}
                >
                  <span className="material-symbols-outlined text-[#855300] text-[18px]">mail</span>
                  <span className="font-bold">{COMPANY_DETAILS.primaryEmail}</span>
                </a>
                <a
                  className="bg-[#eff4ff] hover:bg-[#dce9ff] p-3 rounded-lg flex items-center gap-2.5 text-xs text-[#0b1c30] font-medium transition-colors"
                  href={`mailto:${COMPANY_DETAILS.altEmail}`}
                >
                  <span className="material-symbols-outlined text-[#855300] text-[18px]">drafts</span>
                  <span>{COMPANY_DETAILS.altEmail}</span>
                </a>
              </div>
            </div>

            {/* Statutory Registrations */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-[#45464d] flex-wrap gap-2">
              <div>
                <span className="font-display font-bold block text-[#0b1c30]">GST Registration</span>
                <span className="font-mono text-[11px] font-semibold">{COMPANY_DETAILS.gstReg}</span>
              </div>
              <div>
                <span className="font-display font-bold block text-[#0b1c30]">ISO Reg Identifier</span>
                <span className="font-mono text-[11px] font-semibold">{COMPANY_DETAILS.isoReg}</span>
              </div>
            </div>
          </div>

          {/* Operational Map & Regional Hubs */}
          <div className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                <div>
                  <span className="font-display text-lg font-bold text-[#0b1c30]">
                    Operational Coverage Zone
                  </span>
                  <span className="font-display text-xs text-[#45464d] font-semibold block">
                    Central India (10 Active Hubs)
                  </span>
                </div>
                {/* Branch Switcher Tabs */}
                <div className="flex items-center gap-1.5 bg-[#eff4ff] p-1 rounded-lg">
                  {BRANCH_HUBS.map((hub) => (
                    <button
                      key={hub.id}
                      onClick={() => setSelectedHub(hub)}
                      className={`px-3 py-1 rounded text-xs font-bold font-display transition-all cursor-pointer ${
                        selectedHub.id === hub.id
                          ? 'bg-[#855300] text-white shadow-sm'
                          : 'text-[#45464d] hover:text-[#0b1c30]'
                      }`}
                    >
                      {hub.city.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Hub Details */}
              <div className="bg-[#eff4ff] rounded-lg p-4 my-4 text-xs space-y-2 border border-blue-100">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-sm text-[#0b1c30]">
                    {selectedHub.type}
                  </span>
                  <span className="bg-[#fea619] text-[#684000] px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                    Active Deployment
                  </span>
                </div>
                <p className="text-[#45464d] leading-relaxed">{selectedHub.address}</p>
                <div className="flex items-center gap-4 pt-1 text-[#0b1c30] flex-wrap">
                  <span className="font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px] text-[#855300]">call</span>
                    {selectedHub.phones[0]}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px] text-[#855300]">domain</span>
                    Servicing: {selectedHub.corridors.slice(0, 2).join(', ')}
                  </span>
                </div>
              </div>

              {/* Map Preview Container */}
              <div className="relative rounded-lg overflow-hidden h-64 sm:h-72 bg-slate-100 border border-slate-200 group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Satellite map depicting regional industrial hubs in Gwalior and Central India"
                  src={COMPANY_DETAILS.mapImageUrl}
                />
                <div className="absolute top-3 left-3 bg-[#131b2e]/90 text-white backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-display font-bold flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fea619] animate-ping" />
                  <span>HQ Gwalior: Active Live Node</span>
                </div>

                <div className="absolute bottom-3 right-3">
                  <a
                    href="https://maps.google.com/?q=Gole+Ka+Mandir+Gwalior"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white text-[#0b1c30] hover:bg-[#eff4ff] px-3.5 py-1.5 rounded-md font-display text-xs font-bold shadow-md transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#855300]">navigation</span>
                    <span>Open Live Directions</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-[#45464d] flex-wrap gap-2">
              <span className="font-medium">
                Rapid Deployment Fleet stationed at Malanpur &amp; Banmore industrial gates.
              </span>
              <a
                href={`tel:${COMPANY_DETAILS.primaryPhone}`}
                className="text-[#855300] font-bold hover:underline"
              >
                Call Dispatch Center →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
