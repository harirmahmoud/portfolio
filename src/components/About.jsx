import "../styles/About.css"
import image from '../images/490986855_573992209039707_5479942283963199132_n.jpg'

function About() {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="underline"></div>
      </div>
      <div className="about-content">
        <div className="about-image">
          <div className="image-container">
           
            <div className="placeholder-image">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
        <div className="about-text">
          <h3>Who I Am</h3>
          <p>
            I'm a passionate frontend developer with a strong focus on creating intuitive and engaging user experiences.
            With a background in design and development, I bring a unique perspective to every project.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            enjoying outdoor activities.
          </p>
          <div className="about-details">
            <div className="detail">
              <span className="label">Name:</span>
              <span className="value">Harir Mahmoud</span>
            </div>
            <div className="detail">
              <span className="label">Email:</span>
              <span className="value">harirmahmoud88@gmail.com</span>
            </div>
            <div className="detail">
              <span className="label">Location:</span>
              <span className="value">Mascara,Algeria</span>
            </div>
          </div>
          <a href="#" className="btn primary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
