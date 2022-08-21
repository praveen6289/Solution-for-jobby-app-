import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
      />
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="nav-link">
            Jobs
          </Link>
        </li>
      </ul>
      <button type="button" className="logout-desktop-btn">
        Logout
      </button>
      <div className="mobile-view">
        <button type="button" className="logout-mobile-btn">
          <AiFillHome className="home-icon" />
        </button>
        <button type="button" className="logout-mobile-btn">
          <BsFillBriefcaseFill className="case-icon" />
        </button>
        <button type="button" className="logout-mobile-btn">
          <FiLogOut className="logout-icon" />
        </button>
      </div>
    </div>
  </nav>
)
export default Header
