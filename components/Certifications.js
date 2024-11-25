import React from 'react';

/*

{
  name: "sdvosb.svg",
  fullName: "Service-Disabled Veteran-Owned Small Business",
  description: "This certification recognizes businesses owned by service-disabled veterans. It provides access to federal contracting opportunities, demonstrating our commitment to supporting veteran entrepreneurship and bringing unique military expertise to our services."
}

*/

export default function Certifications() {
  const certifications = [
    {
      name: "mosb.svg",
      fullName: "Minority-Owned Small Business",
      description: "As a certified Minority-Owned Small Business, we contribute to diversity in government and corporate contracting. This certification opens doors to specific contracting opportunities and partnerships, reflecting our diverse perspective and innovative approaches."
    },
    {
      name: "sbr.png",
      fullName: "Small Business Reserve Program",
      description: "The SBR Program is designed to provide small businesses with greater access to Maryland state procurement opportunities. This certification allows us to compete for designated small business contracts, supporting local economic growth and innovation."
    },
    {
      name: "vsbe.png",
      fullName: "Veteran-Owned Small Business Enterprise Program",
      description: "The VSBE Program recognizes and supports veteran-owned businesses in Maryland. This certification provides us with increased opportunities in state contracting, acknowledging the value and experience that veterans bring to the business world."
    },
    {
      name: "voc.png",
      fullName: "Veteran-Owned Certification (SBA)",
      description: "The Veteran-Owned Certification from the Small Business Administration (SBA) enhances our credibility and provides access to federal contracting opportunities reserved for veteran-owned businesses. This certification acknowledges the contributions and expertise of veterans in the business community."
    },
    {
      name: "sdvoc.png",
      fullName: "Service-Disabled Veteran-Owned Small Business Certification (SBA)",
      description: "The Service-Disabled Veteran-Owned Small Business (SDVOSB) Certification from the SBA offers exclusive access to federal contracts and subcontracts for businesses owned and controlled by service-disabled veterans. It reflects our commitment to excellence and the unique capabilities brought by service-disabled veterans to the business world."
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <h2 className="certifications-title">OUR CERTIFICATES</h2>
      <div className="splitter-container">
        <img src='/splitter.svg' alt="Divider" />
      </div>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <img src={`/${cert.name}`} alt={cert.fullName} />
            <h3 className="certification-name">{cert.fullName}</h3>
            <p className="certification-description">{cert.description}</p>
          </div>
        ))}
      </div>
      <div className="certifications-importance">
        <h3>Why Our Certifications Matter</h3>
        <p>
          These certifications are more than just badges – they represent our commitment to excellence, diversity, and service. They allow us to compete for specialized government contracts and partnerships, ensuring that our clients benefit from our unique perspective and expertise. By choosing TLF Nexus Group, you're not just getting a service provider; you're partnering with a certified business that brings additional value and opportunities to every project. Our array of certifications, including federal, state, and diversity-focused programs, demonstrates our versatility and dedication to serving a wide range of clients and communities.
        </p>
      </div>
    </section>
  );
}