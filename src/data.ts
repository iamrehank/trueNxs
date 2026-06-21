import { ServiceItem, TeamMember, GlobalLocation, JobOpening } from './types';
import adityaImage from './assets/images/aditya_shah_1781205723085.jpg';
import nandiniImage from './assets/images/nandini_verma_1781205738884.jpg';

export const SERVICES: ServiceItem[] = [
  {
    id: 'icare',
    name: 'iCARE',
    title: 'Customer Acquisition & Retention',
    badge: 'CUSTOMER ACQUISITION & CRM',
    description: 'Comprehensive CRM lifecycle management—from targeting and segmentation to acquisition and engagement, ensuring superior retention and long-term brand loyalty.',
    longDescription: 'Trunex’s iCARE is a high-tech, human-centric solution that streamlines your customer lifecycle mapping. We manage multi-channel support operations (Voice, Chat, Email, Social Media) powered by smart automation to keep customer satisfaction index (CSAT) high while controlling service delivery footprints. We align directly on key success parameters like Average Handle Time (AHT) and First Contact Resolution (FCR).',
    logoUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLv3d2bR7xRWIdEe5NQ0udB_e5DjWFqG3FQz616t3z2oo0qjTLlCbMW2Yx9Ma6OfDPekjbZ_l8YAYAfZAHR42Irky_gcR_f2YFg-4mpgSYeDSKakGRHt48vVnjfGWbde_PN58iH3-YcUm8x2vENxpuvNb9oY0UufAuSekHGMAsowUSqNJMaFe23JUod1AXcIptLhyniEqSDgcCdrhaJ8y8id6fLNwuNOnOwbkmeWaEilz2_xtGlyAzBNdA',
    features: [
      'Multi-channel inbound & outbound support operations',
      'Predictive dialing and interactive voice portals',
      'Advanced customer retention and loyalty management',
      '24/7/365 coverage with dual-continent failovers',
      'AHT reduction strategies with live supervisor coaching'
    ],
    caseStudy: {
      title: 'E-Commerce Giant CSAT Lift',
      metrics: '+34% CSAT Increase',
      summary: 'Re-engineered customer support queues for a global e-commerce retail division, shifting 42% of volume to automated live workflows while raising average NPS score by 22 points.'
    }
  },
  {
    id: 'ifap',
    name: 'iFAP',
    title: 'Finance & Accounting Solutions',
    badge: 'FINANCE & ACCOUNTING',
    description: 'Premium XBRL/Edgar solutions for global filing needs. Full conformation with SEC guidelines for 10K, 10Q, and complex financial reporting.',
    longDescription: 'Our iFAP service balances precision with speed. We offer turnkey back-office accounting, accounts payable/receivable mapping, payroll automation, and specialized regulatory filing assistance. This incorporates rigorous auditing workflows conforming to SEC parameters, ensuring absolute compliance and transparency for public entities globally.',
    logoUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLsAbVlK0WfP7LZXw2JedHWb0RVL1ww97GyNVfGwMHFexcwiVAuMYCj27mPtI2DK8iOyn4zamcyr368cOWcLosSXXa4gn9EykPvgb_xhgopoiP4GaBw7959Zn--m3rTUIOIA2hIpiUuQNrWB_EggYOeS0sOMtw3gL5_XBc3Keeza6yFEDgjNq8OqI-dsfhWjNzCGUFHQACpM7P6Gs3PepL08I5jCtV4ueXk98miLe16-WKsNgrWnZFb670w',
    features: [
      'SEC SEC 10-K, 10-Q & 8-K preparation under XBRL guidelines',
      'Accounts Receivable (AR) matching & Collections optimization',
      'Accounts Payable (AP) OCR data capture & automated workflows',
      'End-to-end audit representation and reconciliation controls',
      'ISO-certified security vaults for sensitive transactional documents'
    ],
    caseStudy: {
      title: 'Multinational SEC Compliance Integration',
      metrics: '0 SEC Filing Delays & 100% Compliance',
      summary: 'Bespoke integration of continuous XBRL tagging engines, reducing standard 10-Q compilation window from 14 operational days down to just 3 business days.'
    }
  },
  {
    id: 'ifin',
    name: 'iFIN',
    title: 'Consumer Lending Turnkey Care',
    badge: 'CONSUMER LENDING',
    description: 'Turnkey lending solutions spanning origination, underwriting support, disbursal checks, customer service, and strategic collections management.',
    longDescription: 'iFIN bridges the gap between borrowers and financial institutions. By mapping processes across loan lifecycles, we optimize risk profiling, expedite administrative underwriting schedules, audit document authenticity, and manage strategic collections with professional dignity and rigorous regulatory alignment.',
    logoUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLs8p0ryOOAXoUMBnzJU095xinQRk4V4l_8gLlnz3QnwH7XzCBsDboKXrt3sZsLhsl8MNu303EsHTnsDcZfBQw3VPUJjoot0N88JIBXajsT4wRf99utbKkLhCXTBtdCVlkaCmGODgNQlpGA1JMPlVNp3w2MnlrmjDkRgFSjJrpBoyUJpuC0zyGhVHKwdYVAd7AxZ_-_vQwFcIJ-RSH3ZxJfRgzBASYYDqm_czyE03Ik8gDVYw59YCVD7xvU',
    features: [
      'Credit document indexing and verified underwriting screening',
      'Know-Your-Customer (KYC) compliance & anti-fraud gating',
      'Multi-stage loan portfolios audit support',
      'Pliant collection operations respecting institutional reputation',
      'Omni-channel reminders & seamless online payment triggers'
    ],
    caseStudy: {
      title: 'FinTech Credit Line Underwriting Boost',
      metrics: '4.5x Underwriting Throughput',
      summary: 'Supported a major consumer FinTech player in scaling origination capacity for credit card and personal loans without expanding in-house administrative staff.'
    }
  },
  {
    id: 'iapps',
    name: 'iAPPS',
    title: 'Technology & Workflow Consulting',
    badge: 'TECH CONSULTING',
    description: 'Leveraging technology as a strategic offering. We build bespoke tools that drive revenue goals while maintaining strict cost-efficiency.',
    longDescription: 'iAPPS introduces a technical layer of customized tools to traditional BPO. We don’t just supply labor; we build intelligent automation wrappers, configure smart CRM integrations, deploy real-time analytics suites, and optimize underlying systems so that enterprise processes operate with high-speed digital alignment.',
    logoUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLtsn4CtO2ZuLPfscS7Gn34lzUVxFLX5TqZ4rOTskydl-JSVqdQD34QxpoEHZoVSAqkd4ED4910TD4hidfy2DNMh5PZZiKq-J0J02eRJ_EYDAw6kpXujyS69Rt1b0xD-aKB9yRqHQD4lPHhnqF0OrU7AeoKEIvQKCmuPaGOO9JL9rE4Hr6iXcHYTC4BeBMOtRJn_zTHXa7WPVpOF6K949tzUL0eDlhxzCWglW6onwXgz-_8V9cssEyFL9w',
    features: [
      'Bespoke CRM integrations and contact center API bridging',
      'Robotic Process Automation (RPA) workflows for data synchronization',
      'Machine Learning powered sentiment analysis over support logs',
      'Legacy system wrap-around connectors reducing capital expenditure',
      'Global uptime monitoring and direct cloud infrastructure integrations'
    ],
    caseStudy: {
      title: 'Digital Customer Journey Re-platform',
      metrics: '-45% IT Maintenance Overhead',
      summary: 'Designed custom data transformation pipelines that bridge legacy terminal back-ends with sleek, modern browser-based support consoles, saving millions in infrastructure maintenance.'
    }
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Aditya Shah',
    role: 'Managing Director',
    imageUrl: adityaImage,
    bio: 'Aditya has over 20 years of leadership experience in strategic outsourcing, advising Fortune 500 enterprises on optimizing process efficiencies and institutional workflow migrations.',
    linkedin: '#'
  },
  {
    name: 'Nandini Verma',
    role: 'Chief Operations Officer',
    imageUrl: nandiniImage,
    bio: 'Nandini oversees the global delivery centers, ensuring rigorous conformance with international quality parameters (including ISO 9001 & ISO 27001) while scaling high-touch service queues.',
    linkedin: '#'
  }
];

