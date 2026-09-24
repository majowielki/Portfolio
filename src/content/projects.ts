import { Project } from "@/types/types";
import { TAGS } from "@/content/tags";
import cyberLosowanieImage from "@/assets/images/cyber-losowanie.webp";
import storeAppImage from "@/assets/images/store-app.webp";
import portfolioImage from "@/assets/images/portfolio-web.webp";

export const projects: Project[] = [
  {
    title: "Cyber Losowanie",
    category: "Full-stack · Monolith",
    description:
      "Full-stack project with a React frontend and a .NET API that enables friends to create a Secret Santa event and draw pairings. Each participant first selects themselves, then opens a “present” to privately reveal the person they’ll be gifting to.",
    image: cyberLosowanieImage,
    githubUrl: "https://github.com/majowielki/CyberLosowanie",
    liveUrl:
      "https://cyberlosowanie20250822170522-csbsa4avhcajb8bx.canadacentral-01.azurewebsites.net/",
    tags: [
      TAGS.react,
      TAGS.typescript,
      TAGS.tailwindcss,
      TAGS.redux,
      TAGS.aspnetcore,
      TAGS.csharp,
      TAGS.restapi,
      TAGS.entityframework,
      TAGS.monolith,
      TAGS.sqlserver,
      TAGS.xunit,
    ],
  },
  {
    title: "E-commerce Store",
    category: "Full-stack · Microservices",
    description:
      "Full-stack e-commerce platform for a furniture store, powered by Dockerized API microservices and a modern React front end. Users can search products, make purchases, and try a demo admin dashboard.",
    image: storeAppImage,
    githubUrl: "https://github.com/majowielki/Store-app",
    liveUrl: "https://store-app-ui-new.mangocoast-91b8ba19.polandcentral.azurecontainerapps.io",
    tags: [
      TAGS.react,
      TAGS.typescript,
      TAGS.tailwindcss,
      TAGS.redux,
      TAGS.aspnetcore,
      TAGS.csharp,
      TAGS.restapi,
      TAGS.entityframework,
      TAGS.docker,
      TAGS.rabbitmq,
      TAGS.redis,
      TAGS.microservices,
      TAGS.postgresql,
      TAGS.xunit,
    ],
  },
  {
    title: "Portfolio Website",
    category: "Frontend · SPA",
    description:
      "A modern, responsive portfolio site built with React and powered by Tailwind CSS for a clean and modern interface.",
    image: portfolioImage,
    githubUrl: "https://github.com/majowielki/Portfolio",
    tags: [TAGS.react, TAGS.typescript, TAGS.tailwindcss, TAGS.responsiveDesign],
  },
];
