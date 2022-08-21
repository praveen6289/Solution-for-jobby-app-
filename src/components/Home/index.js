import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <h1 className="home-heading">Find The Jobs That Fits Your Life</h1>
      <p className="home-description">
        Millions of people are searching for jobs, salary information,company
        reviews. Find the job that fits your abilities and potential.
      </p>
      <button type="button" className="find-jobs-button">
        Find Jobs
      </button>
    </div>
  </>
)

export default Home
