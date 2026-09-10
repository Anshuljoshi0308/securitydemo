import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../../data/companyData';

export const CareerPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState('Security Guard');
  const [candidateName, setCandidateName] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');
  const [candidateCity, setCandidateCity] = useState('');
  const [experience, setExperience] = useState('0-1');
  const [isExServiceman, setIsExServiceman] = useState('No');
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    {
      id: 'guard',
      title: 'Industrial Security Guard (Unarmed)',
      location: 'Gwalior / Malanpur / Pithampur / Bhopal',
      vacancies: '35 Openings',
      salary: '₹14,500 – ₹18,000 / mo + EPF + ESIC + Bonus',
      requirements: 'Height: Minimum 5 ft 7 in. Clean police record. 10th pass preferred. Age 18–45.',
    },
    {
      id: 'gunman',
      title: 'Armed Security Gunman (12-Bore / DBBL)',
      location: 'Central MP Industrial Sites',
      vacancies: '12 Openings',
      salary: '₹22,000 – ₹28,000 / mo + Benefits',
      requirements: 'Valid personal weapons license. Ex-Servicemen (Army / Navy / Air Force / Para-military) preferred.',
    },
    {
      id: 'supervisor',
      title: 'Security Field Operations Supervisor',
      location: 'Indore & Bhopal Corridors',
      vacancies: '6 Openings',
      salary: '₹20,000 – ₹26,000 / mo + Fuel Allowance',
      requirements: 'Valid 2-wheeler license. 3+ years experience managing guard shifts and muster rolls.',
    },
    {
      id: 'housekeeper',
      title: 'Mechanized Housekeeping Executive',
      location: 'Gwalior Corporate Sites',
      vacancies: '20 Openings',
      salary: '₹13,500 – ₹16,500 / mo + PF / ESIC',
      requirements: 'Experience operating commercial floor scrubbers and chemical safety handling.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-[#f8f9ff] space-y-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#131b2e] text-white rounded-2xl p-8 sm:p-12 lg:p-16 border border-slate-800 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#3f465c]/60 text-[#fea619] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-display">
            <span className="material-symbols-outlined text-[14px]">work</span>
            <span>RECRUITMENT &amp; WORKFORCE ENROLLMENT PORTAL</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl">
            Join the Premier Security &amp; Industrial Force in Central India.
          </h1>
          <p className="text-sm sm:text-base text-[#bec6e0] leading-relaxed max-w-3xl">
            We provide guaranteed on-time monthly salary transfers, 100% EPF/ESIC deposits, subsidized
            uniforms, annual bonuses, and continuous military-style tactical promotion tracks.
          </p>
        </div>
      </section>

      {/* Open Positions & Application Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Job Listings */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="font-display text-xs text-[#855300] font-bold uppercase tracking-wider">
                CURRENT OPENINGS
              </span>
              <h2 className="font-display text-2xl font-extrabold text-[#0b1c30]">
                Immediate Deployment Vacancies
              </h2>
            </div>

            <div className="space-y-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 space-y-3 hover:border-[#fea619]/50 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="font-display font-bold text-base text-[#0b1c30]">{job.title}</h3>
                    <span className="bg-[#eff4ff] text-[#855300] font-bold text-xs px-2.5 py-1 rounded-full self-start sm:self-auto">
                      {job.vacancies}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[#45464d] flex-wrap">
                    <span className="flex items-center gap-1 font-semibold text-slate-700">
                      <span className="material-symbols-outlined text-[16px] text-[#855300]">location_on</span>
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1 font-bold text-green-700">
                      <span className="material-symbols-outlined text-[16px]">payments</span>
                      {job.salary}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed border-t pt-2">
                    {job.requirements}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setSelectedJob(job.title);
                        const el = document.getElementById('candidate-form');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs font-bold text-[#855300] hover:underline flex items-center gap-1"
                    >
                      <span>Apply for this Role</span>
                      <span>→</span>
                    </button>
                    <span className="text-[11px] text-slate-400">Immediate Joining</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Candidate Fast-Enrollment Form */}
          <div
            id="candidate-form"
            className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-5"
          >
            <div>
              <span className="font-display text-xs text-[#855300] font-bold uppercase tracking-wider block">
                CANDIDATE REGISTRATION
              </span>
              <h3 className="font-display text-xl font-extrabold text-[#0b1c30]">
                Direct Enrollment Form
              </h3>
              <p className="text-xs text-[#45464d] mt-1">
                Fill details below. Our HR recruitment lead will schedule your physical fitness test at
                Gwalior central grounds.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block font-bold text-[#0b1c30] mb-1">Applying For Position</label>
                  <select
                    value={selectedJob}
                    onChange={(e) => setSelectedJob(e.target.value)}
                    className="w-full bg-[#eff4ff] border border-blue-100 px-3 py-2 rounded-lg focus:ring-2 focus:ring-[#fea619] focus:outline-none"
                  >
                    <option value="Security Guard">Industrial Security Guard (Unarmed)</option>
                    <option value="Armed Gunman">Armed Security Gunman</option>
                    <option value="Field Operations Supervisor">Field Operations Supervisor</option>
                    <option value="Housekeeping Executive">Housekeeping Executive</option>
                    <option value="Assembly Operator">General Industrial Manpower</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#0b1c30] mb-1">Full Candidate Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    className="w-full bg-[#eff4ff] border border-blue-100 px-3 py-2 rounded-lg focus:ring-2 focus:ring-[#fea619] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#0b1c30] mb-1">Mobile Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={candidatePhone}
                      onChange={(e) => setCandidatePhone(e.target.value)}
                      className="w-full bg-[#eff4ff] border border-blue-100 px-3 py-2 rounded-lg focus:ring-2 focus:ring-[#fea619] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#0b1c30] mb-1">Current City / Town</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gwalior / Morena"
                      value={candidateCity}
                      onChange={(e) => setCandidateCity(e.target.value)}
                      className="w-full bg-[#eff4ff] border border-blue-100 px-3 py-2 rounded-lg focus:ring-2 focus:ring-[#fea619] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#0b1c30] mb-1">Security Experience</label>
                    <select
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full bg-[#eff4ff] border border-blue-100 px-3 py-2 rounded-lg focus:ring-2 focus:ring-[#fea619] focus:outline-none"
                    >
                      <option value="fresher">Fresher (New Recruit)</option>
                      <option value="0-1">1 Year Experience</option>
                      <option value="2-4">2 – 4 Years</option>
                      <option value="5+">5+ Years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-[#0b1c30] mb-1">Ex-Serviceman / Defense?</label>
                    <select
                      value={isExServiceman}
                      onChange={(e) => setIsExServiceman(e.target.value)}
                      className="w-full bg-[#eff4ff] border border-blue-100 px-3 py-2 rounded-lg focus:ring-2 focus:ring-[#fea619] focus:outline-none"
                    >
                      <option value="No">No (Civilian)</option>
                      <option value="Army">Yes (Indian Army)</option>
                      <option value="Paramilitary">Yes (CRPF / BSF / CISF)</option>
                      <option value="Police">Yes (State Police)</option>
                    </select>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600">
                  <span className="font-bold text-slate-800 block mb-0.5">Verification Note:</span>
                  Selected candidates must bring original Aadhar Card, Police Verification Certificate, and
                  Bank Passbook for EPF linkage.
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#fea619] text-[#684000] hover:bg-[#855300] hover:text-white font-display text-sm font-bold py-3 rounded-lg transition-all shadow-md"
                >
                  Submit Application
                </button>
              </form>
            ) : (
              <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-center space-y-3">
                <span className="material-symbols-outlined text-green-700 text-[40px]">
                  task_alt
                </span>
                <h4 className="font-display font-bold text-base text-green-900">
                  Application Registered!
                </h4>
                <p className="text-xs text-green-800">
                  Thank you, <strong>{candidateName}</strong>. Your application for{' '}
                  <strong>{selectedJob}</strong> has been logged. Our Recruitment Officer will call you at{' '}
                  <strong>{candidatePhone}</strong> for reporting time.
                </p>
                <div className="pt-2 text-xs font-semibold text-slate-500">
                  Recruitment Desk: {COMPANY_DETAILS.primaryPhone}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
