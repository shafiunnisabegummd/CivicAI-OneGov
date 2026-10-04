function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="badge">
          ✨ Smart Government Service Assistant
        </div>

        <h1>
          Government Services,
          <span> Simplified.</span>
        </h1>

        <p>
          Discover government services, understand eligibility,
          prepare your application and continue securely through
          the official government system.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            🔎 Find a Government Service
          </button>

          <button className="secondary-btn">
            🤖 Ask CivicAI
          </button>
        </div>

      </div>

      <div className="dashboard-card">

        <h3>Citizen Dashboard</h3>

        <div className="search-box">
          🔍 What government service do you need?
        </div>

        <div className="quick-actions">

          <div className="action-card">
            🔎
            <strong>Find Services</strong>
            <small>Discover relevant services</small>
          </div>

          <div className="action-card">
            🤖
            <strong>Ask CivicAI</strong>
            <small>Get guided assistance</small>
          </div>

          <div className="action-card">
            📄
            <strong>Applications</strong>
            <small>Prepare & track</small>
          </div>

          <div className="action-card">
            📝
            <strong>Grievances</strong>
            <small>Submit & track</small>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;