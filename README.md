# Vite React Template

A modern, feature-rich starter template for React applications built with Vite, TypeScript, and TailwindCSS. This template provides a solid foundation for building scalable web applications with best practices and a well-organized project structure.

## Features

- React 19 with TypeScript support
- Vite for lightning-fast builds and development
- TailwindCSS for utility-first styling
- Shadcn UI components with customizable themes
- Dark/Light mode support out of the box
- Application shell with responsive layout
- Font Awesome icons integration
- PWA ready with offline capabilities
- Express.js backend setup with basic routing
- File structure optimized for scalability
- Context API setup for state management
- Custom hooks for common functionality
- Responsive design with mobile breakpoint detection
- SEO-friendly setup with meta tags

## Prerequisites

### Node.js (18.x or later recommended):
[Download from nodejs.org](https://nodejs.org/)

### npm or yarn:
```bash
# Check if installed
npm -v
# or
yarn -v
```

## Setup

### Clone the repository
```bash
git clone https://github.com/mrmendoza-dev/vite-react-template
cd vite-react-template
```

### Install dependencies
```bash
npm install
# or
yarn
```

### Create a `.env` file in the root directory:
```env
VITE_PORT=3030
VITE_API_URL=http://localhost:3030
```

## Running the Application

### Start both frontend and backend servers:
```bash
npm start
# or
yarn start
```
This will run:
- **Frontend:** [http://localhost:5173](http://localhost:5173) (Vite's default port)
- **Backend:** [http://localhost:3030](http://localhost:3030)

## Development

### Run frontend only:
```bash
npm run dev
# or
yarn dev
```

### Run backend only:
```bash
npm run server
# or
yarn server
```

### Build for production:
```bash
npm run build
# or
yarn build
```

### Preview production build:
```bash
npm run preview
# or
yarn preview
```

## Project Structure
```
react-vite-template/
├── public/                # Static assets and PWA files
│   ├── favicon/           # Favicon files
│   ├── images/            # Public images
│   ├── _redirects         # Netlify redirects
│   └── robots.txt         # SEO robots file
├── server/                # Backend server code
│   ├── routes/            # Express routes
│   └── utils/             # Server utilities
├── src/                   # Frontend source code
│   ├── assets/            # Frontend assets
│   ├── components/        # React components
│   │   ├── common/        # Shared components
│   │   ├── layout/        # Layout components
│   │   └── ui/            # UI components (Shadcn)
│   ├── contexts/          # React contexts
│   ├── data/              # Static data
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utility libraries
│   ├── pages/             # Page components
│   ├── services/          # API services
│   ├── styles/            # CSS/SCSS files
│   ├── types/             # TypeScript type declarations
│   └── utils/             # Helper functions
└── docs/                  # Documentation
```

## Environment Variables
| Variable      | Description         | Required |
|--------------|---------------------|----------|
| VITE_PORT    | Backend server port | Yes      |
| VITE_API_URL | API base URL        | Yes      |

## Tech Stack

### Frontend:
- React 19
- TypeScript
- Vite (build tool)
- TailwindCSS
- Shadcn UI
- React Router DOM
- Font Awesome icons
- Lucide React icons (optional)

### Backend:
- Express.js
- Node.js

### Development Tools:
- ESLint
- TypeScript
- PWA plugin for Vite
- Concurrently (for running multiple scripts)

## Included Components & Features

### Layout:
- Responsive Navbar
- Sidebar with collapsible groups
- Main content area
- Theme toggle

### UI Components (Shadcn):
- Buttons, Inputs, Labels
- Collapsible panels
- Tooltips, Toasts
- Separation components
- Sheets (dialogs)

### Hooks:
- `useIsMobile` - Detect mobile screen size
- `useLocalStorage` - Persist data in localStorage
- `useModal` - Simple modal state management
- `useFocus` - Auto-focus elements
- `useInterval` - Safe interval hook

## Deployment

The application can be deployed using:

### Netlify
1. Connect your GitHub repository
2. Set build command to `npm run build`
3. Set publish directory to `dist`
4. Add environment variables in Netlify dashboard

### Vercel
1. Similar process to Netlify
2. Set the output directory to `dist`

## PWA Support
This template includes PWA capabilities through Vite PWA plugin:
- Offline support
- App manifest for installation
- Service worker auto-updates
- Icons for various devices

## Customizing Shadcn UI Components
The template uses Shadcn UI for component styling. To customize:
- Modify the theme variables in `src/styles/index.css`
- Use the `cn()` utility function to compose classes
- Override individual component styles

## Troubleshooting

### Module not found error
- Check if all dependencies are installed
- Verify import paths are correct (case-sensitive)

### Styles not applying correctly
- Make sure TailwindCSS is properly configured
- Check for CSS specificity issues

### PWA not working
- Ensure the site is served over HTTPS
- Verify service worker registration

## License
MIT

## Acknowledgements
- Vite
- React
- TailwindCSS
- Shadcn UI
- Express.js
