import React from 'react';

const clientLogos = [
  { name: 'City of Cleveland Ohio', logo: 'Cleveland_Seal.png' },

];

const ClientLogosCarousel = () => {
  return (
    <section id="clients" className="certifications">
        <h2 className="clients-title">OUR CLIENTS</h2>
        <div className="splitter-container">
            <img src='/splitter.svg' alt="Divider" />
        </div>
        <div>
          <div className="carousel-container">
            <div className="carousel-track">
              {/* First set of logos */}
              {clientLogos.map((client, index) => (
                <div key={`first-${index}`} className="carousel-item">
                  {
                    client.name === '' ? '' :
                    <>
                    <img src={client.logo} alt={`${client.name} logo`} className="client-logo" />
                    <h3>{client.name}</h3></>
                  }
                </div>
              ))}
  
            </div>
          </div>
        </div>
    </section>
  );
};

export default ClientLogosCarousel;
