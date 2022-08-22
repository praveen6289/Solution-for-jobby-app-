import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi'
import {AiFillStar} from 'react-icons/ai'

import Header from '../Header'
import SimilarJobItem from '../SimilarJobItem'
import './index.css'

const JobItemDetails = () => (
  <>
    <Header />
    <div className="job-page-container">
      <div className="job-page-details-container">
        <h1>Jobs Details</h1>
      </div>
    </div>
  </>
)

export default JobItemDetails
