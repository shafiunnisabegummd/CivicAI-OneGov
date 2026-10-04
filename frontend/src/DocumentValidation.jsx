import { useState } from "react";
import { Link } from "react-router-dom";

function DocumentValidation() {
  const [files, setFiles] = useState({
    identity: null,
    address: null,
    supporting: null,
  });

  const [validated, setValidated] = useState(false);

  const handleFileChange = (type, file) => {
    setFiles((previous) => ({
      ...previous,
      [type]: file,
    }));

    setValidated(false);
  };

  const handleValidate = () => {
    if (!files.identity || !files.address || !files.supporting) {
      alert("Please upload all 3 required documents.");
      return;
    }

    setValidated(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f8fc",
        padding: "35px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "850px", margin: "auto" }}>
        <Link
          to="/documents"
          style={{
            color: "#1261a0",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          ← Back to Documents
        </Link>

        <div
          style={{
            background: "white",
            marginTop: "25px",
            padding: "35px",
            borderRadius: "18px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "45px" }}>🔍</div>

            <h1 style={{ color: "#12304a" }}>
              Document Validation
            </h1>

            <p style={{ color: "#64748b" }}>
              Upload the required documents before submitting your
              government application.
            </p>
          </div>

          {/* Identity */}
          <div style={uploadBox}>
            <h3>🪪 Identity Proof</h3>

            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) =>
                handleFileChange("identity", e.target.files[0])
              }
            />

            {files.identity && (
              <p style={{ color: "green" }}>
                ✓ {files.identity.name}
              </p>
            )}
          </div>

          {/* Address */}
          <div style={uploadBox}>
            <h3>🏠 Address Proof</h3>

            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) =>
                handleFileChange("address", e.target.files[0])
              }
            />

            {files.address && (
              <p style={{ color: "green" }}>
                ✓ {files.address.name}
              </p>
            )}
          </div>

          {/* Supporting */}
          <div style={uploadBox}>
            <h3>📄 Supporting Document</h3>

            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) =>
                handleFileChange("supporting", e.target.files[0])
              }
            />

            {files.supporting && (
              <p style={{ color: "green" }}>
                ✓ {files.supporting.name}
              </p>
            )}
          </div>

          <button
            onClick={handleValidate}
            style={{
              width: "100%",
              padding: "15px",
              background: "#1261a0",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Validate Documents
          </button>

          {validated && (
            <div
              style={{
                marginTop: "25px",
                padding: "20px",
                background: "#ecfdf5",
                border: "1px solid #86efac",
                borderRadius: "12px",
              }}
            >
              <h2 style={{ color: "#166534" }}>
                ✅ Documents Ready
              </h2>

              <p>
                All required documents have been uploaded successfully.
              </p>

              <p>
                Your application is ready for the next step.
              </p>

              <button
                onClick={() =>
                  alert(
                    "Next step: Connect CivicAI OneGov with the official government application system."
                  )
                }
                style={{
                  padding: "12px 18px",
                  background: "#166534",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Continue Application →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const uploadBox = {
  background: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  padding: "20px",
  marginTop: "20px",
};

export default DocumentValidation;