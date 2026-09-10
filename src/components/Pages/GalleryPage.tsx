import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../../data/companyData';

export const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'security' | 'training' | 'industrial' | 'awards'>('all');

  const galleryItems = [
    {
      id: 1,
      category: 'security',
      title: 'Disciplined Security Guard Shift Formation',
      caption: 'Full-shift turnout in high-visibility reflective uniforms with mandatory batons and searchlights.',
      image: COMPANY_DETAILS.guardPhotoUrl,
    },
    {
      id: 2,
      category: 'awards',
      title: 'Central Board of Taxes & Customs Citation Ceremony',
      caption: 'Ministry of Finance appreciation plaque presented for statutory compliance and nation building.',
      image: COMPANY_DETAILS.cbicCertUrl,
    },
    {
      id: 3,
      category: 'awards',
      title: 'ISO 9001:2015 Quality Management Accreditation',
      caption: 'Certified scope covering physical guarding, facility maintenance, and industrial manpower outsourcing.',
      image: COMPANY_DETAILS.isoCertUrl,
    },
    {
      id: 4,
      category: 'training',
      title: 'Tactical Perimeter & Fire Hydrant Readiness Drill',
      caption: 'Live demonstration of high-pressure water hose handling and chemical fire extinguisher discharge.',
      image: COMPANY_DETAILS.guardPhotoUrl,
    },
    {
      id: 5,
      category: 'industrial',
      title: 'Gwalior Regional Operations Dispatch Center',
      caption: 'Command center monitoring 10+ operational nodes across Madhya Pradesh and Central India.',
      image: COMPANY_DETAILS.mapImageUrl,
    },
  ];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter((i) => i.category === filter);

  return (
    <div className="py-12 bg-[#f8f9ff] space-y-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#131b2e] text-white rounded-2xl p-8 sm:p-12 lg:p-16 border border-slate-800 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#3f465c]/60 text-[#fea619] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-display">
            <span className="material-symbols-outlined text-[14px]">photo_library</span>
            <span>OPERATIONAL ARCHIVE &amp; ON-GROUND VIGILANCE</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl">
            Operations in Motion: Parades, Drills, and Certified Standards.
          </h1>
          <p className="text-sm sm:text-base text-[#bec6e0] leading-relaxed max-w-3xl">
            Witness our on-ground security force, assembly line manpower squads, mechanized housekeeping
            teams, and official government accreditations.
          </p>
        </div>
      </section>

      {/* Gallery Grid with Category Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { key: 'all', label: 'All Operations' },
            { key: 'security', label: 'Security Guarding' },
            { key: 'training', label: 'Tactical Drills' },
            { key: 'industrial', label: 'Command & Hubs' },
            { key: 'awards', label: 'Accreditations & Citations' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as any)}
              className={`px-4 py-2 rounded-lg font-display text-xs font-bold transition-all cursor-pointer ${
                filter === tab.key
                  ? 'bg-[#855300] text-white shadow-md'
                  : 'bg-white text-[#45464d] border border-slate-200 hover:border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 group flex flex-col justify-between"
            >
              <div className="h-64 sm:h-72 overflow-hidden bg-slate-100 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#131b2e]/80 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[10px] font-display font-bold uppercase tracking-wider">
                  {item.category}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-display font-bold text-base text-[#0b1c30] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#45464d] leading-relaxed">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
