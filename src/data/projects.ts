export type Project = {
  name: string;
  tagline: string;
  tech: string[];
  features: string[];
  responsibilities: string[];
  architecture: string;
  challenges: string;
  duration: string;
  githubUrl: string;
  demoUrl: string;
  bannerUrl: string;
};

export const projects: Project[] = [
  {
    name: "Caryanam",
    tagline: "Enterprise Vehicle Marketplace Platform",
    duration: "May 2024 — Present",
    tech: ["Java", "Spring Boot", "JWT", "Hibernate", "MySQL", "AWS S3", "WhatsApp OTP", "REST APIs"],
    features: [
      "Multi-role JWT Authentication (Dealer, Buyer, Admin, Inspector)",
      "WhatsApp OTP Verification for secure dealer registration",
      "Dynamic Vehicle Inventory Management",
      "Automated Inspection Allocation & Scheduler",
      "S3 Secure Multi-image Upload Pipeline",
      "Notification Dispatch Engine (Email, WhatsApp)"
    ],
    responsibilities: [
      "Designed and modeled the database schema for vehicle lifecycle states",
      "Implemented secure mobile login workflows verified by WhatsApp OTP Authentication",
      "Implemented JWT security filtering and state management for API calls",
      "Integrated AWS S3 for storage and retrieval of high-resolution vehicle inspection assets"
    ],
    architecture: "React Frontend ↔ Spring Boot API Gateway ↔ Microservices ↔ MySQL ↔ AWS S3",
    challenges: "Handling bulk concurrent uploads of vehicle inspection images (50+ photos per vehicle) caused server timeouts. Resolved by integrating an asynchronous processing queue with Spring TaskExecutor and resizing images client-side/stream-writing before S3 upload.",
    githubUrl: "https://github.com/geetanjalikhaladkar86/caryanam-backend",
    demoUrl: "https://caryanam.com/",
    bannerUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "DealsKB",
    tagline: "Real-Time Live Auction & Bidding Platform",
    duration: "Oct 2024 — Jan 2025",
    tech: ["Spring Boot", "Socket.io", "WebSocket", "Spring Security", "Razorpay", "JWT", "MySQL"],
    features: [
      "Real-Time Bid Increments & Bid History Tracking via Socket.io",
      "Dealer Subscription Management System",
      "Multi-category Auction (Laptop, Mobile, Vehicle)",
      "Razorpay Payment Gateway Integration",
      "Interactive Seller & Dealer Dashboard"
    ],
    responsibilities: [
      "Built bi-directional real-time bidding updates using Socket.io server connectors and WebSockets",
      "Configured Razorpay API integrations to handle recurring subscriptions and webhooks",
      "Optimized statistical queries for dashboard metrics reporting using native MySQL aggregations",
      "Set up role-based security layers to restrict bidding to verified subscribers"
    ],
    architecture: "React ↔ Spring Boot WebSockets / Socket.io ↔ Spring Security JWT ↔ MySQL Cluster ↔ Razorpay",
    challenges: "Preventing race conditions during rapid concurrent bidding updates on popular auctions. Solved by implementing pessimistic database locking ('SELECT FOR UPDATE') combined with transactional retry mechanisms to ensure thread safety.",
    githubUrl: "https://github.com/geetanjalikhaladkar86/dealskb-auction",
    demoUrl: "https://dealskb.com/",
    bannerUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "RentalChaavi",
    tagline: "No Brokerage Home Rental Platform",
    duration: "Jul 2024 — Oct 2024",
    tech: ["Spring Boot", "MySQL", "Payment Gateway", "WhatsApp OTP", "Facebook API", "Lombok"],
    features: [
      "Property Listings & Search Routers",
      "Premium Subscription Billing Structures via Razorpay",
      "WhatsApp OTP Verification for secure landlord listings",
      "Facebook Graph API integration for social share routing",
      "SMS & WhatsApp Cloud API Notification Hubs"
    ],
    responsibilities: [
      "Configured WhatsApp Cloud API for automated dispatch of verification links and receipt documents",
      "Integrated Facebook Graph API SDK to automatically push listings to local marketplace forums",
      "Implemented subscription models and automated renewal checking workflows",
      "Optimized proximity-based geospatial housing searches in SQL queries"
    ],
    architecture: "React ↔ Spring Boot ↔ Spring Security ↔ MySQL DB ↔ WhatsApp OTP & Facebook API",
    challenges: "Handling bulk concurrent matches of tenants and landlords triggers peak database loads. Decoupled match calculations and messaging into an asynchronous scheduler utilizing Spring's ThreadPoolTaskExecutor.",
    githubUrl: "https://github.com/geetanjalikhaladkar86/rental-chaavi",
    demoUrl: "https://rentalchaavi.com/",
    bannerUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Hospital Management System",
    tagline: "Enterprise Healthcare Operations Platform",
    duration: "Jun 2024 — Sep 2024",
    tech: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "MySQL", "Swagger"],
    features: [
      "Patient Intake Registry & Admission Workflow",
      "Doctor Rota & Appointment Booking Scheduler",
      "Digital Prescription Generator & PDF Exporter",
      "Secure Electronic Medical Records (EMR) Store"
    ],
    responsibilities: [
      "Created the appointment scheduler engine preventing doctor double-booking overlaps",
      "Integrated Spring Boot Mail API to dispatch prescription copies and reminders",
      "Documented clean REST API specifications using Swagger and OpenAPI integration",
      "Implemented strict database indexing on patient identity variables for instant lookup"
    ],
    architecture: "React ↔ Spring Boot REST Controller ↔ Service Core ↔ JPA Repository ↔ MySQL",
    challenges: "Ensuring high-speed access to medical history records while enforcing privacy rules. Solved by implementing Spring Security field-level access control and indexing the search queries on composite keys.",
    githubUrl: "https://github.com/geetanjalikhaladkar86/hospital-management",
    demoUrl: "https://hms-demo.com/",
    bannerUrl: "https://images.unsplash.com/photo-1584515979956-d9b6e5d09982?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Vahan FinServ",
    tagline: "Auto Loan Management & Processing Engine",
    duration: "May 2024 — Jun 2024",
    tech: ["Java", "Spring Boot", "JPA", "MySQL", "Bean Validation", "Postman"],
    features: [
      "Auto Loan Application Pipeline",
      "KYC & Financial Document Upload Gateway",
      "Bank Verification & Multi-tier Approval Logic",
      "Automated EMI Interest Calculator Engines"
    ],
    responsibilities: [
      "Designed the state-machine workflow for loan processing from Draft to Disbursed",
      "Configured multi-part file validation filters for document security verification",
      "Implemented financial EMI computation formulas as core backend utilities",
      "Conducted extensive API functional testing using Postman collections"
    ],
    architecture: "React ↔ Spring Boot ↔ Service Layer ↔ JPA Repositories ↔ MySQL DB",
    challenges: "Handling complex, dynamic state transitions of loan approvals involving parallel review teams. Solved by implementing a custom state design pattern mapping state validations in memory to prevent invalid state jumps.",
    githubUrl: "https://github.com/geetanjalikhaladkar86/vahan-finserv",
    demoUrl: "https://vahanfinserv.com/",
    bannerUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800"
  }
];
