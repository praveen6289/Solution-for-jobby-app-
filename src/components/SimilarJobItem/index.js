import './index.css'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi'
import {AiFillStar} from 'react-icons/ai'

const SimilarJobItem = props => {
  const {jobsDetails} = props
  const {
    companyLogo,
    employmentType,
    id,
    jobDescription,
    location,
    rating,
    title,
  } = jobsDetails

  return (
    <li className="similar-jobs-section" key={id}>
      <div className="similar-jobs-content">
        <img
          src={companyLogo}
          alt="similar job company logo"
          className="similar-company-logo"
        />
        <div>
          <h1 className="similar-title-heading">{title}</h1>
          <div className="similar-jobs-content">
            <AiFillStar className="similar-jobs-star-logo" />
            <p className="similar-jobs-rating">{rating}</p>
          </div>
        </div>
      </div>
      <h1 className="similar-jobs-description-heading">Description</h1>
      <p className="similar-jobs-description">{jobDescription}</p>
      <div className="similar-jobs-content">
        <div className="similar-jobs-content">
          <HiLocationMarker className="similar-jobs-details-icons" />
          <p className="similar-jobs-details-title">{location}</p>
        </div>
        <div className="similar-jobs-content">
          <BsFillBriefcaseFill className="similar-jobs-details-icons" />
          <p className="similar-jobs-details-title">{employmentType}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobItem
