import React from 'react';
import { SERVICES_CATALOG } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onRequestQuoteForService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onRequestQuoteForService,
}) => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f9ff]" id="all-services">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="font-display text-xs text-[#855300] font-bold uppercase tracking-wider">
              FULL FACILITY &amp; MANPOWER PORTFOLIO
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0b1c30] font-extrabold tracking-tight">
              Our Services
            </h2>
            <p className="text-sm sm:text-base text-[#45464d] leading-relaxed">
              Each specialized division operates under dedicated supervisors with industry-grade
              machinery, certified personnel uniforms, and mandatory compliance protocols.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#e5eeff] px-4 py-2 rounded font-display text-xs font-bold text-[#0b1c30] self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#855300]" />
            <span>8 Core Service Disciplines</span>
          </div>
        </div>

        {/* Service 8-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_CATALOG.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between border border-slate-100"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#855300] group-hover:bg-[#855300] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[26px]">
                    {item.iconName}
                  </span>
                </div>

                <h3
                  onClick={() => onSelectService(item)}
                  className="font-display text-lg font-bold text-[#0b1c30] group-hover:text-[#855300] transition-colors cursor-pointer leading-snug"
                >
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed">
                  {item.shortDescription}
                </p>
              </div>

              <div className="pt-6 mt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onRequestQuoteForService(item.title)}
                  className="text-[#855300] font-display text-xs font-bold hover:underline cursor-pointer flex items-center gap-1 group-hover:gap-1.5 transition-all"
                >
                  <span>{item.ctaText}</span>
                </button>
                <button
                  onClick={() => onSelectService(item)}
                  className="text-[11px] font-semibold text-slate-400 hover:text-[#0b1c30] transition-colors"
                >
                  Specs
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
