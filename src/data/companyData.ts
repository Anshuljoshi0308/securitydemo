import { ServiceItem, CertificationItem, ClientItem, BranchOffice } from '../types';

export const COMPANY_DETAILS = {
  name: 'Infybright Security & Manpower',
  tagline: 'Security & Manpower Solutions',
  incorporatedWith: 'incorporating Super Security & Labour Solutions',
  establishedYear: '2014',
  experienceYears: '10+',
  enterpriseClientsCount: '100+',
  totalPersonnel: '5,000+',
  branchesCount: '10+',
  shiftAdherence: '99.8%',
  primaryPhone: '0751-2462876',
  altPhone: '(+731) 4987524',
  hotlineFormatted: '+91 751 2462876',
  primaryEmail: 'super.sec02@gmail.com',
  altEmail: 'super_sec@rediffmail.com',
  hqAddress: 'B20, Purshottam Vihar Colony, Bhind Road, Gole ka Mandir, Gwalior (M.P.), India - 474005',
  gstReg: '23AFEPT0749Q1ZX',
  isoReg: '23AAZCS9723N1ZC',
  psaraLicense: 'PSARA/MP/GWL/2021/4892',
  logoUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1VBKsEIK2SCi-r_dTiFAZLjRxv3nXDDmH4p8P-8XPRJjj1oA6J-La9ry7Q8N62cV4EsNe4RVYkdoo_jy2PmvHsmUSMvfvM8yp2uW4tmomKW5l2Nuhi_QIF05QQcnyJxkmqUdkfbaeq8CW1t6XkUhNJDNjbx_HMLkKk9GDj2obKgu7TKC7yIytRgM2krTdcX5_UxCnCZ-8YhMvcuVecCWL1DnPBMuKxCg7JD6YtCC9-hWD3NPuN9NnNShwCv',
  guardPhotoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARQUTjrZINIDkB92r1H5W-dOPUP-bBrUmUlTTzcyOQ-16gBRxNZlva_aUcuc3Xi558jsrks_lHJuXLvY0Xf8E50pTZHkH8Q9065Qv6mThNYNVclc0xx5S1HJZARLM6nwk5U_Q9BiQT8C5y_2O2YCAV2s_-XkXY1BdV8RnHQNXk-gPvTGKLSVM7qaagmJOXbebYHLQYSzwDS6cbhQGHm672AYE9KVrajgDRJRPxoGirbUH55W6JTAakog',
  cbicCertUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCQOZp_XrirZ7lIneYdNbITk71o_qtl9luh13rlTi6yNALcqAIUwYofEI_QrLQvSems6CzoX9tWQt-0jJ__MDz70R0KUf9Nv20GHgLmay0QPCyVWG5IkuzND8Q8oKXO3dfqYNbDswXrYRRu2Qbip88X1C9C0Vl1xQFgZcA5Dty0mKoNjdTCNECrN-OVVfNUJsLiaeD5HOiRcrqwOdwBhSJ2OmvyNr-jrRjoC8lV8jiWKLSFNjpIxpwbQ',
  isoCertUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRJtI3kL9Gqeq5qsmE69RYaiJLsfsHbrMJ6H940yuJSNUjN1Ls6Ft667F0Xrt9tIdA8BnOLkjA2KGGwLyLoAY_lFryfO_S2OPJ7kvcMhWYlNcwTh7qDJedIwZA9SuMQORaIQvd_cMQMMVln3mLXLzKcVI1XzZ3cT-wXLo-_xhLJ_6IqHtd07WbILQi-7tVeVYlIlGDdOy7CDdxjWLNxPVDG6WLb1Xfu9s7J_DNP7yIPyWyX8MnUsJ26Q',
  mapImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6fL_jiANs2oKqf77SUq_38CtkDwVr42XGu_R1z4f88WdK6LapyPFToUC2QCYlSbj6mDYiOGOOvhQRr8smqV7xoBSrGl0QabguLrKJgK_pE8zPgNDKOLJjAVpviGQWAVJzllvG-tneorjrcKNGqSr02ndQNjXpUfbMTUspazPtGHndfetS1KkWZvwBk-_lz95dkDwfGBoy4BKmns0i5RubRp8__z4uHDkk0up5J4xJKQg1ZLUf0hDWiA',
};

