# Keval-AI - Next.js Project

This is a Next.js 14 project with TypeScript and Tailwind CSS, converted from a static HTML website.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/            # Contact page
│   ├── service/           # Service pages
│   └── portfolio/         # Portfolio pages
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   └── ...
├── public/               # Static assets
│   └── assets/          # Images, CSS, JS files
└── lib/                 # Utility functions
```

## Features

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Swiper for sliders
- GSAP for animations
- Responsive design

## Build

```bash
npm run build
npm start
```

## Notes

- Original CSS files are maintained in `public/assets/css/`
- Assets are stored in `public/assets/`
- Some jQuery functionality has been converted to React hooks
- GSAP animations are initialized on client-side

