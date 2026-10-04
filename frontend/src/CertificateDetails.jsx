import { Link, useParams } from "react-router-dom";

function CertificateDetails() {
  const { type } = useParams();

  const title = type
    ? type
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Certificate";

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <Link to="/certificates">← Back to Certificates</Link>

      <h1>{title}</h1>

      <p>
        Here you can view eligibility, required documents and
        application information.
      </p>

      <h2>Required Documents</h2>

      <ul>
        <li>Identity Proof</li>
        <li>Address Proof</li>
        <li>Supporting Documents</li>
      </ul>

      <Link to="/application">
        <button style={{ padding: "12px 20px", marginTop: "20px" }}>
          Prepare Application →
        </button>
      </Link>
    </div>
  );
}

export default CertificateDetails;