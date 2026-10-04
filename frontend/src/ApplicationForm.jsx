import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function ApplicationForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !address) {
      alert("Please fill all required fields.");
      return;
    }

    alert("Application information saved successfully!");
    navigate("/documents");
  };

  return (
    <div className="application-page">
      <Link to="/certificates" className="back-link">
        ← Back to Certificates
      </Link>

      <div className="application-card">
        <div className="application-icon">📝</div>

        <h1>Prepare Application</h1>

        <p className="application-description">
          Enter your basic information before continuing to the
          official government application system.
        </p>

        <div className="step-indicator">
          <span className="active-step">1</span>
          <span>Basic Information</span>
          <span className="line"></span>
          <span>2</span>
          <span>Documents</span>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Full Name *</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Mobile Number *</label>
          <input
            type="tel"
            placeholder="Enter 10-digit mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label>Address *</label>
          <textarea
            placeholder="Enter your complete address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows="4"
          />

          <button type="submit" className="prepare-btn">
            Save & Continue →
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;