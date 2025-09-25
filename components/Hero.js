'use client';


export default function Hero() {
    return (
      <section className="hero">
        <video autoPlay loop muted className="background-video">
          <source src='/backgroundVideo.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <div className="video-content">
          <div className="text-box">
            <h1>Tailored Safety Solutions Built on Three Decades of Experience</h1>
            <p>Our founder's 30+ years in public safety, emergency response, and security consulting ensures your organization receives expert-grade equipment, training, and strategic planning</p>
            <button className="cta" onClick={() => document.getElementById("services").scrollIntoView({ behavior: 'smooth' })}><span>DISCOVER OUR SERVICES</span></button>
          </div>
        </div>
      </section>
    );
}
