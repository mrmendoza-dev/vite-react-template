# Repo modernization

- April 14, 2026

This document describes the **shift in paradigms** for this template: from a Node- and 2020-era JS toolchain to a Bun-first, web-standards stack with React 19. It is not an exhaustive file manifest—use git history for line-by-line diffs.

---

## What we moved away from (legacy)

| Concern | Old pattern |
| --- | --- |
| Runtime & installs | Node as the default runtime; npm-centric config (e.g. npm-only flags in `.npmrc`). |
| Frontend | React 18–style assumptions; older bundler ergonomics; heavier Tailwind v3 + big `tailwind.config` workflows. |
| UI primitives | Radix as the default headless layer behind shadcn-style components. |
| API | Express-style Node servers and hand-rolled JS entrypoints. |
| Quality | Split ESLint + Prettier (and plugins) for lint vs format. |
| Multi-task dev | Shell glue or **concurrently**-style “run two processes” without a real task graph or cache. |

---

## What we standardized on (current)

| Concern | New pattern |
| --- | --- |
| Runtime & installs | **Bun 1.3+** as package manager and runtime: fast startup, native TS/JSX, `packageManager` pinned in `package.json`. |
| Frontend | **React 19** + **Vite 8** (Rolldown-era bundling, fast HMR, `ref` as a normal prop where applicable). |
| Styling | **Tailwind v4** via Vite plugin: CSS-first `@import "tailwindcss"`, `@theme` / variables, optional `tailwindDirectives` in Biome—no mandatory fat Tailwind config file. |
| UI primitives | **Base UI** under the hood for shadcn “base-nova” style components (`@base-ui/react`). |
| API | **Elysia** on Bun: composable app (`server/app.ts`), typed `App` export, CORS, routes as modules—**not** Express. **Eden** (`@elysiajs/eden` Treaty client in `src/lib/api-client.ts`) uses that type for end-to-end calls (`VITE_API_URL`). |
| Quality | **Biome** single toolchain: `biome check`, `biome ci`, import organize, React rules domain. |
| CI / orchestration | **Turborepo** for `lint` / `test` / `build` (and parallel dev + server): cache, task graph, prefixed logs—**no** leftover concurrently dependency. |

---

## How the repo reflects that (high level)

- **Server:** TypeScript-only tree (`server/*.ts`): factory for the Elysia app, env helpers, typed routes; entry listens with Bun.
- **Client:** Vite + React 19; global styles consolidated through a v4-oriented CSS entry (e.g. `src/styles/index.css`) plus existing base/theme layers where still useful.
- **Components:** Expanded shadcn/ui kit under `src/components/ui/`, aligned with Base UI and Tailwind v4 tokens.
- **Tests:** Vitest + Testing Library; Bun-oriented preloads where needed; server smoke tests under `tests/server/`.
- **Docs:** Changelog and this spec live under `docs/` (root changelog narrative retired in favor of `docs/CHANGELOG.md`).

Legacy editor-only or npm-only artifacts (old ESLint config, npmrc quirks, ad hoc VS Code task files) were dropped in favor of **scripts + Biome + Turbo**.

---

## Optional next steps (not required for “modern” baseline)

- **React Compiler:** enable when you want less manual memoization; stack is already on React 19.
- **Plugin choice:** Vite may suggest `@vitejs/plugin-react` over `plugin-react-swc` if you are not relying on SWC-specific behavior—evaluate per project.

---

## Related

- [CHANGELOG.md](./CHANGELOG.md) — release-oriented notes.
