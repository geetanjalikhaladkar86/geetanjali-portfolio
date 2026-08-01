export type Experience = {
  role: string;
  company: string;
  type: string;
  period: string;
  description: string;
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Developer",
    company: "Caryanam India Pvt Ltd",
    type: "Full-time",
    period: "Nov 2025 — Present",
    description: "Caryanam India is a tech-enabled used car marketplace platform developed to streamline and digitize the process of buying and selling pre-owned vehicles. The application is designed to enhance operational efficiency, improve transparency, and provide a seamless user experience.",
    responsibilities: [
      "REST API Development",
      "Database Design & Lifecycle State Management",
      "WhatsApp OTP Login & Verification Gateways",
      "Secure Multi-image S3 Asset Storage",
      "Bug Fixing & Live Production Support"
    ]
  },
  {
    role: "Java Software Developer",
    company: "Allocate Software India Pvt Ltd",
    type: "Full-time",
    period: "Jul 2023 — Aug 2024",
    description: "The Healthcare Management System is an insurance-based web application designed to streamline policy management and improve customer service operations. The system supports short-term and long-term coverage plans, enabling users to secure financial protection for goals such as loan repayments.",
    responsibilities: [
      "Core Java & Spring Boot Application Development",
      "API Integrations & Third-party Service Syncs",
      "Database Modeling & Query Tuning (Joins, Indexing)",
      "Role-based Session Securing & Access Controls"
    ]
  },
  {
    role: "Back End Developer",
    company: "KRISHANA TECHNOLOGY",
    type: "Internship",
    period: "Oct 2023 — May 2024",
    description: "Collaborated on building core server modules, executing database checks, and learning advanced Java backend architectures in Spring Boot.",
    responsibilities: [
      "Core Java Coding & Unit Testing",
      "SQL Query Writing & Database Configuration",
      "Spring Boot Architecture Fundamentals"
    ]
  }
];
