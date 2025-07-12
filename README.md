# Gaming Community Platform

A dedicated platform for gamers to connect, form teams, and build meaningful in-game and real-world relationships.

## Overview

This full-stack React application helps gamers find compatible teammates, form lasting friendships, and engage in meaningful communities that extend beyond individual games. Built with TypeScript, React 18, and Express.

## Features

### Core Features
- **Gamer-centric profiles** with gaming history, skill levels, and play styles
- **Intelligent matchmaking** based on preferences, skill, and availability
- **Team formation tools** for casual and competitive play
- **Communication tools** with in-app chat and platform integrations
- **Community features** including groups, forums, and events
- **Real-world integration** for organizing local meetups and tournaments

### Planned Features
- Gamification with badges and reputation system
- Mobile app (iOS & Android)
- Advanced moderation and safety tools
- Content sharing and collaboration features

## Quick Start

### Prerequisites
- Node.js (version specified in package.json)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd glore-web

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start on port 8080, serving both the React frontend and Express backend.

## Development

### Available Scripts
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

### Project Structure
```
client/               # React SPA frontend
├── pages/            # Route components
├── components/ui/    # Pre-built UI components (Radix UI + TailwindCSS)
├── App.tsx           # App entry point with routing
└── global.css        # TailwindCSS theming

server/               # Express API backend
├── index.ts          # Main server setup
└── routes/           # API route handlers

shared/               # Shared types between client and server
└── api.ts            # API interface definitions
```

### Tech Stack
- **Frontend**: React 18, TypeScript, TailwindCSS, Radix UI
- **Backend**: Express, TypeScript
- **Build System**: Vite with dual configurations
- **Testing**: Vitest
- **Routing**: React Router 6

## Contributing

1. Create a new branch for your feature
2. Follow the existing code style and patterns
3. Run tests and type checking before committing
4. Submit a pull request with a clear description

## Target Audience

Gamers of all ages and skill levels seeking:
- Social connections in gaming
- Team formation opportunities
- Community engagement
- Real-world gaming events

## Contact

For more details or to join the team, please reach out via the project repository or issues.

## License

[License information to be added]