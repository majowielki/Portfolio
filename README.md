# Michał Majewski – Portfolio

Personal portfolio website of a Full Stack .NET & React developer: about me, skills, projects and a contact form.

**Live:** https://lemon-forest-0a1d05503.2.azurestaticapps.net

![Portfolio screenshot](public/og-image.jpg)

## Tech stack

- **React 18** + **TypeScript** (strict mode)
- **Vite 6**
- **Tailwind CSS 3** + SCSS
- **tsParticles** – animated background
- **EmailJS** – contact form without a custom backend
- **Azure Static Web Apps** + **GitHub Actions** – CI/CD

## Features

- Single-page layout with smooth scrolling and active section highlighting
- Responsive design: desktop navbar and mobile burger menu
- Project flip cards – hover on desktop, tap on smaller screens
- Contact form with client-side validation, delivered through EmailJS
- Downloadable CV

## Getting started

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

The app runs at http://localhost:5173.

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server with HMR |
| `npm run build` | Type-check and build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
  components/   reusable UI: buttons, navbar, background, layout
  config/       navigation, project tags, EmailJS settings
  contexts/     global UI state
  hooks/        scroll-related hooks
  sections/     page sections: Hero, About, Skills, Projects, Contact
  styles/       global styles and Tailwind layers
public/         static files: CV, icons, Open Graph image
```

## Deployment

Every push to `master` runs the GitHub Actions workflow in `.github/workflows`, which builds the app and deploys it to Azure Static Web Apps. Pull requests get their own preview environment.

## Contact

- [LinkedIn](https://www.linkedin.com/in/micha%C5%82-majewski-/)
- [GitHub](https://github.com/majowielki)
