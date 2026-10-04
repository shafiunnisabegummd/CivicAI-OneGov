import { Link } from "react-router";

function Home() {
  return (
    <>
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
            prepare applications and get guided assistance through
            CivicAI OneGov.
          </p>

          <div className="hero-buttons">

            <Link to="/services" className="primary-btn">
              🔎 Find a Government Service
            </Link>

            <Link to="/ai-assistant" className="secondary-btn">
              🤖 Ask CivicAI
            </Link>

          </div>

        </div>

        <div className="dashboard-card">

          <h3>How can we help you?</h3>

          <div className="search-box">
            🔍 What government service do you need?
          </div>

          <div className="quick-actions">

            <Link to="/services" className="action-card">
              🔎
              <strong>Find Services</strong>
              <small>Discover relevant services</small>
            </Link>

            <Link to="/ai-assistant" className="action-card">
              🤖
              <strong>Ask CivicAI</strong>
              <small>Get guided assistance</small>
            </Link>

            <Link to="/applications" className="action-card">
              📄
              <strong>Applications</strong>
              <small>Prepare & track</small>
            </Link>

            <Link to="/grievances" className="action-card">
              📝
              <strong>Grievances</strong>
              <small>Submit & track</small>
            </Link>

          </div>

        </div>

      </section>


      <section className="services" id="services">

        <div className="section-heading">

          <div className="badge">
            Government Services
          </div>

          <h2>Find the service you need</h2>

          <p>
            Discover government services and understand
            what you need before applying.
          </p>

        </div>


        <div className="service-grid">

          <div className="service-card">

            <div className="service-icon">📜</div>

            <h3>Certificates</h3>

            <p>
              Explore certificate-related government services.
            </p>

            <Link to="/services?category=certificates">
              Explore →
            </Link>

          </div>


          <div className="service-card">

            <div className="service-icon">🎓</div>

            <h3>Education</h3>

            <p>
              Find scholarships and education services.
            </p>

            <Link to="/services?category=education">
              Explore →
            </Link>

          </div>


          <div className="service-card">

            <div className="service-icon">🏠</div>

            <h3>Citizen Services</h3>

            <p>
              Explore citizen and welfare services.
            </p>

            <Link to="/services?category=citizen">
              Explore →
            </Link>

          </div>


          <div className="service-card">

            <div className="service-icon">💼</div>

            <h3>Employment</h3>

            <p>
              Find employment and skill services.
            </p>

            <Link to="/services?category=employment">
              Explore →
            </Link>

          </div>

        </div>

      </section>
    </>
  );
}

export default Home;