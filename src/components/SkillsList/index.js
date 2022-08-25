import './index.css'

const SkillsList = props => {
  const {skillDetails} = props
  const {skillImageUrl, name} = skillDetails

  return (
    <li className="skill-container">
      <img src={skillImageUrl} alt={name} className="skills-image" />
      <p className="skills-title">{name}</p>
    </li>
  )
}

export default SkillsList
