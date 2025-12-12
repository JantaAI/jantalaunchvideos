import './Pricing.css'

function Pricing() {
  return (
    <div className="pricing-page">
      <div className="pricing-container">
        <h1 className="pricing-title">Pricing</h1>
        <div className="pricing-content">
          <div className="pricing-main">
            <div className="pricing-value">$8k-$20k</div>
            <div className="pricing-label">Per Project</div>
            <p className="pricing-description">
              Custom pricing based on your project needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing

