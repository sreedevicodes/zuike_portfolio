function SkillCard({ skill, icon }) {
  return (
    <div className="skill-card">
      {icon && <span className="skill-icon">{icon}</span>}
      <span className="skill-name">{skill}</span>
    </div>
  )
}

export default SkillCard
