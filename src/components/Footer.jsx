import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <Link to="/" className="footer-logo">
            <img src="/janta-logo.svg" alt="Janta" className="logo-image" />
          </Link>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
          <p className="footer-copyright">
            © 2025 Janta by HUGE Production GmbH
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

