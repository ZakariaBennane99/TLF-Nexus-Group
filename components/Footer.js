
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-upper">
        <div className="logo-container">
          <img src="/logo.svg" alt="TLF Nexus Group Logo" width={300} />
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/company/tlf-nexus-group" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://www.instagram.com/tlfnexusgroup/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://x.com/TLFNexusGroup" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.facebook.com/people/TLF-Nexus-Group/61566070596470" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-lower">
        <Link href="/Capability_Statement.pdf" target="_blank" className="capability-link">
          Capability Statement
        </Link>
        <div className="business-codes">
          <span><b>NAICS:</b> 541611</span>
          <span><b>CAGE:</b> 9XVC4</span>
          <span><b>UEI:</b> NR89MG3EGST8</span>
        </div>
      </div>
      <div className='privacy-policy'>
        <Link href="/privacy-policy" target="_blank" className="privacy-policy-link">
          Privacy Policy
        </Link>
      </div>
      <div className="footer-bottom">© 2024 TLF Nexus Group. All rights reserved.</div>
    </footer>
  );
}
