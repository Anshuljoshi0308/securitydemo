export interface ServiceItem {
  id: string;
  title: string;
  categoryTag: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  deliverables: string[];
  equipmentProvided: string[];
  complianceNotes: string;
  targetIndustries: string[];
  ctaText: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  authority: string;
  regNumber: string;
  image: string;
  badgeTitle: string;
  description: string;
  signatory: string;
  auditStatus: string;
  validity: string;
  verificationDetails: string[];
}

export interface ClientItem {
  id: string;
  name: string;
  subtitle: string;
  badgeInitial: string;
  sector: string;
  deploymentSummary: string;
  quote?: string;
}

export interface BranchOffice {
  id: string;
  city: string;
  type: string;
  address: string;
  phones: string[];
  emails: string[];
  latLng?: string;
  corridors: string[];
}

export interface QuoteRequest {
  serviceCategory: string;
  headcount: string;
  contactPerson: string;
  companyName: string;
  phoneNumber: string;
  city: string;
  shiftTiming: string;
  specialNotes?: string;
}

export interface CostBreakdown {
  headcount: number;
  ratePerPerson: number;
  basicSalaryTotal: number;
  epfAmount: number;
  esicAmount: number;
  bonusAmount: number;
  uniformAllowance: number;
  subtotal: number;
  gstAmount: number;
  monthlyTotal: number;
}
