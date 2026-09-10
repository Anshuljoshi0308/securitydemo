import React from 'react';
import { BRANCH_HUBS, COMPANY_DETAILS } from '../../data/companyData';

interface InfrastructurePageProps {
  onOpenQuote: () => void;
}

export const InfrastructurePage: React.FC<InfrastructurePageProps> = ({ onOpenQuote }) => {
  const assets = [
    {
      title: '24/7 Central Command & Control Center',
      specs: 'Gwalior Headquarters',
      desc: 'Equipped with dedicated VHF base stations, real-time GPS fleet tracking consoles, redundant broadband uplinks, and an active incident dispatch room.',
      icon: 'videocam',
    },
    {
      title: 'Licensed Arms & Weaponry Vault',
      specs: 'Strict Police SP Audited Store',
      desc: 'Centralized armory maintaining verified 12-bore DBBL/SBBL weapons, licensed ammunition stocks, biometric weapon sign-out registers, and weapon cleaning bays.',
      icon: 'security',
    },
    {
      title: 'Motorized Quick Reaction Team (QRT) Fleet',
      specs: 'Patrol Vehicles Across Hubs',
      desc: 'Specially outfitted patrol Boleros and motorcycles equipped with high-beam searchlights, public address sirens, first aid kits, and heavy-duty tow cables.',
      icon: 'local_shipping',
    },
    {
      title: 'Mechanized Housekeeping Equipment Depot',
      specs: 'Industrial Machine Fleet',
      desc: 'Over 40+ ride-on scrubbers, commercial wet/dry vacuum units, high-pressure jet washers, and chemical dispensing carts maintained in our central logistics store.',
      icon: 'cleaning_services',
    },
    {
      title: 'Central Training Parade Grounds',
      specs: '5-Acre Tactical Facility',
      desc: 'Complete with obstacle courses, mock factory security gates, fire hydrant simulation setups, classroom presentation projectors, and physical fitness tracks.',
      icon: 'sports_score',
    },
    {
      title: 'Digital Biometric & Facial Attendance Grid',
      specs: 'Cloud-Synchronized Hardware',
      desc: 'Cellular-connected fingerprint and facial recognition scanners deployed across client industrial gates, ensuring tamper-proof shift muster rolls.',
      icon: 'fingerprint',
    },
  ];

  return (
    <div className="py-12 bg-[#f8f9ff] space-y-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#131b2e] text-white rounded-2xl p-8 sm:p-12 lg:p-16 border border-slate-800 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#3f465c]/60 text-[#fea619] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-display">
            <span className="material-symbols-outlined text-[14px]">cell_tower</span>
            <span>CENTRAL COMMAND &amp; DEPLOYMENT INFRASTRUCTURE</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl">
            State-of-the-Art Armories, Fleets, and 24x7 Operations Centers.
          </h1>
          <p className="text-sm sm:text-base text-[#bec6e0] leading-relaxed max-w-3xl">
            Physical security is only as effective as the logistical backbone supporting it. Explore the
            technology, machinery, and facilities that power Infybright's guaranteed 99.8% shift adherence.
          </p>
        </div>
      </section>

      {/* Asset Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-display text-xs text-[#855300] font-bold uppercase tracking-wider">
            LOGISTICAL ASSETS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0b1c30]">
            Infrastructure Driving Operational Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assets.map((asset, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 space-y-4 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-[#eff4ff] text-[#855300] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">
                    {asset.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#0b1c30] leading-snug">
                    {asset.title}
                  </h3>
                  <span className="text-xs text-[#855300] font-semibold block">{asset.specs}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed">{asset.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Regional Deployment Hubs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-[#eff4ff] rounded-2xl p-8 sm:p-12 border border-blue-100 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="font-display text-xs text-[#855300] font-bold uppercase tracking-wider">
              REGIONAL COVERAGE NETWORK
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0b1c30]">
              Central India Industrial Corridors
            </h2>
            <p className="text-sm text-[#45464d] leading-relaxed">
              With nodes positioned within 30 minutes of major Special Economic Zones (SEZs) and industrial
              growth centers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRANCH_HUBS.map((hub) => (
              <div key={hub.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-base font-bold text-[#0b1c30]">{hub.city}</h4>
                  <span className="bg-[#fea619] text-[#684000] px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                    Active Node
                  </span>
                </div>
                <p className="text-xs text-[#45464d]">{hub.address}</p>
                <div className="pt-2 border-t text-xs space-y-1">
                  <span className="font-bold text-slate-800 block">Corridors Serviced:</span>
                  <div className="flex flex-wrap gap-1">
                    {hub.corridors.map((c, i) => (
                      <span key={i} className="bg-slate-100 px-2 py-0.5 rounded text-[11px] text-slate-600">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={onOpenQuote}
              className="bg-[#131b2e] text-white px-8 py-3 rounded-lg font-display text-sm font-bold hover:bg-[#1e293b] transition-all shadow-md"
            >
              Request Site Audit for Your Plant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
