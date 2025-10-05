# SvelteKit Portfolio Website Blueprint

This document outlines the structure and components of the SvelteKit portfolio website.

## 1. Project Setup

*   **Framework:** SvelteKit (latest stable)
*   **Styling:** Tailwind CSS
*   **Deployment:** Vercel

## 2. Directory Structure

```/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Header.svelte
│   │   │   ├── Hero.svelte
│   │   │   ├── About.svelte
│   │   │   ├── Skills.svelte
│   │   │   ├── ProjectsGrid.svelte
│   │   │   ├── ProjectCard.svelte
│   │   │   ├── ContactForm.svelte
│   │   │   └── Footer.svelte
│   │   ├── data/
│   │   │   └── projects.ts
│   │   └── styles/
│   │       └── app.css
│   ├── routes/
│   │   ├── +layout.svelte
│   │   └── +page.svelte
│   └── app.html
├── static/
│   ├── favicon.png
│   └── images/
│       └── placeholder.jpg
├── tests/
├── package.json
├── svelte.config.js
├── tailwind.config.cjs
├── postcss.config.cjs
└── README.md