export const CORE_FOUNDATIONAL_SERVICES = [
  {
    id: 'commercial-security',
    tag: 'ARMED & STATIC GUARDING',
    title: 'Commercial & Industrial Security Services',
    description: 'Comprehensive perimeter defense, gate control, CCTV monitoring, and tactical armed/unarmed security guards tailored for manufacturing factories, educational campuses, and corporate parks.',
    icon: 'shield_lock',
    points: [
      'PSARA Certified & Vetted Personnel',
      '24/7 Night Patrolling & Incident Protocols',
      'Electronic Visitor & Vehicle Access Logs'
    ],
    cta: 'Request Guard Deployment →'
  },
  {
    id: 'super-manpower',
    tag: 'ENTERPRISE TALENT ACQUISITION',
    title: 'Super Manpower Services',
    description: 'From administrative personnel, executive office assistants, and payroll management to back-office specialists, we supply verified talent that seamlessly blends with your company workflow.',
    icon: 'groups',
    points: [
      'Skilled Front Desk & Receptionists',
      'Complete Payroll, ESIC & EPF Compliance',
      'Quick Backfill & Standby Availability'
    ],
    cta: 'Hire Administrative Staff →'
  },
  {
    id: 'labour-supplier',
    tag: 'FACTORY & WAREHOUSE OPERATIVES',
    title: 'Labour Supplier Services',
    description: 'High-output industrial workforce solutions: heavy loading/unloading squads, warehouse inventory handlers, assembly line workers, and civil maintenance technicians ready for large manufacturing batches.',
    icon: 'engineering',
    points: [
      'Semi-Skilled & Unskilled Industrial Squads',
      'Continuous Safety Gear & PPE Protocol Training',
      'Zero Downtime Scalability up to 500+ Laborers'
    ],
    cta: 'Contract Industrial Labor →'
  }
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    id: 'cbic-gst-appreciation',
    title: 'Central Board of Indirect Taxes and Customs',
    authority: 'Ministry of Finance • Government of India',
    regNumber: 'GST Reg: 23AFEPT0749Q1ZX',
    image: COMPANY_DETAILS.cbicCertUrl,
    badgeTitle: 'Certificate of Appreciation: Nation Builder',
    description: 'Awarded for prompt filing of returns and payment of Goods and Services Tax, contributing to building a strong and resilient nation.',
    signatory: 'Signed by Vivek Chaturvedi, Chairman CBIC',
    auditStatus: 'Financial Year Audit: Passed',
    validity: 'Statutory Filing Compliant',
    verificationDetails: [
      'Issued under Ministry of Finance Special Recognition Scheme',
      'Authenticated against GST Portal Entity Records',
      'Acknowledges prompt quarterly return filings without default',
      'Recognized for exceptional corporate transparency in Central India'
    ]
  },
  {
    id: 'iso-9001-quality',
    title: 'ISO 9001:2015 Quality Certification',
    authority: 'Quality Council of India Accredited System',
    regNumber: 'Reg: 23AAZCS9723N1ZC',
    image: COMPANY_DETAILS.isoCertUrl,
    badgeTitle: 'Standardized Quality Management Systems',
    description: 'Certified scope covers comprehensive Private Security Provisioning, Industrial Workforce Outsourcing, and Corporate Facility Maintenance.',
    signatory: 'Audited Quarterly for Zero Incident Record',
    auditStatus: 'Quarterly Audit: Passed with 100% Score',
    validity: 'Renewal Validity: Active 2026',
    verificationDetails: [
      'Scope includes armed and unarmed industrial physical security',
      'Statutory compliance management (PF, ESIC, Minimum Wages Act)',
      'Mechanized housekeeping and multi-skilled industrial labour supply',
      'Full surveillance, rapid reaction protocol, and guard verification'
    ]
  }
];

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: 'security-guard-services',
    title: 'Security Guard Services',
    categoryTag: 'PSARA Licensed Physical Guarding',
    shortDescription: 'Armed bodyguards, commercial site guards, access controllers, and event crowd management trained for crisis mitigation.',
    detailedDescription: 'Our certified armed & unarmed security division delivers 24x7 gatekeeping, perimeter fence surveillance, boom barrier inspection, material in/out register maintenance, and emergency drill readiness for industrial corridors and corporate headquarters.',
    iconName: 'local_police',
    deliverables: [
      'Armed Guards with verified state-registered weapons licenses',
      'Industrial gate entry & exit biometric logging',
      'CCTV console monitoring & emergency response siren operations',
      'Night-time motorized round patrol teams with GPS logging',
      'Fire hydrant drill certified personnel on every shift'
    ],
    equipmentProvided: [
      'Metal Detectors (DFMD & HHMD)',
      'Long-range VHF Walkie-Talkies',
      'Night Vision Searchlights',
      'Reflective Safety Belts & Guard Batons',
      'Digital Shift Patrol Wand Logs'
    ],
    complianceNotes: 'Mandatory background check with local SP police verification, PSARA license 2021/4892, 100% EPF/ESIC coverage.',
    targetIndustries: ['Automotive Plants', 'Pharmaceutical Units', 'Logistics Warehouses', 'IT Parks', 'Gated Communities'],
    ctaText: 'Deploy Guards →'
  },
  {
    id: 'housekeeping-services',
    title: 'Housekeeping Services',
    categoryTag: 'Mechanized Facility Hygiene',
    shortDescription: 'Mechanized floor scrubbing, deep sanitization, corporate washroom hygiene, and continuous industrial housekeeping shifts.',
    detailedDescription: 'Full-spectrum institutional housekeeping deployed across shop floors, executive suites, cafeteria halls, and sterile laboratories. We employ task-specific non-hazardous industrial cleaning agents and ride-on floor scrubbers.',
    iconName: 'cleaning_services',
    deliverables: [
      'Scheduled daily dry and wet mechanized floor scrubbing',
      'Restroom deep sanitization with automated fragrance dispensers',
      'Shop-floor oil spill management and high-pressure washing',
      'Window facade and high-reach glass cleaning with harness gear',
      'Waste segregation compliant with local pollution control norms'
    ],
    equipmentProvided: [
      'Ride-on & Walk-behind Floor Scrubbers',
      'Heavy-duty Wet & Dry Vacuum Cleaners',
      'High-pressure Jet Washers',
      'Eco-certified Biodegradable Chemicals',
      'Ergonomic Color-coded Mop Carts'
    ],
    complianceNotes: 'Trained in hazardous chemical handling (MSDS), Bio-waste containment guidelines, and PPE usage.',
    targetIndustries: ['Corporate HQs', 'Hospitals & Clinics', 'Heavy Engineering Plants', 'Educational Institutes', 'Retail Hubs'],
    ctaText: 'Book Hygiene Crew →'
  },
  {
    id: 'technical-services',
    title: 'Technical Services',
    categoryTag: 'Plant Maintenance Engineering',
    shortDescription: 'Licensed plant electricians, HVAC maintenance engineers, diesel generator operators, and industrial plumbing crew.',
    detailedDescription: 'Experienced certified technicians equipped to manage power substations, DG set synchronize panels, chiller units, industrial boiler pipelines, and continuous plant utility operations with zero downtime.',
    iconName: 'build',
    deliverables: [
      'High-tension (HT/LT) substation monitoring and logging',
      'Diesel Generator (DG) synchronization and fuel management',
      'Centralized HVAC chiller and VRF maintenance',
      'Industrial piping, valves, and water treatment plant (WTP) operation',
      'Preventive maintenance schedules and rapid electrical fault clearance'
    ],
    equipmentProvided: [
      'Digital Multimeters & Clamp Meters',
      'Insulated 11kV Safety Toolkits',
      'Thermal Imaging Leak Detectors',
      'Pipe Pressure Testing Apparatus',
      'Arc Flash Protective PPE'
    ],
    complianceNotes: 'ITI / Polytechnic certified technicians, electrical wireman permit holders, strict LOTO (Lockout/Tagout) adherence.',
    targetIndustries: ['Manufacturing Units', 'Cold Storage Facilities', 'Textile Mills', 'Data Centers', 'High-Rise Towers'],
    ctaText: 'Request Technicians →'
  },
  {
    id: 'manpower-solutions',
    title: 'Man Power Service',
    categoryTag: 'Industrial Assembly & Machining',
    shortDescription: 'Skilled industrial machinists, CNC operators, assembly workers, and general factory hands compliant with state labor acts.',
    detailedDescription: 'Supply of vetted, production-ready personnel for continuous assembly line manufacturing, conveyor sorting, packaging line integration, and secondary machining with guaranteed attendance replacement backups.',
    iconName: 'badge',
    deliverables: [
      'Precision CNC & VMC machine operators',
      'Conveyor packaging and batch labeling workers',
      'Component assembly line and bench inspection technicians',
      'Material handling assistants within shop floor bays',
      'Quality check sorting and defect tagging personnel'
    ],
    equipmentProvided: [
      'Anti-static ESD Gloves & Wristbands',
      'Steel-toe Industrial Safety Boots',
      'High-visibility Fluorescent Vests',
      'Safety Goggles & Hearing Protection',
      'Precision Vernier Calipers & Micrometers'
    ],
    complianceNotes: 'Adherence to Madhya Pradesh Contract Labour Act, timely statutory challans, minimum wages notifications.',
    targetIndustries: ['Automotive Ancillaries', 'Electronics Manufacturing', 'Metal Fabrication', 'Consumer Goods', 'Plastics'],
    ctaText: 'Source Labor Squads →'
  },
  {
    id: 'gardening-services',
    title: 'Gardening & Horticulture',
    categoryTag: 'Landscape Architecture & Care',
    shortDescription: 'Commercial lawn maintenance, institutional tree trimming, organic pest control, and landscaping beautification contracts.',
    detailedDescription: 'Dedicated horticulturists maintaining lush industrial lawns, green belt development compliant with environment board guidelines, seasonal flowering plantations, drip irrigation networks, and hedge sculpting.',
    iconName: 'yard',
    deliverables: [
      'Green belt compliance maintenance per pollution board guidelines',
      'Motorized lawn mower trimming and edging',
      'Seasonal floral display development and plant nursery curation',
      'Organic pest management and bio-fertilizer soil enrichment',
      'Drip and sprinkler irrigation pipeline maintenance'
    ],
    equipmentProvided: [
      'Petrol Motor Lawn Mowers',
      'Telescopic Pole Hedge Trimmers',
      'Battery Backpack Sprayers',
      'Pruning Shears & Grafting Knives',
      'Submersible Greenery Water Pumps'
    ],
    complianceNotes: 'Eco-friendly organic treatment certifications, seasonal sapling survival auditing.',
    targetIndustries: ['Industrial Estates', 'Townships & Res-Colonies', 'University Campuses', 'Corporate Campuses', 'Hotels & Resorts'],
    ctaText: 'Hire Gardeners →'
  },
  {
    id: 'staff-services',
    title: 'Corporate Staff Services',
    categoryTag: 'Administrative & Front Office',
    shortDescription: 'Office pantry attendants, dispatch runners, document handlers, data entry staff, and corporate reception assistants.',
    detailedDescription: 'Well-groomed, courteous administrative personnel representing your corporate image. We supply receptionists, conference room coordinators, pantry stewards, mailroom dispatch clerks, and digital records assistants.',
    iconName: 'support_agent',
    deliverables: [
      'Bilingual executive front desk receptionists',
      'Corporate pantry stewards with barista and beverage service training',
      'Mailroom, dispatch runner, and couriers tracking desk',
      'Data entry clerks proficient in Excel, ERP, and tally billing',
      'Meeting room AV setups and executive hospitality management'
    ],
    equipmentProvided: [
      'Tailored Formal Corporate Uniforms',
      'Visitor Badge Generation Equipment',
      'Pantry Hygiene Sterilizers',
      'Document Lamination & Binding Tools',
      'Digital Attendance Tablets'
    ],
    complianceNotes: 'Comprehensive background verification, non-disclosure agreements (NDAs) signed, payroll on time.',
    targetIndustries: ['Banking & Financial Hubs', 'Law & Consulting Firms', 'Tech Parks', 'Corporate Regional HQs', 'Embassies'],
    ctaText: 'Recruit Support Staff →'
  },
  {
    id: 'loading-unloading-services',
    title: 'Loading & Unloading',
    categoryTag: 'Heavy Logistics & Freight Squads',
    shortDescription: 'Freight container unloading, pallet movement, heavy cargo material handling, and freight dispatch logistics manpower.',
    detailedDescription: 'Trained dock squads specialized in rapid turnaround for 40ft/20ft shipping containers, palletizing, shrink wrapping, heavy cargo destuffing, and stacking in multi-tier warehouse racks under safety officer supervision.',
    iconName: 'inventory',
    deliverables: [
      '20ft and 40ft container turnarounds within scheduled demurrage windows',
      'Pallet jack and stacker operation with zero cargo damage',
      'Shrink-wrap bundling and barcode scanning alignment',
      'Heavy machinery positioning with chain pulleys and rollers',
      'Night-shift rail rake and road transport transshipment'
    ],
    equipmentProvided: [
      'Manual & Hydraulic Hand Pallet Trucks (HPT)',
      'Lumbar Back-support Belts & Cut-resistant Gloves',
      'Heavy Duty Cargo Straps & Tie-downs',
      'Platform Hand Trucks & Trolleys',
      'Steel-toed High-grip Safety Footwear'
    ],
    complianceNotes: 'Strict adherence to ergonomics, zero intoxication policy, accidental group insurance provided.',
    targetIndustries: ['Logistics Parks', 'Cement & Steel Depots', 'FMCG Distribution Centers', 'E-commerce Hubs', 'Ports & Railheads'],
    ctaText: 'Reserve Logistics Crew →'
  },
  {
    id: 'civil-work-services',
    title: 'Civil & Maintenance Work',
    categoryTag: 'Industrial Infrastructure Repair',
    shortDescription: 'Industrial flooring repair, factory wall painting, structural waterproofing, boundary wall reinforcements, and masonry jobs.',
    detailedDescription: 'Turnkey repair squad for industrial facilities: epoxy floor rehabilitation, water seepage treatment, perimeter barbed wire and razor coil installation, drainage clearing, and plant structural expansion masonry.',
    iconName: 'home_repair_service',
    deliverables: [
      'Epoxy and PU floor repair for heavy forklift traffic routes',
      'Perimeter security wall construction and razor wire fencing',
      'Factory shed roof leak sealing and gutter refurbishment',
      'Heavy equipment grouting and machine foundation reinforcement',
      'Industrial anti-corrosive wall and girder painting'
    ],
    equipmentProvided: [
      'Concrete Mixers & Core Cutters',
      'Airless Spray Painting Machines',
      'Scaffolding Towers & Safety Harnesses',
      'Diamond Floor Grinders',
      'Industrial Water Seepage Injection Pumps'
    ],
    complianceNotes: 'Height safety permits, scaffolding stability inspections, PPE compliance (helmets, harnesses, lifelines).',
    targetIndustries: ['Heavy Manufacturing Plants', 'Chemical Facilities', 'Warehousing Complexes', 'Government Estates', 'Substations'],
    ctaText: 'Contract Civil Teams →'
  }
];

