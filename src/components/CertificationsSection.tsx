import React from 'react';
import { CERTIFICATIONS_LIST } from '../data/companyData';
import { CertificationItem } from '../types';

interface CertificationsSectionProps {
  onInspectCertificate: (cert: CertificationItem) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  onInspectCertificate,
}) => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#eff4ff]" id="government-appreciation">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="font-display text-xs text-[#855300] font-bold uppercase tracking-wider">
            OFFICIAL RECOGNITION &amp; CITATIONS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0b1c30] font-extrabold tracking-tight">
            Government Appreciation &amp; Certifications
          </h2>
          <p className="text-sm sm:text-base text-[#45464d] leading-relaxed">
            Infybright operates with complete statutory accountability. Recognized by the Ministry of
            Finance, Government of India (Central Board of Indirect Taxes and Customs) for prompt compliance
            and nation-building contributions.
          </p>
        </div>

        {/* Plaque Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CERTIFICATIONS_LIST.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border border-slate-100"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#855300] text-[26px]">
                      {cert.id.includes('iso') ? 'workspace_premium' : 'verified'}
                    </span>
                    <div>
                      <span className="block font-display text-base sm:text-lg font-bold text-[#0b1c30]">
                        {cert.title}
                      </span>
                      <span className="font-display text-xs text-[#45464d] font-semibold">
                        {cert.authority}
                      </span>
                    </div>
                  </div>
                  <span className="bg-[#e5eeff] px-2.5 py-1 rounded text-[#0b1c30] font-display text-[11px] font-bold">
                    {cert.regNumber}
                  </span>
                </div>

                {/* Certificate Visual Container */}
                <div
                  onClick={() => onInspectCertificate(cert)}
                  className="relative rounded-lg overflow-hidden bg-slate-100 h-64 sm:h-72 cursor-pointer group"
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={cert.title}
                    src={cert.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c30]/90 via-[#0b1c30]/30 to-transparent flex items-end p-5 text-white">
                    <div>
                      <div className="inline-flex items-center gap-1.5 bg-[#fea619] text-[#684000] px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider font-display mb-1.5">
                        <span className="material-symbols-outlined text-[13px]">verified</span>
                        <span>Click to Enlarge / Inspect</span>
                      </div>
                      <span className="font-display text-lg font-bold block leading-snug">
                        {cert.badgeTitle}
                      </span>
                      <p className="text-xs text-[#d3e4fe] mt-1 line-clamp-2">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[#45464d] text-xs pt-1 flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 font-semibold text-[#855300]">
                    <span className="material-symbols-outlined text-[16px]">done_all</span>
                    <span>{cert.signatory}</span>
                  </span>
                  <span className="font-medium text-slate-500">{cert.auditStatus}</span>
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                <button
                  onClick={() => onInspectCertificate(cert)}
                  className="inline-flex items-center gap-1.5 bg-[#e5eeff] text-[#0b1c30] hover:bg-[#dce9ff] px-4 py-2 rounded font-display text-xs font-bold transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>{cert.id.includes('iso') ? 'Inspect ISO Scope' : 'Verify Credential Online'}</span>
                </button>
                <span className="font-display text-xs text-[#45464d] font-semibold">
                  {cert.validity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
