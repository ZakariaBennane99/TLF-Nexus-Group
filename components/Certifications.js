

export default function Certifications() {
  const certifications = [
    {
      name: "sdvosb",
      fullName: "Service-Disabled Veteran-Owned Small Business",
      description: "This certification recognizes businesses owned by service-disabled veterans. It provides access to federal contracting opportunities, demonstrating our commitment to supporting veteran entrepreneurship and bringing unique military expertise to our services."
    },
    {
      name: "mosb",
      fullName: "Minority-Owned Small Business",
      description: "As a certified Minority-Owned Small Business, we contribute to diversity in government and corporate contracting. This certification opens doors to specific contracting opportunities and partnerships, reflecting our diverse perspective and innovative approaches."
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <h2 className="certifications-title">OUR CERTIFICATES</h2>
      <div className="splitter-container">
        <img src='/splitter.svg' />
      </div>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <img src={'/' + cert.name + '.svg'} />
            <h3 className="certification-name">{cert.fullName}</h3>
            <p className="certification-description">{cert.description}</p>
          </div>
        ))}
      </div>
      <div className="certifications-importance">
        <h3>Why Our Certifications Matter</h3>
        <p>These certifications are more than just badges – they represent our commitment to excellence, diversity, and service. They allow us to compete for specialized government contracts and partnerships, ensuring that our clients benefit from our unique perspective and expertise. By choosing TLF Nexus Group, you're not just getting a service provider; you're partnering with a certified business that brings additional value and opportunities to every project.</p>
      </div>
    </section>
  );
}