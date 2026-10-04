import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import "./App.css";
// Official Andhra Pradesh Government Portals
const officialLinks = {
  income: "https://ap.meeseva.gov.in/",
  caste: "https://ap.meeseva.gov.in/",
  residence: "https://ap.meeseva.gov.in/",
  scholarship: "https://jnanabhumi.ap.gov.in/",
  employment: "https://portal-psc.ap.gov.in/",
  pension: "https://sspensions.ap.gov.in/"
};
function Home() {
  return (
    <div className="home-page">

      {/* NAVBAR */}
      <nav className="home-navbar">

        <Link to="/" className="home-brand">
          <div className="home-brand-logo">C</div>

          <div>
            <strong>CivicAI</strong>
            <span>OneGov</span>
          </div>
        </Link>

        <div className="home-nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/ai-assistant">AI Assistant</Link>
        </div>

        <div className="home-nav-actions">
          <Link to="/login">
            <button className="home-login-btn">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="home-register-btn">
              Get Started
            </button>
          </Link>
        </div>

      </nav>


      {/* HERO */}
      <section className="home-hero">

        <div className="hero-content">

          <div className="hero-badge">
            ✦ AI-Powered Citizen Services
          </div>

          <h1>
            Government Services,
            <br />
            <span>Simplified for Everyone.</span>
          </h1>

          <p>
            CivicAI OneGov brings government services,
            applications, grievances and intelligent guidance
            together in one citizen-friendly platform.
          </p>

          <div className="hero-buttons">

            <Link to="/services">
              <button className="hero-primary-btn">
                Explore Government Services →
              </button>
            </Link>

            <Link to="/ai-assistant">
              <button className="hero-secondary-btn">
                🤖 Ask CivicAI
              </button>
            </Link>

          </div>

          <div className="hero-trust">

            <span>✓ Easy to use</span>
            <span>✓ Citizen focused</span>
            <span>✓ Official portal guidance</span>

          </div>

        </div>


        {/* HERO VISUAL */}
        <div className="hero-visual">

          <div className="hero-glow"></div>

          <div className="hero-dashboard-card">

            <div className="mini-card-header">
              <div className="mini-logo">C</div>

              <div>
                <strong>CivicAI</strong>
                <span>Citizen Dashboard</span>
              </div>

              <div className="mini-status">
                ● Active
              </div>
            </div>


            <div className="mini-welcome">
              <span>WELCOME BACK</span>
              <h3>Your services, all in one place.</h3>
            </div>


            <div className="mini-stats">

              <div>
                <span>Applications</span>
                <strong>04</strong>
              </div>

              <div>
                <span>Grievances</span>
                <strong>02</strong>
              </div>

              <div>
                <span>Services</span>
                <strong>06</strong>
              </div>

            </div>


            <div className="mini-service">

              <div className="mini-service-icon">
                📄
              </div>

              <div>
                <span>Recent Service</span>
                <strong>Income Certificate</strong>
              </div>

              <span className="mini-arrow">
                →
              </span>

            </div>


            <div className="mini-ai">

              <div className="mini-ai-icon">
                🤖
              </div>

              <div>
                <strong>CivicAI Assistant</strong>
                <span>
                  How can I help you today?
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="home-services">

        <div className="home-section-heading">

          <span>ONE PLATFORM</span>

          <h2>
            Everything Citizens Need
          </h2>

          <p>
            Discover, prepare and manage government
            services through one simple experience.
          </p>

        </div>


        <div className="home-service-grid">

          <Link
            to="/services"
            className="home-service-card"
          >
            <div className="home-card-icon">
              🏛️
            </div>

            <h3>
              Government Services
            </h3>

            <p>
              Discover certificates, scholarships,
              employment and welfare services.
            </p>

            <span>
              Explore Services →
            </span>
          </Link>


          <Link
            to="/applications"
            className="home-service-card"
          >
            <div className="home-card-icon">
              📄
            </div>

            <h3>
              Application Tracking
            </h3>

            <p>
              Keep your applications organized and
              follow their progress.
            </p>

            <span>
              Track Applications →
            </span>
          </Link>


          <Link
            to="/grievances"
            className="home-service-card"
          >
            <div className="home-card-icon">
              📢
            </div>

            <h3>
              Civic Grievances
            </h3>

            <p>
              Submit and manage complaints about
              public services and civic issues.
            </p>

            <span>
              Manage Grievances →
            </span>
          </Link>


          <Link
            to="/ai-assistant"
            className="home-service-card"
          >
            <div className="home-card-icon">
              🤖
            </div>

            <h3>
              CivicAI Assistant
            </h3>

            <p>
              Get intelligent guidance about services,
              documents and eligibility.
            </p>

            <span>
              Ask CivicAI →
            </span>
          </Link>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="home-how">

        <div className="home-section-heading">

          <span>HOW IT WORKS</span>

          <h2>
            Government Services Made Simple
          </h2>

        </div>


        <div className="how-grid">

          <div className="how-step">
            <div className="how-number">01</div>

            <h3>
              Discover
            </h3>

            <p>
              Find the government service you need
              from one unified platform.
            </p>
          </div>


          <div className="how-line"></div>


          <div className="how-step">
            <div className="how-number">02</div>

            <h3>
              Prepare
            </h3>

            <p>
              Understand eligibility and prepare
              the information and documents required.
            </p>
          </div>


          <div className="how-line"></div>


          <div className="how-step">
            <div className="how-number">03</div>

            <h3>
              Continue Officially
            </h3>

            <p>
              Continue to the responsible government's
              official portal for the actual transaction.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="home-cta">

        <div>

          <span>
            CIVICAI ONEGOV
          </span>

          <h2>
            Your Government Services,
            <br />
            One Simple Platform.
          </h2>

          <p>
            Start exploring government services today.
          </p>

        </div>

        <Link to="/register">
          <button>
            Create Citizen Account →
          </button>
        </Link>

      </section>


      {/* FOOTER */}
      <footer className="home-footer">

        <div className="footer-brand">

          <strong>
            CivicAI OneGov
          </strong>

          <p>
            AI-powered guidance for simpler
            citizen access to government services.
          </p>

        </div>

        <div className="footer-links">

          <Link to="/services">
            Services
          </Link>

          <Link to="/ai-assistant">
            AI Assistant
          </Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/login">
            Login
          </Link>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 CivicAI OneGov
          </span>

          <span>
            Prototype • Citizen Service Platform
          </span>

        </div>

      </footer>

    </div>
  );
}
function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser =
      JSON.parse(localStorage.getItem("civicUser")) || null;

    if (!savedUser) {
      alert("No account found. Please register first.");
      return;
    }

    if (
      email === savedUser.email &&
      password === savedUser.password
    ) {
      localStorage.setItem("civicLoggedIn", "true");
      window.location.href = "/dashboard";
    } else {
      alert("Incorrect email or password.");
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          C
        </div>

        <span className="auth-label">
          CIVICAI ONEGOV
        </span>

        <h1>Welcome back</h1>

        <p>
          Sign in to access your government services.
        </p>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="auth-btn">
            Login →
          </button>

        </form>

        <p className="auth-bottom">
          Don't have an account?
          <Link to="/register"> Create account</Link>
        </p>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}
