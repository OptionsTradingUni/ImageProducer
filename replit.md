# Clippy PFF Token Dashboard

## Overview

This is a cryptocurrency token dashboard application built to display real-time analytics for the "Clippy PFF" token. The application provides a comprehensive view of token metrics including price tracking, market statistics, trading volume, liquidity information, and an integrated exchange widget. It features a dark-mode interface with a clean, card-based layout inspired by modern crypto dashboards.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing (alternative to React Router)

**UI Component System**
- **Shadcn UI** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- Component architecture follows atomic design principles with reusable UI components in `client/src/components/ui/`

**State Management**
- **TanStack Query (React Query)** for server state management and data fetching
- Custom query client configuration in `client/src/lib/queryClient.ts`
- Local component state using React hooks (useState, useEffect)

**Design System**
- Dark mode only interface with HSL-based color system
- Custom CSS variables for colors, spacing, and elevation effects
- Responsive design with mobile-first approach
- Hover and active state animations using custom CSS classes (`hover-elevate`, `active-elevate-2`)

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js
- ES modules (type: "module") throughout the codebase
- Custom Vite middleware integration for development
- Request/response logging middleware

**Storage Layer**
- In-memory storage implementation (`MemStorage` class) for development
- Database schema defined using **Drizzle ORM** with PostgreSQL dialect
- Schema includes user management (username/password authentication)
- Connection configured for **Neon Database** (serverless PostgreSQL)

**API Design**
- RESTful API endpoints prefixed with `/api`
- JSON request/response format
- CORS and credential handling for client-server communication

### Build & Deployment

**Production Build Process**
- Frontend: Vite builds React app to `dist/public`
- Backend: esbuild bundles TypeScript server code to `dist/index.js`
- Custom build script (`scripts/build.js`) adds ES module compatibility shims
- Railway-specific configuration in `railway.json`

**Development vs Production**
- Development: Vite dev server with HMR
- Production: Static files served from Express with compiled backend

### External Dependencies

**Third-Party Services**
- **OpenAI API**: Configured for AI image generation (mentioned in README but not actively used in current dashboard code)
- **Neon Database**: Serverless PostgreSQL database (configured via DATABASE_URL environment variable)
- **Railway**: Primary deployment platform with automatic builds

**External Libraries**
- **html2canvas**: Screenshot functionality for downloading dashboard as image
- **Radix UI**: Accessible UI primitives for all interactive components
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **class-variance-authority**: Type-safe variant styling
- **clsx** & **tailwind-merge**: Conditional className management

**Fonts & Assets**
- Google Fonts: Inter font family
- Static assets stored in `attached_assets` directory
- Avatar images for token branding