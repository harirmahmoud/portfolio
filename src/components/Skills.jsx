import "../styles/Skills.css"

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express", level: 65 },
        { name: "Mysql", level: 60 },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", level: 80 },
      
        { name: "Vite", level: 70 },
        
      ],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2>My Skills</h2>
        <div className="underline"></div>
      </div>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3>{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div className="skill-item" key={skillIndex}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
