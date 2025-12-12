import { useState } from 'react'
import './BookingForm.css'

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    domain: '',
    productName: '',
    launchTimeline: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="booking-form-container">
      <div className="booking-form-header">
        <svg className="calendar-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h3 className="booking-form-title">Book Your Call</h3>
        <p className="booking-form-subtitle">Fill in your details below.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              NAME <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              EMAIL <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="form-input"
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="domain" className="form-label">DOMAIN</label>
            <input
              type="text"
              id="domain"
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              placeholder="yourcompany.com"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="productName" className="form-label">PRODUCT/APP NAME</label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              placeholder="What are you launching?"
              className="form-input"
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="launchTimeline" className="form-label">LAUNCH TIMELINE</label>
            <input
              type="text"
              id="launchTimeline"
              name="launchTimeline"
              value={formData.launchTimeline}
              onChange={handleChange}
              placeholder="e.g. Next month, Q1 2025"
              className="form-input"
            />
          </div>
        </div>
        
        <button type="submit" className="submit-button">
          <svg className="video-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M18.3333 8.33333L13.3333 5V15L18.3333 11.6667V8.33333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.6667 3.33333H3.33333C2.41286 3.33333 1.66667 4.07952 1.66667 5V15C1.66667 15.9205 2.41286 16.6667 3.33333 16.6667H11.6667C12.5871 16.6667 13.3333 15.9205 13.3333 15V5C13.3333 4.07952 12.5871 3.33333 11.6667 3.33333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          BOOK FREE CALL
        </button>
        
        <p className="form-footer">
          No payment required. We'll send you a calendar invite within 24h.
        </p>
      </form>
    </div>
  )
}

export default BookingForm

