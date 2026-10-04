import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div className="page">

      <div className="dashboard-header">
        <div>
          <p className="welcome-text">👋 Welcome back</p>
          <h1>🏛️ CivicAI OneGov</h1>
          <p>
            Your single platform for discovering and accessing government services.
          </p>
        </div>

        <div className="dashboard-badge">
          🇮🇳 Digital Government Services
        </div>
      </div>

      <div className="dashboard-buttons">

        <Link to="/services">
          <button>
            🏛️
            <span>
              Government Services
              <small>Explore certificates, schemes & services</small>
            </span>
          </button>
        </Link>

        <Link to="/applications">
          <button>
            📄
            <span>
              My Applications
              <small>Track your submitted applications</small>
            </span>
          </button>
        </Link>

        <Link to="/grievances">
          <button>
            📝
            <span>
              Grievances
              <small>Submit and track complaints</small>
            </span>
          </button>
        </Link>

        <Link to="/ai-assistant">
          <button>
            🤖
            <span>
              CivicAI Assistant
              <small>Get guidance for government services</small>
            </span>
          </button>
        </Link>

      </div>
      <button className="logout-btn" onClick={handleLogout}>
  Logout
</button>

      <div className="dashboard-info">

        <div>
          🔐
          <strong>Secure Access</strong>
          <p>Your government services in one place.</p>
        </div>

        <div>
          ⚡
          <strong>Easy & Fast</strong>
          <p>Find the right service quickly.</p>
        </div>

        <div>
          🤖
          <strong>AI Guided</strong>
          <p>Get step-by-step assistance.</p>
        </div>

      </div>

    </div>
  );
}