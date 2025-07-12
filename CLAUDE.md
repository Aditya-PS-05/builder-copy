# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev         # Start development server (client + server on port 8080)
npm run build       # Build for production (client and server)
npm run build:client  # Build client only
npm run build:server  # Build server only
npm run start       # Start production server
npm run test        # Run Vitest tests
npm run typecheck   # TypeScript validation
npm run format.fix  # Format code with Prettier
```

## Architecture Overview

This is a full-stack React application built with TypeScript, featuring:

- **Frontend**: React 18 SPA with React Router 6, TailwindCSS, and Radix UI components
- **Backend**: Express server integrated with Vite development server
- **Build System**: Vite with dual build configurations (client and server)
- **Testing**: Vitest for unit tests
- **Styling**: TailwindCSS with pre-built UI component library

### Project Structure

```
client/               # React SPA frontend
├── pages/            # Route components (Index.tsx = home page)
├── components/ui/    # Pre-built UI component library (Radix UI + TailwindCSS)
├── App.tsx           # App entry point with routing setup
└── global.css        # TailwindCSS theming and global styles

server/               # Express API backend
├── index.ts          # Main server setup and route registration
└── routes/           # API route handlers

shared/               # Shared types between client and server
└── api.ts            # API interface definitions
```

### Path Aliases

- `@/*` - Maps to `client/*`
- `@shared/*` - Maps to `shared/*`

## Key Development Patterns

### Adding New Routes
1. Create component in `client/pages/ComponentName.tsx`
2. Add route in `client/App.tsx` above the catch-all `*` route
3. Follow React Router 6 patterns

### Adding API Endpoints
1. Create shared interface in `shared/api.ts` (optional but recommended)
2. Create route handler in `server/routes/route-name.ts`
3. Register route in `server/index.ts` using `/api/` prefix
4. All API routes are prefixed with `/api/`

### UI Components
- Use pre-built components from `client/components/ui/`
- Style with TailwindCSS utility classes
- Use `cn()` utility function for conditional classes (combines `clsx` + `tailwind-merge`)

### Development Environment
- Single port (8080) serves both frontend and backend in development
- Hot reload for both client and server code
- Express server integrated as Vite middleware during development

## Build System Notes

- **Client build**: Outputs to `dist/spa/`
- **Server build**: Outputs to `dist/server/` as ES modules (.mjs)
- Server build uses separate Vite config (`vite.config.server.ts`)
- Production server serves built React SPA with fallback routing

## TypeScript Configuration

- Strict mode disabled for faster development
- ES2020 target with ESNext modules
- JSX handled by React SWC plugin
- Path mapping configured for aliases