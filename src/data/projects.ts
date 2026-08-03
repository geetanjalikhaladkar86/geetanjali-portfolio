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
    tagline: "Used Vehicle Marketplace",
    duration: "Nov 2025 — Present",
    tech: ["Java", "Spring Boot", "JWT", "Hibernate", "JPA", "MySQL", "WhatsApp Cloud API", "REST APIs"],
    features: [
      "Vehicle inspection and dealer management backend modules",
      "Customer authentication and role-based access control",
      "WhatsApp Cloud API integration for automated notifications",
      "Secure REST APIs using Spring Boot, Hibernate, JPA and MySQL",
      "Optimized database performance for production deployment"
    ],
    responsibilities: [
      "Developed backend APIs for vehicle inspection, dealer management and customer authentication.",
      "Implemented secure REST APIs using Spring Boot, Hibernate, JPA and MySQL.",
      "Integrated WhatsApp Cloud API and optimized backend performance for production deployment."
    ],
    architecture: "React Frontend ↔ Spring Boot API Gateway ↔ Microservices ↔ MySQL ↔ WhatsApp Cloud API",
    challenges: "Handling bulk concurrent uploads of vehicle inspection images (50+ photos per vehicle) caused server timeouts. Resolved by integrating an asynchronous processing queue with Spring TaskExecutor and resizing images client-side/stream-writing before S3 upload.",
    githubUrl: "https://github.com/geetanjalikhaladkar86/caryanam-backend",
    demoUrl: "https://caryanam.com/",
    bannerUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "DealsKB",
    tagline: "Live Auction Platform",
    duration: "Oct 2024 — Jan 2025",
    tech: ["Spring Boot", "Socket.IO", "WebSocket", "Spring Security", "Razorpay", "JWT", "MySQL"],
    features: [
      "Live auction platform for laptops, mobiles, vehicles, and products",
      "JWT Authentication & Role-Based Authorization",
      "Razorpay Payment Gateway integration",
      "Real-time bid increments and notification services",
      "REST APIs for product listing, bidding, and payment processing"
    ],
    responsibilities: [
      "Developed a live auction platform for buying and selling laptops, mobiles, vehicles and other products.",
      "Implemented JWT Authentication, Role-Based Authorization, Razorpay Payment Gateway and notification services.",
      "Built REST APIs for product listing, bidding, auction management and payment processing using Spring Boot and MySQL."
    ],
    architecture: "React ↔ Spring Boot WebSockets / Socket.io ↔ Spring Security JWT ↔ MySQL Cluster ↔ Razorpay",
    challenges: "Preventing race conditions during rapid concurrent bidding updates on popular auctions. Solved by implementing pessimistic database locking ('SELECT FOR UPDATE') combined with transactional retry mechanisms to ensure thread safety.",
    githubUrl: "https://github.com/geetanjalikhaladkar86/dealskb-auction",
    demoUrl: "https://dealskb.com/",
    bannerUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "RentalChaavi",
    tagline: "Property Rental Platform",
    duration: "Jul 2024 — Oct 2024",
    tech: ["Spring Boot", "MySQL", "Socket.IO", "WhatsApp Cloud API", "REST APIs", "Lombok"],
    features: [
      "Property listing and tenant management modules",
      "Real-time chat using Socket.IO",
      "WhatsApp notification integration",
      "Secure APIs for property owners, tenants, and administrators"
    ],
    responsibilities: [
      "Developed property listing and tenant management modules.",
      "Implemented real-time chat using Socket.IO and integrated WhatsApp notifications.",
      "Designed secure APIs for property owners, tenants and administrators."
    ],
    architecture: "React ↔ Spring Boot ↔ Spring Security ↔ MySQL DB ↔ WhatsApp OTP & Socket.IO",
    challenges: "Handling bulk concurrent matches of tenants and landlords triggers peak database loads. Decoupled match calculations and messaging into an asynchronous scheduler utilizing Spring's ThreadPoolTaskExecutor.",
    githubUrl: "https://github.com/geetanjalikhaladkar86/rental-chaavi",
    demoUrl: "https://rentalchaavi.com/",
    bannerUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Vahan FinServ",
    tagline: "Loan Management System",
    duration: "May 2024 — Jun 2024",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA", "MySQL"],
    features: [
      "Loan application and document verification modules",
      "Approval workflow automation engine",
      "Role-based access using Spring Security & JWT",
      "REST APIs for customer onboarding, loan tracking, and document management"
    ],
    responsibilities: [
      "Developed loan application, document verification and approval workflow modules.",
      "Implemented role-based access using Spring Security and JWT Authentication.",
      "Built REST APIs for customer onboarding, vehicle details, loan tracking and document management."
    ],
    architecture: "React ↔ Spring Boot ↔ Service Layer ↔ JPA Repositories ↔ MySQL DB",
    challenges: "Handling complex, dynamic state transitions of loan approvals involving parallel review teams. Solved by implementing a custom state design pattern mapping state validations in memory to prevent invalid state jumps.",
    githubUrl: "https://github.com/geetanjalikhaladkar86/vahan-finserv",
    demoUrl: "https://vahanfinserv.com/",
    bannerUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Hospital Management System",
    tagline: "Enterprise Healthcare Operations Platform",
    duration: "Jun 2024 — Sep 2024",
    tech: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "MySQL", "Swagger"],
    features: [
      "Doctor, Patient, and Appointment Scheduling modules",
      "Pharmacy and Billing management workflows",
      "Secure authentication and role management",
      "Optimized CRUD operations with Hibernate & MySQL"
    ],
    responsibilities: [
      "Developed modules for Doctor, Patient, Appointment Scheduling, Pharmacy and Billing.",
      "Implemented secure authentication, role management and RESTful APIs using Spring Boot.",
      "Designed database entities using Hibernate and MySQL with optimized CRUD operations."
    ],
    architecture: "React ↔ Spring Boot REST Controller ↔ Service Core ↔ JPA Repository ↔ MySQL",
    challenges: "Ensuring high-speed access to medical history records while enforcing privacy rules. Solved by implementing Spring Security field-level access control and indexing the search queries on composite keys.",
    githubUrl: "https://github.com/geetanjalikhaladkar86/hospital-management",
    demoUrl: "https://hms-demo.com/",
    bannerUrl: "https://images.unsplash.com/photo-1584515979956-d9b6e5d09982?auto=format&fit=crop&q=80&w=800"
  }
];
