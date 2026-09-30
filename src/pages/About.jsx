import SectionTitle from "../components/SectionTitle"
import SkillCard from "../components/SkillCard"

const skills = [
  { skill: "C" },
  { skill: "C++" },
  { skill: "HTML5" },
  { skill: "CSS3" },
  { skill: "JavaScript" },
  { skill: "Java" },
  { skill: "React.js" },
  { skill: "Django" },
  { skill: "Python" },
  { skill: "MySQL" },
  { skill: "Git & GitHub" },
]

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Christ College of Engineering (Autonomous), Irinjalakuda",
    year: "2025 – Present",
    details: "SGPA: 8.2 (Current)",
   
  },
  {
    degree: "Higher Secondary Education (11th & 12th Grade)",
    institution: "Providence Girls' Higher Secondary School, Kozhikode",
    year: "2023 – 2025",
    details: "Completed 12th grade with Computer Science as core subject. Scored 98.2% in boards.",

  },
]

const experience = [
  {
    role: "Student Developer & UI/UX Designer",
    org: "Independent & Team Projects",
    period: "2025 – Present",
    desc: "Worked on web applications and software projects involving frontend development, UI/UX design, backend systems, and emerging technologies. Built projects such as a Django-based Jewellery Inventory System and Wishr, while contributing to team-based projects involving AI, APIs, and accessibility-focused solutions.",
  },
  {
    role: "Hackathon & Innovation Contributor",
    org: "College Hackathons & Technical Events",
    period: "2025 – Present",
    desc: "Participated in hackathons and innovation events, contributing to research, UI/UX, prototyping, presentations, and development. Worked on projects including Dissolver, an AI-powered e-commerce dispute resolution system, and Spot Ease, a smart parking solution, gaining practical experience working with APIs, backend systems, and agentic AI.",
  },
]

const certifications = [
  {
    name: "NPTEL Certification – Data Structures and Algorithms using Python",
    org: "NPTEL / SWAYAM",
    year: "2025",
    link: "/NPTEL26CS79S36990012503189661.pdf",
  },
]

const achievements = [
  "NPTEL Certified – Completed Data Structures and Algorithms using Python through NPTEL/SWAYAM.",
  "Smart India Hackathon 2026 – Developed PulseGrid – The Campus Energy Grid, a fitness-focused software solution addressing physical activity and student wellness.",
  "INNOV8 Ideathon – Worked on Spot Ease, a smart parking management solution, contributing to research, UI/UX prototyping, and presentation.",
  "Agentic AI Hackathon – Contributed to Dissolver, an AI-powered e-commerce dispute resolution system using multiple specialized AI agents.",
  "FOSS Club – Contributed to technical club activities through UI/UX design, visual communication, event planning, and promotional projects.",
  "College Newsletter Team – Contributed to the design, layout, and visual presentation of the college newsletter.",
]

function About() {
  return (
    <div className="page about-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">Know a little more about me</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container about-intro-grid">
          <div className="about-avatar-wrapper">
            <div className="hero-avatar about-avatar">
              <img src="/sreedevi.jpeg" alt="Sreedevi S" className="about-avatar-img" />
            </div>
          </div>
          <div className="about-intro-text">
            <SectionTitle title="Who Am I?" />
            <p>
              I am <strong>Sreedevi S</strong>, a Computer Science student from Kerala, India.
              I am passionate about building web applications and solving problems through clean,
              efficient code. I believe in continuous learning and strive to keep up with the
              evolving landscape of technology.
            </p>
            <p>
              My primary areas of interest include <strong>Web Development</strong>,
              <strong> Java Programming</strong>, and <strong>UI/UX Design</strong>. I enjoy
              working on both the visual and logical sides of software development.
            </p>
            <p>
              Outside of coding, I enjoy exploring design tools, contributing to group projects,
              and preparing for a career in the software industry.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section alt-bg">
        <div className="container">
          <SectionTitle title="Education" subtitle="My academic background" />
          <div className="timeline">
            {education.map((edu, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{edu.degree}</h3>
                  <p className="timeline-org">{edu.institution}</p>
                  <p className="timeline-period">{edu.year}</p>
                  <p>{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <div className="container">
          <SectionTitle title="Technical Skills" subtitle="Technologies I have worked with" />
          <div className="skills-grid">
            {skills.map((item, index) => (
              <SkillCard key={index} skill={item.skill} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section alt-bg">
        <div className="container">
          <SectionTitle title="Experience" subtitle="Projects and contributions" />
          <div className="timeline">
            {experience.map((exp, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{exp.role}</h3>
                  <p className="timeline-org">{exp.org}</p>
                  <p className="timeline-period">{exp.period}</p>
                  <p>{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="container">
          <SectionTitle title="Certifications" subtitle="Courses and certifications completed" />
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card"
                key={index}
              >
                <span className="cert-icon">&#127942;</span>
                <h4>{cert.name}</h4>
                <p>{cert.org}</p>
                <span className="cert-year">{cert.year}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section alt-bg">
        <div className="container">
          <SectionTitle title="Achievements" subtitle="Highlights from my journey" />
          <ul className="achievement-list">
            {achievements.map((item, index) => (
              <li key={index} className="achievement-item">
                <span className="achievement-icon">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Career Goals */}
      <section className="section">
        <div className="container">
          <SectionTitle title="Career Interests &amp; Goals" />
          <div className="goals-card">
            <p>
              My goal is to become a <strong>full-stack software developer</strong> who creates
              impactful and user-friendly applications. I am particularly interested in
              <strong> React.js-based web development</strong> and back-end systems using <strong>Java or Python</strong>.
            </p>
            <p>
              In the near future, I plan to complete more certifications, contribute to open-source
              projects, and apply for software engineering internships and entry-level positions
              where I can continue growing as a developer.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
