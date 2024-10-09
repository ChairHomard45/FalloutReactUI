import { useState } from 'react'
import '../../styles/Home.css'
import { Login, Signup } from '../../components/index'

function Home() {
  const [showLogin, setShowLogin] = useState(true)

  const toggleForm = () => {
    setShowLogin(!showLogin)
  }

  return (
    <div className="Home-div" style={{ color: 'white' }}>
      <p>
        Welcome to the RobCo Pip-Boy 3000 <br />
        Please Authenticate Yourself
        <span />
      </p>
      <div className="Home-div-container">
        <div className="Home-div-container-sub">
          {showLogin ? <Login /> : <Signup />}
        </div>
        <button
          type="button"
          onClick={toggleForm}
          className="btn-theme-login_signup"
        >
          {showLogin ? 'Need to sign up?' : 'Already have an account?'}
        </button>
      </div>
    </div>
  )
}

export default Home
