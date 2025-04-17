import "../styles/Footer.css"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="#" className="logo">
            Portfolio
          </a>
          <p>Building beautiful web experiences</p>
        </div>

        <div className="footer-links">
          <div className="footer-links-column">
            <h4>Navigation</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4>Social</h4>
            <ul>
              <li>
                <a href="https://github.com/harirmahmoud">GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/harir-walkz-a80453352/">LinkedIn</a>
              </li>
              <li>
                <a href="https://x.com/harir_mahm77808">Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com/harir.harir.39501/?hl=en">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Your Name. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
