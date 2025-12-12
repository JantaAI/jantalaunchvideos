import './PrivacyPolicy.css'

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-page">
      <div className="privacy-policy-container">
        <h1 className="privacy-policy-title">Privacy Policy</h1>
        <div className="privacy-policy-content">
          <section className="privacy-section">
            <h2>Information We Collect</h2>
            <p>
              When you use our booking form, we collect the following information:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Domain (optional)</li>
              <li>Product/App name (optional)</li>
              <li>Launch timeline (optional)</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>How We Use Your Information</h2>
            <p>
              We use the information you provide to:
            </p>
            <ul>
              <li>Contact you regarding your booking request</li>
              <li>Send you calendar invites for your scheduled call</li>
              <li>Provide personalized service and support</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Data Storage</h2>
            <p>
              Your information is securely stored in our Supabase database. We implement appropriate security measures to protect your personal information.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through our contact page.
            </p>
          </section>

          <section className="privacy-section">
            <p className="privacy-updated">
              Last updated: January 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy

