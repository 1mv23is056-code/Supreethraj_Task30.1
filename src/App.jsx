import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import './App.css'

// App explains the basic router setup in simple terms.
// - NavLink: renders links and can show an "active" style when the path matches
// - Routes / Route: declare which component renders for which path
// - A catch-all Route with path="*" shows a NotFound page for unknown routes
function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-brand">MyApp</div>
        <ul className="nav-links">
          {/* NavLink adds an "active" CSS class when the route matches */}
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink></li>
          <li><NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink></li>
          <li><NavLink to="/signup" className={({ isActive }) => isActive ? 'active' : ''}>Signup</NavLink></li>
        </ul>
      </nav>

      <main className="main-content">
        {/* Routes chooses the first matching Route to render */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* The '*' path matches anything not matched above */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>&copy; 2026 MyApp. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
