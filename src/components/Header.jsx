import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/janta-logo.svg" alt="Janta" className="logo-image" />
        </Link>
        <nav className="nav">
          <Link to="/work" className="nav-link">WORK</Link>
          <Link to="/pricing" className="nav-link">PRICING</Link>
          <Link to="/contact" className="nav-button">BOOK A CALL</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

