import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi'
import {AiFillStar} from 'react-icons/ai'
import {FiExternalLink} from 'react-icons/fi'

import Header from '../Header'
import SimilarJobItem from '../SimilarJobItem'
import SkillsList from '../SkillsList'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class JobItemDetails extends Component {
  state = {
    jobData: {},
    similarJobsData: [],
    apiStatus: apiStatusConstants.initial,
    skillData: [],
    lifeAtCompanyData: {},
  }

  componentDidMount() {
    this.getJobData()
  }

  getFormattedData = data => ({
    companyLogo: data.company_logo_url,
    websiteUrl: data.company_website_url,
    employmentType: data.employment_type,
    id: data.id,
    jobDescription: data.job_description,
    location: data.location,
    packagePerAnnum: data.package_per_annum,
    rating: data.rating,
    title: data.title,
  })

  getSimilarJobData = data => ({
    companyLogo: data.company_logo_url,
    employmentType: data.employment_type,
    id: data.id,
    jobDescription: data.job_description,
    location: data.location,
    rating: data.rating,
    title: data.title,
  })

  getSkillsData = data => ({
    skillImageUrl: data.image_url,
    name: data.name,
  })

  getLifeAtCompanyData = data => ({
    description: data.description,
    companyImageUrl: data.image_url,
  })

  getJobData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = this.getFormattedData(fetchedData.job_details)

      const updatedSimilarJobsData = fetchedData.similar_jobs.map(
        eachSimilarJob => this.getSimilarJobData(eachSimilarJob),
      )

      const updatedSkillsData = fetchedData.job_details.skills.map(
        eachSkillData => this.getSkillsData(eachSkillData),
      )

      const updatedLifeAtCompanyData = this.getLifeAtCompanyData(
        fetchedData.job_details.life_at_company,
      )

      this.setState({
        jobData: updatedData,
        similarJobsData: updatedSimilarJobsData,
        apiStatus: apiStatusConstants.success,
        skillData: updatedSkillsData,
        lifeAtCompanyData: updatedLifeAtCompanyData,
      })
    }
    if (response.status === 404) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <div className="job-details-loader-container" testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="job-details-failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="failure-view-image"
      />
      <h1 className="job-not-found-heading">Oops! Something Went Wrong</h1>
      <p className="job-not-found-description">
        We cannot seem to find the page you are looking for.
      </p>
      <Link to="/jobs">
        <button type="button" className="button" onClick={this.getJobData}>
          Retry
        </button>
      </Link>
    </div>
  )

  renderJobDetailsView = () => {
    const {jobData, skillData, lifeAtCompanyData, similarJobsData} = this.state
    const {
      companyLogo,
      websiteUrl,
      employmentType,
      id,
      jobDescription,
      location,
      packagePerAnnum,
      rating,
      title,
    } = jobData
    const {description, companyImageUrl} = lifeAtCompanyData

    return (
      <div className="jobs-details-success-view">
        <div className="job-card">
          <div className="logo-title-container">
            <img
              src={companyLogo}
              alt="job details company logo"
              className="logo"
            />
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
            <div className="description-container">
              <h1 className="description-heading">Description</h1>
              <a
                href={websiteUrl}
                className="anchor-item"
                rel="noreferrer"
                target="_blank"
              >
                Visit <FiExternalLink />
              </a>
            </div>
            <p className="job-description">{jobDescription}</p>
          </div>
          <div>
            <h1 className="skill-heading">Skills</h1>
            <ul className="skill-item-container">
              {skillData.map(eachSkill => (
                <SkillsList skillDetails={eachSkill} key={eachSkill.name} />
              ))}
            </ul>
          </div>
          <div>
            <h1 className="life-at-heading">Life at company</h1>
            <div className="life-at-container">
              <p className="life-at-Description">{description}</p>
              <img
                src={companyImageUrl}
                alt="life at company"
                className="company-img"
              />
            </div>
          </div>
        </div>
        <h1 className="similar-jobs-heading">Similar Jobs</h1>
        <ul className="similar-jobs-list">
          {similarJobsData.map(eachSimilarJob => (
            <SimilarJobItem
              jobsDetails={eachSimilarJob}
              key={eachSimilarJob.id}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderJobDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobDetailsView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="job-page-container">{this.renderJobDetails()}</div>
      </>
    )
  }
}

export default JobItemDetails
