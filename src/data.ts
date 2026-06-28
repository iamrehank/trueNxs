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
    },
    rightPanel: {
      badge: 'Why Choose Trunex',
      title: 'Your Trusted BPO Growth Partner',
      label: 'Business-Focused Solutions',
      value: 'Scalable • Reliable • Cost-Effective',
      summary: 'At Trunex BPO, we partner with businesses to streamline operations through customer support, lead generation, back-office services, technical support, and business process outsourcing. Our dedicated teams, flexible engagement models, and commitment to quality enable organizations to reduce costs, increase productivity, and focus on their core business objectives.',
      footerLeft: 'Serving Businesses Worldwide',
      footerRight: 'Trusted BPO Partner'
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
    },
    rightPanel: {
      badge: 'Customer Success',
      title: 'Trusted Customer Support Solutions',
      label: 'Service Excellence',
      value: '24/7 Customer Support',
      summary: 'At Trunex BPO, we provide reliable customer support solutions that help businesses deliver exceptional service across voice, chat, and email. Our dedicated teams focus on faster response times, efficient issue resolution, and personalized customer interactions that strengthen customer relationships and build long-term loyalty.',
      footerLeft: 'Serving Businesses Worldwide',
      footerRight: 'Trusted BPO Partner'
    }
  },
  {
    id: 'growth',
    name: 'Trunex Growth',
    title: 'Accelerate Business Growth with Qualified Leads',
    badge: 'LEAD GENERATION',
    description: 'Driving business growth through high-quality inbound leads, digital marketing strategies, and conversion-focused campaigns.',
    longDescription: 'At Trunex BPO, we help businesses connect with the right prospects through customized lead generation solutions. Our experienced team combines market research, lead qualification, appointment setting, CRM management, and strategic outreach to build a consistent sales pipeline. We focus on delivering high-quality opportunities that help businesses increase conversions, strengthen customer relationships, and achieve sustainable growth.',
    logoUrl: '',
    features: [
      'B2B & B2C Lead Generation',
      'Lead Qualification & Verification',
      'Appointment Setting',
      'CRM Management & Pipeline Updates',
      'Email & Outbound Outreach Campaigns',
      'Sales Support & Follow-ups',
      'Customer Data Research',
      'Performance Tracking & Reporting',
      'Dedicated Lead Generation Teams',
      'Scalable Growth Solutions'
    ],
    caseStudy: {
      title: 'B2B Lead Pipeline Acceleration',
      metrics: '3.8x Qualified Lead Volume',
      summary: 'Built and managed a full-funnel inbound lead generation engine for a mid-market B2B client, tripling qualified pipeline volume within 90 days through optimized digital campaigns.'
    },
    rightPanel: {
      badge: 'Business Growth',
      title: 'More Opportunities. Better Conversions.',
      label: 'Smart Lead Generation',
      value: 'Connecting You with the Right Customers',
      summary: 'Trunex BPO delivers customized lead generation solutions that help businesses expand their reach, improve prospect engagement, and build stronger sales pipelines. Our data-driven approach ensures you receive qualified opportunities that support long-term business growth.',
      footerLeft: 'Dedicated Growth Teams',
      footerRight: 'Results-Driven Approach'
    }
  },
  {
    id: 'ops',
    name: 'Trunex Ops',
    title: 'Streamline Operations. Maximize Efficiency.',
    badge: 'BACK OFFICE & BUSINESS PROCESS OUTSOURCING',
    description: 'Offering end-to-end back-office solutions including data entry, CRM updates, quality assurance, reporting, and compliance.',
    longDescription: 'At Trunex BPO, we help businesses simplify complex operations through reliable back-office and business process outsourcing solutions. From data management and CRM administration to document processing, quality assurance, and administrative support, our experienced teams handle your operational workload with precision, security, and efficiency—allowing you to focus on growing your business.',
    logoUrl: '',
    features: [
      'Back Office Process Management',
      'Data Entry & Document Processing',
      'CRM Management & Database Updates',
      'Quality Assurance & Compliance Monitoring',
      'Administrative & Virtual Assistant Services',
      'Order Processing & Account Management',
      'Email Support & Ticket Management',
      'Reporting & Business Analytics',
      'Workflow Optimization',
      'Dedicated Back Office Teams'
    ],
    caseStudy: {
      title: 'E-Commerce Operations Scale-Up',
      metrics: '60% Reduction in Processing Time',
      summary: 'Took over order management, returns processing, and CRM hygiene for a fast-growing e-commerce brand, cutting back-office processing time by 60% while maintaining 99.8% data accuracy.'
    },
    rightPanel: {
      badge: 'Operational Excellence',
      title: 'Smarter Processes. Better Business.',
      label: 'Streamlined Operations',
      value: 'Efficient • Accurate • Scalable',
      summary: 'Our back-office specialists help businesses improve productivity by managing time-consuming operational tasks with accuracy and consistency. Through efficient workflows, secure data management, and dedicated support teams, we reduce administrative burden and enable organizations to focus on strategic growth.',
      footerLeft: 'Operational Excellence',
      footerRight: 'Trusted BPO Partner'
    }
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Imran Sayyed',
    role: 'Founder & Chief Executive Officer (CEO)',
    imageUrl: '',
    bio: 'Imran Sayyed founded Trunex BPO Pvt. Ltd. with a vision to help businesses grow through innovative and customer-focused outsourcing solutions. He leads the company\'s strategic direction, business development, and operational excellence, ensuring every client receives reliable, scalable, and high-quality services.',
    linkedin: 'https://www.linkedin.com/in/imran-sayyed-077501203?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
  },
  {
    name: 'Hazel Jones',
    role: 'Director of Business Development',
    imageUrl: '',
    bio: 'Hazel Jones leads Trunex BPO\'s business development initiatives, focusing on building strong client relationships and identifying new growth opportunities. She works closely with businesses to understand their needs and develop customized outsourcing solutions that create long-term value.',
    linkedin: '#'
  },
  {
    name: 'Ramish Momin',
    role: 'Compliance Manager',
    imageUrl: '',
    bio: 'Ramish Momin oversees compliance, quality assurance, and operational standards across Trunex BPO. He ensures that every process follows industry best practices, maintains data security, and meets the highest standards of quality and client confidentiality.',
    linkedin: '#'
  },
  {
    name: 'Harshada Kamble',
    role: 'Operations Manager',
    imageUrl: '',
    bio: 'Harshada Kamble manages the day-to-day operations of Trunex BPO, ensuring smooth service delivery, team performance, and operational efficiency. She is dedicated to maintaining exceptional customer service and delivering consistent results for every client.',
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
