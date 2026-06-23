# React Router Navigation App

A React application demonstrating navigation between multiple routes using react-router-dom.

## Project Overview

This application implements a multi-page navigation system with four main routes. Users can navigate between different sections of the application using the navigation menu.

## Routes

The application includes the following four routes:

1. **Home** (`/`) - Landing page with an overview of the application features
2. **Dashboard** (`/dashboard`) - User dashboard displaying overview, activity, and settings
3. **Login** (`/login`) - User login form with email and password fields
4. **Signup** (`/signup`) - User registration form with name, email, and password fields

## Project Structure

```
src/
├── App.jsx              # Main app component with routing configuration
├── App.css              # Application styles
├── main.jsx             # Entry point with Router setup
├── index.css            # Global styles
└── pages/
    ├── Home.jsx         # Home page component
    ├── Dashboard.jsx    # Dashboard page component
    ├── Login.jsx        # Login page component
    └── Signup.jsx       # Signup page component
```

## Features

- **Navigation Bar**: Fixed navigation menu with links to all routes
- **Active Route Highlighting**: NavLinks highlight the current active route
- **Responsive Design**: Mobile-friendly layout with responsive navbar
- **Form Handling**: Login and Signup pages with form state management
- **Card-based Layout**: Organized content presentation with styled cards

## Key Technologies

- **React**: UI library
- **React Router DOM**: Client-side routing
- **Vite**: Build tool and dev server
- **CSS3**: Styling with custom properties (CSS variables)

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Component Details

### Home Component
- Displays welcome message and feature cards
- Introduces the three main sections: Dashboard, Login, and Signup

### Dashboard Component
- Shows user dashboard with Overview, Activity, and Settings cards
- Demonstrates styled cards with gradient backgrounds

### Login Component
- Email and password input fields
- Form submission handling
- Form validation using HTML5 required attribute

### Signup Component
- Name, email, password, and confirm password fields
- Password matching validation
- Form state management with React hooks

## Styling

The application uses a custom CSS design with:
- Primary blue color scheme
- Flexbox and CSS Grid layouts
- Hover and active state transitions
- Mobile-responsive design

## Navigation Implementation

Navigation uses React Router's `NavLink` component which provides:
- Automatic active state detection
- Smooth transitions between routes
- Clean URL management
- Support for nested routes (extensible for future features)

# Supreethraj_Task30.1
