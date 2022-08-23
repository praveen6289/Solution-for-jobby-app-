import './index.css'

const SkillsList = props => {
  const {skillImageUrl, name} = props

  return (
    <li className="skill-container">
      <img src={skillImageUrl} alt={name} className="skills-image" />
      <p className="skills-title">{name}</p>
    </li>
  )
}

export default SkillsList
