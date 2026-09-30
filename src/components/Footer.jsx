import { Link } from "react-router-dom"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">

          <div className="footer-brand">
            <h3 className="footer-logo">Sreedevi S</h3>
            <p className="footer-desc">
              Computer Science Student passionate about building elegant software
              solutions and exploring new technologies.
            </p>
            <div className="footer-socials">
              <a href="https://github.com/sreedevicodes" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">GitHub</a>
              <a href="https://linkedin.com/in/sreedevi-snthsh" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p><a href="mailto:sreedevis.dev@gmail.com">📧 sreedevis.dev@gmail.com</a></p>
            <p><a href="tel:+919446956013">📞 +91 9446956013</a></p>
            <p>📍 Kerala, India</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sreedevi S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
