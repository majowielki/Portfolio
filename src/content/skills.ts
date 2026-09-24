import { SkillCategory } from "@/types/types";
import azure from "@/assets/tech/azure.svg";
import csharp from "@/assets/tech/csharp.svg";
import docker from "@/assets/tech/docker.svg";
import dotnet from "@/assets/tech/dotnet.svg";
import dotnetcore from "@/assets/tech/dotnetcore.svg";
import efcore from "@/assets/tech/efcore.svg";
import git from "@/assets/tech/git.svg";
import mongodb from "@/assets/tech/mongodb.svg";
import postgresql from "@/assets/tech/postgresql.svg";
import postman from "@/assets/tech/postman.svg";
import rabbitmq from "@/assets/tech/rabbitmq.svg";
import react from "@/assets/tech/react.svg";
import redis from "@/assets/tech/redis.svg";
import redux from "@/assets/tech/redux.svg";
import sass from "@/assets/tech/sass.svg";
import sqlserver from "@/assets/tech/sqlserver.svg";
import tailwind from "@/assets/tech/tailwind.svg";
import typescript from "@/assets/tech/typescript.svg";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    description: "APIs, business logic and data access",
    icon: "ri-server-line",
    skills: [
      { name: "C#", logo: csharp },
      { name: ".NET", logo: dotnet },
      { name: "ASP.NET Core", logo: dotnetcore },
      { name: "EF Core", logo: efcore },
    ],
  },
  {
    title: "Frontend",
    description: "Interfaces and state management",
    icon: "ri-code-s-slash-line",
    skills: [
      { name: "React", logo: react },
      { name: "TypeScript", logo: typescript },
      { name: "Redux", logo: redux },
      { name: "Tailwind", logo: tailwind },
      { name: "SCSS", logo: sass },
    ],
  },
  {
    title: "Database",
    description: "Storage and caching",
    icon: "ri-database-2-line",
    skills: [
      { name: "SQL Server", logo: sqlserver },
      { name: "PostgreSQL", logo: postgresql },
      { name: "MongoDB", logo: mongodb },
      { name: "Redis", logo: redis },
    ],
  },
  {
    title: "Tools",
    description: "Cloud, DevOps and everyday workflow",
    icon: "ri-tools-line",
    skills: [
      { name: "Azure", logo: azure },
      { name: "Docker", logo: docker },
      { name: "RabbitMQ", logo: rabbitmq },
      { name: "Git", logo: git },
      { name: "Postman", logo: postman },
    ],
  },
];
