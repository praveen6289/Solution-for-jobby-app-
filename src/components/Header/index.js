import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
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
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
        <div className="mobile-view">
          <ul className="icons-list-container">
            <li>
              <Link to="/" className="nav-link">
                <AiFillHome className="home-icon" />
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="nav-link">
                <BsFillBriefcaseFill className="case-icon" />
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-mobile-btn"
            onClick={onClickLogout}
          >
            <FiLogOut className="logout-icon" />
          </button>
        </div>
      </div>
    </nav>
  )
}
export default withRouter(Header)
