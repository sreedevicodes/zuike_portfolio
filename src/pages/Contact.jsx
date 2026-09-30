import { useState } from "react"
import SectionTitle from "../components/SectionTitle"

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
}

const initialErrors = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
}

function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = { ...initialErrors }
    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = "Name is required."
      isValid = false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required."
      isValid = false
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address."
      isValid = false
    }

    const phoneRegex = /^[6-9]\d{9}$/
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required."
      isValid = false
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian phone number."
      isValid = false
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required."
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required."
      isValid = false
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters."
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      setFormData(initialForm)
      setErrors(initialErrors)
    }
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData(initialForm)
    setErrors(initialErrors)
  }

  return (
    <div className="page contact-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Contact Me</h1>
          <p className="page-subtitle">I would love to hear from you</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <SectionTitle title="Get In Touch" />
            <p className="contact-desc">
              Feel free to reach out for collaboration, queries, or just to say hi.
              I will get back to you as soon as possible.
            </p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="contact-icon">&#128231;</span>
                <div>
                  <strong>Email</strong>
                  <p>sreedevis@email.com</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <span className="contact-icon">&#128222;</span>
                <div>
                  <strong>Phone</strong>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <span className="contact-icon">&#128205;</span>
                <div>
                  <strong>Location</strong>
                  <p>Kerala, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="form-wrapper">
            {submitted ? (
              <div className="success-message">
                <span className="success-icon">&#10004;</span>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I will get back to you soon.</p>
                <button className="btn btn-primary" onClick={handleReset}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Full Name <span className="required">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={errors.name ? "input-error" : ""}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={errors.email ? "input-error" : ""}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10-digit phone number"
                    maxLength="10"
                    className={errors.phone ? "input-error" : ""}
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject <span className="required">*</span></label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter the subject"
                    className={errors.subject ? "input-error" : ""}
                  />
                  {errors.subject && <span className="error-text">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message <span className="required">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here (min. 20 characters)"
                    rows="5"
                    className={errors.message ? "input-error" : ""}
                  ></textarea>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
