import '../CSS/AllStudents.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetCounselorAndStudents } from '../services/Queries'

const AllStudents = ({ setComponentName, user }) => {
  const navigate = useNavigate()

  const [studentList, setStudentList] = useState(null)

  const changeStateBack = (home) => {
    setComponentName(home)
  }

  const getStudentList = async () => {
    const response = await GetCounselorAndStudents(user)
    setStudentList(response.data.students)
  }

  const navigateToStudentPage = async (student_id) => {
    navigate(`/student/${student_id}`)
  }

  useEffect(() => {
    getStudentList()
  }, [])

  return (
    <>
      <section className="all-students-component">
        <div className="flex-row-div">
          <div className="empty-back-button"></div>
          <div className="empty-space-left"></div>
          <div className="component-title">All Students</div>
          <div className="empty-space-right"></div>
          <div className="empty-back-button">
            <button
              className="back-button"
              onClick={() => changeStateBack('home')}
            >
              Back
            </button>
          </div>
        </div>
        <div className="all-student-container">
          <div className="student-table-legend">
            <h3 className="legend-name">Name</h3>
            <div className="dashed-line"></div>
            <h3 className="legend-homeroom">Homeroom</h3>
            <div className="dashed-line"></div>
            <h3 className="legend-schedule">Behavior Plan</h3>
          </div>
          {studentList
            ? studentList.map((student) =>
                student.id % 2 === 0 ? (
                  <div className="student-container-dark" key={student.id}>
                    <h3 className="student-name">{student.name}</h3>
                    <div className="dashed-line"></div>
                    <h3 className="student-homeroom">{student.homeroom}</h3>
                    <div className="dashed-line"></div>
                    <h3
                      className="student-schedule"
                      onClick={() => navigateToStudentPage(student.id)}
                    >
                      view
                    </h3>
                  </div>
                ) : (
                  <div className="student-container-light" key={student.id}>
                    <h3 className="student-name">{student.name}</h3>
                    <div className="dashed-line"></div>
                    <h3 className="student-homeroom">{student.homeroom}</h3>
                    <div className="dashed-line"></div>
                    <h3
                      className="student-schedule"
                      onClick={() => navigateToStudentPage(student.id)}
                    >
                      view
                    </h3>
                  </div>
                )
              )
            : null}
        </div>
      </section>
    </>
  )
}

export default AllStudents
