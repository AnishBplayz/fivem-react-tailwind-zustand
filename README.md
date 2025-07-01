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

- **TailwindCSS 3.4.17** (Latest v3) - Advanced utility-first CSS framework with:
    - **JIT Compilation**: Just-in-time CSS generation for faster builds
    - **Enhanced Performance**: Optimized CSS output and improved build times
    - **Rich Ecosystem**: Comprehensive plugin support and community resources
    - **Developer Experience**: Excellent IntelliSense and debugging tools

#### UI Component Libraries

- **Lucide React 0.525.0** - Beautiful, customizable icon library with 1000+ icons
- **Class Variance Authority (CVA) 0.7.1** - Advanced utility for creating variant-based component APIs
- **clsx 2.1.1** - Tiny utility for constructing className strings conditionally
- **Tailwind Merge 3.3.1** - Smart utility for merging Tailwind CSS classes without conflicts
- **TailwindCSS Animate 1.0.7** - Beautiful animations and transitions for Tailwind

### Animation & Motion

- **Motion 12.19.4** (Latest) - High-performance animation library with:
    - **60fps animations** with hardware acceleration
    - **Gesture support** for interactive UI elements
    - **Layout animations** for smooth transitions
    - **Optimized bundle size** for production builds

### State Management

- **Zustand 5.0.6** (Latest) - Lightweight, powerful state management with:
    - Improved TypeScript support
    - Better DevTools integration
    - Enhanced middleware system
    - Smaller bundle size

### Code Quality & Formatting

- **Prettier 3.6.2** (Latest) - Advanced code formatting with specialized plugins:
    - **prettier-plugin-organize-imports 4.1.0** - Automatic import organization
    - **prettier-plugin-packagejson 2.5.17** - JSON formatting for package.json
    - **prettier-plugin-tailwindcss 0.6.13** - Tailwind class sorting and formatting
- **TypeScript Strict Mode** - Enhanced type checking for better code quality

## 🎯 Why Latest Packages Matter

### Performance Benefits

- **50% faster development builds** with Vite 7.0
- **Optimized CSS compilation** with TailwindCSS JIT engine
- **Improved runtime performance** with React 19's new concurrent features
- **Smaller bundle sizes** with latest optimization techniques and tree-shaking
- **Hardware-accelerated animations** with Motion library

### Developer Experience

- **Enhanced TypeScript intellisense** with latest type definitions
- **Better error messages** and debugging capabilities
- **Improved hot reload** for faster development cycles
- **Automatic code formatting** with comprehensive Prettier plugins
- **Consistent icon system** with Lucide React
- **Type-safe component variants** with CVA

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
cd fivem-react-ui

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

# Format code with Prettier (includes import organization and Tailwind sorting)
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
├── lib/                # Shared utilities and configurations
│   └── utils.ts        # Common utility functions (includes cn helper)
├── store/              # Zustand state stores
│   └── visibility.ts   # UI visibility state
├── utils/              # FiveM-specific utilities
│   ├── debugData.ts    # Development debugging
│   ├── fetchNui.ts     # NUI communication
│   └── misc.ts         # Helper functions
└── main.tsx           # Application entry point
```

## 🎨 Component Development

### Using CVA for Component Variants

```typescript
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
```

### Using Icons with Lucide React

```typescript
import { ChevronRight, Settings, User } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="flex items-center space-x-4">
      <User className="h-5 w-5" />
      <Settings className="h-5 w-5" />
      <ChevronRight className="h-4 w-4" />
    </nav>
  );
}
```

### Animations with Motion

```typescript
import { motion } from 'motion/react';

export function AnimatedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="rounded-lg bg-white p-6 shadow-lg"
    >
      Content here
    </motion.div>
  );
}
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

- **Tree-shaking** removes unused code including unused icons and utilities
- **Code splitting** for optimal loading
- **Asset optimization** for faster delivery
- **Modern ES modules** for better browser performance
- **CSS purging** removes unused Tailwind classes
- **Animation optimization** for smooth 60fps performance

Build output goes to `build/` directory, ready for FiveM deployment.

## 📚 Key Features

- ✅ **Latest React 19** with improved performance
- ✅ **TailwindCSS 3.4.17** with JIT compilation
- ✅ **TypeScript** for type safety
- ✅ **Zustand** for efficient state management
- ✅ **Vite** for lightning-fast development
- ✅ **Motion** for smooth 60fps animations
- ✅ **Lucide React** for beautiful icons
- ✅ **CVA** for variant-based component APIs
- ✅ **Smart class merging** with tailwind-merge and clsx
- ✅ **Comprehensive Prettier setup** with auto-formatting
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
- Verify all imports are properly typed

**Tailwind classes not working:**

- Run `yarn format` to ensure proper class sorting
- Check `tailwind.config.js` configuration
- Verify classes are not being purged incorrectly

**Animation performance issues:**

- Ensure Motion components are properly optimized
- Use `will-change` CSS property sparingly
- Check for memory leaks in animation loops

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