export const CLIENTS_LIST: ClientItem[] = [
  {
    id: 'motherson-sumi',
    name: 'Motherson Sumi',
    subtitle: 'Systems Limited',
    badgeInitial: 'M',
    sector: 'Global Automotive Component Manufacturing',
    deploymentSummary: 'Full-site physical guarding, gate boom barriers, and technical maintenance manpower across regional manufacturing facilities.',
    quote: 'Infybright provides steady, certified security personnel who have maintained seamless access control at our multi-acre manufacturing compound.'
  },
  {
    id: 'mppcb',
    name: 'MPPCB',
    subtitle: 'Pollution Control Board',
    badgeInitial: 'MP',
    sector: 'Government Regulatory & Environmental Authority',
    deploymentSummary: 'Access control security, departmental office housekeeping, document logistics, and visitor surveillance.',
    quote: 'Statutory compliance is verified at every level. Infybright delivers disciplined attendance and spotless record maintenance.'
  },
  {
    id: 'dhoot-transmissions',
    name: 'Dhoot',
    subtitle: 'Transmissions Pvt. Ltd.',
    badgeInitial: 'DT',
    sector: 'Automotive Electrical Systems & Harnesses',
    deploymentSummary: '24/7 industrial armed patrol, shop-floor workforce assistance, and logistics handling for wiring harness export batches.',
    quote: 'Zero incident record across three operational plants in Central India. Their response times and backfill speeds are unmatched.'
  },
  {
    id: 'tafe',
    name: 'TAFE',
    subtitle: 'Tractors & Farm Equipment',
    badgeInitial: 'T',
    sector: 'Agricultural Machinery & Heavy Engineering',
    deploymentSummary: 'Perimeter defense, container logistics loading squads, and assembly line support personnel.',
    quote: 'Infybright has maintained zero personnel absenteeism across our factory shifts for the last 4 consecutive quarters with rigorous statutory PF and insurance compliance.'
  },
  {
    id: 'surya-roshni',
    name: 'SURYA',
    subtitle: 'Every City Every Home',
    badgeInitial: 'S',
    sector: 'Lighting, Steel Pipes & Consumer Appliances',
    deploymentSummary: 'Factory gate surveillance, dispatch dock workforce, mechanized housekeeping, and perimeter maintenance.',
    quote: 'A truly professional enterprise workforce partner. They understand industrial urgency and adhere strictly to labor guidelines.'
  }
];

