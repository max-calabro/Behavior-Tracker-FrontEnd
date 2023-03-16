import '../CSS/Homepage.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import AllStudents from '../components/AllStudents'
import NewStudent from '../components/NewStudent'
import Trends from '../components/Trends'
import HowToUse from '../components/HowToUse'

import { GetCounselor } from '../services/Queries'

const Homepage = ({ user, setUser, handleLogOut }) => {
  const navigate = useNavigate()

  const [componentName, setComponentName] = useState('')
  const [counselorData, setCounselorData] = useState('')

  const renderComponent = (componentName) => {
    setComponentName(componentName)
  }

  const getCounselorData = async () => {
    if (user) {
      let id = user.id
      const response = await GetCounselor(`${id}`)
      setCounselorData(response.data)
    }
  }

  useEffect(() => {
    renderComponent('home')
    getCounselorData()
  }, [])

  return user ? (
    <>
      <section className="homepage-body">
        <section className="navbar">
          <h1 className="website-title">Behavior Tracker</h1>
          <div className="between-website-title-and-name"></div>
          <h1 className="counselor-name">Welcome Back, {counselorData.name}</h1>
          <div className="between-name-and-logout"></div>
          <button className="log-out-button" onClick={handleLogOut}>
            Log Out
          </button>
        </section>
        <main className="homepage-main">
          <div className="flex-div">
            {componentName === 'home' ? (
              <section className="website-functions">
                <div
                  className="all-students"
                  onClick={() => renderComponent('all-students')}
                >
                  <h3 className="function-title">
                    List of <br /> Students
                  </h3>
                </div>
                <div
                  className="new-student"
                  onClick={() => renderComponent('new-student')}
                >
                  <h3 className="function-title">
                    Add a <br /> Student
                  </h3>
                </div>
                <div
                  className="trends"
                  onClick={() => renderComponent('trends')}
                >
                  <h3 className="function-title">Trends</h3>
                </div>
                <div
                  className="how-to-use"
                  onClick={() => renderComponent('how-to-use')}
                >
                  <h3 className="function-title">How To Use</h3>
                </div>
              </section>
            ) : componentName === 'all-students' ? (
              <AllStudents setComponentName={setComponentName} user={user} />
            ) : componentName === 'new-student' ? (
              <NewStudent setComponentName={setComponentName} user={user} />
            ) : componentName === 'trends' ? (
              <Trends setComponentName={setComponentName} />
            ) : (
              <HowToUse setComponentName={setComponentName} />
            )}
          </div>
        </main>
      </section>
    </>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/')} className="protected-button">
        Sign In
      </button>
    </div>
  )
}

export default Homepage