export const LOCATIONS: GlobalLocation[] = [
  {
    id: 'kalyan',
    city: 'Kalyan West',
    country: 'India',
    address: '302, Siddharth Tower, Station Road, Kalyan West, Maharashtra 421301',
    phone: '+91 (0251) 500 0123',
    alternativePhone: '+91 98765 43210',
    email: 'contact@trunexbpo.com',
    timezone: 'Asia/Kolkata',
    coordinates: { x: 73.13, y: 19.24 }
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'finance-analyst',
    title: 'Senior Financial & SEC Compliance Analyst',
    department: 'iFAP - Finance & Accounting',
    location: 'Thane, India',
    type: 'Full-time',
    description: 'We are seeking an experienced Financial Analyst with strong background in SEC compliance structures and XBRL tagging. This individual will handle critical public reporting pipelines for international corporate clients.',
    requirements: [
      'Strong grasp of US GAAP rules and SEC financial statement layouts',
      '3+ years experience with XBRL tagging frameworks and Edgar tools',
      'Bachelor’s degree in Accounting, Finance, or similar (CPA/CA preferred)',
      'Impeccable details focus and professional report drafting competence'
    ]
  },
  {
    id: 'customer-care-lead',
    title: 'Customer Experience Operations Supervisor',
    department: 'iCARE - Customer Operations',
    location: 'Manila, Philippines (Hybrid)',
    type: 'Full-time',
    description: 'Lead a team of 25+ Customer Support Associates managing live retail workflows for a major European distributor. Track team KPIs like AHT, CSAT, and schedule adherence daily.',
    requirements: [
      '2+ years supervising in a high-volume BPO contact center program',
      'Exceptional spoken & written English communication credentials',
      'Familiarity with modern dashboard systems like Zendesk, Freshdesk, or Salesforce Service Cloud',
      'Proven expertise coaching agents to rise above target CSAT levels'
    ]
  },
  {
    id: 'rpa-architect',
    title: 'RPA (UIPath / BluePrism) Developer',
    department: 'iAPPS - Technology Consulting',
    location: 'Thane, India',
    type: 'Full-time',
    description: 'Responsible for building software robots to automate repetitive data entry activities across legacy mainframe applications for banking, credit, and consumer finance setups.',
    requirements: [
      'Certified UIPath Developer or Advanced RPA Professional',
      'Excellent troubleshooting skills over diverse Web, API, and desktop system targets',
      'Familiarity with SQL databases and quick script programming (JS / Python)',
      'Experience in financial services process mapping preferred'
    ]
  }
];
