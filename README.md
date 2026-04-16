# Vite React Template

A **Bun-first** starter for React apps: **React 19**, **Vite 8**, **Tailwind CSS v4**, **shadcn-style UI** (Base UI primitives), an **Elysia** API on Bun, **Drizzle ORM** with **SQLite** (`bun:sqlite`), and **TanStack Query** for server state. Linting and formatting are unified with **Biome**; **Turborepo** runs the dev graph (`vite` + API) and CI tasks.

For the full “why and what changed” story, see [docs/REPO-MODERNIZATION.md](docs/REPO-MODERNIZATION.md). Release notes live in [docs/CHANGELOG.md](docs/CHANGELOG.md).

## Features

- **Runtime & tooling:** Bun 1.3+ (`packageManager` pinned in `package.json`), Turborepo task graph, Vitest + Testing Library
- **Frontend:** React 19, Vite 8 (Rolldown-era build), React Router 7, PWA via `vite-plugin-pwa`
- **Styling:** Tailwind v4 via `@tailwindcss/vite`, theme tokens in CSS (`src/styles/`)
- **UI:** Broad shadcn/ui kit under `src/components/ui/` (`@base-ui/react`, `components.json` for the CLI)
- **Data:** TanStack Query (`src/lib/query-client.ts`, `src/contexts/Providers.tsx`); typed API client via Eden Treaty (`src/lib/api-client.ts`)
- **Backend:** Elysia with modular routes, CORS, migrations on startup; optional direct API URL or same-origin `/api` + Vite proxy
- **Database:** Drizzle + SQLite file DB (default `data/dev.db`), SQL migrations in `server/db/migrations/`
- **Quality:** Biome (`lint`, `format`, `check` / `ci`)

## Prerequisites

