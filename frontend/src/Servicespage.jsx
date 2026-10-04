import { Link } from "react-router";

function Services() {
  const services = [
    {
      id: "income",
      title: "Income Certificate",
      description: "Apply for an income certificate online."
    },
    {
      id: "caste",
      title: "Caste Certificate",
      description: "Apply for a caste certificate."
    },
    {
      id: "residence",
      title: "Residence Certificate",
      description: "Apply for a residence certificate."
    },
    {
      id: "scholarship",
      title: "Scholarships",
      description: "Find and apply for eligible scholarships."
    },
    {
      id: "employment",
      title: "Employment Services",
      description: "Find government employment services."
    },
    {
      id: "pension",
      title: "Pension Services",
      description: "Explore government pension services."
    }
  ];

  return (
    <div className="page">
      <h1>Government Services</h1>

      <p>Select a service to continue.</p>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <h2>{service.title}</h2>

            <p>{service.description}</p>

            <Link to={`/service/${service.id}`}>
              <button>View Service</button>
            </Link>
          </div>
        ))}
      </div>

      <br />

      <Link to="/dashboard">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
}

export default Services;