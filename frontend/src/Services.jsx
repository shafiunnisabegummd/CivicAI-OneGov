import { Link } from "react-router";

function Services() {
  const services = [
    {
      id: "income",
      icon: "💰",
      title: "Income Certificate",
      category: "Certificates",
      description:
        "Apply for an income certificate and understand the required documents and eligibility."
    },
    {
      id: "caste",
      icon: "📜",
      title: "Caste Certificate",
      category: "Certificates",
      description:
        "Find information about caste certificate application and required documents."
    },
    {
      id: "residence",
      icon: "🏠",
      title: "Residence Certificate",
      category: "Certificates",
      description:
        "Understand the process and documents required for a residence certificate."
    },
    {
      id: "scholarship",
      icon: "🎓",
      title: "Scholarships",
      category: "Education",
      description:
        "Discover scholarship opportunities and application requirements."
    },
    {
      id: "employment",
      icon: "💼",
      title: "Employment Services",
      category: "Employment",
      description:
        "Explore government employment and skill-development services."
    },
    {
      id: "pension",
      icon: "👴",
      title: "Pension Services",
      category: "Welfare",
      description:
        "Find information about eligible government pension schemes."
    }
  ];

  return (
    <div className="services-page">

      <div className="services-top">
        <Link to="/dashboard" className="back-link">
          ← Dashboard
        </Link>

        <h1>🔎 Government Services</h1>

        <p>
          Discover government services available through CivicAI OneGov.
        </p>
      </div>

      <div className="service-search">
        <input
          type="text"
          placeholder="Search government services..."
        />
      </div>

      <div className="service-grid">

        {services.map((service) => (
          <Link
            key={service.id}
            to={`/service/${service.id}`}
            className="service-card"
          >
            <div className="service-icon">
              {service.icon}
            </div>

            <div className="service-category">
              {service.category}
            </div>

            <h2>{service.title}</h2>

            <p>{service.description}</p>

            <span>
              View Details →
            </span>
          </Link>
        ))}

      </div>

    </div>
  );
}

export default Services;