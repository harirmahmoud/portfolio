"use client"

import { useState } from "react"
import "../styles/Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faXTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

   
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: "Your message has been sent successfully!",
      })

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: "",
        })
      }, 5000)
    }, 1000)
  }

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2>Contact Me</h2>
        <div className="underline"></div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>
            Feel free to reach out to me for any questions, project inquiries, or just to say hello. I'll get back to
            you as soon as possible.
          </p>

          <div className="info-item">
            <div className="info-icon">📧</div>
            <div className="info-content">
              <h4>Email</h4>
              <p>harirmahmoud88@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📱</div>
            <div className="info-content">
              <h4>Phone</h4>
              <p>+213 549996093</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-content">
              <h4>Location</h4>
              <p>Mascara,Algeria</p>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/harirmahmoud" className="social-link" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/harir-walkz-a80453352/" className="social-link" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://x.com/harir_mahm77808" className="social-link" aria-label="Twitter">
            <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send Me a Message</h3>

          {formStatus.submitted && (
            <div className={`form-message ${formStatus.success ? "success" : "error"}`}>{formStatus.message}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
