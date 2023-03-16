import '../CSS/OneStudent.css'

import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import {
  GetStudentById,
  GetAllPeriods,
  CreateNewSchedule,
  AddPeriodsToSchedule,
  AssignScheduleToStudent
} from '../services/Queries'

import Schedule from './Schedule'
import EditSchedule from './EditSchedule'
import CreateSchedule from './CreateSchedule'

const OneStudent = ({ handleLogOut }) => {
  const navigate = useNavigate()
  const params = useParams()

  const [periodList, setPeriodList] = useState(null)

  const [studentInfo, setStundetInfo] = useState('')
  const [schedule, setSchedule] = useState('')

  const [selectedSchedule, setSelectedSchedule] = useState(null)
  const [selectedScheduleId, setSelectedScheduleId] = useState(null)
  const [number14, setNumber14] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
  ])
  const navigateBack = () => {
    navigate(-1)
  }

  const getStudentInfo = async () => {
    let response = await GetStudentById(params.student_id)
    setStundetInfo(response.data)
  }

  const changeSchedule = (toThis) => {
    setSchedule(toThis)
  }

  const getPeriods = async () => {
    let response = await GetAllPeriods()
    setPeriodList(response.data)
  }

  const scheduleCreation = async (name, date) => {
    let newSchedule = await CreateNewSchedule({
      name: name,
      date: date
    })
    return newSchedule
  }

  const addInPeriods = async (formValues, newSchedule) => {
    let newArr = Object.values(formValues)
    let completedSchedule = null
    for (let i = 14; i > 0; i--) {
      let looping = await AddPeriodsToSchedule(
        { periodId: parseInt(newArr[i + 1]) },
        newSchedule.data.id
      )
      completedSchedule = looping
    }
    setSelectedSchedule(completedSchedule)
    return completedSchedule
  }

  const assignNewScheduleToStudent = async (newSchedule) => {
    let studentWithSchedule = await AssignScheduleToStudent(studentInfo.id, {
      scheduleId: newSchedule.data.id
    })
  }

  useEffect(() => {
    getStudentInfo()
    getPeriods()
  }, [])

  return (
    <>
      <section className="one-student-body">
        <section className="navbar">
          <h1 className="website-title">Behavior Tracker</h1>
          <button className="log-out-button" onClick={handleLogOut}>
            Log Out
          </button>
        </section>
        <main className="one-student-main">
          <div className="student-general-info">
            <div className="between-top-and-name"></div>
            <div className="general-info-student-name">{studentInfo.name}</div>
            <div className="general-info-student-homeroom">
              Homeroom, {studentInfo.homeroom}
            </div>
            <div className="general-info-student-grade"></div>
            {/* <div>Targeted Behavior: {studentInfo.homeroom}</div>
            <div>Incentive</div> */}
            <div className="button-grouping">
              <div className="between-top-and-create"></div>
              <button
                className="recent-schedule-button"
                onClick={() => changeSchedule('selected')}
              >
                Most Recent Schedule
              </button>
              <div className="between-create-and-edit"></div>
              <button
                className="make-schedule-button"
                onClick={() => changeSchedule('create')}
              >
                Make A New Schedule
              </button>
              <div className="between-create-and-edit"></div>
              <button
                className="edit-schedule-button"
                onClick={() => changeSchedule('edit')}
              >
                Edit Current Schedule
              </button>
              <div className="between-edit-and-list"></div>
              <button
                className="list-schedule-button"
                // onClick={() => changeSchedule('edit')}
              >
                List of Schedules
              </button>
            </div>
          </div>
          <div className="empty-div-left"></div>
          <div className="student-daily-schedule">
            {schedule === 'selected' ? (
              <Schedule
                studentInfo={studentInfo}
                schedule={schedule}
                setSchedule={setSchedule}
                selectedSchedule={selectedSchedule}
              />
            ) : schedule === 'create' ? (
              <CreateSchedule
                studentInfo={studentInfo}
                schedule={schedule}
                setSchedule={setSchedule}
                periodList={periodList}
                setSelectedSchedule={setSelectedSchedule}
                scheduleCreation={scheduleCreation}
                addInPeriods={addInPeriods}
                assignNewScheduleToStudent={assignNewScheduleToStudent}
              />
            ) : schedule === 'edit' ? (
              <EditSchedule
                studentInfo={studentInfo}
                schedule={schedule}
                setSchedule={setSchedule}
              />
            ) : (
              <>
                <div className="student-schedule-top">
                  <div className="schedule-date">Date:</div>
                  <div className="between-date-and-name"></div>
                  <div></div>
                </div>
                <div className="student-schedule-grid">
                  {number14.map((num, index) => (
                    <div className="grid-tile" key={index}>
                      <div className="period-name">Period {index + 1}</div>
                      <div className="between-name-and-style"></div>
                      <div className="behavior-plan-style"></div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="empty-div-right">
            <button className="home-button" onClick={() => navigateBack()}>
              Home
            </button>
          </div>
        </main>
      </section>
    </>
  )
}

export default OneStudent