function Register() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const existingUser =
      JSON.parse(localStorage.getItem("civicUser")) || null;

    if (existingUser) {
      alert("An account already exists. Please login.");
      return;
    }

    const user = {
      name,
      email,
      password
    };

    localStorage.setItem(
      "civicUser",
      JSON.stringify(user)
    );

    localStorage.setItem("civicLoggedIn", "true");

    alert("Account created successfully!");

    window.location.href = "/dashboard";
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          C
        </div>

        <span className="auth-label">
          CIVICAI ONEGOV
        </span>

        <h1>Create account</h1>

        <p>
          Create your citizen account to continue.
        </p>

        <div className="prototype-warning">
          Prototype only. Do not use your real password,
          Aadhaar number or banking information.
        </div>

        <form onSubmit={handleRegister}>

          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="auth-btn">
            Create Account →
          </button>

        </form>

        <p className="auth-bottom">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}
function ProtectedRoute({ children }) {
  const isLoggedIn =
    localStorage.getItem("civicLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
function GlobalNavbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const notifications =
    JSON.parse(
      localStorage.getItem("civicNotifications")
    ) || [];

  const unreadNotifications =
    notifications.filter(
      (notification) => !notification.read
    ).length;

  const handleLogout = () => {
    localStorage.removeItem("civicLoggedIn");
    window.location.href = "/login";
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="global-navbar">

      {/* LOGO */}
      <Link
        to="/dashboard"
        className="navbar-brand"
        onClick={closeMenu}
      >
        <div className="navbar-logo">C</div>

        <div>
          <strong>CivicAI</strong>
          <span>OneGov</span>
        </div>
      </Link>

      {/* DESKTOP LINKS */}
      <div className="navbar-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/services">Services</Link>
        <Link to="/applications">Applications</Link>
        <Link to="/grievances">Grievances</Link>
        <Link to="/ai-assistant">AI Assistant</Link>
      </div>

      {/* DESKTOP ACTIONS */}
      <div className="navbar-actions">

        <Link
          to="/notifications"
          className="navbar-notification"
        >
          🔔

          {unreadNotifications > 0 && (
            <span className="notification-badge">
              {unreadNotifications}
            </span>
          )}
        </Link>

        <Link
          to="/profile"
          className="navbar-profile"
        >
          👤 Profile
        </Link>

        <button
          className="navbar-logout"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open navigation menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-navbar-menu">

          <Link
            to="/dashboard"
            onClick={closeMenu}
          >
            🏠 Dashboard
          </Link>

          <Link
            to="/services"
            onClick={closeMenu}
          >
            🏛️ Services
          </Link>

          <Link
            to="/applications"
            onClick={closeMenu}
          >
            📄 Applications
          </Link>

          <Link
            to="/grievances"
            onClick={closeMenu}
          >
            📢 Grievances
          </Link>

          <Link
            to="/ai-assistant"
            onClick={closeMenu}
          >
            🤖 AI Assistant
          </Link>

          <Link
            to="/notifications"
            onClick={closeMenu}
          >
            🔔 Notifications
            {unreadNotifications > 0 && (
              <span className="mobile-notification-count">
                {unreadNotifications}
              </span>
            )}
          </Link>

          <Link
            to="/profile"
            onClick={closeMenu}
          >
            👤 Profile
          </Link>

          <button
            onClick={handleLogout}
            className="mobile-logout-btn"
          >
            Logout
          </button>

        </div>
      )}

    </nav>
  );
}

function Dashboard() {
  const user = JSON.parse(
  localStorage.getItem("civicUser")
) || {};

const userName = user.name || "Citizen";
  const [, refreshDashboard] = React.useState(0);

React.useEffect(() => {
  const handleStorage = () => {
    refreshDashboard((value) => value + 1);
  };

  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener("storage", handleStorage);
  };
}, []);
  const applications =
  JSON.parse(localStorage.getItem("applications")) || [];

const grievances =
  JSON.parse(localStorage.getItem("grievances")) || [];
  const recentActivity = [
  ...applications.map((app) => ({
    id: app.id,
    type: "application",
    title: app.service,
    description: `Application ${app.status.toLowerCase()}`,
    date: app.date,
    link: `/application/${app.id}`
  })),

  ...grievances.map((grievance) => ({
    id: grievance.id,
    type: "grievance",
    title: grievance.subject,
    description: `Grievance ${grievance.status.toLowerCase()}`,
    date: grievance.date,
    link: `/grievance/${grievance.id}`
  }))
].slice(-6).reverse();

const notifications =
  JSON.parse(localStorage.getItem("civicNotifications")) || [];

const totalApplications = applications.length;

const activeApplications = applications.filter(
  (app) =>
    app.status === "Submitted" ||
    app.status === "Under Review"
).length;

const totalGrievances = grievances.length;

const unreadNotifications = notifications.filter(
  (notification) => !notification.read
).length;

  const handleLogout = () => {
  localStorage.removeItem("civicLoggedIn");
  window.location.href = "/login";
};
  return (
    
   <>
   <GlobalNavbar />
    
    <div className="page">
      <div className="dashboard-welcome">

  <span className="welcome-label">
    CITIZEN DASHBOARD
  </span>

  <h1>
    Welcome back, {userName} 👋
  </h1>

  <p>
    Manage your government services, applications and
    civic grievances from one place.
  </p>

</div>
<div className="dashboard-user-summary">

  <div className="user-summary-avatar">
    {userName.charAt(0).toUpperCase()}
  </div>

  <div className="user-summary-info">
    <span>Logged in as</span>

    <strong>{userName}</strong>

    <small>
      {user.email || "CivicAI OneGov Citizen"}
    </small>
  </div>

  <Link to="/profile">
    <button className="summary-profile-btn">
      View Profile →
    </button>
  </Link>

</div>
      <div className="dashboard-auth-buttons">

  <Link to="/profile">
    <button className="dashboard-profile-btn">
      👤 Profile
    </button>
  </Link>

  <Link to="/settings">
    <button className="dashboard-settings-btn">
      ⚙ Settings
    </button>
  </Link>
  <Link to="/notifications">
  <div className="dashboard-feature-card">
    <div className="feature-icon">🔔</div>
    <h3>Notifications</h3>
    <p>
      View application and service updates.
    </p>
  </div>
</Link>
<div className="stat-card">
  <h3>Applications</h3>
  <strong>{totalApplications}</strong>
  <p>Total applications</p>
</div>

<div className="stat-card">
  <h3>Active Applications</h3>
  <strong>{activeApplications}</strong>
  <p>Currently in progress</p>
</div>

<div className="stat-card">
  <h3>Grievances</h3>
  <strong>{totalGrievances}</strong>
  <p>Submitted grievances</p>
</div>

<div className="stat-card">
  <h3>Notifications</h3>
  <strong>{unreadNotifications}</strong>
  <p>Unread notifications</p>
</div>

  <button
    className="dashboard-logout-btn"
    onClick={handleLogout}
  >
    Logout
  </button>

</div>
      <div className="dashboard-buttons">
        <Link to="/services">
          <button>Government Services</button>
        </Link>

        <Link to="/applications">
          <button>My Applications</button>
        </Link>

        <Link to="/grievances">
          <button>Grievances</button>
        </Link>

        <Link to="/ai-assistant">
          <button>AI Assistant</button>
        </Link>
      </div>
    </div>
    </>
  );
}
<div className="dashboard-feature-grid">

  <Link to="/services" className="dashboard-feature-card">
    <div className="feature-icon">🏛️</div>
    <h3>Government Services</h3>
    <p>Discover certificates, scholarships, employment and pension services.</p>
    <span>Explore Services →</span>
  </Link>

  <Link to="/applications" className="dashboard-feature-card">
    <div className="feature-icon">📄</div>
    <h3>My Applications</h3>
    <p>View and track your government service applications.</p>
    <span>Track Applications →</span>
  </Link>

  <Link to="/grievances" className="dashboard-feature-card">
    <div className="feature-icon">📢</div>
    <h3>My Grievances</h3>
    <p>Submit and track civic complaints and public-service issues.</p>
    <span>Manage Grievances →</span>
  </Link>

  <Link to="/ai-assistant" className="dashboard-feature-card">
    <div className="feature-icon">🤖</div>
    <h3>CivicAI Assistant</h3>
    <p>Get guidance about services, documents and applications.</p>
    <span>Ask CivicAI →</span>
  </Link>

  <Link to="/notifications" className="dashboard-feature-card">
    <div className="feature-icon">🔔</div>
    <h3>Notifications</h3>
    <p>View updates about your applications and services.</p>
    <span>View Notifications →</span>
  </Link>

  <Link to="/profile" className="dashboard-feature-card">
    <div className="feature-icon">👤</div>
    <h3>My Profile</h3>
    <p>View your CivicAI OneGov account information.</p>
    <span>View Profile →</span>
  </Link>
<div className="dashboard-recommended">

  <div className="recommended-header">
    <div>
      <span>ONEGOV SERVICES</span>
      <h2>Popular Services</h2>
      <p>Quick access to frequently used government services.</p>
    </div>

    <Link to="/services">
      View All Services →
    </Link>
  </div>

  <div className="recommended-grid">

    <Link
      to="/service/income"
      className="recommended-card"
    >
      <div className="recommended-icon">📄</div>

      <div>
        <span>Certificates</span>
        <h3>Income Certificate</h3>
        <p>Get guidance and prepare your application.</p>
      </div>

      <strong>→</strong>
    </Link>

    <Link
      to="/service/caste"
      className="recommended-card"
    >
      <div className="recommended-icon">📜</div>

      <div>
        <span>Certificates</span>
        <h3>Caste Certificate</h3>
        <p>Understand the process and requirements.</p>
      </div>

      <strong>→</strong>
    </Link>

    <Link
      to="/service/scholarship"
      className="recommended-card"
    >
      <div className="recommended-icon">🎓</div>

      <div>
        <span>Education</span>
        <h3>Scholarship</h3>
        <p>Explore scholarship service guidance.</p>
      </div>

      <strong>→</strong>
    </Link>

    <Link
      to="/service/employment"
      className="recommended-card"
    >
      <div className="recommended-icon">💼</div>

      <div>
        <span>Employment</span>
        <h3>Employment Services</h3>
        <p>Explore government employment services.</p>
      </div>

      <strong>→</strong>
    </Link>

  </div>

</div>
</div>
function Profile() {
  const user = JSON.parse(localStorage.getItem("civicUser")) || {};

  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-avatar">
          {user.name ? user.name.charAt(0).toUpperCase() : "U"}
        </div>

        <h1>{user.name || "CivicAI User"}</h1>
        <p className="profile-email">
          {user.email || "No email available"}
        </p>

        <div className="profile-info">
          <div>
            <span>Name</span>
            <strong>{user.name || "Not available"}</strong>
          </div>

          <div>
            <span>Email</span>
            <strong>{user.email || "Not available"}</strong>
          </div>

          <div>
            <span>Account</span>
            <strong>CivicAI OneGov</strong>
          </div>

          <div>
            <span>Status</span>
            <strong className="profile-active">Active</strong>
          </div>
        </div>

        <div className="profile-actions">
          <Link to="/dashboard">
            <button>← Back to Dashboard</button>
          </Link>

          <Link to="/applications">
            <button>My Applications</button>
          </Link>
        </div>

      </div>
    </div>
  );
}
function Settings() {
  const handleLogout = () => {
    localStorage.removeItem("civicLoggedIn");
    window.location.href = "/login";
  };

  return (
    <div className="settings-page">

      <div className="settings-card">

        <div className="settings-header">
          <span>ACCOUNT</span>
          <h1>Settings</h1>
          <p>Manage your CivicAI OneGov preferences.</p>
        </div>

        <div className="settings-option">
          <div>
            <h3>Account Settings</h3>
            <p>Manage your account information.</p>
          </div>
          <span>›</span>
        </div>

        <div className="settings-option">
          <div>
            <h3>Notifications</h3>
            <p>Manage application and service notifications.</p>
          </div>
          <span>›</span>
        </div>

        <div className="settings-option">
          <div>
            <h3>Privacy</h3>
            <p>Review your CivicAI OneGov privacy preferences.</p>
          </div>
          <span>›</span>
        </div>

        <div className="settings-option">
          <div>
            <h3>Language</h3>
            <p>English</p>
          </div>
          <span>›</span>
        </div>

        <button
          className="settings-logout"
          onClick={handleLogout}
        >
          Logout
        </button>

        <Link to="/dashboard" className="settings-back">
          ← Back to Dashboard
        </Link>

      </div>

    </div>
  );
}
function Services() {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("All");

  const services = [
    {
      id: "income",
      name: "Income Certificate",
      category: "Certificates",
      icon: "📄",
      description:
        "Get guidance for preparing and accessing Income Certificate services."
    },
    {
      id: "caste",
      name: "Caste Certificate",
      category: "Certificates",
      icon: "📜",
      description:
        "Understand the basic process and requirements for caste certificate services."
    },
    {
      id: "residence",
      name: "Residence Certificate",
      category: "Certificates",
      icon: "🏠",
      description:
        "Get guidance for residence verification and certificate services."
    },
    {
      id: "scholarship",
      name: "Scholarship",
      category: "Education",
      icon: "🎓",
      description:
        "Explore scholarship guidance and prepare information before applying."
    },
    {
      id: "employment",
      name: "Employment Services",
      category: "Employment",
      icon: "💼",
      description:
        "Find guidance for government employment and recruitment services."
    },
    {
      id: "pension",
      name: "Pension Services",
      category: "Social Welfare",
      icon: "🤝",
      description:
        "Access guidance for government pension-related services."
    }
  ];

  const categories = [
    "All",
    "Certificates",
    "Education",
    "Employment",
    "Social Welfare"
  ];

  const filteredServices = services.filter((service) => {
    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      service.name.toLowerCase().includes(searchText) ||
      service.description.toLowerCase().includes(searchText) ||
      service.category.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" ||
      service.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="services-page">

      <GlobalNavbar />

      <div className="services-container">

        <div className="services-header">

          <span>CIVICAI ONEGOV</span>

          <h1>Government Services</h1>

          <p>
            Discover Andhra Pradesh government services
            through one unified citizen platform.
          </p>

        </div>

        <div className="services-search-box">

          <span className="search-icon">⌕</span>

          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          {search && (
            <button
              className="clear-search"
              onClick={() => setSearch("")}
            >
              ×
            </button>
          )}

        </div>

        <div className="services-categories">

          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item
                  ? "category-active"
                  : ""
              }
              onClick={() =>
                setCategory(item)
              }
            >
              {item}
            </button>
          ))}

        </div>

        <div className="services-result-info">
          <strong>
            {filteredServices.length}
          </strong>{" "}
          services available
        </div>

        {filteredServices.length > 0 ? (

          <div className="services-grid">

            {filteredServices.map((service) => (

              <div
                className="service-card"
                key={service.id}
              >

                <div className="service-card-top">

                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <span className="service-category">
                    {service.category}
                  </span>

                </div>

                <h2>{service.name}</h2>

                <p>{service.description}</p>

                <Link
                  to={`/service/${service.id}`}
                >
                  <button className="service-view-btn">
                    View Service →
                  </button>
                </Link>

              </div>

            ))}

          </div>

        ) : (

          <div className="no-services">

            <div className="no-services-icon">
              🔎
            </div>

            <h2>No services found</h2>

            <p>
              Try a different search term or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Clear Filters
            </button>

          </div>

        )}

      </div>

    </div>
  );
}
            
