'use client';


export default function Hero() {
    return (
      <section className="hero">
        <video autoPlay loop muted className="background-video">
          <source src='/background-video.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <div className="video-content">
          <div className="text-box">
            <h1>Tailored Solutions for Public Safety, Project Management, and Staffing</h1>
            <p>Over 30 years of professional experience delivering strategic advisory and operational excellence.</p>
            <button className="cta" onClick={() => document.getElementById("services").scrollIntoView({ behavior: 'smooth' })}>DISCOVER OUR SERVICES</button>
          </div>
        </div>
      </section>
    );
}
