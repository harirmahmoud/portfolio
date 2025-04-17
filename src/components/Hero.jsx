import AnimatedText from "./AnimatedText"
import "../styles/Hero.css"
import image from '../images/490986855_573992209039707_5479942283963199132_n.jpg'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">Harir Mahmoud</span>
        </h1>
        <h2>
          <AnimatedText
            texts={["Frontend Developer", "Backend Developer", "React Specialist", "Creative Coder"]}
            typingSpeed={100}
            deletingSpeed={50}
            delayBetween={2000}
          />
        </h2>
        <p>I build beautiful and functional web experiences</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View My Work
          </a>
          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-container">
          {/* Replace with your image */}
          <div className="placeholder-image">
          <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
