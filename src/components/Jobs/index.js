import {Component} from 'react'
import Cookies from 'js-cookie'

import {AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import JobCard from '../JobCard'

import './index.css'

class Jobs extends Component {
  state = {
    jobsList: [],
  }

  componentDidMount() {
    this.getJobs()
  }

  getJobs = async () => {
    const apiUrl = 'https://apis.ccbp.in/jobs'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.jobs.map(job => ({
        companyLogo: job.company_logo_url,
        employmentType: job.employment_type,
        id: job.id,
        jobDescription: job.job_description,
        location: job.location,
        packagePerAnnum: job.package_per_annum,
        rating: job.rating,
        title: job.title,
      }))
      this.setState({jobsList: updatedData})
    }
  }

  render() {
    const {jobsList} = this.state
    return (
      <>
        <Header />
        <div className="profile-page-container">
          <div className="app-container">
            <div className="profile-and-filter-container">
              <h1 className="user">user name</h1>
            </div>
            <div className="jobs-details-container">
              <div className="search-container">
                <input
                  type="search"
                  className="input-search"
                  placeholder="Search"
                />
                <AiOutlineSearch className="search-icon" />
              </div>
              <ul className="jobs-list">
                {jobsList.map(job => (
                  <JobCard jobData={job} key={job.id} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Jobs
