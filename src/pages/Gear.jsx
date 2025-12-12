import './Gear.css'

function Gear() {
  return (
    <div className="gear-page">
      <div className="gear-container">
        <h1 className="gear-title">Gear</h1>
        <div className="gear-grid">
          <div className="gear-column">
            <h3 className="gear-category">Cameras</h3>
            <ul className="gear-list">
              <li>3x Sony ZV-E10</li>
              <li>17mm Lens</li>
              <li>30mm Lens</li>
              <li>50mm Lens</li>
            </ul>
          </div>
          <div className="gear-column">
            <h3 className="gear-category">Audio</h3>
            <ul className="gear-list">
              <li>3x Shure SM7B Vocal Dynamic</li>
              <li>1x Sennheiser MKE 600 Shotgun</li>
            </ul>
          </div>
          <div className="gear-column">
            <h3 className="gear-category">Accessories</h3>
            <ul className="gear-list">
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

export default Gear

