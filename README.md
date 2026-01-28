# Lumina Skin Care

A modern personal care e-commerce application built with React, TypeScript, and Vite.

## Features

- Fully responsive design
- Product catalog with detailed views
- Shopping cart functionality
- Authentication system
- Beauty tips section
- Contact form

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS (utility-first CSS framework)
- React Router DOM

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nimishsabnanicodershive-ctrl/Skin-Care.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Skin-Care
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` (or the address shown in the terminal)

## Building for Production

To create a production-ready build, run:

```bash
npm run build
```

This will create a `dist` folder with the optimized production build.

## Environment Variables

If you have environment variables (like API keys), create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_api_key_here
```

## Deployment

### Deploying to Vercel

This project is configured for easy deployment to Vercel. You can deploy directly from your GitHub repository.

1. Push your code to the GitHub repository
2. Connect your GitHub repository to Vercel
3. During the project import, Vercel will automatically detect the settings from `vercel.json`
4. Add the required environment variables in the Vercel dashboard

### Manual Deployment

Alternatively, you can manually deploy the build output:

1. Run `npm run build` to generate the production build
2. Upload the contents of the `dist` folder to your hosting provider

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run predeploy` - Runs build before deployment

## Project Structure

```
├── components/          # React components
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── Navbar.tsx
├── public/             # Static assets
├── .github/workflows/  # GitHub Actions workflows
├── App.tsx             # Main application component
├── index.html          # HTML template
├── index.tsx           # Entry point
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
├── vercel.json         # Vercel deployment configuration
└── README.md           # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License.