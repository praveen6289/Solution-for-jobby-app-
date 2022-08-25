import {Link} from 'react-router-dom'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const JobCard = props => {
  const {jobData} = props
  console.log(jobData)
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobData

  return (
    <li className="job-card">
      <Link to={`/jobs/${id}`} className="link-item">
        <div className="logo-title-container">
          <img src={companyLogoUrl} alt="company logo" className="logo" />
          <div className="title-details-container">
            <h1 className="title">{title}</h1>
            <div className="rating-container">
              <AiFillStar className="star-icon" />
              <p className="rating">{rating}</p>
            </div>
          </div>
        </div>
        <div className="location-type-container">
          <div className="location-type-details-container">
            <div className="location-container">
              <HiLocationMarker className="location-icon" />
              <p className="location">{location}</p>
            </div>
            <div className="job-type-container">
              <BsFillBriefcaseFill className="case-icon" />
              <p className="employment-type">{employmentType}</p>
            </div>
          </div>
          <p className="salary">{packagePerAnnum}</p>
        </div>
        <div>
          <hr />
          <h1 className="description-heading">Description</h1>
          <p className="job-description">{jobDescription}</p>
        </div>
      </Link>
    </li>
  )
}

export default JobCard
