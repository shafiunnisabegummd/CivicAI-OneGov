import { Link } from "react-router-dom";

function Documents() {
  const documents = [
    {
      icon: "🪪",
      name: "Identity Proof",
      description: "A valid government-issued identity document.",
      status: "Required",
    },
    {
      icon: "🏠",
      name: "Address Proof",
      description: "Document showing your current residential address.",
      status: "Required",
    },
    {
      icon: "📄",
      name: "Supporting Document",
      description: "Additional document required for the selected service.",
      status: "Required",
    },
  ];

  return (
    <div className="documents-page">
      <Link to="/application" className="back-link">
        ← Back to Application
      </Link>

      <div className="documents-header">
        <div className="documents-icon">📂</div>
        <div>
          <h1>Document Checklist</h1>
          <p>
            Check the documents you may need before submitting your
            government application.
          </p>
        </div>
      </div>

      <div className="document-list">
        {documents.map((document) => (
          <div className="document-card" key={document.name}>
            <div className="document-main">
              <div className="document-item-icon">
                {document.icon}
              </div>

              <div>
                <h2>{document.name}</h2>
                <p>{document.description}</p>
              </div>
            </div>

            <span className="required-badge">
              {document.status}
            </span>
          </div>
        ))}
      </div>

      <div className="document-next">
        <h2>Document Readiness</h2>
        <p>
          Make sure your documents are clear, valid and contain
          information matching your application.
        </p>
<Link
  to="/document-validation"
  className="validate-btn"
>
  Validate Documents →
</Link>
      </div>
    </div>
  );
}

export default Documents;