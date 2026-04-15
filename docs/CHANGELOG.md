

# README Changelog
Log of major changes to integrate into previous projects building with this template

## v2.0.0

Stack alignment with [REPO-MODERNIZATION.md](./REPO-MODERNIZATION.md) (April 2026). Summary of what this generation of the template targets versus legacy Node / React 18 / ESLint-era setups:

- **Bun 1.3+** — Runtime and package manager; TypeScript and JSX as first-class paths; scripts and local tooling default to Bun.
- **React 19 and Vite 8** — Current frontend baseline (native `ref` prop, fast HMR and builds on Vite 8 / Rolldown-oriented pipeline).
- **Tailwind CSS v4** — CSS-native theming (`@theme`, variables), Lightning CSS, lighter config surface than v3.
- **ElysiaJS** — Bun-oriented HTTP API layer replacing Express-style stacks; web-standard request/response model.
- **Eden** (`@elysiajs/eden`) — Treaty client wired in `src/lib/api-client.ts` with `import type { App }` from `server/app` and `VITE_API_URL` for the server origin.
- **Base UI** — Component primitive direction aligned with React 19 (replaces Radix-first assumptions in older templates).
- **Turborepo** — Cached, parallel `lint` / `test` / `build` (and dev/server orchestration) instead of ad hoc parallel shell scripts.
- **Biome** — Single lint + format + import assist toolchain; replaces ESLint, `@typescript-eslint/*`, and formatting-only Prettier; Tailwind v4 directives supported in CSS via Biome parser options.

## v1.0.0

- Initial release

## v1.1.0
- Added README-Changelog.md
- Added boilerplate/
    - In Progress
- Added tests/ for testing with Vitest


### Testing (Vitest)
- /tests directory in root
    - /tests/components/
    - /tests/utils/
    - /tests/setupTests.js
        - Config file essentially
    /src
    /components
        Button.jsx
    /utils
        math.js
    /tests
    /components
        Button.test.jsx
    /utils
        math.test.js
    setupTests.js

- Install necessary dependencies
    ```
    npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @testing-library/dom
    ```
- Add "test": "vitest" to package.json
    "scripts": {
        "test": "vitest"
    }



