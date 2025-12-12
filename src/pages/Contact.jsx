import BookingForm from '../components/BookingForm'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-left">
          <div className="free-badge">100% Free</div>
          <h2 className="contact-title">The First Step</h2>
          <ul className="contact-features">
            <li className="feature-item">
              <svg className="check-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>30-min strategy call with our creative director</span>
            </li>
            <li className="feature-item">
              <svg className="check-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Personalized launch video concept for your product</span>
            </li>
            <li className="feature-item">
              <svg className="check-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Timeline & budget estimate tailored to you</span>
            </li>
          </ul>
        </div>
        <div className="contact-right">
          <BookingForm />
        </div>
      </div>
    </div>
  )
}

export default Contact

