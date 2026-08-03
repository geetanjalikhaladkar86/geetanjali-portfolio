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
      "Built and maintained 40+ secure REST APIs using Java, Spring Boot, Hibernate and MySQL.",
      "Built scalable modules for the Caryanam used-car marketplace platform.",
      "Worked on JWT Authentication, Role-Based Access Control, API Security, Razorpay Payment Gateway and WhatsApp Cloud API.",
      "Contributed to enterprise platforms including Caryanam, DealsKB, RentalChaavi, Vahan FinServ and Hospital Management System.",
      "Optimized database queries and resolved critical production issues."
    ]
  },
  {
    role: "Java Software Developer",
    company: "Allocate Software India Pvt Ltd",
    type: "Full-time",
    period: "Jul 2023 — Aug 2024",
    description: "Developed enterprise backend applications for Healthcare and Insurance Management Systems, streamlining policy management, claims processing, and customer service operations.",
    responsibilities: [
      "Developed enterprise backend applications using Java, Spring Boot, Hibernate and JPA.",
      "Worked on the Insurance (Healthcare) Management System.",
      "Designed and developed RESTful APIs for policy, customer and claim management.",
      "Implemented authentication, validation and database operations using MySQL.",
      "Participated in Agile development, code reviews and production support."
    ]
  },
  {
    role: "Back End Developer Intern",
    company: "KRISHANA TECHNOLOGY",
    type: "Internship",
    period: "Oct 2023 — May 2024",
    description: "Collaborated on building core server modules, executing database integrations, and implementing CRUD REST APIs in Spring Boot.",
    responsibilities: [
      "Learned and implemented Java, Spring Boot, Hibernate, JPA and MySQL.",
      "Developed CRUD REST APIs and performed database integration.",
      "Fixed bugs, tested APIs using Postman and collaborated with the development team."
    ]
  }
];
