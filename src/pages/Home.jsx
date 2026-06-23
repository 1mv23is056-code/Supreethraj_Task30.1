export default function Home() {
  return (
    <div className="page-container">
      <h1>Welcome to Our Application</h1>
      <p>This is the home page. You can navigate to different sections using the menu above.</p>
      <div className="home-content">
        <div className="feature-card">
          <h3>Dashboard</h3>
          <p>View your personal dashboard with all important information.</p>
        </div>
        <div className="feature-card">
          <h3>Login</h3>
          <p>Sign in to your existing account.</p>
        </div>
        <div className="feature-card">
          <h3>Signup</h3>
          <p>Create a new account to get started.</p>
        </div>
      </div>
    </div>
  )
}
