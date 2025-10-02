# AI Coding Agent Instructions - Angular Portfolio

## Project Architecture

This is an **Angular 16** portfolio application with a **traditional component-based architecture** using external Bootstrap styling. The app follows a **single-page structure** where all content loads in one view.

### Module Organization Pattern
- **AppModule**: Main module importing `SharedModule`, `ComponentsModule`, and `HttpClientModule`
- **SharedModule** (`src/app/shared/`): Common UI components (`navbar`, `footer`) used across the app
- **ComponentsModule** (`src/app/components/`): Main content sections (`bio`, `portfolio`, `experience`, etc.)
- **ResumeModule**: Nested feature module with specialized resume components

### Component Structure Conventions
```
components/
├── [section-name]/               # Main section components
│   ├── [section-name].component.ts
│   └── [sub-components]/         # Child components for that section
└── components.module.ts          # Declares ALL components
```

## Key Patterns & Conventions

### 1. Asset-Heavy Architecture
- **External libraries loaded via `angular.json` scripts**: jQuery, Bootstrap, Slick, AOS, Particles.js
- **CSS approach**: External stylesheets in `assets/css/vendor/` + component-specific CSS
- **Global styles**: Minimal (`src/styles.css` is mostly empty) - relies on `assets/css/style.css`

### 2. Modal Component Pattern
Components like `ModalComponent` use extensive `@Input()` bindings for reusability:
```typescript
@Input('id') id = "";
@Input('img') img = "";
@Input('second_img') second_img = "";
// ... many more inputs for flexible configuration
```

### 3. Service Layer
- **MailerService**: Handles contact form submissions via HTTP to external Node.js backend
- **External API**: `https://www.tomasbascal.com/node/mailer-module`
- Uses `firstValueFrom()` pattern for Promise-based HTTP calls

### 4. Asset Management
- **Static assets**: `src/assets/` contains images, videos, PDFs, fonts
- **Build includes**: Multiple vendor CSS/JS files explicitly listed in `angular.json`
- **Image optimization**: Uses `NgOptimizedImage` in several modules

## Development Workflow

### Commands
- **Dev server**: `npm start` (serves on `http://localhost:4200`)
- **Build**: `npm run build` (outputs to `dist/portfolio/`)
- **Watch mode**: `npm run watch` (development build with file watching)
- **Testing**: `npm test` (Karma + Jasmine)

### Build Configuration
- **Production**: Optimized with strict bundle size limits (500KB initial, 1MB max)
- **Development**: Source maps enabled, no optimization
- **Asset inclusion**: Vendor CSS/JS files are bundled during build

## Component Development Guidelines

### When Adding New Components
1. **Declare in ComponentsModule**: All main content components go in `components.module.ts`
2. **Use feature modules**: For complex sections (like Resume), create dedicated modules
3. **Follow input pattern**: Use `@Input()` for reusable components with multiple configuration options
4. **Asset paths**: Reference images/videos as `assets/images/...` or `assets/videos/...`

### Styling Approach
- **Component styles**: Keep component-specific styles in `.css` files alongside components
- **Global styles**: Modify `assets/css/style.css` for app-wide changes
- **Bootstrap classes**: Use Bootstrap 5 classes directly in templates

### External Dependencies Integration
- **jQuery plugins**: Available globally via `angular.json` script includes
- **Bootstrap components**: Use Bootstrap classes, avoid Angular Bootstrap libraries
- **Icon system**: Feather icons loaded via external script

## Important Files to Understand
- `src/app/app.component.html`: Simple layout with navbar, bio, footer
- `src/app/components/components.module.ts`: Central component registry
- `angular.json`: Critical for understanding asset loading and build config
- `src/assets/css/style.css`: Main stylesheet (external to Angular)
- `src/app/services/mailer.service.ts`: Contact form backend integration pattern