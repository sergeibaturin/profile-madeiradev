# profile-madeiradev

A pnpm monorepo containing the web applications and shared packages for [madeiradev.com](https://madeiradev.com).

---

## Overview

| App | Domain | Description |
|-----|--------|-------------|
| `landing` | madeiradev.com | Public marketing landing page |
| `profile` | profile.madeiradev.com | Auth-protected user profile manager |
| `admin` | — | Internal admin dashboard |

---

## Repo Structure

```
profile-madeiradev/
├── apps/
│   ├── landing/          # Marketing site — Framer Motion animations, public routes
│   ├── profile/          # Profile app — Firebase auth, protected routes
│   └── admin/            # Admin dashboard — MUI dark theme, role-based UI
├── packages/
│   └── core/             # Shared components, theme, hooks, and API client
├── .github/
│   └── workflows/
│       ├── landing.yml   # Deploy landing → S3 on tag `landing-*`
│       └── profile.yml   # Deploy profile → S3 on tag `profile-*`
├── tsconfig.base.json    # Shared TypeScript base config (ES2022, strict)
├── pnpm-workspace.yaml   # Workspace definition
└── package.json          # Root scripts
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Language | TypeScript 5.4 (strict mode) |
| Framework | React 19 |
| Build | Vite 5 |
| Styling | MUI Material 6 + Emotion |
| Routing | React Router 6 |
| State | Zustand 5 |
| HTTP client | Axios (via `@repo/core`) |
| Package manager | pnpm 9+ |
| Node | 18+ |

---

## Apps

### `@repo/landing` — port 5175

Public marketing site deployed to `madeiradev.com`.

**Key dependencies:** Framer Motion 11, React Icons 5, JetBrains Mono font
**Routes:**

| Path | Page | In header nav |
|------|------|:---:|
| `/` | Home | yes |
| `/about` | About | yes |
| `/terms` | Terms | no |

---

### `@repo/profile` — port 5173

Auth-protected profile manager deployed to `profile.madeiradev.com`.

**Key dependencies:** Firebase 12 (Auth), Axios
**Routes:**

| Path | Page | Auth |
|------|------|:----:|
| `/login` | Login | public |
| `/signup` | Sign Up | public |
| `/profile` | Profile | protected |
| `/` | — | redirects → `/login` |

**Authentication flow:**
1. Firebase `onAuthStateChanged` populates `useAuthStore` (Zustand)
2. `ProtectedRoute` checks `isAuthenticated` — redirects to `/login` if false
3. Axios client (from `@repo/core`) attaches Firebase JWT as `Authorization: Bearer <token>` on every request

---

### `@repo/admin` — port 5174

Internal admin dashboard (in progress).

**Key dependencies:** MUI Material 6 (dark theme), React Router 6
**Routes:** `/`, `/dashboard`, `/settings`

---

## Packages

### `@repo/core`

Shared library consumed by all apps. Built with Vite + `vite-plugin-dts`.

**Exports:**

| Export | Type | Description |
|--------|------|-------------|
| `Button` | Component | Wrapped MUI Button |
| `SharedThemeProvider` | Component | MUI dark theme provider |
| `ScrollIndicator` | Component | Visual scroll-progress bar |
| `useCollapse` | Hook | Collapse/expand state |
| `useScrollIndicatorHook` | Hook | Scroll position tracker |
| `createApiClient(baseURL)` | Utility | Axios instance factory with credentials |
| `HeroLogoIcon` | Asset | Logo PNG |
| `MenuIcon` | Asset | MUI DensityLargeSharp icon |

**Peer dependencies:** `react ^19`, `@mui/material ^6`, `@emotion/react ^11`, `@emotion/styled ^11`

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9+

```bash
npm install -g pnpm
```

### Install

```bash
git clone https://github.com/sergeibaturin/profile-madeiradev.git
cd profile-madeiradev
pnpm install
```

### Environment Variables

Create `.env` files per app before running:

**`apps/profile/.env`**

```env
VITE_BASE_URL=http://localhost:4032

# Firebase — create a project at console.firebase.google.com
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MESSAGING_SENDER_ID=
```

`apps/landing` and `apps/admin` require no additional environment variables for local development.

### Run in Development

```bash
# All apps in parallel
pnpm dev

# Individual apps
pnpm --filter landing dev    # http://localhost:5175
pnpm --filter profile dev    # http://localhost:5173
pnpm --filter admin dev      # http://localhost:5174
```

---

## Scripts

### Root

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start all apps in parallel |
| `pnpm build` | Build `@repo/core` then all apps |
| `pnpm lint` | TypeScript type-check all packages |
| `pnpm type-check` | Full TS type-check |
| `pnpm format` | Prettier format all files |

### Per App / Package

| Script | Description |
|--------|-------------|
| `pnpm dev` | Vite dev server |
| `pnpm build` | `tsc -b && vite build` → `dist/` |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | `tsc --noEmit` |

---

## Deployment

Apps are deployed as static sites to AWS S3 via GitHub Actions.

### Trigger

Push a git tag matching the app prefix:

```bash
# Deploy landing
git tag landing-v1.2.0 && git push origin landing-v1.2.0

# Deploy profile
git tag profile-v1.2.0 && git push origin profile-v1.2.0
```

### Pipeline Steps

1. Checkout → Node 22 + pnpm 10 setup
2. `pnpm install --frozen-lockfile`
3. `pnpm --filter <app>... build` (builds app + its workspace dependencies)
4. AWS credentials via OIDC (role-based, no long-lived keys)
5. `aws s3 sync dist/ s3://<bucket> --delete`

### AWS Configuration

| App | S3 Bucket | Region |
|-----|-----------|--------|
| landing | `madeiradev.com` | us-west-1 |
| profile | `profile.madeiradev.com` | us-west-1 |

Required GitHub Actions secrets: `AWS_ACCOUNT_ID` (used in OIDC role ARN).
