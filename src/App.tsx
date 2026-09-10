import React, { useState } from 'react';
import { Header } from './components/Header';
import { OperationalBanner } from './components/OperationalBanner';
import { HeroSection } from './components/HeroSection';
import { FoundationalCapabilities } from './components/FoundationalCapabilities';
import { CertificationsSection } from './components/CertificationsSection';
import { StatsCounterSection } from './components/StatsCounterSection';
import { ServicesSection } from './components/ServicesSection';
import { ClientsShowcase } from './components/ClientsShowcase';
import { StaffingCalculator } from './components/StaffingCalculator';
import { HeadquartersSection } from './components/HeadquartersSection';
import { Footer } from './components/Footer';

// Pages
import { AboutPage } from './components/Pages/AboutPage';
import { InfrastructurePage } from './components/Pages/InfrastructurePage';
import { ClientsPage } from './components/Pages/ClientsPage';
import { GalleryPage } from './components/Pages/GalleryPage';
import { CareerPage } from './components/Pages/CareerPage';
import { ContactPage } from './components/Pages/ContactPage';

// Modals
import { CertificateModal } from './components/Modals/CertificateModal';
import { ClientLoginModal } from './components/Modals/ClientLoginModal';
import { ServiceDetailModal } from './components/Modals/ServiceDetailModal';
import { QuoteModal } from './components/Modals/QuoteModal';

import { CERTIFICATIONS_LIST } from './data/companyData';
import { ServiceItem, CertificationItem, ClientItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificationItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [quoteServicePrefill, setQuoteServicePrefill] = useState<string>('');

  const handleOpenQuoteForService = (serviceTitle: string) => {
    setQuoteServicePrefill(serviceTitle);
    setIsQuoteOpen(true);
  };

  const handleInspectCertificateById = (id: string) => {
    const cert = CERTIFICATIONS_LIST.find((c) => c.id === id) || CERTIFICATIONS_LIST[0];
    setSelectedCertificate(cert);
  };

  const handleSelectClient = (_client: ClientItem) => {
    setActiveTab('clients');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#0b1c30]">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuote={() => {
          setQuoteServicePrefill('');
          setIsQuoteOpen(true);
        }}
        onOpenLogin={() => setIsLoginOpen(true)}
        onSelectService={(service) => setSelectedService(service)}
      />

      {/* Main Content Area (padded top for sticky navbar) */}
      <main className="flex-grow pt-28">
        <OperationalBanner />

        {activeTab === 'home' && (
          <>
            <HeroSection
              onOpenQuote={() => {
                const el = document.getElementById('quick-calculator');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onExploreServices={() => {
                const el = document.getElementById('all-services');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onViewCitation={() => handleInspectCertificateById('cbic-gst-appreciation')}
            />

            <FoundationalCapabilities
              onExploreAll={() => {
                const el = document.getElementById('all-services');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onRequestDeployment={(title) => handleOpenQuoteForService(title)}
            />

            <CertificationsSection
              onInspectCertificate={(cert) => setSelectedCertificate(cert)}
            />

            <StatsCounterSection />

            <ServicesSection
              onSelectService={(service) => setSelectedService(service)}
              onRequestQuoteForService={(title) => handleOpenQuoteForService(title)}
            />

            <ClientsShowcase onSelectClient={handleSelectClient} />

            <StaffingCalculator preselectedService="security" />

            <HeadquartersSection />
          </>
        )}

        {activeTab === 'about' && (
          <AboutPage
            onInspectCertificate={(cert) => setSelectedCertificate(cert)}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {activeTab === 'services' && (
          <div className="space-y-12">
            <ServicesSection
              onSelectService={(service) => setSelectedService(service)}
              onRequestQuoteForService={(title) => handleOpenQuoteForService(title)}
            />
            <StaffingCalculator preselectedService="security" />
          </div>
        )}

        {activeTab === 'infrastructure' && (
          <InfrastructurePage onOpenQuote={() => setIsQuoteOpen(true)} />
        )}

        {activeTab === 'clients' && (
          <ClientsPage onOpenQuote={() => setIsQuoteOpen(true)} />
        )}

        {activeTab === 'gallery' && <GalleryPage />}

        {activeTab === 'career' && <CareerPage />}

        {activeTab === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectService={(srv) => setSelectedService(srv)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Interactive Modals */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      <ClientLoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={(title) => handleOpenQuoteForService(title)}
      />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={quoteServicePrefill}
      />
    </div>
  );
}
