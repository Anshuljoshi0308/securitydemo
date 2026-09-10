import React, { useState } from 'react';
import { COMPANY_DETAILS, BRANCH_HUBS } from '../../data/companyData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-[#f8f9ff] space-y-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#131b2e] text-white rounded-2xl p-8 sm:p-12 lg:p-16 border border-slate-800 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#3f465c]/60 text-[#fea619] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-display">
            <span className="material-symbols-outlined text-[14px]">contact_phone</span>
            <span>CENTRAL CONTACT DIRECTORY &amp; DISPATCH</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl">
            Connect with Our Operations Command Desk.
          </h1>
          <p className="text-sm sm:text-base text-[#bec6e0] leading-relaxed max-w-3xl">
            Whether you require an immediate security audit, a replacement guard squad, or a turnkey
            industrial manpower contract, our team is available 24/7.
          </p>
        </div>
      </section>

      {/* Directory & Form Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details & Regional Branches */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b">
                <div className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#855300] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[28px]">domain</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#0b1c30]">
                    Central Corporate Headquarters
                  </h3>
                  <span className="text-xs text-[#855300] font-semibold">Gwalior Command Office</span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#855300] text-[20px] mt-0.5">
                    location_on
                  </span>
                  <div>
                    <span className="font-bold text-slate-900 block">Postal Address</span>
                    <p className="text-slate-600 mt-0.5">{COMPANY_DETAILS.hqAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#855300] text-[20px] mt-0.5">
                    call
                  </span>
                  <div>
                    <span className="font-bold text-slate-900 block">Phone Hotlines</span>
                    <div className="flex items-center gap-3 mt-0.5">
                      <a href={`tel:07512462876`} className="hover:text-[#855300] font-bold">
                        {COMPANY_DETAILS.primaryPhone}
                      </a>
                      <span>/</span>
                      <a href={`tel:+7314987524`} className="hover:text-[#855300] font-bold">
                        {COMPANY_DETAILS.altPhone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#855300] text-[20px] mt-0.5">
                    mail
                  </span>
                  <div>
                    <span className="font-bold text-slate-900 block">Official Inquiries</span>
                    <div className="space-y-0.5 mt-0.5">
                      <a
                        href={`mailto:${COMPANY_DETAILS.primaryEmail}`}
                        className="hover:text-[#855300] block"
                      >
                        {COMPANY_DETAILS.primaryEmail}
                      </a>
                      <a
                        href={`mailto:${COMPANY_DETAILS.altEmail}`}
                        className="hover:text-[#855300] block"
                      >
                        {COMPANY_DETAILS.altEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between text-xs text-slate-500">
                <span>GST: 23AFEPT0749Q1ZX</span>
                <span>ISO: 23AAZCS9723N1ZC</span>
              </div>
            </div>

            {/* Regional Hubs Cards */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm text-[#0b1c30] uppercase tracking-wider">
                Regional Hubs Network
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BRANCH_HUBS.slice(1).map((hub) => (
                  <div key={hub.id} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-sm text-[#0b1c30]">{hub.city}</span>
                      <span className="text-[10px] bg-amber-50 text-[#855300] font-bold px-2 py-0.5 rounded">
                        Hub
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{hub.address}</p>
                    <div className="pt-1 text-xs text-[#855300] font-bold">
                      Hotline: {hub.phones[0]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Electronic Message Form */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
            <div>
              <span className="font-display text-xs text-[#855300] font-bold uppercase tracking-wider block">
                MESSAGE OUR DISPATCH LEAD
              </span>
              <h3 className="font-display text-xl font-extrabold text-[#0b1c30]">
                Send an Executive Inquiry
              </h3>
              <p className="text-xs text-[#45464d] mt-1">
                Have a specialized request or enterprise proposal request? We respond within 2 hours.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#0b1c30] mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Malhotra"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#eff4ff] border border-blue-100 px-3.5 py-2.5 rounded-lg focus:ring-2 focus:ring-[#fea619] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#0b1c30] mb-1">Company / Organization</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Modern Steel Works"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-[#eff4ff] border border-blue-100 px-3.5 py-2.5 rounded-lg focus:ring-2 focus:ring-[#fea619] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#0b1c30] mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#eff4ff] border border-blue-100 px-3.5 py-2.5 rounded-lg focus:ring-2 focus:ring-[#fea619] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#0b1c30] mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98XXX XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#eff4ff] border border-blue-100 px-3.5 py-2.5 rounded-lg focus:ring-2 focus:ring-[#fea619] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#0b1c30] mb-1">Your Message or Requirements</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your facility, required headcount, shift requirements, or compliance questions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#eff4ff] border border-blue-100 px-3.5 py-2.5 rounded-lg focus:ring-2 focus:ring-[#fea619] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#131b2e] text-white hover:bg-[#1e293b] font-display text-sm font-bold py-3 rounded-lg transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#fea619]">send</span>
                  <span>Transmit Inquiry to Dispatch Desk</span>
                </button>
              </form>
            ) : (
              <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-center space-y-3">
                <span className="material-symbols-outlined text-green-700 text-[40px]">
                  mark_email_read
                </span>
                <h4 className="font-display font-bold text-base text-green-900">
                  Message Transmitted Successfully!
                </h4>
                <p className="text-xs text-green-800">
                  Thank you, <strong>{name}</strong> from <strong>{company}</strong>. Our Regional
                  Operations Team in Gwalior will reach out to you via {phone || email} shortly.
                </p>
                <div className="pt-2 text-xs font-semibold text-slate-500">
                  For immediate escalation, please call {COMPANY_DETAILS.primaryPhone}.
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
