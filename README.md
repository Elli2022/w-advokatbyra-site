# W Advokatbyrå Website

Production website for W Advokatbyrå, built with React and deployed on Netlify.

## Live Site

- [w-advokatbyra-malmo.netlify.app](https://w-advokatbyra-malmo.netlify.app)

## Tech Stack

- React (Create React App)
- TypeScript
- React Router
- React Bootstrap
- Netlify Functions (`news-proxy`) for news data
- GitHub Actions for CI validation

## Features

- Mobile-first responsive UI
- Dark premium visual theme with accessibility-focused contrast updates
- Hero and content sections for firm presentation
- Dynamic news cards with:
  - retry logic
  - client-side session cache
  - graceful fallback content
  - optimized external images (`srcset`, lazy loading, WebP proxying)

## Getting Started

### Prerequisites

- Node.js 18+ (Node 20 recommended)
- npm

### Install and run locally

```bash
git clone https://github.com/Elli2022/w-advokatbyra-site.git
cd w-advokatbyra-site
npm ci
npm start
```

The app runs on `http://localhost:3000` by default.

### Build

```bash
npm run build
```

### Test

```bash
npm run test:ci
```

## Environment Variables

Create a `.env` file (or configure in Netlify) for serverless news fetch:

```bash
NEWS_API_KEY=your_newsapi_key
```

Without `NEWS_API_KEY`, news falls back to local static cards.

## Project Structure

```text
src/
  components/      # UI building blocks
  pages/           # Route-level pages
  images/          # Static image assets
  App.tsx          # Router setup
  App.css          # Global theme and layout styles
netlify/
  functions/
    news-proxy.js  # Serverless API proxy
.github/workflows/
  netlify-deploy.yml # CI validation workflow
```

## Deployment

- Netlify configuration is defined in `netlify.toml`.
- This repo now uses GitHub Actions as CI validation (test/build).
- Production deployment is expected to be handled by Netlify's Git integration.

## Versioning and Releases

- The repository uses a single long-lived production branch: `master`.
- Releases are tracked with semantic version tags (`vMAJOR.MINOR.PATCH`).
- Human-readable release history is maintained in `CHANGELOG.md`.
- Detailed workflow guidance is documented in `docs/versioning-and-deploy.md`.

## Contributing

1. Create a branch from `master`.
2. Keep changes scoped and reviewable.
3. Run `npm run test:ci` and `npm run build` before opening PR.
4. Open a PR with a short summary and test notes.

## License

This project is licensed under the MIT License.
