import './TermsOfService.css'

function TermsOfService() {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <h1 className="terms-title">Terms of Service</h1>
        <div className="terms-content">
          <section className="terms-section">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="terms-section">
            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily view the materials on Janta's website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="terms-section">
            <h2>Services</h2>
            <p>
              Janta provides launch video production services. By booking a call, you agree to provide accurate information and understand that:
            </p>
            <ul>
              <li>Booking a call is free and does not obligate you to purchase services</li>
              <li>We will contact you within 24 hours to schedule your call</li>
              <li>All pricing and project details will be discussed during your consultation</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>Limitations</h2>
            <p>
              In no event shall Janta or its suppliers be liable for any damages arising out of the use or inability to use the materials on this website.
            </p>
          </section>

          <section className="terms-section">
            <h2>Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us through our contact page.
            </p>
          </section>

          <section className="terms-section">
            <p className="terms-updated">
              Last updated: January 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService

