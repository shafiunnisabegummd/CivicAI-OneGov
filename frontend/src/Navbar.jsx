function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🏛️ CivicAI <b>OneGov</b>
      </div>

      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#assistant">AI Assistant</a>
        <a href="#applications">Applications</a>
        <a href="#grievances">Grievances</a>
      </div>

      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
    </nav>
  );
}

export default Navbar;