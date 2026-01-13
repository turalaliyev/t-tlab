# T&T Lab Portfolio

A modern, dark-themed portfolio website for T&T Lab - a software development team specializing in web applications.

## Features

- 🎨 **Dark Theme Design** - Sharp, modern dark interface with smooth transitions
- ⚡ **Interactive Elements** - Hover effects, animations, and smooth scrolling
- 📱 **Responsive Design** - Fully responsive across all devices
- 🚀 **Modern Tech Stack** - Built with React, Vite, and Tailwind CSS
- 🎯 **Sections Included**:
  - Hero section with call-to-action buttons
  - Projects showcase with live demo and code links
  - Services overview
  - Tech stack and tools display
  - Contact form and information

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **React Icons** - Icon library

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Project Data

Edit the projects array in `src/components/Projects.jsx`:

```jsx
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description',
    technologies: ['React', 'Tailwind', 'Sanity'],
    image: 'your-image-url',
    liveUrl: 'https://your-live-url.com',
    codeUrl: 'https://github.com/your-repo',
  },
  // Add more projects...
]
```

### Update Contact Information

Edit the contact info in `src/components/Contact.jsx`:

```jsx
const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'your-email@example.com',
    link: 'mailto:your-email@example.com',
  },
  // Update other contact methods...
]
```

### Update Services

Edit the services array in `src/components/Services.jsx` to reflect your actual services.

### Connect Contact Form

The contact form in `src/components/Contact.jsx` currently shows an alert. To connect it to a backend:

1. Set up your backend endpoint (Sanity, Firebase, or Supabase)
2. Update the `handleSubmit` function in `Contact.jsx` to send data to your API

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx    # Navigation bar with smooth scrolling
│   ├── Hero.jsx          # Hero section with CTA buttons
│   ├── Projects.jsx      # Projects showcase
│   ├── Services.jsx      # Services overview
│   ├── Tools.jsx         # Tech stack display
│   ├── Contact.jsx       # Contact form and info
│   └── Footer.jsx        # Footer component
├── App.jsx               # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles and Tailwind imports
```

## Color Scheme

- **Background**: `#0a0a0a` (dark-bg)
- **Surface**: `#111111` (dark-surface)
- **Cards**: `#1a1a1a` (dark-card)
- **Primary Accent**: `#00ff88` (accent-primary)
- **Secondary Accent**: `#00d4ff` (accent-secondary)

## License

This project is private and proprietary to T&T Lab.
