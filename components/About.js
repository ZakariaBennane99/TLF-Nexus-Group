import { getAssetPath } from '../utils/assetPath';


export default function AboutUs() {
  return (
    <section id="leadership" className="about-us"> 
      <h2 className="about-us-title">LEADERSHIP</h2>
      <div className="splitter-container">
        <img src={getAssetPath('/splitter.svg')} />
      </div>
      <div className="founder">
        <img src={getAssetPath('/timothy-ferguson.jpg')}  alt="Timothy Ferguson" className="founder-image" />
        <h3 className="founder-name">Timothy Ferguson</h3>
        <p className="founder-tagline">Over 30 years of Public Safety Expertise</p>
        <div className="founder-bio">
          <p>Timothy Ferguson is a distinguished Public Safety Professional with a career spanning over three decades. His journey in public service began with honorable military service in the U.S. Air Force, where he honed his leadership skills and commitment to excellence.</p>
          <p>With a Bachelor of Science in Public Safety Administration from the University of Maryland Global Campus, Tim has built a formidable foundation in various critical areas such as fire and rescue services, law enforcement, and emergency management. His expertise extends to high-level operations requiring strategic planning and in-depth risk analysis.</p>
          <p>Throughout his career, Tim has been at the forefront of innovative approaches to public safety and crisis management. His unique blend of military discipline, academic knowledge, and hands-on experience in consulting and security has positioned him as a trusted advisor to both government agencies and private sector clients.</p>
          <p>Driven by a passion for safety and service excellence, Tim founded TLF Nexus Group to bridge critical gaps in security, crisis management, and specialized training. His vision was to create a company that not only understood the technical demands of these industries but also delivered innovative, tailored approaches to meet evolving security needs.</p>
          <p>Today, under Tim's leadership, TLF Nexus Group stands as a beacon of excellence, offering cutting-edge solutions in public safety services, safety consulting, project management, and staffing solutions. His commitment to empowering clients with strategic advisory and operational excellence continues to drive the company's mission and impact.</p>
        </div>
      </div>

      <div className="our-values">
        <h3 className="values-title">Our Values</h3>
        <ul className="values-list">
          <li className="value-item">
            <h4>Professionalism</h4>
            <p>At TLF Nexus Group, professionalism is the cornerstone of everything we do. We maintain the highest standards of conduct, expertise, and service delivery. Our team's approach is always thorough, respectful, and client-focused, ensuring that we meet and exceed industry standards while maintaining the utmost discretion and reliability in all our engagements.</p>
          </li>
          <li className="value-item">
            <h4>Integrity</h4>
            <p>Integrity is non-negotiable in our line of work. We operate with unwavering honesty, transparency, and ethical behavior in all our dealings. Our clients trust us with sensitive information and critical responsibilities, and we honor that trust by adhering to the highest moral and ethical standards. We believe that maintaining integrity not only builds lasting relationships but also ensures the long-term success and reputation of our company.</p>
          </li>
          <li className="value-item">
            <h4>Excellence</h4>
            <p>We are committed to excellence in every aspect of our operations. This means continuously striving to improve our services, staying ahead of industry trends, and delivering results that surpass expectations. Our dedication to excellence drives us to innovate, adapt, and perfect our methodologies, ensuring that our clients always receive the best possible solutions and outcomes. We believe that the pursuit of excellence is an ongoing journey that keeps us at the forefront of our field.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}