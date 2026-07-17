import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

const stats = [
  { label: 'Active members', value: '184' },
  { label: 'Teams', value: '12' },
  { label: 'Workouts logged', value: '932' },
]

function HomePage() {
  return (
    <section className="container py-4">
      <div className="hero-card p-4 p-md-5 rounded-4 shadow-sm">
        <span className="badge text-bg-primary mb-3">OctoFit Tracker</span>
        <h1 className="display-5 fw-bold">Train smarter, compete together.</h1>
        <p className="lead text-secondary">
          Track workouts, manage teams, and keep every member engaged with one modern dashboard.
        </p>
        <div className="row g-3 mt-2">
          {stats.map((item) => (
            <div key={item.label} className="col-md-4">
              <div className="stat-card rounded-4 p-3 h-100">
                <div className="text-muted small">{item.label}</div>
                <div className="fs-3 fw-semibold text-dark">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LeaderboardPage() {
  return (
    <section className="container py-4">
      <div className="rounded-4 shadow-sm border p-4">
        <h2 className="mb-3">Leaderboard</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Rhea</span>
            <strong>1,280 pts</strong>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Marco</span>
            <strong>1,140 pts</strong>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Priya</span>
            <strong>1,095 pts</strong>
          </li>
        </ul>
      </div>
    </section>
  )
}

function WorkoutsPage() {
  return (
    <section className="container py-4">
      <div className="rounded-4 shadow-sm border p-4">
        <h2 className="mb-3">Workout Suggestions</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="card h-100 border-0 bg-light">
              <div className="card-body">
                <h5 className="card-title">HIIT Burn</h5>
                <p className="card-text">6 rounds of 40s effort and 20s recovery.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 bg-light">
              <div className="card-body">
                <h5 className="card-title">Mobility Reset</h5>
                <p className="card-text">Stretch, stabilize, and recover between training sessions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamsPage() {
  return (
    <section className="container py-4">
      <div className="rounded-4 shadow-sm border p-4">
        <h2 className="mb-3">Teams</h2>
        <div className="row g-3">
          <div className="col-md-4">
            <div className="card border-0 bg-primary-subtle h-100">
              <div className="card-body">
                <h5 className="card-title">Storm Squad</h5>
                <p className="card-text">Performance team focused on speed sessions.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 bg-success-subtle h-100">
              <div className="card-body">
                <h5 className="card-title">Core Crew</h5>
                <p className="card-text">Recovery and strength ecosystem for members.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 bg-warning-subtle h-100">
              <div className="card-body">
                <h5 className="card-title">Endurance Unit</h5>
                <p className="card-text">Long-form challenge group with daily check-ins.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <div className="container-fluid">
          <span className="navbar-brand fw-semibold">OctoFit Tracker</span>
          <div className="navbar-nav flex-row gap-3">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
            <NavLink className="nav-link" to="/workouts">Workouts</NavLink>
            <NavLink className="nav-link" to="/teams">Teams</NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/teams" element={<TeamsPage />} />
      </Routes>
    </div>
  )
}

export default App
