# FiveM React NUI Template

A modern, high-performance FiveM NUI template built with the latest frontend technologies. This template provides a solid foundation for creating beautiful, responsive user
interfaces for your FiveM resources.

## 🚀 Latest Technology Stack

This template leverages cutting-edge packages to ensure optimal performance, developer experience, and future-proofing:

### Core Framework

- **React 19.1.0** (Latest) - The newest React version with enhanced performance, improved concurrency features, and better hydration
- **TypeScript 5.8.3** (Latest) - Latest TypeScript with improved type inference, better performance, and new language features

### Build & Development

- **Vite 7.0.0** (Latest) - Lightning-fast build tool with improved HMR, better tree-shaking, and enhanced dev server performance
- **@vitejs/plugin-react 4.6.0** (Latest) - Optimized React plugin with better Fast Refresh and improved build times

### Styling & UI

- **TailwindCSS 4.1.11** (Latest v4) ⚡ - Major version upgrade with:
    - **Oxide Engine**: 10x faster CSS compilation
    - **Native CSS Cascade Layers**: Better style organization
    - **Improved Performance**: Significantly faster build times
    - **Enhanced Developer Experience**: Better autocomplete and debugging

### State Management

- **Zustand 5.0.6** (Latest) - Lightweight, powerful state management with:
    - Improved TypeScript support
    - Better DevTools integration
    - Enhanced middleware system
    - Smaller bundle size

### Code Quality

- **Prettier 3.6.2** (Latest) - Code formatting with organize imports plugin
- **ESLint Ready** - Extensible linting configuration
- **TypeScript Strict Mode** - Enhanced type checking for better code quality

## 🎯 Why Latest Packages Matter

### Performance Benefits

- **50% faster development builds** with Vite 7.0
- **10x faster CSS compilation** with TailwindCSS v4 Oxide engine
- **Improved runtime performance** with React 19's new concurrent features
- **Smaller bundle sizes** with latest optimization techniques

### Developer Experience

- **Enhanced TypeScript intellisense** with latest type definitions
- **Better error messages** and debugging capabilities
- **Improved hot reload** for faster development cycles
- **Modern syntax support** for cleaner, more maintainable code

### Future-Proofing

- **Long-term support** with latest stable releases
- **Security updates** and vulnerability patches
- **Compatibility** with modern development tools
- **Easy migration path** for future updates

## 📋 Prerequisites

- **Node.js 18+** (Required for React 19 and latest dependencies)
- **Yarn** (Recommended package manager)
- **FiveM Server** with resource development setup
- **Basic knowledge** of React, TypeScript, and FiveM scripting

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd fivem-react-tailwind-zustand

# Install dependencies
yarn install

# Start development
yarn dev
```

## 🛠️ Development Scripts

```bash
# Start development server with hot reload
yarn dev

# Build for production
yarn build

# Build and watch for changes (for live FiveM development)
yarn start:game

# Format code with Prettier
yarn format

# Preview production build
yarn start
```

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   └── App.tsx         # Main application component
├── hooks/              # Custom React hooks
│   └── useNuiEvent.ts  # FiveM NUI event handler
├── store/              # Zustand state stores
│   └── visibility.ts   # UI visibility state
├── utils/              # Utility functions
│   ├── debugData.ts    # Development debugging
│   ├── fetchNui.ts     # NUI communication
│   └── misc.ts         # Helper functions
└── main.tsx           # Application entry point
```

## 🔧 FiveM Integration

### NUI Communication

```typescript
// Send data from Lua to React
SendNUIMessage({
	action: 'TOGGLE',
	data: true,
});

// React receives and handles the event
useNuiEvent('TOGGLE', (data) => {
	setVisible(data);
});
```

### State Management

```typescript
// Zustand store for UI state
const [visible, setVisible] = useVisibility(useShallow((state) => [state.visible, state.setVisible]));
```

### Closing NUI

```typescript
// In your React component
const handleClose = () => {
	setVisible(false);
	fetchNui('closeUI'); // Send close event to Lua
};
```

## 🚀 Production Build

The optimized build process creates lightweight, performant bundles:

- **Tree-shaking** removes unused code
- **Code splitting** for optimal loading
- **Asset optimization** for faster delivery
- **Modern ES modules** for better browser performance

Build output goes to `build/` directory, ready for FiveM deployment.

## 📚 Key Features

- ✅ **Latest React 19** with improved performance
- ✅ **TailwindCSS v4** with Oxide engine
- ✅ **TypeScript** for type safety
- ✅ **Zustand** for efficient state management
- ✅ **Vite** for lightning-fast development
- ✅ **FiveM NUI** integration ready
- ✅ **Hot Module Replacement** for instant updates
- ✅ **Production-optimized** builds
- ✅ **Development debugging** tools included

## 🔧 Troubleshooting

### Common Issues

**Build fails with dependency errors:**

```bash
# Clear cache and reinstall
rm -rf node_modules yarn.lock
yarn install
```

**TypeScript errors:**

- Ensure you're using Node.js 18+
- Check TypeScript configuration in `tsconfig.json`

**NUI not loading in FiveM:**

- Verify `ui_page` path in `fxmanifest.lua`
- Check browser console in F8 for errors
- Ensure `build/` directory contains all files

Regular updates ensure you benefit from the latest performance improvements, security patches, and new features.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `yarn format` to format code
5. Submit a pull request

---

**Built with ❤️ for the FiveM community using the latest and greatest web technologies.**
