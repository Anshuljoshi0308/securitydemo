import React from 'react';
import { COMPANY_DETAILS, SERVICES_CATALOG } from '../data/companyData';
import { ServiceItem } from '../types';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onSelectService: (service: ServiceItem) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectService,
  onOpenQuote,
}) => {
  return (
    <footer className="bg-[#131b2e] text-white pt-16 pb-12 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <img
                alt="Infybright Logo"
                className="h-9 w-auto brightness-200"
                src={COMPANY_DETAILS.logoUrl}
              />
              <div className="flex flex-col">
                <span className="font-display text-xl uppercase tracking-tight text-white font-bold leading-none">
                  Infybright
                </span>
                <span className="text-[11px] font-bold tracking-wider text-[#fea619] uppercase font-display mt-0.5">
                  Security &amp; Manpower
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#bec6e0] leading-relaxed max-w-sm">
              Premier industrial defense, certified security guarding, and skilled workforce
              infrastructure across Central India. PSARA Licensed and ISO 9001:2015 accredited.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="bg-[#1e293b] text-[#fea619] px-2.5 py-1 rounded border border-slate-700 font-display font-semibold">
                PSARA Licensed
              </span>
              <span className="bg-[#1e293b] text-[#ffb95f] px-2.5 py-1 rounded border border-slate-700 font-display font-semibold">
                ISO 9001:2015
              </span>
              <span className="bg-[#1e293b] text-white px-2.5 py-1 rounded border border-slate-700 font-display font-semibold">
                CBIC Accredited
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-display text-xs font-bold text-[#fea619] uppercase tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-[#bec6e0]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home Command
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About Organization
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Services Spectrum
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('infrastructure')}
                  className="hover:text-white transition-colors"
                >
                  Infrastructure &amp; Hubs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('clients')}
                  className="hover:text-white transition-colors"
                >
                  Enterprise Clients
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('career')}
                  className="hover:text-white transition-colors"
                >
                  Careers &amp; Recruitment
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact Directory
                </button>
              </li>
            </ul>
          </div>

          {/* Core Disciplines */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-display text-xs font-bold text-[#fea619] uppercase tracking-wider block">
              Core Disciplines
            </span>
            <ul className="space-y-2 text-xs text-[#bec6e0]">
              {SERVICES_CATALOG.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onSelectService(srv)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct Line */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-display text-xs font-bold text-[#fea619] uppercase tracking-wider block">
              Command Dispatch
            </span>
            <div className="space-y-2 text-xs text-[#bec6e0]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#fea619]">call</span>
                <a href={`tel:${COMPANY_DETAILS.primaryPhone}`} className="hover:text-white font-bold">
                  {COMPANY_DETAILS.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#fea619]">phone_iphone</span>
                <a href={`tel:+7314987524`} className="hover:text-white font-bold">
                  {COMPANY_DETAILS.altPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#fea619]">mail</span>
                <a href={`mailto:${COMPANY_DETAILS.primaryEmail}`} className="hover:text-white">
                  {COMPANY_DETAILS.primaryEmail}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-400">
                <span className="material-symbols-outlined text-[16px] text-[#fea619] mt-0.5">location_on</span>
                <span>{COMPANY_DETAILS.hqAddress}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full bg-[#fea619] text-[#684000] font-bold text-xs py-2 rounded text-center hover:bg-[#855300] hover:text-white transition-colors"
              >
                Instant Staffing Quotation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-[#7c839b] gap-4">
          <p>© 2026 {COMPANY_DETAILS.name} ({COMPANY_DETAILS.incorporatedWith}). All Rights Reserved.</p>
          <div className="flex items-center gap-4 flex-wrap">
            <span>Statutory Compliance: EPF • ESIC • Minimum Wages Act • PSARA 2005</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
