import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "Fire Safety & Emergency Equipment Supply",
      img: 'PPEEquipment.png',
      description: "Complete sourcing and supply of fire extinguishers, suppression systems, PPE, respiratory protection, and specialized safety equipment. From basic fire safety gear to advanced emergency response equipment for first responders and industrial applications."
    },
    {
      title: "Emergency Response Training & Education",
      img: 'FireDrill.png',
      description: "Professional fire training programs using state-of-the-art training props, emergency response drills, hazmat certification courses, and hands-on simulation exercises. Expert instruction designed for firefighters, EMS, and emergency personnel."
    },
    {
      title: "Safety Consulting & Emergency Planning",
      img: 'PlanningSession.png',
      description: "Strategic emergency response planning, continuity of operations (COOP) development, safety assessments, regulatory compliance consulting, and risk management solutions for government agencies and private sector clients."
    },
    {
      title: "Security & Inspection Services",
      img: 'Inspection.png',
      description: "Comprehensive security consulting, safety inspections, equipment assessments, compliance audits, and vulnerability evaluations. Specialized services for critical infrastructure, public facilities, and high-security environments."
    }
  ];

  return (
    <section id="services" className="services">
      <h2 className="services-title">OUR SERVICES</h2>
      <div className="splitter-container">
        <img src='/splitter.svg' />
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="image-container">
              <Image
                src={`/${service.img}`}
                alt={service.title}
                width={400}
                height={300}
                layout="responsive"
                loading="lazy"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${btoa(
                  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="#f0f0f0"/></svg>'
                )}`}
              />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}