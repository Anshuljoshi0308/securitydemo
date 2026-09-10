import React from 'react';
import { COMPANY_DETAILS, CERTIFICATIONS_LIST } from '../../data/companyData';
import { CertificationItem } from '../../types';

interface AboutPageProps {
  onInspectCertificate: (cert: CertificationItem) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onInspectCertificate,
  onOpenQuote,
}) => {
  const leadership = [
    {
      name: 'Capt. R. K. Bhadoriya (Retd.)',
      role: 'Director of Operations & Tactical Training',
      experience: '28+ Years in Indian Army & Industrial Security Management',
      bio: 'Heads tactical drill curriculum, physical fitness standards, and arms verification protocols for all active guarding personnel.',
    },
    {
      name: 'Sunil Sharma',
      role: 'Managing Director & Legal Compliance Lead',
      experience: '16+ Years in Corporate Facility Management & Contract Labour Law',
      bio: 'Oversees statutory compliance, EPF/ESIC administration, client relationship management, and regional branch expansion.',
    },
    {
      name: 'Dr. Anita Tomar',
      role: 'Head of Human Resources & Welfare',
      experience: '12+ Years in Workforce Recruitment & Employee Welfare',
      bio: 'Manages candidate background verification, police SP vetting, welfare benefits, and gender-inclusive housekeeping squads.',
    },
  ];

  const trainingModules = [
    {
      title: 'Physical Conditioning & Drill Discipline',
      duration: 'Day 1 – 5',
      desc: 'Parade drills, physical fitness endurance, saluting protocols, and high-visibility uniform presentation.',
    },
    {
      title: 'Access Control, Biometrics & Gate Frisking',
      duration: 'Day 6 – 10',
      desc: 'Door Frame Metal Detectors (DFMD), Handheld Detectors (HHMD), visitor badge software, and material in/out challans.',
    },
    {
      title: 'Fire Safety, Hydrant Drills & First Aid',
      duration: 'Day 11 – 15',
      desc: 'ABC powder and CO2 fire extinguisher operation, fire hydrant hose deployment, evacuation drills, and CPR basics.',
    },
    {
      title: 'Legal Duties, PSARA Norms & Crisis Response',
      duration: 'Day 16 – 20',
      desc: 'Understanding Section 100 CrPC rights, crowd de-escalation, nocturnal patrolling wand logs, and incident reporting.',
    },
  ];

  return (
    <div className="py-12 bg-[#f8f9ff] space-y-16">
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#131b2e] text-white rounded-2xl p-8 sm:p-12 lg:p-16 border border-slate-800 space-y-6 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 bg-[#3f465c]/60 text-[#fea619] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-display">
            <span className="material-symbols-outlined text-[14px]">history_edu</span>
            <span>ESTABLISHED 2014 • CENTRAL INDIA'S TRUSTED DEFENSE &amp; WORKFORCE PARTNER</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl">
            A Decade of Unwavering Vigilance, Statutory Integrity, and Industrial Precision.
          </h1>
          <p className="text-sm sm:text-base text-[#bec6e0] leading-relaxed max-w-3xl">
            Infybright Security &amp; Manpower (incorporating Super Security &amp; Labour Solutions) was founded
            with a singular mission: to provide Indian industrial enterprises with defense-grade physical
            security and certified skilled workforce capabilities backed by 100% transparent statutory
            compliance.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="bg-[#fea619] text-[#684000] px-6 py-3 rounded-lg font-display text-sm font-bold hover:bg-[#855300] hover:text-white transition-all shadow-md"
            >
              Request Corporate Profile &amp; Audit Pack
            </button>
          </div>
        </div>
      </section>

      {/* Leadership & Board */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-display text-xs text-[#855300] font-bold uppercase tracking-wider">
            EXECUTIVE LEADERSHIP
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0b1c30]">
            Guided by Veterans of Military and Industry
          </h2>
          <p className="text-sm text-[#45464d]">
            Our leadership team blends battle-tested armed forces command protocols with modern contract labor
            governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadership.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#eff4ff] text-[#855300] font-display font-extrabold text-xl flex items-center justify-center">
                  {leader.name[0]}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#0b1c30]">{leader.name}</h3>
                  <span className="text-xs text-[#855300] font-semibold block">{leader.role}</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">{leader.experience}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed pt-1">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Training & Orientation Curriculum */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-[#eff4ff] rounded-2xl p-8 sm:p-12 border border-blue-100 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="font-display text-xs text-[#855300] font-bold uppercase tracking-wider">
              CENTRAL DISPATCH ACADEMY
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0b1c30]">
              20-Day Rigorous PSARA Training &amp; Drill Protocol
            </h2>
            <p className="text-sm text-[#45464d] leading-relaxed">
              Every guard and supervisor passes through our dedicated training grounds in Gwalior before
              stepping onto a client campus.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingModules.map((mod, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 space-y-2">
                <span className="bg-[#131b2e] text-[#fea619] px-2.5 py-0.5 rounded text-[11px] font-bold font-mono inline-block">
                  {mod.duration}
                </span>
                <h4 className="font-display font-bold text-sm text-[#0b1c30] leading-snug">
                  {mod.title}
                </h4>
                <p className="text-xs text-[#45464d] leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations & Citations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-display text-xs text-[#855300] font-bold uppercase tracking-wider">
            LEGAL LICENSES &amp; CITATIONS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0b1c30]">
            Government Recognition &amp; Quality ISO Standards
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS_LIST.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-base text-[#0b1c30]">
                    {cert.title}
                  </span>
                  <span className="text-xs bg-[#eff4ff] text-[#855300] font-bold px-2 py-0.5 rounded">
                    {cert.regNumber}
                  </span>
                </div>
                <div
                  onClick={() => onInspectCertificate(cert)}
                  className="h-56 rounded-lg overflow-hidden cursor-pointer bg-slate-100 relative group"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-[#0b1c30]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                    <span>Click to Inspect High-Resolution Certificate</span>
                  </div>
                </div>
                <p className="text-xs text-[#45464d] leading-relaxed">{cert.description}</p>
              </div>
              <div className="pt-4 mt-2 border-t flex items-center justify-between">
                <span className="text-xs text-slate-500 font-semibold">{cert.signatory}</span>
                <button
                  onClick={() => onInspectCertificate(cert)}
                  className="text-xs font-bold text-[#855300] hover:underline"
                >
                  Verify Online →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
