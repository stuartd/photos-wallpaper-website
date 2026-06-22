# Agent Guide

## Project Context

This is the static product website for Photos Wallpaper, a local-first macOS menu bar app that rotates desktop wallpaper from the user's Photos library.

Keep the site focused on explaining the product clearly, building trust, and sending people to TestFlight, support, privacy information, or the app code. The site has no backend, database, authentication, analytics, advertising integration, or server data dependency.

## Repository Map

- `src/main.tsx`: React entry point.
- `src/router.tsx`: route definitions.
- `src/pages/AboutAppPage.tsx`: main Photos Wallpaper product page.
- `src/pages/AboutMePage.tsx`: maker/about page, currently separate from the primary nav.
- `src/pages/NotFoundPage.tsx`: unmatched route page.
- `src/components/AppLayout.tsx`: shared header, footer, and page outlet.
- `src/components/HeroPreview.tsx`: product screenshot/preview block.
- `src/components/FeatureGrid.tsx`: reusable grid for feature, privacy, and support points.
- `src/content/site.ts`: shared copy/data arrays and icon choices.
- `src/styles.css`: Tailwind entry and global base styles.
- `tailwind.config.ts`: theme tokens for color, fonts, and shadows.
- `e2e/`: Playwright tests.
- `src/test/`: Vitest/Testing Library setup.
- `public/`: static assets served by Vite.

## Build And Test

Use Node.js 22 or newer with npm.

Common commands:

```bash
npm install
npm run dev
npm run build
npm run lint
npm run format:check
npm run test
npm run test:e2e
```

`npm run build` runs TypeScript project builds and the Vite production build. `npm run test` runs Vitest once. `npm run test:e2e` runs Playwright against the configured web server.

## Coding Guidelines

- Keep the site static. Do not add a backend, database, auth, analytics, advertising scripts, tracking pixels, or server data dependency without explicit approval.
- Keep product claims aligned with the macOS app and its privacy model: local Photos access, local wallpaper files, local logs, no uploads, no account, no analytics.
- Prefer editing shared copy in `src/content/site.ts` when changing feature, privacy, support, stats, or highlight content.
- Keep route and layout changes small and intentional. The primary route is `/`; unmatched routes go to the not-found page.
- Use React, TypeScript, React Router, Tailwind CSS, Lucide icons, and existing local components before introducing new dependencies.
- Use Tailwind theme tokens from `tailwind.config.ts` (`ink`, `paper`, `pine`, `fern`, `sun`, `clay`, `line`, `panel`, `mist`) rather than scattering new one-off colors.
- Keep the visual style restrained, direct, and product-specific: practical Mac utility, local-first privacy, and a real app screenshot rather than generic marketing decoration.
- Use lucide-react icons where possible. Keep icons decorative with `aria-hidden` unless they carry standalone meaning.
- Keep links explicit and safe: external links should use `target="_blank"` with `rel="noopener noreferrer"`; email links should use the existing support/TestFlight addresses unless copy changes are intentional.
- Keep user-facing text plain, specific, and consistent with the app repo and `photos-wallpaper/PRIVACY.md`.

## Design And Content Notes

- The first viewport should make the product name, Mac/menu-bar app nature, TestFlight path, privacy model, and screenshot clear quickly.
- Do not bury privacy. The privacy section is a core trust signal for this app.
- Avoid generic SaaS language. This is a small local Mac utility, not a cloud platform.
- Avoid adding broad claims about App Store status, availability, or app behavior unless they are true today and reflected in the app repo.
- Keep screenshots and assets inspectable and relevant to the real app. If an asset changes, verify it renders correctly in the hero preview.

## Testing Expectations

- Add or update Vitest/Testing Library tests for component behavior, rendered copy, routes, and accessibility-relevant changes.
- Add or update Playwright tests for user-facing navigation, primary calls to action, route behavior, and responsive layout risks.
- Prefer testing rendered behavior and visible text over implementation details.
- Run `npm run lint`, `npm run format:check`, `npm run test`, and `npm run build` when feasible before handing work back. Run `npm run test:e2e` for navigation, layout, or browser-behavior changes.

## Release Notes For Agents

- Avoid committing generated output such as `dist/`, `playwright-report/`, or local cache directories.
- Do not hand-edit `package-lock.json` except as the result of npm dependency operations.
- Do not add dependencies for small layout or content changes.
- If website copy changes a privacy-relevant claim, check the app repo privacy document and README for consistency.
