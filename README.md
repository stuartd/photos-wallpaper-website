# Photos Wallpaper Website

Static product website for Photos Wallpaper, a local-first macOS menu bar app that rotates desktop wallpaper from the user's Photos library.

## Project

- Repository: https://github.com/stuartd/photos-wallpaper-website

## Stack

- Vite
- React
- TypeScript
- React Router
- Tailwind CSS
- Lucide icons
- ESLint
- Prettier
- Vitest and Testing Library
- Playwright

## Requirements

- Node.js 22 or newer
- npm

## Local Development

Install dependencies and start the Vite dev server:

```sh
npm install
npm run dev
```

Build the production site and preview it locally:

```sh
npm run build
npm run preview
```

## Scripts

- `npm run dev` - start the local Vite development server
- `npm run build` - type-check and build the production site
- `npm run preview` - serve the production build locally
- `npm run lint` - run ESLint
- `npm run format` - format files with Prettier
- `npm run format:check` - check Prettier formatting
- `npm run test` - run the Vitest unit tests once
- `npm run test:watch` - run Vitest in watch mode
- `npm run test:e2e` - run the Playwright end-to-end tests

## Routes

- `/` - product page for Photos Wallpaper
- `*` - not-found page for unmatched routes

## Notes

This is a static website. It has no database, backend, authentication, analytics, advertising integration, or server data dependency.