export const BRANCH_HUBS: BranchOffice[] = [
  {
    id: 'gwalior-hq',
    city: 'Gwalior (Command HQ)',
    type: 'Corporate Headquarters & Central Dispatch',
    address: 'B20, Purshottam Vihar Colony, Bhind Road, Gole ka Mandir, Gwalior (M.P.) - 474005',
    phones: ['0751-2462876', '(+731) 4987524'],
    emails: ['super.sec02@gmail.com', 'super_sec@rediffmail.com'],
    corridors: ['Malanpur Industrial Area', 'Banmore Industrial Estate', 'Sithouli Rail Zone', 'Gwalior City']
  },
  {
    id: 'indore-hub',
    city: 'Indore',
    type: 'Regional Operations Center',
    address: 'Plot 44, Pithampur Industrial Corridor, Sector 1, Indore (M.P.)',
    phones: ['(+731) 4987524'],
    emails: ['indore.ops@infybright.com'],
    corridors: ['Pithampur Special Economic Zone', 'Sanwer Road Industrial Area', 'Dewas Industrial Belt']
  },
  {
    id: 'bhopal-hub',
    city: 'Bhopal',
    type: 'Zonal Liaison Office',
    address: 'Govindpura Industrial Estate, Commercial Complex Block B, Bhopal (M.P.)',
    phones: ['0751-2462876'],
    emails: ['bhopal.liaison@infybright.com'],
    corridors: ['Mandideep Industrial Area', 'Govindpura Cluster', 'Bhopal IT Park']
  }
];

