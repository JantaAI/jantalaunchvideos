import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/" className="footer-logo">
          <img src="/janta-logo.svg" alt="Janta" className="logo-image" />
        </Link>
        <p className="footer-copyright">
          © 2025 Janta by HUGE Production GmbH
        </p>
      </div>
    </footer>
  )
}

export default Footer

