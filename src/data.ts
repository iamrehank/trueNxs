import { ServiceItem, TeamMember, GlobalLocation, JobOpening } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'connect',
    name: 'Trunex Connect',
    title: 'Smart Outsourcing Solutions for Growing Businesses',
    badge: 'BUSINESS PROCESS OUTSOURCING',
    description: 'At Trunex BPO, we help businesses streamline operations, enhance customer experiences, and accelerate growth through customized outsourcing solutions.',
    longDescription: 'At Trunex BPO, we help businesses streamline operations, enhance customer experiences, and accelerate growth through customized outsourcing solutions. Our experienced professionals provide customer support, lead generation, technical assistance, back-office operations, and business process management tailored to your unique requirements. By combining skilled talent, advanced technology, and industry best practices, we deliver reliable, scalable, and cost-effective solutions that allow you to focus on growing your business while we handle your operational needs.',
    logoUrl: '',
    features: [
      'Customer Support Services',
      'Lead Generation & Appointment Setting',
      'Sales Support',
      'Technical Support',
      'Back Office Operations',
      'Data Entry & CRM Management',
      'Email & Chat Support',
      'Quality Assurance & Performance Monitoring',
      'Dedicated Remote Teams',
      '24/7 Business Support'
    ],
    caseStudy: {
      title: 'Home Security Provider Conversion Boost',
      metrics: '+42% Lead-to-Sale Conversion',
      summary: 'Deployed a dedicated inbound sales team for a national home security brand, reducing call abandonment by 28% and boosting qualified warm transfers to closers by 42%.'
    }
  },
  {
    id: 'support',
    name: 'Trunex Support',
    title: 'Customer Support & Experience Management',
    badge: 'CUSTOMER SUPPORT',
    description: 'At Trunex BPO, we deliver exceptional customer support solutions that strengthen customer relationships, improve satisfaction, and build long-term brand loyalty.',
    longDescription: 'At Trunex BPO, we deliver exceptional customer support solutions that strengthen customer relationships, improve satisfaction, and build long-term brand loyalty. Our dedicated support teams provide seamless assistance across voice, chat, email, and digital channels, ensuring every customer interaction is handled with professionalism, efficiency, and care. Whether you need customer service, technical support, order management, or help desk operations, we become a trusted extension of your business.',
    logoUrl: '',
    features: [
      'Multi-channel Customer Support (Voice, Chat & Email)',
      'Technical Support & Help Desk Services',
      'Customer Inquiry & Complaint Resolution',
      'Order Processing & Account Management',
      'Appointment Scheduling & Follow-ups',
      'Customer Retention & Loyalty Programs',
      'CRM Management & Ticket Handling',
      '24/7 Dedicated Support Teams',
      'Quality Assurance & Performance Monitoring',
      'Customized Support Solutions for Every Industry'
    ],
    caseStudy: {
      title: 'SaaS Platform Support Transformation',
      metrics: '96% CSAT Score Achieved',
      summary: 'Took over tier-1 and tier-2 support for a growing SaaS platform, reducing average handle time by 35% while lifting customer satisfaction scores from 78% to 96%.'
    }
  },
  {
    id: 'growth',
    name: 'Trunex Growth',
    title: 'Lead Generation & Performance Marketing',
    badge: 'LEAD GENERATION',
    description: 'Driving business growth through high-quality inbound leads, digital marketing strategies, and conversion-focused campaigns.',
    longDescription: 'Driving business growth through high-quality inbound leads, digital marketing strategies, call qualification, CRM management, and conversion-focused campaigns that generate measurable results.',
    logoUrl: '',
    features: [
      'High-quality inbound lead generation campaigns',
      'Digital marketing strategy and execution',
      'Call qualification and lead scoring',
      'CRM management and pipeline reporting',
      'Conversion-focused outreach campaigns'
    ],
    caseStudy: {
      title: 'B2B Lead Pipeline Acceleration',
      metrics: '3.8x Qualified Lead Volume',
      summary: 'Built and managed a full-funnel inbound lead generation engine for a mid-market B2B client, tripling qualified pipeline volume within 90 days through optimized digital campaigns.'
    }
  },
  {
    id: 'ops',
    name: 'Trunex Ops',
    title: 'Back Office & Business Process Outsourcing',
    badge: 'BACK OFFICE & BPO',
    description: 'Offering end-to-end back-office solutions including data entry, CRM updates, quality assurance, reporting, and compliance.',
    longDescription: 'Offering end-to-end back-office solutions including data entry, CRM updates, quality assurance, reporting, compliance, and administrative support to streamline operations and improve efficiency.',
    logoUrl: '',
    features: [
      'End-to-end data entry and CRM updates',
      'Quality assurance monitoring and reporting',
      'Compliance documentation and administration',
      'Workflow automation and process optimization',
      'Scalable back-office support teams'
    ],
    caseStudy: {
      title: 'E-Commerce Operations Scale-Up',
      metrics: '60% Reduction in Processing Time',
      summary: 'Took over order management, returns processing, and CRM hygiene for a fast-growing e-commerce brand, cutting back-office processing time by 60% while maintaining 99.8% data accuracy.'
    }
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Aditya Shah',
    role: 'Managing Director',
    imageUrl: '',
    bio: 'Aditya has over 20 years of leadership experience in strategic outsourcing, advising Fortune 500 enterprises on optimizing process efficiencies and institutional workflow migrations.',
    linkedin: '#'
  },
  {
    name: 'Nandini Verma',
    role: 'Chief Operations Officer',
    imageUrl: '',
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
    id: 'inbound-sales-agent',
    title: 'Inbound Sales Agent',
    department: 'Trunex Connect - Inbound Sales',
    location: 'Kalyan West, India',
    type: 'Full-time',
    description: 'Handle high-volume inbound calls for Home Security and service industry clients. Convert leads and manage warm transfers with professionalism and consistency.',
    requirements: [
      'Excellent spoken English and communication skills',
      '1+ years experience in inbound sales or call center environment',
      'Ability to follow scripts while adapting to customer needs',
      'Target-driven mindset with a focus on conversion rates'
    ]
  },
  {
    id: 'customer-support-lead',
    title: 'Customer Support Team Lead',
    department: 'Trunex Support - Customer Care',
    location: 'Kalyan West, India',
    type: 'Full-time',
    description: 'Lead a team of customer support associates handling inbound queries, technical assistance, and retention campaigns across voice, chat, and email channels.',
    requirements: [
      '2+ years supervising in a BPO contact center environment',
      'Strong English communication and coaching skills',
      'Familiarity with CRM tools like Zendesk or Freshdesk',
      'Proven ability to maintain high CSAT scores under volume'
    ]
  },
  {
    id: 'digital-marketing-executive',
    title: 'Digital Marketing & Lead Gen Executive',
    department: 'Trunex Growth - Performance Marketing',
    location: 'Kalyan West, India',
    type: 'Full-time',
    description: 'Run inbound lead generation campaigns, manage CRM pipelines, and optimize digital marketing strategies to drive measurable business growth for clients.',
    requirements: [
      'Experience with Google Ads, Meta Ads, or similar platforms',
      'Hands-on CRM management and lead qualification skills',
      'Analytical mindset with strong reporting capabilities',
      'Background in B2B or service-industry marketing preferred'
    ]
  }
];
