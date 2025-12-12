import { Link } from 'react-router-dom'
import LogoMarquee from '../components/LogoMarquee'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <div className="hero-wrapper">
        <video 
          className="hero-background-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/Heropage1.mp4" type="video/mp4" />
        </video>
        <div className="hero-section">
        <h1 className="hero-title">
          Video production for startups
        </h1>
          <p className="hero-tagline">
            Combining experiences with your product.
          </p>
          <Link to="/work" className="hero-cta">
            VIEW WORK
          </Link>
        </div>
      </div>
      <LogoMarquee />
      <div className="home-equipment-section">
        <h2 className="equipment-title">Equipment</h2>
        <div className="equipment-grid">
          <div className="equipment-column">
            <h3 className="equipment-category">Cameras</h3>
            <ul className="equipment-list">
              <li>3x Sony ZV-E10</li>
              <li>17mm Lens</li>
              <li>30mm Lens</li>
              <li>50mm Lens</li>
            </ul>
          </div>
          <div className="equipment-column">
            <h3 className="equipment-category">Audio</h3>
            <ul className="equipment-list">
              <li>3x Shure SM7B Vocal Dynamic</li>
              <li>1x Sennheiser MKE 600 Shotgun</li>
            </ul>
          </div>
          <div className="equipment-column">
            <h3 className="equipment-category">Accessories</h3>
            <ul className="equipment-list">
              <li>15m XLR Cables</li>
              <li>Professional Lighting</li>
              <li>Stabilizers & Rigs</li>
              <li>+ More</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