function ServiceDetails() {
  
  const serviceId = window.location.pathname.split("/").pop();
  const documentRequirements = {
  income: [
    "Aadhaar / Identity Proof",
    "Address Proof",
    "Income-related supporting document"
  ],
  caste: [
    "Aadhaar / Identity Proof",
    "Address Proof",
    "Existing caste-related document, if applicable"
  ],
  residence: [
    "Aadhaar / Identity Proof",
    "Address Proof",
    "Supporting residence document"
  ],
  scholarship: [
    "Student Identity / Aadhaar",
    "Educational certificates",
    "Bank account details",
    "College / School details"
  ],
  employment: [
    "Identity Proof",
    "Educational certificates",
    "Resume / CV"
  ],
  pension: [
    "Identity Proof",
    "Address Proof",
    "Age-related document, if applicable"
  ]
};

const requiredDocuments =
  documentRequirements[serviceId] || [];
  const [showEligibility, setShowEligibility] = React.useState(false);
const [age, setAge] = React.useState("");
const [resident, setResident] = React.useState("");
const [eligibilityResult, setEligibilityResult] = React.useState("");
const checkEligibility = () => {
  if (!age || !resident) {
    setEligibilityResult("Please answer all questions.");
    return;
  }

  if (resident === "yes") {
    setEligibilityResult(
      "Based on your answers, you may be eligible. Please verify the complete eligibility requirements on the official government portal."
    );
  } else {
    setEligibilityResult(
      "You may not meet the basic Andhra Pradesh residency requirement for this service. Please check the official portal for the exact rules."
    );
  }
};
  const goToOfficialPortal = () => {
  const officialUrl = officialLinks[serviceId];

  if (!officialUrl) {
    alert("Official government portal is not available for this service yet.");
    return;
  }

  window.open(officialUrl, "_blank", "noopener,noreferrer");
};

  const services = {
    income: {
      title: "Income Certificate",
      description:
        "An official certificate that shows the annual income of a person or family.",
      eligibility:
        "Citizens who need income proof for government schemes, scholarships or other services.",
      documents: [
        "Aadhaar Card",
        "Address Proof",
        "Income Proof",
        "Passport Size Photo"
      ]
    },

    caste: {
      title: "Caste Certificate",
      description:
        "An official certificate used to verify a person's caste category.",
      eligibility:
        "Citizens who require caste verification for government services, education or scholarships.",
      documents: [
        "Aadhaar Card",
        "Address Proof",
        "Caste Proof",
        "Passport Size Photo"
      ]
    },

    residence: {
      title: "Residence Certificate",
      description:
        "A certificate that confirms a person's residential status.",
      eligibility:
        "Citizens who need proof of residence for government services.",
      documents: [
        "Aadhaar Card",
        "Address Proof",
        "Electricity Bill",
        "Passport Size Photo"
      ]
    },

    scholarship: {
      title: "Scholarships",
      description:
        "Find government scholarship opportunities for eligible students.",
      eligibility:
        "Students who meet the eligibility conditions of the scholarship.",
      documents: [
        "Aadhaar Card",
        "Student ID",
        "Income Certificate",
        "Bank Account Details",
        "Educational Documents"
      ]
    },

    employment: {
      title: "Employment Services",
      description:
        "Explore government employment and career-related services.",
      eligibility:
        "Eligible citizens looking for government employment opportunities.",
      documents: [
        "Aadhaar Card",
        "Educational Certificates",
        "Resume",
        "Passport Size Photo"
      ]
    },

    pension: {
      title: "Pension Services",
      description:
        "Explore government pension services and schemes.",
      eligibility:
        "Citizens who meet the requirements of the relevant pension scheme.",
      documents: [
        "Aadhaar Card",
        "Age Proof",
        "Address Proof",
        "Bank Account Details"
      ]
    }
  };

  const service = services[serviceId];

  if (!service) {
    return (
      <div className="page">
        <h1>Service Not Found</h1>

        <Link to="/services">
          <button>Back to Services</button>
        </Link>
      </div>
    );
  }

  return (
      
    <div className="page">

      <h1>{service.title}</h1>

      <p>{service.description}</p>

      <div className="service-details">

        <div className="detail-box">
          <h2>Eligibility</h2>
          <p>{service.eligibility}</p>
        </div>

        <div className="detail-box">
          <h2>Required Documents</h2>

          <ul>
            {service.documents.map((document, index) => (
              <li key={index}>{document}</li>
            ))}
          </ul>
        </div>

      </div>
      <div className="eligibility-box">

  <div className="eligibility-header">
    <span>AI GUIDANCE</span>
    <h2>Check Basic Eligibility</h2>
    <p>
      Answer these questions to get preliminary guidance.
    </p>
  </div>

  <div className="eligibility-question">
    <label>What is your age?</label>

    <input
      type="number"
      placeholder="Enter your age"
      value={age}
      onChange={(e) => setAge(e.target.value)}
    />
  </div>

  <div className="eligibility-question">
    <label>
      Are you a resident of Andhra Pradesh?
    </label>

    <select
      value={resident}
      onChange={(e) => setResident(e.target.value)}
    >
      <option value="">Select an option</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  </div>

  <button
    className="eligibility-btn"
    onClick={checkEligibility}
  >
    Check Eligibility
  </button>

  {eligibilityResult && (
    <div className="eligibility-result">
      {eligibilityResult}
    </div>
  )}

</div>
<div className="documents-checklist">

  <div className="documents-header">
    <span>DOCUMENT CHECK</span>
    <h2>Required Documents</h2>
    <p>
      Keep these documents ready before continuing to the
      official government portal.
    </p>
  </div>

  <div className="document-list">
    {requiredDocuments.map((document, index) => (
      <div className="document-item" key={index}>
        <div className="document-check">
          ✓
        </div>

        <span>{document}</span>
      </div>
    ))}
  </div>

</div>

<button
  className="official-portal-btn"
  onClick={goToOfficialPortal}
>
  Continue to Official Government Portal →
</button>

      <br /><br />

      <Link to="/services">
        <button>Back to Services</button>
      </Link>

    </div>
  );
}
function ApplicationForm() {
  const serviceId = window.location.pathname.split("/").pop();

  const serviceNames = {
    income: "Income Certificate",
    caste: "Caste Certificate",
    residence: "Residence Certificate",
    scholarship: "Scholarship",
    employment: "Employment Services",
    pension: "Pension Services"
  };

  const serviceName = serviceNames[serviceId] || "Government Service";

  const [name, setName] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [purpose, setPurpose] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [applicationId, setApplicationId] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !mobile || !purpose) {
      alert("Please fill all required fields.");
      return;
    }

    const id = "APP" + Math.floor(1000 + Math.random() * 9000);

    const newApplication = {
      id: id,
      service: serviceName,
      applicant: name,
      date: new Date().toLocaleDateString("en-GB"),
      status: "Submitted"
    };

    const existingApplications =
      JSON.parse(localStorage.getItem("civicApplications")) || [];

    localStorage.setItem(
      "civicApplications",
      JSON.stringify([
        newApplication,
        ...existingApplications
      ])
    );

    setApplicationId(id);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="page application-success">

        <div className="success-box">

          <div className="success-icon">
            ✓
          </div>

          <h1>Application Submitted</h1>

          <p>
            Your application for{" "}
            <strong>{serviceName}</strong> has been successfully submitted.
          </p>

          <div className="application-id">
            <span>Application ID</span>
            <strong>{applicationId}</strong>
          </div>

          <p className="success-note">
            Your application has been added to My Applications.
          </p>

          <div className="success-buttons">

            <Link to="/applications">
              <button className="apply-btn">
                Track Application →
              </button>
            </Link>

            <Link to="/dashboard">
              <button className="back-btn">
                Back to Dashboard
              </button>
            </Link>

          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="page">

      <div className="form-header">

        <span>APPLICATION PORTAL</span>

        <h1>{serviceName}</h1>

        <p>
          Complete the form below to begin your application.
        </p>

      </div>

      <div className="application-form-card">

        <form onSubmit={handleSubmit}>

          <div className="form-section-title">
            Applicant Information
          </div>

          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Mobile Number</label>

          <input
            type="tel"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <label>Purpose of Application</label>

          <textarea
            placeholder="Enter the purpose of this application"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          />

          <div className="form-notice">
            <strong>Prototype Notice</strong>

            <p>
              This is a CivicAI OneGov prototype.
              Do not enter real Aadhaar numbers, bank details
              or other sensitive information.
            </p>
          </div>

          <button
            type="submit"
            className="submit-application-btn"
          >
            Submit Application →
          </button>

        </form>

      </div>

      <Link to={`/service/${serviceId}`}>
        <button className="back-btn">
          ← Back to Service
        </button>
      </Link>

    </div>
  );
}
function Applications() {
  const [applications, setApplications] = React.useState([]);

  React.useEffect(() => {
    const savedApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    setApplications(savedApplications);
  }, []);

  return (
    <div className="page">

      <div className="form-header">
        <span>APPLICATION MANAGEMENT</span>

        <h1>My Applications</h1>

        <p>
          View and track all your government service applications.
        </p>
      </div>

      {applications.length === 0 ? (

        <div className="empty-applications">

          <div className="empty-icon">
            ▤
          </div>

          <h2>No Applications Yet</h2>

          <p>
            Your submitted applications will appear here.
          </p>

          <Link to="/services">
            <button>
              Explore Government Services →
            </button>
          </Link>

        </div>

      ) : (

        <div className="applications-list">

          {applications.map((application) => (

            <div
              className="application-card"
              key={application.id}
            >

              <div className="application-top">

                <div>
                  <span className="application-label">
                    APPLICATION
                  </span>

                  <h2>{application.service}</h2>
                </div>

                <span className="status submitted">
                  {application.status}
                </span>

              </div>

              <div className="application-details">
                <Link to={`/application/${application.id}`}>
  <button className="track-application-btn">
    Track Application →
  </button>
</Link>

                <div>
                  <span>Application ID</span>
                  <strong>{application.id}</strong>
                </div>

                <div>
                  <span>Applicant</span>
                  <strong>{application.applicant}</strong>
                </div>

                <div>
                  <span>Date Submitted</span>
                  <strong>{application.date}</strong>
                </div>

              </div>

              <div className="application-purpose">
                <span>Purpose</span>
                <p>{application.purpose}</p>
              </div>

              <div className="application-progress">

                <div className="progress-step active">
                  <b>1</b>
                  <span>Submitted</span>
                </div>

                <div className="progress-line"></div>

                <div className="progress-step">
                  <b>2</b>
                  <span>Under Review</span>
                </div>

                <div className="progress-line"></div>

                <div className="progress-step">
                  <b>3</b>
                  <span>Completed</span>
                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}
function ApplicationDetails() {
  const applicationId =
    window.location.pathname.split("/").pop();

  const applications =
    JSON.parse(localStorage.getItem("applications")) || [];

  const application = applications.find(
    (item) => item.id === applicationId
  );
  const updateApplicationStatus = (newStatus) => {
  const updatedApplications = applications.map((item) =>
    item.id === applicationId
      ? { ...item, status: newStatus }
      : item
  );

  localStorage.setItem(
    "applications",
    JSON.stringify(updatedApplications)
  );

  window.location.reload();
};

  if (!application) {
    return (
      <div className="application-not-found">
        <h1>Application Not Found</h1>
        <p>
          We could not find this application in CivicAI OneGov.
        </p>

        <Link to="/applications">
          <button>← Back to Applications</button>
        </Link>
      </div>
    );
  }

  const steps = [
    "Submitted",
    "Under Review",
    "Completed"
  ];

  const currentStep = steps.indexOf(application.status);

  return (
    <div className="application-details-page">

      <div className="application-details-card">

        <span className="details-label">
          CIVICAI ONEGOV
        </span>

        <h1>Application Tracking</h1>

        <div className="application-id-box">
          <span>Application ID</span>
          <strong>{application.id}</strong>
        </div>

        <div className="application-information">

          <div>
            <span>Service</span>
            <strong>{application.service}</strong>
          </div>

          <div>
            <span>Applicant</span>
            <strong>{application.applicant}</strong>
          </div>

          <div>
            <span>Submitted On</span>
            <strong>{application.date}</strong>
          </div>

          <div>
            <span>Current Status</span>
            <strong>{application.status}</strong>
          </div>

        </div>

        <h2>Application Progress</h2>

        <div className="tracking-steps">

          {steps.map((step, index) => (
            <div
              key={step}
              className={`tracking-step ${
                index <= currentStep ? "completed" : ""
              }`}
            >

              <div className="tracking-circle">
                {index < currentStep
                  ? "✓"
                  : index + 1}
              </div>

              <span>{step}</span>

              {index < steps.length - 1 && (
                <div
                  className={`tracking-line ${
                    index < currentStep
                      ? "completed"
                      : ""
                  }`}
                />
              )}

            </div>
          ))}

        </div>

        <div className="tracking-note">
          <strong>Important:</strong>
          <p>
            CivicAI OneGov provides application guidance and
            tracking for the prototype. The official government
            portal is the authority for the actual application
            status.
          </p>
        </div>

        <Link to="/applications">
          <button className="back-applications-btn">
            ← Back to Applications
          </button>
        </Link>

      </div>

    </div>
  );
  <div className="demo-status-panel">

  <div className="demo-status-header">
    <span>DEMO MODE</span>
    <h2>Update Application Status</h2>
    <p>
      Use these controls to demonstrate the application
      lifecycle during your CivicAI OneGov presentation.
    </p>
  </div>

  <div className="demo-status-buttons">

    <button
      onClick={() =>
        updateApplicationStatus("Submitted")
      }
      className={
        application.status === "Submitted"
          ? "status-active"
          : ""
      }
    >
      1. Submitted
    </button>

    <button
      onClick={() =>
        updateApplicationStatus("Under Review")
      }
      className={
        application.status === "Under Review"
          ? "status-active"
          : ""
      }
    >
      2. Under Review
    </button>

    <button
      onClick={() =>
        updateApplicationStatus("Completed")
      }
      className={
        application.status === "Completed"
          ? "status-active"
          : ""
      }
    >
      3. Completed
    </button>

  </div>

</div>
}
function Notifications() {
  const [notifications, setNotifications] = React.useState(() => {
    return JSON.parse(
      localStorage.getItem("civicNotifications")
    ) || [
      {
        id: 1,
        title: "Welcome to CivicAI OneGov",
        message:
          "Your citizen dashboard is ready.",
        date: new Date().toLocaleDateString(),
        read: false
      },
      {
        id: 2,
        title: "Application Tracking",
        message:
          "You can track your applications from My Applications.",
        date: new Date().toLocaleDateString(),
        read: false
      }
    ];
  });

  const markAsRead = (id) => {
    const updated = notifications.map((notification) =>
      notification.id === id
        ? { ...notification, read: true }
        : notification
    );

    setNotifications(updated);

    localStorage.setItem(
      "civicNotifications",
      JSON.stringify(updated)
    );
  };

  const markAllAsRead = () => {
    const updated = notifications.map((notification) => ({
      ...notification,
      read: true
    }));

    setNotifications(updated);

    localStorage.setItem(
      "civicNotifications",
      JSON.stringify(updated)
    );
  };

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  return (
    <div className="notifications-page">

      <div className="notifications-card">

        <div className="notifications-header">

          <div>
            <span>CIVICAI ONEGOV</span>
            <h1>Notifications</h1>
            <p>
              Stay updated about your applications and services.
            </p>
          </div>

          {unreadCount > 0 && (
            <button
              className="mark-all-btn"
              onClick={markAllAsRead}
            >
              Mark all as read
            </button>
          )}

        </div>

        <div className="notification-count">
          {unreadCount} unread notification
          {unreadCount !== 1 ? "s" : ""}
        </div>

        <div className="notification-list">

          {notifications.length === 0 ? (
            <div className="empty-notifications">
              <h2>You're all caught up 🎉</h2>
              <p>No new notifications.</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`notification-item ${
                  notification.read
                    ? "notification-read"
                    : "notification-unread"
                }`}
                onClick={() =>
                  markAsRead(notification.id)
                }
              >

                <div className="notification-icon">
                  🔔
                </div>

                <div className="notification-content">

                  <h3>{notification.title}</h3>

                  <p>{notification.message}</p>

                  <small>{notification.date}</small>
                  onClick={() => markAsRead(notification.id)}

                </div>

                {!notification.read && (
                  <div className="unread-dot"></div>
                )}

              </div>
            ))
          )}

        </div>

        <Link
          to="/dashboard"
          className="notifications-back"
        >
          ← Back to Dashboard
        </Link>

      </div>

    </div>
  );
}
function Grievances() {
  
  const [subject, setSubject] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [grievances, setGrievances] = React.useState([]);

  React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("grievances")) || [];
    setGrievances(saved);
  }, []);

  const submitGrievance = (e) => {
    e.preventDefault();

    if (!subject || !category || !description) {
      alert("Please fill all fields.");
      return;
    }

    const grievance = {
      id: "GRV" + Math.floor(1000 + Math.random() * 9000),
      subject,
      category,
      description,
      status: "Submitted",
      date: new Date().toLocaleDateString(),
    };

    const updated = [grievance, ...grievances];

    localStorage.setItem("grievances", JSON.stringify(updated));
    setGrievances(updated);

    setSubject("");
    setCategory("");
    setDescription("");

    alert("Grievance submitted successfully!");
  };

  return (
    <div className="grievance-page">

      <div className="grievance-header">
        <span>CIVICAI ONEGOV</span>
        <h1>Grievance Support</h1>
        <p>
          Raise a civic issue and track your grievance from one place.
        </p>
      </div>

      <div className="grievance-container">

        {/* FORM */}
        <div className="grievance-form-card">
          <div className="form-label">RAISE A GRIEVANCE</div>

          <h2>Tell us about your issue</h2>

          <p className="form-info">
            This is a prototype. Do not enter Aadhaar numbers, bank details,
            passwords or other sensitive information.
          </p>

          <form onSubmit={submitGrievance}>

            <label>Subject</label>

            <input
              type="text"
              placeholder="Example: Street light not working"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <label>Category</label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select category</option>
              <option value="Roads">Roads</option>
              <option value="Water Supply">Water Supply</option>
              <option value="Electricity">Electricity</option>
              <option value="Sanitation">Sanitation</option>
              <option value="Street Lights">Street Lights</option>
              <option value="Public Services">Public Services</option>
              <option value="Other">Other</option>
            </select>

            <label>Description</label>

            <textarea
              rows="5"
              placeholder="Describe your issue..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit" className="grievance-submit-btn">
              Submit Grievance →
            </button>

          </form>
        </div>

        {/* TRACKING */}
        <div className="grievance-list-card">

          <div className="form-label">MY GRIEVANCES</div>

          <h2>Track your issues</h2>

          {grievances.length === 0 ? (
            <div className="empty-grievance">
              <div className="empty-icon">◇</div>
              <h3>No grievances yet</h3>
              <p>
                Your submitted grievances will appear here.
              </p>
            </div>
          ) : (
            <div className="grievance-list">

              {grievances.map((grievance) => (
                <div className="grievance-card" key={grievance.id}>

                  <div className="grievance-card-top">
                    <div>
                      <span className="grievance-id">
                        {grievance.id}
                      </span>

                      <h3>{grievance.subject}</h3>
                    </div>


                    <span className="grievance-status">
                      {grievance.status}
                    </span>
                  </div>

                  <div className="grievance-meta">
                    <span>{grievance.category}</span>
                    <span>{grievance.date}</span>
                  </div>

                  <p>{grievance.description}</p>

                  <div className="grievance-progress">
                    <span className="active">Submitted</span>
                    <span>Under Review</span>
                    <span>Resolved</span>
                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
function GrievanceDetails() {
  const grievanceId =
    window.location.pathname.split("/").pop();

  const grievances =
    JSON.parse(localStorage.getItem("grievances")) || [];

  const grievance = grievances.find(
    (item) => item.id === grievanceId
  );

  if (!grievance) {
    return (
      <div className="grievance-not-found">
        <h1>Grievance Not Found</h1>
        <p>
          We could not find this grievance in CivicAI OneGov.
        </p>

        <Link to="/grievances">
          <button>← Back to Grievances</button>
        </Link>
      </div>
    );
  }

  const steps = [
    "Submitted",
    "Under Review",
    "Resolved"
  ];

  const currentStep = steps.indexOf(grievance.status);

  return (
    <div className="grievance-details-page">

      <div className="grievance-details-card">

        <span className="grievance-label">
          CIVICAI ONEGOV
        </span>

        <h1>Grievance Tracking</h1>

        <div className="grievance-id-box">
          <span>Grievance ID</span>
          <strong>{grievance.id}</strong>
        </div>

        <div className="grievance-information">

          <div>
            <span>Subject</span>
            <strong>{grievance.subject}</strong>
          </div>

          <div>
            <span>Category</span>
            <strong>{grievance.category}</strong>
          </div>

          <div>
            <span>Submitted On</span>
            <strong>{grievance.date}</strong>
          </div>

          <div>
            <span>Current Status</span>
            <strong>{grievance.status}</strong>
          </div>

        </div>

        <div className="grievance-description">
          <span>Description</span>
          <p>{grievance.description}</p>
        </div>

        <h2>Grievance Progress</h2>

        <div className="grievance-tracking">

          {steps.map((step, index) => (
            <div
              key={step}
              className={`grievance-step ${
                index <= currentStep ? "completed" : ""
              }`}
            >

              <div className="grievance-circle">
                {index < currentStep
                  ? "✓"
                  : index + 1}
              </div>

              <span>{step}</span>

              {index < steps.length - 1 && (
                <div
                  className={`grievance-line ${
                    index < currentStep
                      ? "completed"
                      : ""
                  }`}
                />
              )}

            </div>
          ))}

        </div>

        <div className="grievance-note">
          <strong>Prototype Notice</strong>
          <p>
            CivicAI OneGov provides grievance guidance and
            pconstrototype tracking. Actual resolution is handled
            by the responsible government department.
          </p>
        </div>

        <Link to="/grievances">
          <button className="back-grievances-btn">
            ← Back to Grievances
          </button>
        </Link>

      </div>

    </div>
  );
}

function AIAssistant() {
  const [messages, setMessages] = React.useState([
    {
      sender: "bot",
      text:
        "Hello! 👋 I'm CivicAI Assistant. I can help you find government services, understand documents, check basic eligibility, track applications, and manage grievances."
    }
  ]);

  const [input, setInput] = React.useState("");

  const officialLinks = {
    income: "https://ap.meeseva.gov.in/",
    caste: "https://ap.meeseva.gov.in/",
    residence: "https://ap.meeseva.gov.in/",
    scholarship: "https://jnanabhumi.ap.gov.in/",
    employment: "https://portal-psc.ap.gov.in/",
    pension: "https://sspensions.ap.gov.in/"
  };

  const serviceNames = {
    income: "Income Certificate",
    caste: "Caste Certificate",
    residence: "Residence Certificate",
    scholarship: "Scholarship",
    employment: "Employment Services",
    pension: "Pension Services"
  };

  const getAIResponse = (question) => {
    const q = question.toLowerCase().trim();

    if (
      q.includes("hello") ||
      q.includes("hi") ||
      q.includes("hey")
    ) {
      return {
        text:
          "Hello! 👋 What government service do you need help with?"
      };
    }

    if (
      q.includes("income") ||
      q.includes("income certificate")
    ) {
      return {
        text:
          "For an Income Certificate, CivicAI can help you understand the process and prepare your information. You can check the basic requirements and then continue to the official AP MeeSeva portal.",
        service: "income"
      };
    }

    if (
      q.includes("caste") ||
      q.includes("caste certificate")
    ) {
      return {
        text:
          "For a Caste Certificate, CivicAI can provide preliminary guidance about documents and the application process. The actual application should be completed through the official AP MeeSeva portal.",
        service: "caste"
      };
    }

    if (
      q.includes("residence") ||
      q.includes("residence certificate")
    ) {
      return {
        text:
          "For a Residence Certificate, CivicAI can guide you through the basic preparation process. The official application is handled through AP MeeSeva.",
        service: "residence"
      };
    }

    if (
      q.includes("scholarship") ||
      q.includes("scholarships")
    ) {
      return {
        text:
          "For scholarships, CivicAI can help you understand the general process and information you may need. Continue to the official Andhra Pradesh scholarship portal for the actual application.",
        service: "scholarship"
      };
    }

    if (
      q.includes("employment") ||
      q.includes("job") ||
      q.includes("recruitment")
    ) {
      return {
        text:
          "For government employment and recruitment services, CivicAI can guide you toward relevant Andhra Pradesh government recruitment information.",
        service: "employment"
      };
    }

    if (
      q.includes("pension")
    ) {
      return {
        text:
          "For pension services, CivicAI can provide general guidance. The official pension system is responsible for the actual application and status.",
        service: "pension"
      };
    }

    if (
      q.includes("application") ||
      q.includes("applications") ||
      q.includes("track")
    ) {
      return {
        text:
          "You can view and track your CivicAI OneGov prototype applications from My Applications."
      };
    }

    if (
      q.includes("grievance") ||
      q.includes("complaint")
    ) {
      return {
        text:
          "You can submit and track civic grievances such as roads, water supply, electricity, sanitation, street lights, and public services."
      };
    }

    if (
      q.includes("document") ||
      q.includes("documents")
    ) {
      return {
        text:
          "CivicAI provides a preliminary document checklist for each supported service. Always verify the final requirements on the official government portal."
      };
    }

    if (
      q.includes("eligibility") ||
      q.includes("eligible")
    ) {
      return {
        text:
          "CivicAI can provide preliminary eligibility guidance. Eligibility rules can vary by service, so always verify the final requirements with the responsible government department."
      };
    }

    if (
      q.includes("service") ||
      q.includes("services")
    ) {
      return {
        text:
          "CivicAI OneGov currently supports Income Certificate, Caste Certificate, Residence Certificate, Scholarship, Employment Services, and Pension Services."
      };
    }

    return {
      text:
        "I can help with government services, documents, basic eligibility guidance, applications, grievances, and official government portals. Try asking about an Income Certificate, Caste Certificate, Scholarship, or Pension."
    };
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const response = getAIResponse(input);

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: input
      },
      {
        sender: "bot",
        text: response.text,
        service: response.service
      }
    ]);

    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const openOfficialPortal = (service) => {
    const url = officialLinks[service];

    if (url) {
      window.open(
        url,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  const openPage = (page) => {
    window.location.href = page;
  };

  return (
    <div className="ai-page">

      <GlobalNavbar />

      <div className="ai-container">

        <div className="ai-header">
          <span>CIVICAI ONEGOV</span>

          <h1>AI Civic Assistant</h1>

          <p>
            Your intelligent guide to Andhra Pradesh
            government services.
          </p>
        </div>

        <div className="ai-chat-card">

          <div className="ai-messages">

            {messages.map((message, index) => (
              <div
                key={index}
                className={`ai-message ${
                  message.sender === "user"
                    ? "ai-user-message"
                    : "ai-bot-message"
                }`}
              >

                <div className="ai-message-content">
                  {message.text}
                </div>

                {message.service && (
                  <div className="ai-service-actions">

                    <div className="ai-service-name">
                      {serviceNames[message.service]}
                    </div>

                    <Link
                      to={`/service/${message.service}`}
                    >
                      <button className="ai-view-service-btn">
                        View Service
                      </button>
                    </Link>

                    <button
                      className="ai-official-btn"
                      onClick={() =>
                        openOfficialPortal(
                          message.service
                        )
                      }
                    >
                      Official Portal →
                    </button>

                  </div>
                )}

              </div>
            ))}

          </div>

          <div className="ai-quick-actions">

            <button
              onClick={() =>
                setInput("How can I get an Income Certificate?")
              }
            >
              Income Certificate
            </button>

            <button
              onClick={() =>
                setInput("What documents are needed?")
              }
            >
              Documents
            </button>

            <button
              onClick={() =>
                setInput("How do I track my application?")
              }
            >
              Track Application
            </button>

            <button
              onClick={() =>
                setInput("How do I submit a grievance?")
              }
            >
              Grievance
            </button>

          </div>

          <div className="ai-input-area">

            <input
              type="text"
              value={input}
              placeholder="Ask CivicAI anything about government services..."
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={handleKeyDown}
            />

            <button onClick={sendMessage}>
              Send
            </button>

          </div>

          <div className="ai-page-actions">

            <button
              onClick={() => openPage("/services")}
            >
              Explore Services
            </button>

            <button
              onClick={() => openPage("/applications")}
            >
              My Applications
            </button>

            <button
              onClick={() => openPage("/grievances")}
            >
              My Grievances
            </button>

          </div>

          <div className="ai-warning">
            <strong>Prototype Notice:</strong>
            <span>
              CivicAI provides guidance only. Do not enter
              Aadhaar numbers, passwords, bank details, OTPs,
              or other sensitive information here.
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}
function App() {
  function NotFound() {
  return (
    <div className="not-found-page">

      <div className="not-found-card">

        <div className="not-found-code">
          404
        </div>

        <div className="not-found-icon">
          🔎
        </div>

        <span>CIVICAI ONEGOV</span>

        <h1>Page Not Found</h1>

        <p>
          Sorry, we couldn't find the page you're looking for.
          It may have been moved or the address may be incorrect.
        </p>

        <div className="not-found-actions">

          <Link to="/dashboard">
            <button className="not-found-primary">
              ← Back to Dashboard
            </button>
          </Link>

          <Link to="/services">
            <button className="not-found-secondary">
              Explore Services
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}
  return (
    
    <BrowserRouter>
    
      <Routes>

        <Route path="/" element={<Home />} />

      

        <Route path="/services" element={<Services />} />

        <Route
          path="/service/:serviceId"
          element={<ServiceDetails />}
        />
        <Route path="/apply/:serviceId" element={<ApplicationForm />} />

        <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />

        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

<Route
  path="/settings"
  element={
    <ProtectedRoute>
      <Settings />
    </ProtectedRoute>
  }
/>

<Route
  path="/applications"
  element={
    <ProtectedRoute>
      <Applications />
    </ProtectedRoute>
  }
/>
<Route
  path="/application/:applicationId"
  element={
    <ProtectedRoute>
      <ApplicationDetails />
    </ProtectedRoute>
  }
/>

<Route
  path="/grievances"
  element={
    <ProtectedRoute>
      <Grievances />
    </ProtectedRoute>
  }
/>
<Route
  path="/grievance/:grievanceId"
  element={
    <ProtectedRoute>
      <GrievanceDetails />
    </ProtectedRoute>
  }
/>


<Route
  path="/ai-assistant"
  element={
    <ProtectedRoute>
      <AIAssistant />
    </ProtectedRoute>
  }
/>
<Route
  path="/apply/:serviceId"
  element={
    <ProtectedRoute>
      <ApplicationForm />
    </ProtectedRoute>
  }
/>
<Route
  path="/notifications"
  element={
    <ProtectedRoute>
      <Notifications />
    </ProtectedRoute>
  }
/>
<Route path="*" element={<NotFound />} />
 </Routes>
    </BrowserRouter>
  );
}

export default App;