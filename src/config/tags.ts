// Centralized tag configuration using shared color palettes
import {
  COLOR_ARCH_DESIGN,
  COLOR_TESTING,
  COLOR_BACKEND,
  COLOR_DATABASES,
  COLOR_FRONTEND_UI,
  COLOR_INFRA_DEVOPS,
} from "./tagColors";

export interface Tag {
  key: TagKey;
  label: string;
  color: string; // Tailwind classes
}

export type TagKey =
  | "dotnet"
  | "react"
  | "typescript"
  | "csharp"
  | "redux"
  | "sqlserver"
  | "restapi"
  | "aspnetcore"
  | "entityframework"
  | "docker"
  | "microservices"
  | "postgresql"
  | "tailwindcss"
  | "responsiveDesign"
  | "monolith"
  | "rabbitmq"
  | "redis"
  | "xunit";

export const TAGS: Record<TagKey, Tag> = {
  // Frontend/UI
  react: { key: "react", label: "React", color: COLOR_FRONTEND_UI },
  redux: { key: "redux", label: "Redux", color: COLOR_FRONTEND_UI },
  tailwindcss: { key: "tailwindcss", label: "Tailwind CSS", color: COLOR_FRONTEND_UI },
  typescript: { key: "typescript", label: "TypeScript", color: COLOR_FRONTEND_UI },

  // Backend
  aspnetcore: { key: "aspnetcore", label: "ASP.NET Core", color: COLOR_BACKEND },
  entityframework: { key: "entityframework", label: "Entity Framework", color: COLOR_BACKEND },
  restapi: { key: "restapi", label: "REST API", color: COLOR_BACKEND },
  csharp: { key: "csharp", label: "C#", color: COLOR_BACKEND },
  dotnet: { key: "dotnet", label: ".NET", color: COLOR_BACKEND },

  // Databases
  sqlserver: { key: "sqlserver", label: "SQL Server", color: COLOR_DATABASES },
  postgresql: { key: "postgresql", label: "PostgreSQL", color: COLOR_DATABASES },

  // Infra/DevOps
  docker: { key: "docker", label: "Docker", color: COLOR_INFRA_DEVOPS },
  rabbitmq: { key: "rabbitmq", label: "RabbitMQ", color: COLOR_INFRA_DEVOPS },
  redis: { key: "redis", label: "Redis", color: COLOR_INFRA_DEVOPS },

  // Architecture/Design
  microservices: { key: "microservices", label: "Microservices", color: COLOR_ARCH_DESIGN },
  monolith: { key: "monolith", label: "Monolith", color: COLOR_ARCH_DESIGN },
  responsiveDesign: { key: "responsiveDesign", label: "Responsive Design", color: COLOR_ARCH_DESIGN },

  // Testing
  xunit: { key: "xunit", label: "xUnit", color: COLOR_TESTING },
};
