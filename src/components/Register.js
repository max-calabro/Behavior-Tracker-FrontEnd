import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import '../CSS/Register.css'

const Register = () => {
  const navigate = useNavigate()

  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: `${formValues.firstName} ${formValues.lastName}`,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(initialState)
    navigate('/')
  }

  return (
    <>
      <main className="register-main">
        <section className="register-fields">
          <h1 className="title">Behavior Tracker</h1>
          <h3 className="register-title">Create Your Account</h3>
          <section className="register-form">
            <form className="form-body" onSubmit={handleSubmit}>
              <div className="top-of-register"></div>
              <div className="new-user-name">
                <input
                  onChange={handleChange}
                  className="first-name"
                  name="firstName"
                  type="text"
                  placeholder="First"
                  value={formValues.firstName}
                  required
                />
                <input
                  onChange={handleChange}
                  className="last-name"
                  name="lastName"
                  type="text"
                  placeholder="Last"
                  value={formValues.lastName}
                  required
                />
              </div>
              <input
                onChange={handleChange}
                className="email"
                name="email"
                type="text"
                placeholder="Email"
                value={formValues.email}
              />
              <input
                onChange={handleChange}
                className="password"
                name="password"
                type="password"
                placeholder="Password"
                value={formValues.password}
                required
              />
              <input
                onChange={handleChange}
                className="password"
                name="passwordConfirm"
                type="password"
                placeholder="Confirm Password"
                value={formValues.confirmPassword}
                required
              />
              <button
                disabled={
                  !formValues.email ||
                  (!formValues.password &&
                    formValues.confirmPassword === formValues.password)
                }
                className="register-button"
                type="submit"
              >
                Create Account
              </button>
            </form>
          </section>
        </section>
      </main>
    </>
  )
}

export default Register