export const FAQ_LIST = [
  {
    q: 'What statutory compliance documents does Infybright provide?',
    a: 'Infybright provides complete monthly EPF Electronic Challan Returns (ECR), ESIC payment receipts, GST payment challans, Form XVI wage registers, and individual bank transfer proof with zero hidden costs.'
  },
  {
    q: 'How fast can security guards or manpower be deployed on-site?',
    a: 'For emergency or temporary deployments, our standby squad can mobilize within 24 to 48 hours. For large-scale manufacturing contracts (50+ personnel), site assessment and full deployment takes 3 to 5 business days.'
  },
  {
    q: 'Are your security guards PSARA licensed and police verified?',
    a: 'Yes, 100% of our security personnel undergo mandatory police verification through the District Superintendent of Police, physical fitness tests, and 20 days of certified training under the Private Security Agencies Regulation Act (PSARA).'
  },
  {
    q: 'What happens if a guard or worker fails to report on duty?',
    a: 'We maintain a 15% dedicated reserve pool at every regional hub. If any personnel falls ill or is absent, a trained standby guard is dispatched within 60 minutes with zero downtime to your operations.'
  }
];

export const CLIENT_PORTAL_MOCK = {
  clientName: 'TAFE Industrial Facility - Plant #3',
  clientCode: 'TAFE-MP-092',
  activeGuards: 38,
  activeShifts: [
    { shift: 'Shift A (06:00 - 14:00)', guardsDeployed: 14, supervisor: 'Rameshwar Sharma (Ex-Subedar)', status: 'Active - Zero Gaps' },
    { shift: 'Shift B (14:00 - 22:00)', guardsDeployed: 14, supervisor: 'Virendra Tomar', status: 'Scheduled' },
    { shift: 'Night Shift C (22:00 - 06:00)', guardsDeployed: 10, supervisor: 'Dharmendra Yadav (Armed)', status: 'Armed Patrol Ready' },
  ],
  shiftAdherence: '99.8%',
  lastAuditDate: '2026-08-30',
  complianceScore: '100% (Clean Bill)',
  challans: [
    { month: 'July 2026', epfChallan: 'EPF-23901-JUL26.pdf', esicChallan: 'ESIC-7781-JUL26.pdf', gstReceipt: 'GST-23AFEPT-JUL26.pdf' },
    { month: 'June 2026', epfChallan: 'EPF-23901-JUN26.pdf', esicChallan: 'ESIC-7781-JUN26.pdf', gstReceipt: 'GST-23AFEPT-JUN26.pdf' },
    { month: 'May 2026', epfChallan: 'EPF-23901-MAY26.pdf', esicChallan: 'ESIC-7781-MAY26.pdf', gstReceipt: 'GST-23AFEPT-MAY26.pdf' }
  ]
};
