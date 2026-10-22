<div align="center">

# Shaurya Rathore · Developer Portfolio

**A personal portfolio for thoughtful interfaces, useful tools, and the process behind building them.**

[![React](https://img.shields.io/badge/React-19-20232a?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite)](https://vite.dev/)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify-00ad9f?logo=netlify)](https://www.netlify.com/)

[GitHub](https://github.com/Pandacoder0011) · [LinkedIn](https://www.linkedin.com/in/shaurya-rathore/) · [Email](mailto:ssr030305@gmail.com)

</div>

---

## About

A responsive, dark portfolio showcasing selected software projects, technical skills, experience, hackathons, and research. The visual system pairs a black, gray, white, and red palette with a rotating 3D hero, soft scroll reveals, an interactive tech stack, and a coding-and-life section.

## Highlights

- Responsive layout with compact mobile navigation
- Three.js orbital hero built with React Three Fiber
- Filterable project cards with custom SmartOps AI and device-tracking visuals
- Interactive technology stack with category filters
- Scroll progress, subtle cursor spotlight, and motion-aware reveal effects
- Hackathon certificates, a problem-solving log, and research highlights
- Resume download and direct email contact
- Netlify-ready Vite build with a single-page application fallback

## Featured projects

| Project | What it does | Links |
| --- | --- | --- |
| **SmartOps AI** | AI-assisted operations dashboard with a React client, Node.js API, protected authentication, and Gemini-powered insights. | [Live site](https://smartops-ai-seven.vercel.app/) · [Source](https://github.com/Pandacoder0011/smartops-ai) |
| **Real-Time Multiplayer Chess** | Two-player chess with synchronized moves over Socket.IO and move validation. | [Source](https://github.com/Pandacoder0011/Chess_game) |
| **Real-Time Device Tracking** | Browser location updates shown on a map and synchronized over WebSockets. | [Source](https://github.com/Pandacoder0011) |
| **Gym Flex** | Mobile-first gym management interface with responsive navigation. | [Live site](https://gymflexx.netlify.app/) |

## Built with

- **UI:** React, TypeScript, Tailwind CSS v4
- **Motion:** Motion for React
- **3D:** Three.js, React Three Fiber
- **Build:** Vite
- **Icons:** Lucide React

## Run locally

Install a recent Node.js release and npm, then run:

```bash
npm install
npm run dev
```

Vite prints a local URL when the development server is ready.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run typecheck` | Check TypeScript projects |
| `npm run build` | Type-check and create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Deploy to Netlify

The repository includes [`netlify.toml`](netlify.toml) with the Vite build command and `dist` publish directory. Connect the repository to Netlify, or deploy the generated `dist/` directory with the Netlify CLI.

## Project layout

```text
src/
├── App.tsx                 # Page sections and interactions
├── index.css               # Theme, responsive layout, and motion styling
├── components/             # Project cards, 3D scene, and reveal helpers
└── data/portfolio.ts       # Profile, projects, skills, and credentials
public/
├── certificates/           # Referenced hackathon certificates
├── coding-cat.png          # Coding-and-life section image
└── Shaurya-Rathore-Resume.pdf
```

## Contact

**Shaurya Rathore**  
[ssr030305@gmail.com](mailto:ssr030305@gmail.com) · [LinkedIn](https://www.linkedin.com/in/shaurya-rathore/)

---

<div align="center">

*Built with curiosity, care, and a little motion.*

</div>
