import { Tag } from "@/types/types";

const FRONTEND = "bg-sky-400";
const BACKEND = "bg-violet-400";
const DATABASES = "bg-amber-300";
const INFRA = "bg-emerald-400";
const ARCHITECTURE = "bg-rose-400";
const TESTING = "bg-slate-400";

export const TAGS = {
  react: { label: "React", color: FRONTEND },
  redux: { label: "Redux", color: FRONTEND },
  tailwindcss: { label: "Tailwind CSS", color: FRONTEND },
  typescript: { label: "TypeScript", color: FRONTEND },

  aspnetcore: { label: "ASP.NET Core", color: BACKEND },
  entityframework: { label: "Entity Framework", color: BACKEND },
  restapi: { label: "REST API", color: BACKEND },
  csharp: { label: "C#", color: BACKEND },
  dotnet: { label: ".NET", color: BACKEND },

  sqlserver: { label: "SQL Server", color: DATABASES },
  postgresql: { label: "PostgreSQL", color: DATABASES },

  docker: { label: "Docker", color: INFRA },
  rabbitmq: { label: "RabbitMQ", color: INFRA },
  redis: { label: "Redis", color: INFRA },

  microservices: { label: "Microservices", color: ARCHITECTURE },
  monolith: { label: "Monolith", color: ARCHITECTURE },
  responsiveDesign: { label: "Responsive Design", color: ARCHITECTURE },

  xunit: { label: "xUnit", color: TESTING },
} satisfies Record<string, Tag>;
