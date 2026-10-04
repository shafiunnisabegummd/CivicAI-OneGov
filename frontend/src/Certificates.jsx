import { Link } from "react-router-dom";

function Certificates() {
  const certificates = [
    {
      icon: "👶",
      title: "Birth Certificate",
      description:
        "Apply for or learn about the requirements for a birth certificate.",
      documents: "Identity proof, birth details",
    },
    {
      icon: "💰",
      title: "Income Certificate",
      description:
        "Check the information and documents needed for an income certificate.",
      documents: "Identity proof, income details",
    },
    {
      icon: "📋",
      title: "Caste Certificate",
      description:
        "Learn about eligibility and required documents for a caste certificate.",
      documents: "Identity proof, supporting caste documents",
    },
  ];

  return (
    <div className="certificate-page">

      <Link to="/services" className="back-link">
        ← Back to Government Services
      </Link>

      <div className="certificate-header">
        <div className="certificate-header-icon">📜</div>

        <div>
          <h1>Certificates</h1>
          <p>
            Find certificate services, eligibility information and
            required documents.
          </p>
        </div>
      </div>

      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <div className="certificate-card" key={certificate.title}>

            <div className="certificate-icon">
              {certificate.icon}
            </div>

            <h2>{certificate.title}</h2>

            <p>{certificate.description}</p>

            <div className="document-info">
              <strong>Common requirements</strong>
              <span>{certificate.documents}</span>
            </div>

            <Link
              to={`/certificate/${certificate.title
                .toLowerCase()
                .replaceAll(" ", "-")}`}
              className="certificate-btn"
            >
              View Details →
            </Link>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Certificates;