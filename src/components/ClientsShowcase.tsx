import React from 'react';
import { CLIENTS_LIST } from '../data/companyData';
import { ClientItem } from '../types';

interface ClientsShowcaseProps {
  onSelectClient?: (client: ClientItem) => void;
}

export const ClientsShowcase: React.FC<ClientsShowcaseProps> = ({ onSelectClient }) => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#eff4ff]" id="enterprise-clients">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-12">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-display text-xs text-[#855300] font-bold uppercase tracking-wider">
            ENTERPRISE CLIENTELE
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0b1c30] font-extrabold tracking-tight">
            Some of Our Best Clients
          </h2>
          <p className="text-sm sm:text-base text-[#45464d] leading-relaxed">
            Trusted by India's leading industrial conglomerates, state environmental boards, automotive
            manufacturers, and consumer giants.
          </p>
        </div>

        {/* High Impact 5-Brand Presentation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {CLIENTS_LIST.map((client) => (
            <div
              key={client.id}
              onClick={() => onSelectClient && onSelectClient(client)}
              className="bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group h-40 border border-slate-100 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#0b1c30] font-display font-bold text-lg mb-2 group-hover:bg-[#fea619] group-hover:text-[#684000] transition-colors">
                {client.badgeInitial}
              </div>
              <span className="font-display text-base font-bold text-[#0b1c30] group-hover:text-[#855300] transition-colors leading-tight">
                {client.name}
              </span>
              <span className="font-display text-[10px] text-[#45464d] uppercase tracking-wider mt-1">
                {client.subtitle}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial / Compliance Assurance Banner */}
        <div className="bg-[#e5eeff] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-blue-200">
          <div className="flex items-start sm:items-center gap-4">
            <span className="material-symbols-outlined text-[40px] text-[#855300] flex-shrink-0">
              format_quote
            </span>
            <div>
              <p className="font-display text-base sm:text-lg text-[#0b1c30] font-semibold italic leading-relaxed">
                "Infybright has maintained zero personnel absenteeism across our factory shifts for the last 4
                consecutive quarters with rigorous statutory PF and insurance compliance."
              </p>
              <span className="font-display text-xs text-[#45464d] uppercase font-bold tracking-wider block mt-2">
                — Industrial General Manager, Regional Manufacturing Cluster
              </span>
            </div>
          </div>
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 font-display text-xs bg-white px-4 py-2 rounded-lg font-bold text-[#855300] shadow-sm border border-slate-100">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>100% Vetted Audits</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
