export default function Dashboard() {
  return (
    <div className="page-container">
      <h1>Dashboard</h1>
      <p>You are logged in and viewing your dashboard.</p>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h3>Overview</h3>
          <p>Total users: 1,250</p>
        </div>
        <div className="dashboard-card">
          <h3>Activity</h3>
          <p>Last login: Today</p>
        </div>
        <div className="dashboard-card">
          <h3>Settings</h3>
          <p>Manage your profile and preferences.</p>
        </div>
      </div>
    </div>
  )
}
