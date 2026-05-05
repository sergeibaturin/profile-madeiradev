# Project Overview

`profile-madeiradev` is a monorepo containing multiple React-based applications and shared packages. It is managed using `pnpm` workspaces and built with Vite and TypeScript.

## Core Technologies
- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Package Manager:** pnpm
- **UI Library:** Material UI (MUI) with Emotion
- **State Management:** Zustand (used in `@repo/admin`)
- **Routing:** React Router DOM
- **Animation:** Framer Motion (used in `@repo/landing`)

## Workspace Structure
- **`apps/admin`**: Admin dashboard application (Port 5174).
- **`apps/landing`**: Public landing page (Port 5175).
- **`apps/profile`**: User profile application (Port 5173).
- **`packages/core`**: Shared UI components, hooks, assets, and utilities used across all apps.

# Building and Running

## Prerequisite
- **Node.js:** >= 18
- **pnpm:** >= 9

## Key Commands
- **`pnpm dev`**: Starts all applications in development mode in parallel.
- **`pnpm build`**: Builds the core package first, followed by all applications.
- **`pnpm lint`**: Runs linting (via `tsc --noEmit`) across the entire workspace.
- **`pnpm type-check`**: Runs TypeScript type checking across the entire workspace.
- **`pnpm format`**: Formats the entire codebase using Prettier.

# Development Conventions

## Engineering Standards (See `CLAUDE.md`)
- **TypeScript-First:** Use strict mode. Avoid `any`. Export explicit types.
- **Modern React:** Use functional components and hooks exclusively.
- **Component Design:** Prioritize composition and co-location.
- **Naming:** PascalCase for components/types, camelCase for functions/variables, UPPER_SNAKE for constants.

## Shared Logic
- Place reusable UI components, hooks, and assets in `packages/core`.
- Applications should import from `@repo/core` to maintain consistency.

## Styling
- Use Material UI (MUI) components and Emotion for styling.
- Follow the existing theme implementation found in `src/theme/` of each application and `packages/core`.

## State Management
- Use Zustand for global application state where necessary (see `apps/admin/src/store/userSessionStore.ts` for reference).

## Routing
- Applications use `react-router-dom` with a centralized router configuration (e.g., `apps/landing/src/router/router.tsx`).
