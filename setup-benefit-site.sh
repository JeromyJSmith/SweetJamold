#!/bin/bash

# Create necessary directories
mkdir -p src/components/ui
mkdir -p src/lib

# Install dependencies
npm install react @types/react lucide-react @radix-ui/react-slot class-variance-authority clsx tailwind-merge
npm install -D tailwindcss postcss autoprefixer
npm install @radix-ui/react-icons tailwindcss-animate

# Initialize Tailwind CSS
npx tailwindcss init -p

# Install shadcn-ui components
npx shadcn-ui@latest init

# Install specific components
npx shadcn-ui@latest add card
npx shadcn-ui@latest add button

# Move the main component file to src directory
mv complete-benefit-site\ \(1\).tsx src/pages/index.tsx

# Create utils file
mkdir -p src/lib
echo 'import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}' > src/lib/utils.ts

# Update imports in the main component
sed -i '' 's|./components/ui/card|@/components/ui/card|g' src/pages/index.tsx
sed -i '' 's|./components/ui/button|@/components/ui/button|g' src/pages/index.tsx

# Add global CSS file
mkdir -p src/app
echo '@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }
}' > src/app/globals.css

echo "Setup complete! Make sure to run 'npm run dev' to start your development server." 