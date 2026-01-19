# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Prerequisites

Make sure you have:

```bash
# Git LFS (required for PDFs in public/files)
git lfs version

# Node.js + npm (this repo is deployed with Node 23 via nixpacks.toml)
node -v
npm -v
```

## Setup

This repo stores PDFs with Git LFS, so after cloning you must pull LFS objects before running the app.

```bash
git lfs install
git lfs pull

# Install dependencies (lockfile present)
npm ci --legacy-peer-deps
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
