import React, { useState } from 'react';
import { CLIENT_PORTAL_MOCK } from '../../data/companyData';

interface ClientLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientLoginModal: React.FC<ClientLoginModalProps> = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clientId, setClientId] = useState('TAFE-MP-092');
  const [pin, setPin] = useState('••••');
  const [downloadedDoc, setDownloadedDoc] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleSimulateDownload = (docName: string) => {
    setDownloadedDoc(docName);
    setTimeout(() => {
      setDownloadedDoc(null);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#131b2e]/80 backdrop-blur-sm animate-fadeIn font-sans">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#131b2e] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px] text-[#fea619]">
                admin_panel_settings
              </span>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-[#0b1c30] leading-tight">
                Infybright Client Portal
              </h3>
              <span className="text-xs text-[#45464d]">
                Live Attendance &amp; Statutory Compliance Vault
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-6">
          {!isLoggedIn ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="p-4 bg-[#eff4ff] rounded-xl border border-blue-100 text-xs text-[#0b1c30] space-y-1">
                <span className="font-display font-bold block text-sm">
                  Authorized Enterprise Client Access
                </span>
                <p className="text-slate-600">
                  Industrial clients can access real-time guard deployment muster rolls, biometric shift logs,
                  and verified statutory EPF/ESIC challans.
                </p>
                <p className="text-[11px] text-[#855300] font-semibold pt-1">
                  Demo Client ID is prefilled. Click <strong>Access Client Dashboard</strong> below to inspect.
                </p>
              </div>

              <div>
                <label className="block font-display text-xs font-bold text-[#0b1c30] mb-1.5">
                  Enterprise Client ID / Contract Number
                </label>
                <input
                  type="text"
                  required
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fea619]"
                />
              </div>

              <div>
                <label className="block font-display text-xs font-bold text-[#0b1c30] mb-1.5">
                  Security Passcode / OTP
                </label>
                <input
                  type="password"
                  required
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fea619]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#131b2e] hover:bg-[#1e293b] text-white py-3 rounded-lg font-display text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#fea619]">key</span>
                  <span>Access Client Dashboard</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              {/* Account Overview Header */}
              <div className="p-4 bg-[#eff4ff] rounded-xl border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold text-[#855300] uppercase tracking-wider font-display block">
                    Enterprise Deployment Site
                  </span>
                  <h4 className="font-display font-bold text-base text-[#0b1c30]">
                    {CLIENT_PORTAL_MOCK.clientName}
                  </h4>
                  <span className="text-xs text-slate-500">
                    ID: {CLIENT_PORTAL_MOCK.clientCode} • Last Audit: {CLIENT_PORTAL_MOCK.lastAuditDate}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                    <span>38 Active Personnel On-Duty</span>
                  </span>
                </div>
              </div>

              {/* Live Shift Rosters */}
              <div className="space-y-3">
                <span className="font-display text-xs font-bold text-[#0b1c30] uppercase tracking-wider block">
                  Today's Shift Allocation &amp; Guard Rosters
                </span>
                <div className="space-y-2.5">
                  {CLIENT_PORTAL_MOCK.activeShifts.map((shift, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2"
                    >
                      <div>
                        <span className="font-bold text-slate-800 block">{shift.shift}</span>
                        <span className="text-slate-500">Field Supervisor: {shift.supervisor}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="bg-white border border-slate-200 px-2 py-1 rounded font-bold text-slate-700">
                          {shift.guardsDeployed} Guards
                        </span>
                        <span className="text-[#855300] font-bold">{shift.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statutory Compliance Downloads */}
              <div className="space-y-3">
                <span className="font-display text-xs font-bold text-[#0b1c30] uppercase tracking-wider block">
                  Statutory EPF / ESIC Payment Challans
                </span>
                <div className="space-y-2">
                  {CLIENT_PORTAL_MOCK.challans.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 border border-slate-200 rounded-lg flex items-center justify-between text-xs hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#855300] text-[18px]">
                          description
                        </span>
                        <span className="font-bold text-slate-800">{item.month} Compliance Bundle</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleSimulateDownload(item.epfChallan)}
                          className="px-2.5 py-1 bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0b1c30] rounded font-semibold text-[11px] flex items-center gap-1"
                        >
                          <span className="material-symbols-outlined text-[14px]">download</span>
                          <span>EPF ECR</span>
                        </button>
                        <button
                          onClick={() => handleSimulateDownload(item.esicChallan)}
                          className="px-2.5 py-1 bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0b1c30] rounded font-semibold text-[11px] flex items-center gap-1"
                        >
                          <span className="material-symbols-outlined text-[14px]">download</span>
                          <span>ESIC</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {downloadedDoc && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-xs flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  <span>
                    Successfully generated &amp; verified statutory document:{' '}
                    <strong>{downloadedDoc}</strong>.
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between rounded-b-2xl">
          {isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(false)}
              className="text-xs font-bold text-slate-500 hover:text-slate-800"
            >
              Sign Out
            </button>
          ) : (
            <span className="text-xs text-slate-500">Toll-free Helpdesk: 0751-2462876</span>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#131b2e] text-white text-xs font-bold rounded-lg hover:bg-slate-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
