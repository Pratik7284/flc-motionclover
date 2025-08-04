# FLC Media Solutions Website

## Overview

This is a professional company website for "FLC - Four Leaf Clover Media Solutions," a creative healthcare and media solutions company. The project is built as a full-stack web application with a React frontend and Express.js backend, specifically designed to showcase the company's services including doctor branding, podcast production, pharma social media, medical video shoots, creative design, and digital strategy.

The website features a modern, single-page scroll design inspired by professional agency websites, with smooth animations, responsive layout, and professional healthcare-focused branding. It includes sections for hero presentation, company introduction, services showcase, portfolio display, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system and CSS variables
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth scroll animations and page transitions
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: Hot reload with tsx for development server
- **Build**: ESBuild for production bundling
- **API Structure**: RESTful API with `/api` prefix routing
- **Middleware**: Built-in JSON parsing, URL encoding, and custom logging middleware

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Schema**: User management with username/password authentication
- **Migrations**: Drizzle Kit for database schema management
- **Validation**: Drizzle-Zod integration for runtime type checking

### Component Architecture
- **Design System**: Custom color palette with FLC branding (green primary colors)
- **Layout**: Responsive grid system with mobile-first approach
- **Sections**: Modular section components (Hero, About, Services, Portfolio, Contact)
- **Animations**: Custom hooks for scroll-triggered animations and staggered effects
- **Navigation**: Smooth scrolling sticky navbar with mobile menu support

### Development Environment
- **Package Manager**: npm with lockfile for dependency management
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Development Server**: Vite dev server with HMR and error overlay
- **Code Quality**: ESLint and TypeScript checking
- **Asset Handling**: Vite asset pipeline with optimized bundling

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **Build Tools**: Vite, ESBuild, TypeScript compiler
- **Backend**: Express.js, Node.js built-in modules

### Database and ORM
- **Neon Database**: `@neondatabase/serverless` for PostgreSQL serverless connection
- **Drizzle**: `drizzle-orm` and `drizzle-kit` for database operations and migrations
- **Session Storage**: `connect-pg-simple` for PostgreSQL session storage

### UI and Styling
- **Tailwind CSS**: Core framework with PostCSS and Autoprefixer
- **Radix UI**: Complete primitive component library (@radix-ui/react-*)
- **Shadcn/ui**: Pre-built component system with class-variance-authority
- **Framer Motion**: Animation library for smooth transitions
- **Lucide React**: Icon library for consistent iconography

### Form and Validation
- **React Hook Form**: Form state management with `@hookform/resolvers`
- **Zod**: Schema validation library
- **Drizzle-Zod**: Integration between Drizzle ORM and Zod validation

### Development and Utilities
- **TanStack Query**: Server state management and caching
- **date-fns**: Date manipulation utilities
- **clsx** and **tailwind-merge**: Conditional CSS class handling
- **cmdk**: Command palette component
- **Embla Carousel**: Carousel/slider functionality

### Replit Integration
- **Vite Plugins**: Runtime error modal and cartographer for Replit environment
- **Development Banner**: Replit development environment integration

The application follows a monorepo structure with shared TypeScript definitions, separate client and server directories, and a comprehensive UI component library. The architecture supports both development and production environments with appropriate build optimizations and error handling.

## Enhanced Animation Features (Latest Update)

### Schbang-Inspired Animations
- **Page Transition**: Professional loading screen with animated FLC logo and floating particles
- **Cursor Follower**: Custom magnetic cursor with interactive hover states (desktop only)
- **Scroll Progress**: Dynamic progress bar indicating page scroll position
- **Text Reveal**: Word-by-word animated text reveals with staggered timing
- **Magnetic Buttons**: Interactive buttons with magnetic hover effects and 3D transforms
- **Floating Text**: Continuous scrolling service tags in hero section
- **CTA Banner**: Large typography call-to-action with dramatic animations
- **Mobile Optimization**: Reduced animation duration for mobile devices (0.5s max)

### Performance Optimizations
- Hardware-accelerated animations using transform and opacity
- Mobile-specific animation speed adjustments
- Smooth scrolling with -webkit-overflow-scrolling: touch
- Cursor follower disabled on mobile devices
- Optimized animation timing for 60fps performance

## Deployment Configuration

### Ready for Production
- **GitHub**: Repository configured with proper .gitignore and documentation
- **Vercel**: Deployment configuration with vercel.json and build commands
- **Environment**: .env.example template for production variables
- **Documentation**: Complete README.md and DEPLOYMENT.md guides
- **Build System**: Optimized Vite + ESBuild configuration for production

### Deployment Files Created
- `README.md` - Project documentation and setup instructions
- `DEPLOYMENT.md` - Step-by-step Vercel deployment guide
- `vercel.json` - Vercel-specific deployment configuration
- `.env.example` - Environment variables template
- `.gitignore` - Git ignore rules for clean repository

The website is production-ready with professional animations, responsive design, and optimized performance for healthcare media agency branding.