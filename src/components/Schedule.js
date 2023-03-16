import '../CSS/OneStudent.css'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  GetStudentById,
  GetScheduleById,
  UpdatePeriod
} from '../services/Queries'

const Schedule = ({ studentInfo, schedule, setSchedule, selectedSchedule }) => {
  const params = useParams()

  const [currentSchedule, setCurrentSchedule] = useState(null)

  const getTheCurrentSchedule = async () => {
    let response = await GetStudentById(params.student_id)
    let newS = await GetScheduleById(response.data.DailySchedules[0].id)
    setCurrentSchedule(newS.data)
  }

  const changeColor = async (ofThis, andThis, color, periodId) => {
    let toBeChanged = document.querySelector(ofThis)
    let alsoChange = document.querySelector(andThis)

    //  color explanation: 1 = positive behavior aka green, red = negative behavior aka red
    if (color === 1) {
      toBeChanged.style.backgroundColor = 'rgb(8, 208, 8)'
      alsoChange.style.backgroundColor = 'rgb(233, 223, 223)'
      //  Axios call to change behavior to positive
    } else {
      toBeChanged.style.backgroundColor = 'red'
      alsoChange.style.backgroundColor = ''
      //  Axios call to change behavior to negative
    }
    let toLog = await UpdatePeriod(periodId, { behavior: color })
  }

  const initializeColor = (behavior, box1, box2) => {
    if (behavior === 1) {
      let green = document.querySelector(box1)
      green.style.backgroundColor = 'rgb(8, 208, 8)'
    } else if (behavior === -1) {
      let red = document.querySelector(box2)
      red.style.backgroundColor = 'red'
    }
  }

  const pause = (behavior, box1, box2) => {
    setTimeout(initializeColor, 500, behavior, box1, box2)
  }

  useEffect(() => {
    getTheCurrentSchedule()
  }, [])

  return currentSchedule ? (
    <>
      <div className="student-schedule-top">
        <div className="schedule-date">{currentSchedule.date}</div>
        <div className="between-date-and-name"></div>
        <div>{currentSchedule.name}</div>
      </div>
      <div className="student-schedule-grid">
        {currentSchedule.periods.map(
          (period, index) => (
            pause(period.behavior, `.box-1-${index}`, `.box-2-${index}`),
            (
              <div className="grid-tile" key={period.id}>
                <div className="period-name">{period.name}</div>
                <div className="between-name-and-style"></div>
                <div className="behavior-plan-style">
                  <div
                    className={'box-1-' + index}
                    onClick={() =>
                      changeColor(
                        `.box-1-${index}`,
                        `.box-2-${index}`,
                        1,
                        period.id
                      )
                    }
                  ></div>
                  <div
                    className={'box-2-' + index}
                    onClick={() =>
                      changeColor(
                        `.box-2-${index}`,
                        `.box-1-${index}`,
                        -1,
                        period.id
                      )
                    }
                  ></div>
                </div>
              </div>
            )
          )
        )}
      </div>
    </>
  ) : (
    <div></div>
  )
}

export default Schedule
