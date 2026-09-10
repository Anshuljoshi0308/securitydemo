import React from 'react';
import { CORE_FOUNDATIONAL_SERVICES } from '../data/companyData';

interface FoundationalCapabilitiesProps {
  onExploreAll: () => void;
  onRequestDeployment: (serviceTitle: string) => void;
}

export const FoundationalCapabilities: React.FC<FoundationalCapabilitiesProps> = ({
  onExploreAll,
  onRequestDeployment,
}) => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f9ff]" id="core-offerings">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="font-display text-xs text-[#855300] uppercase font-bold tracking-wider">
              FOUNDATIONAL CAPABILITIES
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0b1c30] font-extrabold tracking-tight">
              Welcome to Infybright Security &amp; Manpower Suppliers
            </h2>
            <p className="text-sm sm:text-base text-[#45464d] leading-relaxed">
              At Man Power Group we connect our deep understanding of human potential to the ambitions of
              businesses. We help organizations and individuals achieve their goals with guaranteed personnel
              uptime.
            </p>
          </div>
          <button
            onClick={onExploreAll}
            className="inline-flex items-center gap-1.5 text-[#855300] font-display text-sm font-bold hover:gap-2.5 transition-all cursor-pointer group"
          >
            <span>Explore All 8 Specialized Divisions</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              chevron_right
            </span>
          </button>
        </div>

        {/* Feature Triple Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CORE_FOUNDATIONAL_SERVICES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-slate-100 group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#855300] group-hover:bg-[#fea619]/20 transition-colors">
                  <span className="material-symbols-outlined text-[32px] text-[#855300]">
                    {item.icon}
                  </span>
                </div>

                <span className="font-display text-xs text-[#45464d] uppercase font-bold tracking-wider block">
                  {item.tag}
                </span>

                <h3 className="font-display text-xl font-bold text-[#0b1c30] group-hover:text-[#855300] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[#45464d] leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-2.5 text-sm text-[#0b1c30] pt-1">
                  {item.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#855300] text-[18px] flex-shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-medium text-xs sm:text-sm">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-2 border-t border-slate-100">
                <button
                  onClick={() => onRequestDeployment(item.title)}
                  className="inline-flex items-center gap-1.5 text-[#855300] font-display text-sm font-bold hover:underline cursor-pointer group-hover:translate-x-0.5 transition-transform"
                >
                  <span>{item.cta}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
