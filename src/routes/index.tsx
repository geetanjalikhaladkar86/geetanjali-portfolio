import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: " Backend Java Developer Portfolio",
      },
      {
        name: "description",
        content:
          "Backend Java Developer in Pune with 2+ years building secure Spring Boot APIs, JWT auth, microservices, MySQL and MongoDB systems.",
      },
      {
        property: "og:title",
        content: "Geetanjali Khaladkar | Backend Java Developer",
      },
      {
        property: "og:description",
        content:
          "Enterprise backend engineering with Java, Spring Boot, Hibernate, REST APIs and secure authentication.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});
