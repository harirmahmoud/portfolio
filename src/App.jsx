"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import CustomCursor from "./components/CustomCursor"
import ScrollProgress from "./components/ScrollProgress"
import ScrollToTop from "./components/ScrollToTop"
import ThemeSwitcher from "./components/ThemeSwitcher"
import ParticlesBackground from "./components/ParticlesBackground"

import "./App.css"

function App() {
 

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
     
      <ParticlesBackground />
      <CustomCursor />
      <ScrollProgress />
      <ScrollToTop />
      <ThemeSwitcher />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