- **[Bun](https://bun.sh/)** 1.3+ (recommended; matches `package.json` `packageManager`)

```bash
bun --version
```

## Setup

### Clone the repository

```bash
git clone https://github.com/mrmendoza-dev/vite-react-template
cd vite-react-template
```

### Install dependencies

```bash
bun install
```

### Environment

Copy `.env.example` to `.env` and adjust if needed:

```env
SERVER_PORT=3030
# Optional: bypass Vite proxy and call the API directly from the browser
# VITE_API_URL=http://127.0.0.1:3030
```

Optional:

- **`DATABASE_PATH`** — SQLite file path (default `data/dev.db`; see `server/db/index.ts`)

## Running the application

### Frontend + API together

```bash
bun start
```

Runs Turborepo **`dev`** (Vite) and **`server`** (Bun watching `server/index.ts`) in parallel.

- **Frontend:** Vite dev server — host `0.0.0.0`, **port `3000`** (see `vite.config.ts`)
- **API:** default **port `3030`** (`SERVER_PORT` / `PORT` in `server/env.ts`)
- **Dev proxy:** requests to **`/api`** are proxied to the Bun server unless `VITE_API_URL` is set

### Frontend only

```bash
bun run dev
```

### API only

```bash
bun run server
```

### Production build & preview

```bash
bun run build
bun run preview
```

## Scripts

| Script | Description |
| ------ | ----------- |
| `bun start` | Turbo: `dev` + `server` |
| `bun run dev` | Vite dev server |
| `bun run server` | Bun API with watch |
| `bun run build` | `tsc` + `vite build` |
| `bun run preview` | Preview production build |
| `bun run test` | Vitest (excluding `*.bun.test.ts`) + Bun tests for SQLite / server |
| `bun run lint` / `lint:fix` | Biome check / write |
| `bun run format` | Biome format |
| `bun run check` | `biome ci` |
| `bun run ci` | Turbo: `lint`, `test`, `build` |
| `bun run db:generate` / `db:push` / `db:studio` | Drizzle Kit |

## Project structure

```
vite-react-template/
├── boilerplate/           # Optional rename / setup helper (see boilerplate/BOILERPLATE_SETUP.md)
├── data/                  # Default SQLite file (e.g. dev.db); path overridable via DATABASE_PATH
├── docs/                  # CHANGELOG, REPO-MODERNIZATION, etc.
├── public/                # Static assets, PWA-related files, _redirects, robots.txt
├── server/                # Elysia (Bun) API
│   ├── db/                # Drizzle schema, client, migrations
│   ├── routes/            # Route modules
│   ├── utils/             # Server helpers
│   ├── app.ts             # App factory (plugins, routes)
│   ├── env.ts             # Port resolution
│   └── index.ts           # Listen + migrations
├── src/
│   ├── assets/            # Frontend assets (optional)
│   ├── components/
│   │   ├── common/        # Shared pieces (e.g. theme toggle, file uploader)
│   │   ├── feedback/      # Errors, boundary
│   │   ├── layout/        # Navbar, sidebar, page transition
│   │   └── ui/            # shadcn/ui components
│   ├── contexts/          # Theme, app, providers (incl. QueryClient)
│   ├── data/              # Placeholder for app data modules
│   ├── hooks/
│   ├── layouts/           # App shell / route layout
│   ├── lib/               # api-client (Eden), query-client, cn/utils
│   ├── pages/             # Home, Chat, Detail, Profile, Error
│   ├── styles/            # Tailwind v4 entry + themes
│   ├── utils/
│   ├── main.tsx
│   ├── router.tsx         # createBrowserRouter + lazy routes
│   └── registerSW.ts
├── tests/
│   ├── components/
│   ├── server/            # Includes *.bun.test.ts (Bun runner + bun:sqlite)
│   ├── utils/
│   └── setupTests.ts      # Vitest setup
├── biome.json
├── components.json
├── drizzle.config.ts
├── index.html
├── package.json
├── turbo.json
└── vite.config.ts
```

## Environment variables

| Variable | Description | Required |
| -------- | ----------- | -------- |
| `SERVER_PORT` | API listen port | No (default `3030`) |
| `PORT` | Fallback for API port (e.g. hosting) | No |
| `VITE_API_URL` | API origin for the browser; if unset, use same-origin `/api` + Vite proxy | No |
| `DATABASE_PATH` | SQLite file path | No (default `data/dev.db`) |

## Tech stack

### Frontend

- React 19, TypeScript, Vite 8, `@vitejs/plugin-react-swc`
- Tailwind CSS v4, `tailwind-merge`, `class-variance-authority`
- shadcn/ui-style components (`@base-ui/react`, `shadcn` CLI)
- React Router DOM 7, TanStack Query, Lucide icons, `@fontsource-variable/inter`

### Backend

- Elysia, Bun, `@elysiajs/cors`, `@elysiajs/eden` (Treaty types shared with `src/lib/api-client.ts`)
- Drizzle ORM, `bun:sqlite`, Drizzle Kit migrations

### Tooling

- Biome (lint + format), Turborepo, Vitest + jsdom + Testing Library, `vite-plugin-pwa`

## Included UI & behavior

- **Layout:** `AppShell` with sidebar groups, navbar, theme toggle, page transitions
- **Routes:** Home, Chat, generic detail (`/detail/:id`), Profile (see `src/router.tsx`)
- **Hooks:** e.g. `useIsMobile` (`use-mobile.ts`), `useLocalStorage`, `useModal`, `useFocus`, `useInterval`, `useEyeDropper` (where supported in the browser)

## Testing

- **Vitest** (`tests/**/*.test.{ts,tsx}`) with `tests/setupTests.ts`; `**/*.bun.test.ts` excluded from Vitest
- **Bun’s test runner** for files that need `bun:sqlite` (e.g. `tests/server/db.bun.test.ts`)

```bash
bun run test
# Vitest watch only (Bun `*.bun.test.ts` are not in watch mode here):
bun run --bun vitest --watch
```

Layout of tests:

```
tests/
├── components/
├── server/
├── utils/
└── setupTests.ts
```

## Deployment

Static frontend output is **`dist`** (`vite build`). The API is a separate Bun process; host it accordingly (or replace with your own backend).

**Netlify (SPA):**

1. Connect the repo
2. Build: `bun run build`
3. Publish: `dist`
4. Set env vars in the dashboard; add redirects if needed (`public/_redirects` is a starting point)

**Vercel:** Same idea — output directory `dist`; configure API separately unless you use serverless elsewhere.

## PWA

`vite-plugin-pwa` provides manifest, icons, and service worker registration (`src/registerSW.ts`). Use HTTPS in production for full PWA behavior.

## Customizing theme & components

- Global tokens and Tailwind layers: `src/styles/index.css` and related files under `src/styles/`
- Use the `cn()` helper from `src/lib/utils.ts` for class composition
- Regenerate or add shadcn components with the `shadcn` CLI and `components.json`

## Troubleshooting

- **Module not found:** Run `bun install`; check path aliases and case-sensitive imports
- **Styles look wrong:** Confirm `@import "tailwindcss"` chain and v4 theme variables in CSS
- **API 404 in dev:** Ensure the Bun server is running and `/api` proxy target matches `SERVER_PORT` (or set `VITE_API_URL`)
- **PWA:** Serve over HTTPS; verify service worker registration in devtools

## License

MIT

## Acknowledgements

- [Vite](https://vitejs.dev/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), [Elysia](https://elysiajs.com/), [Drizzle](https://orm.drizzle.team/), [TanStack Query](https://tanstack.com/query), [Vitest](https://vitest.dev/), [Testing Library](https://testing-library.com/), [Bun](https://bun.sh/), [Turborepo](https://turbo.build/)
