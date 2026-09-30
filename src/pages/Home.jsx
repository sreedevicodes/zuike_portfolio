import { useNavigate } from "react-router-dom"
import SectionTitle from "../components/SectionTitle"
import SkillCard from "../components/SkillCard"
import ProjectCard from "../components/ProjectCard"

const skills = [
  { skill: "C" },
  { skill: "C++" },
  { skill: "HTML5" },
  { skill: "CSS3" },
  { skill: "JavaScript" },
  { skill: "Java" },
  { skill: "React.js" },
  { skill: "Python" },
  { skill: "MySQL" },
  { skill: "Git & GitHub" },
]

const projects = [
  {
    title: "Jewellery Inventory System",
    description:
      "A Django/Python-based jewellery inventory management system with CRUD functionality for managing jewellery items and user authentication.",
    technologies: ["Python", "Django", "HTML", "CSS", "SQLite"],
    link: "https://github.com/sreedevicodes/jewellery-inventory-system",
  },
  {
    title: "Wisher",
    description:
      "A multi-user wishlist app where users can create profiles, securely log in, manage draggable wish items, and explore friends' wishlists through a personalized visual interface.",
    technologies: ["Python", "Django", "HTML", "CSS", "SQLite"],
    link: "https://github.com/sreedevicodes/wisher",
  },
  {
    title: "FormHelper",
    description:
      "A browser extension designed to make digital and online forms easier to complete for senior citizens and people who have difficulty navigating or filling out online forms.",
    technologies: ["JavaScript", "Browser Extension", "HTML", "CSS"],
    link: "https://github.com/sreedevicodes/FormHelper",
  },
]

function Home() {
  const navigate = useNavigate()

  return (
    <div className="page home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I am</p>
            <h1 className="hero-name">Sreedevi S</h1>
            <h2 className="hero-role">Computer Science Student &amp; Aspiring Software Developer</h2>
            <p className="hero-intro">
              I study Computer Science, make questionable design decisions, break
              things while coding, and then somehow end up making them work. I like
              building things — especially when I can be involved in both how
              something works and how it feels to use. That usually means a mix of
              development, UI/UX, design, and way too much time spent deciding
              whether something should be 8px or 12px. I'm not really interested in
              sticking to one box yet. I'd rather keep experimenting, build weird
              ideas, work on things with good people, and figure out where all of
              it takes me.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => navigate("/about")}>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={() => navigate("/contact")}>
                Contact Me
              </button>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-photo-frame">
              <img src="/sreedevi.jpeg" alt="Sreedevi S" className="hero-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section">
        <div className="container">
          <SectionTitle title="Technical Skills" subtitle="Technologies I work with" />
          <div className="skills-grid">
            {skills.map((item, index) => (
              <SkillCard key={index} skill={item.skill} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects-section">
        <div className="container">
          <SectionTitle title="Featured Projects" subtitle="Some of my recent work" />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
