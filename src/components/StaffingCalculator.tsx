import React, { useState } from 'react';
import { COMPANY_DETAILS, SERVICES_CATALOG } from '../data/companyData';
import { CostBreakdown } from '../types';

interface StaffingCalculatorProps {
  preselectedService?: string;
}

export const StaffingCalculator: React.FC<StaffingCalculatorProps> = ({
  preselectedService,
}) => {
  const [service, setService] = useState(preselectedService || 'security');
  const [headcountRange, setHeadcountRange] = useState('6-20');
  const [contactName, setContactName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [shiftTiming, setShiftTiming] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showLiveBreakdown, setShowLiveBreakdown] = useState(false);

  // Compute realistic statutory breakdown based on headcounts and service category
  const calculateEstimate = (): CostBreakdown => {
    let count = 10;
    if (headcountRange === '1-5') count = 3;
    else if (headcountRange === '6-20') count = 12;
    else if (headcountRange === '21-50') count = 30;
    else if (headcountRange === '50+') count = 60;

    // Monthly rates in Central India industrial clusters per person
    let baseRate = 14500;
    if (service === 'security') baseRate = 16500; // Security guard / PSARA
    if (service === 'technical') baseRate = 21000; // Licensed electrician / HVAC
    if (service === 'staff') baseRate = 18500; // Executive receptionist / Admin
    if (service === 'labour') baseRate = 13500; // Heavy dock loader
    if (service === 'civil') baseRate = 17000;

    const basicSalaryTotal = baseRate * count;
    const epfAmount = Math.round(basicSalaryTotal * 0.12);
    const esicAmount = Math.round(basicSalaryTotal * 0.0325);
    const bonusAmount = Math.round(basicSalaryTotal * 0.0833);
    const uniformAllowance = 850 * count;
    const subtotal = basicSalaryTotal + epfAmount + esicAmount + bonusAmount + uniformAllowance;
    const gstAmount = Math.round(subtotal * 0.18);
    const monthlyTotal = subtotal + gstAmount;

    return {
      headcount: count,
      ratePerPerson: baseRate,
      basicSalaryTotal,
      epfAmount,
      esicAmount,
      bonusAmount,
      uniformAllowance,
      subtotal,
      gstAmount,
      monthlyTotal,
    };
  };

  const cost = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setShowLiveBreakdown(true);
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f9ff]" id="quick-calculator">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#131b2e] text-white rounded-2xl p-6 sm:p-10 lg:p-14 shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Text and Guidance */}
            <div className="lg:col-span-5 space-y-5">
              <span className="font-display text-xs text-[#fea619] font-bold uppercase tracking-wider">
                GET DEPLOYMENT QUOTE IN 2 HOURS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold tracking-tight leading-tight">
                Fast-Track Enterprise Staffing Calculator
              </h2>
              <p className="text-sm sm:text-base text-[#bec6e0] leading-relaxed">
                Specify your facility location and required workforce headcounts. Our operational command
                center formulates customized proposals with exact statutory breakdowns.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#bec6e0]">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#fea619] text-[20px] flex-shrink-0">
                    verified
                  </span>
                  <span>Includes EPF, ESIC, Bonus, and Uniform allowances</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#fea619] text-[20px] flex-shrink-0">
                    verified
                  </span>
                  <span>Site inspection and risk assessment within 24 hours</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#fea619] text-[20px] flex-shrink-0">
                    verified
                  </span>
                  <span>Transparent billing without hidden supplier markups</span>
                </div>
              </div>

              {/* Emergency Hotline Box */}
              <div className="pt-2">
                <div className="bg-[#1e293b] border border-slate-700 p-4 sm:p-5 rounded-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#fea619]/20 flex items-center justify-center text-[#fea619] flex-shrink-0">
                    <span className="material-symbols-outlined text-[28px]">phone_in_talk</span>
                  </div>
                  <div>
                    <span className="block font-display text-[11px] font-bold text-[#bec6e0] uppercase tracking-wider">
                      Emergency Contract Line
                    </span>
                    <div className="flex items-center gap-2 flex-wrap">
                      <a
                        className="font-display text-base sm:text-lg text-white font-bold hover:text-[#fea619] transition-colors"
                        href={`tel:+7314987524`}
                      >
                        {COMPANY_DETAILS.altPhone}
                      </a>
                      <span className="text-slate-500">/</span>
                      <a
                        className="font-display text-base sm:text-lg text-white font-bold hover:text-[#fea619] transition-colors"
                        href={`tel:07512462876`}
                      >
                        {COMPANY_DETAILS.primaryPhone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive RFP Form & Live Breakdown */}
            <div className="lg:col-span-7 bg-white text-[#0b1c30] p-6 sm:p-8 lg:p-9 rounded-2xl shadow-xl border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" id="enquiry-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Service Required */}
                  <div>
                    <label className="block font-display text-xs font-bold text-[#0b1c30] mb-1.5">
                      Primary Service Category
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-[#eff4ff] border border-blue-100 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#fea619] transition-all"
                    >
                      <option value="security">Security Guard Services (PSARA Armed/Static)</option>
                      <option value="manpower">General Industrial Manpower</option>
                      <option value="labour">Heavy Loading / Unloading Labour</option>
                      <option value="housekeeping">Facility Housekeeping &amp; Sanitation</option>
                      <option value="technical">Technical Support (Electricians / HVAC)</option>
                      <option value="gardening">Commercial Landscaping &amp; Gardening</option>
                      <option value="staff">Corporate Office Staff &amp; Front Desk</option>
                      <option value="civil">Industrial Civil Work &amp; Repair</option>
                    </select>
                  </div>

                  {/* Workforce Headcount */}
                  <div>
                    <label className="block font-display text-xs font-bold text-[#0b1c30] mb-1.5">
                      Personnel Count Needed
                    </label>
                    <select
                      value={headcountRange}
                      onChange={(e) => setHeadcountRange(e.target.value)}
                      className="w-full bg-[#eff4ff] border border-blue-100 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#fea619] transition-all"
                    >
                      <option value="1-5">1 – 5 Personnel</option>
                      <option value="6-20">6 – 20 Personnel (Standard Plant)</option>
                      <option value="21-50">21 – 50 Personnel (Multi-Shift)</option>
                      <option value="50+">50+ Personnel (Large Scale Enterprise)</option>
                    </select>
                  </div>

                  {/* Authorized Contact Name */}
                  <div>
                    <label className="block font-display text-xs font-bold text-[#0b1c30] mb-1.5">
                      Authorized Contact Person
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sanjeev Singh"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-[#eff4ff] border border-blue-100 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#fea619] transition-all"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block font-display text-xs font-bold text-[#0b1c30] mb-1.5">
                      Company / Industrial Facility
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Industrial Automation Ltd."
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-[#eff4ff] border border-blue-100 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#fea619] transition-all"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block font-display text-xs font-bold text-[#0b1c30] mb-1.5">
                      Direct Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#eff4ff] border border-blue-100 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#fea619] transition-all"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block font-display text-xs font-bold text-[#0b1c30] mb-1.5">
                      Deployment Location / City
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Gwalior, Indore, Bhopal, etc."
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-[#eff4ff] border border-blue-100 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#fea619] transition-all"
                    />
                  </div>
                </div>

                {/* Shift Timings & Notes */}
                <div>
                  <label className="block font-display text-xs font-bold text-[#0b1c30] mb-1.5">
                    Shift Timings &amp; Statutory Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Mention shift requirements (8hr/12hr), armed guard needs, or specific industrial certifications..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#eff4ff] border border-blue-100 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#fea619] transition-all"
                  />
                </div>

                {/* Statutory Preview Toggle */}
                <div className="bg-[#eff4ff] p-3.5 rounded-xl border border-blue-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#855300] text-[18px]">
                      calculate
                    </span>
                    <span className="font-display font-semibold text-[#0b1c30]">
                      Estimated Budget: ~₹{cost.monthlyTotal.toLocaleString('en-IN')}/mo
                    </span>
                    <span className="text-[#45464d] text-[11px] hidden sm:inline">
                      ({cost.headcount} personnel all inclusive)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowLiveBreakdown(!showLiveBreakdown)}
                    className="text-[#855300] font-bold hover:underline cursor-pointer"
                  >
                    {showLiveBreakdown ? 'Hide Breakdown' : 'View Statutory Breakdown'}
                  </button>
                </div>

                {/* Live Breakdown Table */}
                {showLiveBreakdown && (
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2 text-xs">
                    <div className="flex justify-between font-display font-bold border-b pb-1.5 text-slate-800">
                      <span>Statutory Component</span>
                      <span>Amount (INR / month)</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Gross Minimum Wages ({cost.headcount} × ₹{cost.ratePerPerson.toLocaleString('en-IN')})</span>
                      <span>₹{cost.basicSalaryTotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Employee Provident Fund (EPF @ 12%)</span>
                      <span>₹{cost.epfAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Employee State Insurance (ESIC @ 3.25%)</span>
                      <span>₹{cost.esicAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Statutory Annual Bonus Provision (8.33%)</span>
                      <span>₹{cost.bonusAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Uniform, Safety Boots &amp; PPE Kit Allowance</span>
                      <span>₹{cost.uniformAllowance.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-slate-600 border-t pt-1 font-semibold">
                      <span>Subtotal (Direct Operational Cost)</span>
                      <span>₹{cost.subtotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>GST @ 18% (Claimable Input Tax Credit)</span>
                      <span>₹{cost.gstAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between font-display font-bold text-[#855300] text-sm border-t pt-2">
                      <span>Total Enterprise Contract Cost:</span>
                      <span>₹{cost.monthlyTotal.toLocaleString('en-IN')} / mo</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 flex-wrap gap-4">
                  <span className="font-display text-xs text-[#45464d] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#855300]">lock</span>
                    <span>Direct Executive Routing</span>
                  </span>
                  <button
                    type="submit"
                    className="bg-[#fea619] text-[#684000] px-6 py-3 rounded-lg font-display text-sm font-bold hover:bg-[#855300] hover:text-white transition-all shadow-md cursor-pointer"
                  >
                    Submit Requirement &amp; Get Quotation
                  </button>
                </div>
              </form>

              {isSubmitted && (
                <div
                  id="form-success"
                  className="mt-4 p-4 bg-[#eff4ff] border border-[#fea619]/40 text-[#0b1c30] rounded-xl text-xs sm:text-sm flex items-start gap-3 animate-fadeIn"
                >
                  <span className="material-symbols-outlined text-[#855300] text-[24px] flex-shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <div>
                    <span className="font-bold font-display block text-sm">
                      Requirement Successfully Logged!
                    </span>
                    <p className="text-slate-600 mt-0.5">
                      Thank you, {contactName || 'Valued Client'}. Your deployment inquiry for{' '}
                      <strong>{company || 'your facility'}</strong> has been assigned Ticket #
                      <strong>INF-2026-{(Math.random() * 8000 + 1000).toFixed(0)}</strong>. An Infybright
                      Operations Lead will contact you with full compliance documentation within 2
                      business hours.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
