export default function Services() {
  const services = [
    {
      title: "Public Safety Services",
      img: 'law.jpg',
      description: "Leveraging over 30 years of public safety expertise to provide cutting-edge solutions for public safety & law enforcement agencies. Our services include strategic planning, risk analysis, and innovative training programs tailored to meet the evolving challenges in public safety."
    },
    {
      title: "Safety Consulting",
      img: 'safety.jpg',
      description: "Comprehensive safety consulting services drawing from extensive experience in crisis management and emergency operations. We offer tailored approaches to enhance organizational safety protocols and emergency response strategies."
    },
    {
      title: "Project Management",
      img: 'project.jpg',
      description: "Expert project management services for high-stakes security projects and specialized operations. Our team brings a wealth of experience from military and government sectors to ensure efficient and effective project execution."
    },
    {
      title: "Staffing Solutions",
      img: 'staffing.jpg',
      description: "Specialized staffing services for government agencies and private sector clients. We provide top-tier professionals with backgrounds in IT, support, and project management, ensuring our clients have access to the best talent in the industry."
    }
  ];

  return (
    <section id="services" className="services">

      <h2 className="services-title">OUR SERVICES</h2>
      <div className="splitter-container">
        <img src="/splitter.svg" />
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={'/' + service.img} />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
