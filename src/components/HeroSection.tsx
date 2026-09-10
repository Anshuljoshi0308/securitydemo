import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/companyData';

interface HeroSectionProps {
  onOpenQuote: () => void;
  onExploreServices: () => void;
  onViewCitation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuote,
  onExploreServices,
  onViewCitation,
}) => {
  const [activeSegment, setActiveSegment] = useState<'all' | 'armed' | 'logistics' | 'technical'>('all');

  return (
    <section className="relative bg-[#131b2e] text-white py-12 lg:py-20 overflow-hidden">
      {/* Subtle Ambient Graphic Accents */}
      <div className="absolute -right-32 -top-32 w-96 h-96 bg-[#855300]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-1/3 -bottom-24 w-80 h-80 bg-[#dce9ff]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            <div className="inline-flex items-center gap-2 bg-[#3f465c]/60 text-[#ffddb8] px-3.5 py-1 rounded-full text-xs font-bold tracking-wider font-display uppercase border border-white/10">
              <span className="material-symbols-outlined text-[14px]">shield</span>
              <span>INDUSTRY-GRADE ENTERPRISE PROTECTION &amp; WORKFORCE INFRASTRUCTURE</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Empowering Enterprises with Certified Security &amp; Skilled Manpower Solutions.
            </h1>

            <p className="text-base sm:text-lg text-[#bec6e0] max-w-2xl leading-relaxed">
              At Infybright (incorporating Super Security &amp; Labour Solutions), we connect deep operational
              discipline with the ambitious staffing needs of manufacturing plants, corporate tech parks, and
              public infrastructure across Central India.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 bg-[#fea619] text-[#684000] px-6 py-3 rounded font-bold text-sm hover:bg-[#855300] hover:text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Instant Staffing Quotation</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 bg-[#e5eeff]/15 text-white hover:bg-[#e5eeff]/25 px-6 py-3 rounded font-semibold text-sm transition-all border border-white/10 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">hub</span>
                <span>Explore 8 Service Sectors</span>
              </button>
            </div>

            {/* Proof Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 w-full pt-4 mt-2">
              <div className="bg-[#1e293b]/80 border border-slate-700/60 p-4 rounded-lg">
                <span className="block font-display text-2xl sm:text-3xl font-extrabold text-[#ffb95f]">
                  {COMPANY_DETAILS.enterpriseClientsCount}
                </span>
                <span className="block text-[11px] font-bold text-[#bec6e0] uppercase tracking-wider font-display">
                  Enterprise Clients
                </span>
              </div>
              <div className="bg-[#1e293b]/80 border border-slate-700/60 p-4 rounded-lg">
                <span className="block font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {COMPANY_DETAILS.experienceYears} Yrs
                </span>
                <span className="block text-[11px] font-bold text-[#bec6e0] uppercase tracking-wider font-display">
                  Operational Track
                </span>
              </div>
              <div className="bg-[#1e293b]/80 border border-slate-700/60 p-4 rounded-lg">
                <span className="block font-display text-2xl sm:text-3xl font-extrabold text-[#ffb95f]">
                  {COMPANY_DETAILS.totalPersonnel}
                </span>
                <span className="block text-[11px] font-bold text-[#bec6e0] uppercase tracking-wider font-display">
                  Trained Guards &amp; Crew
                </span>
              </div>
            </div>
          </div>

          {/* Visual / Command Dashboard Snapshot */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white text-[#0b1c30] rounded-xl p-5 sm:p-6 shadow-2xl relative overflow-hidden border border-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#fea619] animate-pulse" />
                  <span className="font-display text-base font-bold text-[#0b1c30]">
                    Live Deployment Status
                  </span>
                </div>
                <span className="text-[11px] bg-[#dce9ff] text-[#0b1c30] px-2.5 py-0.5 rounded font-bold font-display uppercase tracking-wider">
                  24x7 Control Room
                </span>
              </div>

              {/* Visual Deployment Distribution (Interactive SVG Data Viz) */}
              <div className="bg-[#eff4ff] rounded-lg p-3.5 my-3.5 border border-blue-100">
                <div className="flex items-center justify-between text-xs text-[#45464d] mb-2 font-medium">
                  <span className="font-bold font-display uppercase tracking-wider text-[11px]">
                    Active Force Distribution
                  </span>
                  <span className="font-bold text-[#855300] bg-amber-100/80 px-2 py-0.5 rounded text-[11px]">
                    {COMPANY_DETAILS.shiftAdherence} Shift Adherence
                  </span>
                </div>

                {/* Stacked Metric Bar Chart SVG */}
                <div className="w-full">
                  <svg className="w-full h-10" viewBox="0 0 320 40" fill="none">
                    <rect
                      x="0"
                      y="6"
                      width="134"
                      height="24"
                      rx="4"
                      fill="#131b2e"
                      className="cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setActiveSegment('armed')}
                    />
                    <rect
                      x="138"
                      y="6"
                      width="88"
                      height="24"
                      rx="4"
                      fill="#fea619"
                      className="cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setActiveSegment('logistics')}
                    />
                    <rect
                      x="230"
                      y="6"
                      width="54"
                      height="24"
                      rx="4"
                      fill="#855300"
                      className="cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setActiveSegment('technical')}
                    />
                    <rect
                      x="288"
                      y="6"
                      width="32"
                      height="24"
                      rx="4"
                      fill="#7c839b"
                      className="cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setActiveSegment('all')}
                    />
                    <text x="10" y="22" fill="#ffffff" fontFamily="Plus Jakarta Sans" fontSize="9" fontWeight="700">
                      ARMED &amp; STATIC: 42%
                    </text>
                    <text x="144" y="22" fill="#2a1700" fontFamily="Plus Jakarta Sans" fontSize="9" fontWeight="700">
                      LOGISTICS: 28%
                    </text>
                  </svg>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-[#45464d]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#131b2e] flex-shrink-0" />
                    <span className="truncate">Industrial &amp; Gate Sentry</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#fea619] flex-shrink-0" />
                    <span className="truncate">Assembly Line Manpower</span>
                  </div>
                </div>
              </div>

              {/* On-Ground Guard & Operations Image */}
              <div className="relative rounded-lg overflow-hidden h-48 my-3 shadow-inner group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Disciplined industrial security team and factory manpower workforce standing in high-visibility reflective uniforms inside modern facility"
                  src={COMPANY_DETAILS.guardPhotoUrl}
                />
                <div className="absolute bottom-2 left-2 right-2 bg-[#131b2e]/90 backdrop-blur-sm px-3 py-1.5 rounded text-white flex items-center justify-between text-[11px] font-display font-semibold">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#fea619]">verified</span>
                    <span>Statutory PF / ESIC / Gratuity Compliant</span>
                  </span>
                  <span className="text-[#ffddb8] font-bold">Zero Non-Compliance</span>
                </div>
              </div>

              {/* Quick Compliance Verification CTA */}
              <div className="flex items-center justify-between pt-1 text-[#45464d] text-xs">
                <span className="flex items-center gap-1.5 font-semibold text-[#0b1c30]">
                  <span className="material-symbols-outlined text-[#855300] text-[18px]">verified</span>
                  <span>Verified by Ministry of Finance</span>
                </span>
                <button
                  onClick={onViewCitation}
                  className="text-[#855300] font-bold hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>View Citations</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
