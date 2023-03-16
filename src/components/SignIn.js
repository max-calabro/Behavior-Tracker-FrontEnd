import '../CSS/SignIn.css'
import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate, Link } from 'react-router-dom'

const SignIn = ({ setUser }) => {
  const navigate = useNavigate()

  const initialState = { email: '', password: '' }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setUser(payload)
    setFormValues(initialState)
    navigate('/home')
  }

  return (
    <>
      <section className="title-card">
        <h1 className="website-title">Behavior Tracker</h1>
      </section>
      <section className="login-form">
        <h3 className="login-header">Sign In</h3>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className="sign-in-email"
            name="email"
            type="email"
            placeholder="Email"
            value={formValues.email}
            required
          />
          <input
            onChange={handleChange}
            className="sign-in-password"
            name="password"
            type="password"
            value={formValues.password}
            placeholder="Password"
            required
          />
          <div className="signin-or-register">
            <div className="between-top-and-sign-in"></div>
            <button
              className="sign-in-submit"
              type="submit"
              disabled={!formValues.email || !formValues.password}
            >
              Sign In
            </button>
            <div className="between-sign-in-and-register"></div>
            <button className="sign-in-register">
              <Link to="/register">Register</Link>
            </button>
            <div className="between-register-and-bottom"></div>
          </div>
        </form>
      </section>
    </>
  )
}

export default SignIn
