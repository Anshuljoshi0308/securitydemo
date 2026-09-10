import React, { useState } from 'react';
import { COMPANY_DETAILS, SERVICES_CATALOG } from '../data/companyData';
import { ServiceItem } from '../types';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenQuote: () => void;
  onOpenLogin: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenQuote,
  onOpenLogin,
  onSelectService,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)] font-sans">
      {/* Top Bar */}
      <div className="bg-[#131b2e] text-white py-2 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#fea619]">mail</span>
              <a
                className="hover:text-[#fea619] transition-colors"
                href={`mailto:${COMPANY_DETAILS.primaryEmail}`}
              >
                {COMPANY_DETAILS.primaryEmail}
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#fea619]">call</span>
              <a className="hover:text-[#fea619] transition-colors" href={`tel:+7314987524`}>
                {COMPANY_DETAILS.altPhone}
              </a>
              <span className="opacity-40">/</span>
              <a className="hover:text-[#fea619] transition-colors" href={`tel:07512462876`}>
                {COMPANY_DETAILS.primaryPhone}
              </a>
            </div>
            <div className="inline-flex items-center gap-1 bg-[#3f465c] px-2 py-0.5 rounded text-[11px] font-semibold text-white">
              <span className="material-symbols-outlined text-[14px] text-[#fea619]">verified</span>
              <span>ISO 9001:2015 Certified</span>
            </div>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <button
              onClick={onOpenLogin}
              className="inline-flex items-center gap-1 text-white hover:text-[#fea619] transition-colors text-xs font-semibold cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">lock</span>
              <span>Client Login</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="h-20 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div
            className="flex items-center gap-3 flex-shrink-0 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <img
              alt="Infybright Brand Logo"
              className="h-8 w-auto object-contain"
              src={COMPANY_DETAILS.logoUrl}
            />
            <div className="flex flex-col">
              <span className="font-display text-lg uppercase tracking-tight text-[#0b1c30] font-bold leading-tight">
                Infybright
              </span>
              <span className="text-[10px] font-bold tracking-wider text-[#45464d] uppercase font-display">
                Security &amp; Manpower
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-[#45464d]">
            <button
              onClick={() => handleNavClick('home')}
              className={`py-2 transition-colors ${
                activeTab === 'home'
                  ? 'text-[#855300] font-bold border-b-2 border-[#855300]'
                  : 'hover:text-[#0b1c30]'
              }`}
            >
              Home
            </button>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('about')}
                className={`inline-flex items-center gap-1 py-2 transition-colors ${
                  activeTab === 'about' ? 'text-[#855300] font-bold' : 'hover:text-[#0b1c30]'
                }`}
              >
                <span>About Us</span>
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>

              {aboutDropdownOpen && (
                <div className="absolute left-0 top-full pt-1 z-50 min-w-[240px]">
                  <div className="bg-white rounded-lg shadow-xl border border-slate-100 py-2">
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left block px-4 py-2 text-xs font-medium text-[#45464d] hover:bg-[#e5eeff] hover:text-[#0b1c30]"
                    >
                      Company Profile
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left block px-4 py-2 text-xs font-medium text-[#45464d] hover:bg-[#e5eeff] hover:text-[#0b1c30]"
                    >
                      Board of Directors
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left block px-4 py-2 text-xs font-medium text-[#45464d] hover:bg-[#e5eeff] hover:text-[#0b1c30]"
                    >
                      Training &amp; Orientation
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left block px-4 py-2 text-xs font-medium text-[#45464d] hover:bg-[#e5eeff] hover:text-[#0b1c30]"
                    >
                      License &amp; Registration
                    </button>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="w-full text-left block px-4 py-2 text-xs font-medium text-[#45464d] hover:bg-[#e5eeff] hover:text-[#0b1c30]"
                    >
                      Appreciation &amp; Accreditation
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`inline-flex items-center gap-1 py-2 transition-colors ${
                  activeTab === 'services' ? 'text-[#855300] font-bold' : 'hover:text-[#0b1c30]'
                }`}
              >
                <span>Services</span>
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 top-full pt-1 z-50 min-w-[280px]">
                  <div className="bg-white rounded-lg shadow-xl border border-slate-100 py-2">
                    {SERVICES_CATALOG.map((serv) => (
                      <button
                        key={serv.id}
                        onClick={() => {
                          onSelectService(serv);
                          setServicesDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-xs font-medium text-[#45464d] hover:bg-[#e5eeff] hover:text-[#0b1c30] flex items-center justify-between"
                      >
                        <span>{serv.title}</span>
                        <span className="text-[10px] text-amber-600 font-bold">Inspect</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('infrastructure')}
              className={`py-2 transition-colors ${
                activeTab === 'infrastructure' ? 'text-[#855300] font-bold' : 'hover:text-[#0b1c30]'
              }`}
            >
              Infrastructure
            </button>
            <button
              onClick={() => handleNavClick('clients')}
              className={`py-2 transition-colors ${
                activeTab === 'clients' ? 'text-[#855300] font-bold' : 'hover:text-[#0b1c30]'
              }`}
            >
              Clients
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className={`py-2 transition-colors ${
                activeTab === 'gallery' ? 'text-[#855300] font-bold' : 'hover:text-[#0b1c30]'
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavClick('career')}
              className={`py-2 transition-colors ${
                activeTab === 'career' ? 'text-[#855300] font-bold' : 'hover:text-[#0b1c30]'
              }`}
            >
              Career
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`py-2 transition-colors ${
                activeTab === 'contact' ? 'text-[#855300] font-bold' : 'hover:text-[#0b1c30]'
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="hidden sm:inline-flex items-center justify-center bg-[#fea619] text-[#684000] font-semibold text-xs px-4 py-2.5 rounded hover:bg-[#855300] hover:text-white transition-all shadow-sm cursor-pointer"
            >
              Request Quote
            </button>
            <button
              onClick={onOpenLogin}
              title="Client Account Portal"
              className="w-9 h-9 rounded-full bg-[#000000] text-white flex items-center justify-center hover:bg-[#131b2e] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-black"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 shadow-lg">
            <button
              onClick={() => handleNavClick('home')}
              className="block w-full text-left px-3 py-2 rounded text-sm font-semibold hover:bg-slate-50"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="block w-full text-left px-3 py-2 rounded text-sm font-semibold hover:bg-slate-50"
            >
              About Us (Profile, Directors, Training, Compliance)
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="block w-full text-left px-3 py-2 rounded text-sm font-semibold hover:bg-slate-50"
            >
              Services (8 Core Disciplines)
            </button>
            <button
              onClick={() => handleNavClick('infrastructure')}
              className="block w-full text-left px-3 py-2 rounded text-sm font-semibold hover:bg-slate-50"
            >
              Infrastructure &amp; Hubs
            </button>
            <button
              onClick={() => handleNavClick('clients')}
              className="block w-full text-left px-3 py-2 rounded text-sm font-semibold hover:bg-slate-50"
            >
              Enterprise Clients
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className="block w-full text-left px-3 py-2 rounded text-sm font-semibold hover:bg-slate-50"
            >
              Operations Gallery
            </button>
            <button
              onClick={() => handleNavClick('career')}
              className="block w-full text-left px-3 py-2 rounded text-sm font-semibold hover:bg-slate-50"
            >
              Career &amp; Recruitment
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left px-3 py-2 rounded text-sm font-semibold hover:bg-slate-50"
            >
              Contact Directory
            </button>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full bg-[#fea619] text-[#684000] font-bold text-sm py-2.5 rounded text-center"
              >
                Instant Staffing Quotation
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full bg-[#131b2e] text-white font-bold text-sm py-2.5 rounded text-center"
              >
                Client Portal Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
