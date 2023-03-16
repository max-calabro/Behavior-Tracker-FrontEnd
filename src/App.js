import './CSS/App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { CheckSession } from './services/Auth'

import Landing from './pages/Landing'
import Homepage from './pages/Homepage'
import Register from './components/Register'
import OneStudent from './components/OneStudent'

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  const handleLogOut = () => {
    navigate('/')
    setUser(null)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <Homepage
              user={user}
              setUser={setUser}
              handleLogOut={handleLogOut}
            />
          }
        />
        <Route
          path="/student/:student_id"
          element={<OneStudent handleLogOut={handleLogOut} />}
        />
      </Routes>
    </>
  )
}

export default App
