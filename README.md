# Portfolio Website

A modern, responsive portfolio website showcasing skills, projects, and experience as a full-stack developer. Built with React and featuring smooth animations, dark mode support, and optimized performance.

## ✨ Features

- **Responsive Design** - Fully responsive across all devices
- **Dark Mode Support** - Toggle between light and dark themes
- **Smooth Animations** - Engaging animations and transitions
- **Modern UI** - Clean, professional design with glass morphism effects
- **Performance Optimized** - Fast loading and SEO friendly
- **Interactive Components** - Dynamic skill bars, project showcases, and contact forms

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

### UI Components
- **shadcn/ui** - Modern component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

### Additional Libraries
- **React Router** - Client-side routing
- **React Query** - Data fetching and state management
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation
- **Framer Motion** - Animation library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_REPOSITORY_URL>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the website.

### Building for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── About.tsx       # About section
│   ├── Hero.tsx        # Hero/landing section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects portfolio
│   ├── Experience.tsx  # Work experience
│   └── Contact.tsx     # Contact form
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## 🎨 Customization

### Updating Content

1. **Personal Information** - Edit components like `Hero.tsx`, `About.tsx`
2. **Skills** - Update the skills array in `Skills.tsx`
3. **Projects** - Modify project data in `Projects.tsx`
4. **Experience** - Update work history in `Experience.tsx`

### Styling

- **Colors** - Modify CSS variables in `src/index.css`
- **Components** - Customize shadcn/ui components in `src/components/ui/`
- **Animations** - Adjust animations in individual components

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📧 Contact

Feel free to reach out if you have any questions or suggestions!

---

⭐ Don't forget to star this repo if you found it helpful!