import '../CSS/NewStudent.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  CreateStudent,
  AssignStudentToCounselor,
  CreateTracker
} from '../services/Queries'

const NewStudent = ({ setComponentName, user }) => {
  const navigate = useNavigate()

  const initialState = {
    firstName: '',
    lastName: '',
    placement: '',
    homeroom: '',

    targetedBehavior: '',
    incentive: '',
    style: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  const changeStateBack = (home) => {
    setComponentName(home)
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    //  Create Student
    let newStudent = await CreateStudent({
      name: `${formValues.firstName} ${formValues.lastName}`,
      placement: formValues.placement,
      homeroom: formValues.homeroom
    })

    //  Associate To Counselor
    await AssignStudentToCounselor(newStudent.data.id, user.id)

    //  Create Behavior Plan
    await CreateTracker({
      studentId: newStudent.data.id,
      targetedBehavior: formValues.targetedBehavior,
      incentive: formValues.incentive,
      style: formValues.style
    })

    //  Reset Form & Navigate
    setFormValues(initialState)
    navigate(`/student/${newStudent.data.id}`)
  }

  return (
    <>
      <section className="new-student-component">
        <div className="flex-row-div">
          <div className="empty-back-button"></div>
          <div className="empty-space-left"></div>
          <div className="component-title">New Student Form</div>
          <div className="empty-space-right"></div>
          <div className="empty-back-button">
            <button
              className="new-student-back-button"
              onClick={() => changeStateBack('home')}
            >
              Back
            </button>
          </div>
        </div>
        <div className="form-body">
          <form onSubmit={handleSubmit}>
            <section className="new-student-form-left">
              <div className="new-student-empty-top"></div>

              <div className="new-student-name">
                <div className="name">
                  <input
                    onChange={handleChange}
                    className="new-first-name"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formValues.firstName}
                    required
                  />
                  <div className="gap"></div>
                  <input
                    onChange={handleChange}
                    className="new-last-name"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formValues.lastName}
                    required
                  />
                </div>
              </div>
              <div className="new-student-empty-mid"></div>
              <div className="new-student-homeroom">
                <input
                  onChange={handleChange}
                  className="homeroom"
                  name="homeroom"
                  type="text"
                  placeholder="Homeroom"
                  value={formValues.homeroom}
                  required
                />
              </div>
              <div className="new-student-empty-bot"></div>
              <div className="new-student-placement">
                <select
                  onChange={handleChange}
                  className="placement"
                  name="placement"
                  value={formValues.placement}
                >
                  <option selected disabled>
                    Special Ed Placement
                  </option>
                  <option value="504">504</option>
                  <option value="IEP">IEP</option>
                  <option value="Gen Ed">Gen Ed</option>
                </select>
              </div>
            </section>
            <div className="middle">
              <div className="middle-left"></div>
              <div className="middle-right"></div>
            </div>
            <section className="new-student-form-right">
              <div className="behavior-container">
                <label>Behavior Being Targeted</label>
                <textarea
                  onChange={handleChange}
                  name="targetedBehavior"
                  type="text"
                  value={formValues.targetedBehavior}
                  required
                ></textarea>
              </div>
              <div className="incentive-container">
                <label>Incentive</label>
                <textarea
                  onChange={handleChange}
                  name="incentive"
                  type="text"
                  value={formValues.incentive}
                  required
                ></textarea>
              </div>
              <select
                onChange={handleChange}
                className="style"
                name="style"
                value={formValues.value}
              >
                <option selected disabled>
                  Style
                </option>
                <option value="Red/Green Moments">Red/Green Moments</option>
                <option value="Happy/Sad Faces">Happy/Sad Faces</option>
                <option value="Thumbs Up/Down">Thumbs Up/Down</option>
              </select>
            </section>
            <div className="button-div">
              <button
                disabled={
                  !formValues.firstName ||
                  !formValues.lastName ||
                  !formValues.placement ||
                  !formValues.homeroom ||
                  !formValues.targetedBehavior ||
                  !formValues.incentive ||
                  !formValues.style
                }
                className="add-student-button"
                type="submit"
              >
                Add Student
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default NewStudent
