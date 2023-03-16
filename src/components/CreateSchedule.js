import { useState, useEffect } from 'react'

const CreateSchedule = ({
  studentInfo,
  schedule,
  setSchedule,
  periodList,
  setSelectedSchedule,
  setTrigger,
  scheduleCreation,
  addInPeriods,
  assignNewScheduleToStudent
}) => {
  const initialState = {
    name: '',
    date: '',
    period_1: '',
    period_2: '',
    period_3: '',
    period_4: '',
    period_5: '',
    period_6: '',
    period_7: '',
    period_8: '',
    period_9: '',
    period_10: '',
    period_11: '',
    period_12: '',
    period_13: '',
    period_14: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    //  Create Schedule
    let newSchedule = await scheduleCreation(formValues.name, formValues.date)

    //  Add Periods To Schedule
    await addInPeriods(formValues, newSchedule)

    //  Assign Schedule To Student
    await assignNewScheduleToStudent(newSchedule)

    setSchedule('selected')
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex-form">
        <div className="student-schedule-top">
          <input
            onChange={handleChange}
            className="date"
            name="date"
            type="text"
            placeholder="Date ex. December 13, 2022"
            value={formValues.date}
            required
          />
          <input
            onChange={handleChange}
            className="new-name"
            name="name"
            type="text"
            placeholder="Day of the Week"
            value={formValues.name}
            required
          />
        </div>
        <div className="student-schedule-grid">
          <div className="grid-tile">
            <select
              className="period-selection"
              onChange={handleChange}
              name="period_1"
              value={formValues.period_1}
            >
              <option selected disabled>
                Select A Period
              </option>
              {periodList.map((period) => (
                <option key={period.id} value={period.id}>
                  {period.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid-tile">
            <select
              className="period-selection"
              onChange={handleChange}
              name="period_2"
              value={formValues.period_2}
            >
              <option selected disabled>
                Select A Period
              </option>
              {periodList.map((period) => (
                <option key={period.id} value={period.id}>
                  {period.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid-tile">
            <select
              className="period-selection"
              onChange={handleChange}
              name="period_3"
              value={formValues.period_3}
            >
              <option selected disabled>
                Select A Period
              </option>
              {periodList.map((period) => (
                <option key={period.id} value={period.id}>
                  {period.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid-tile">
            <select
              className="period-selection"
              onChange={handleChange}
              name="period_4"
              value={formValues.period_4}
            >
              <option selected disabled>
                Select A Period
              </option>
              {periodList.map((period) => (
                <option key={period.id} value={period.id}>
                  {period.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid-tile">
            <select
              className="period-selection"
              onChange={handleChange}
              name="period_5"
              value={formValues.period_5}
            >
              <option selected disabled>
                Select A Period
              </option>
              {periodList.map((period) => (
                <option key={period.id} value={period.id}>
                  {period.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid-tile">
            <select
              className="period-selection"
              onChange={handleChange}
              name="period_6"
              value={formValues.period_6}
            >
              <option selected disabled>
                Select A Period
              </option>
              {periodList.map((period) => (
                <option key={period.id} value={period.id}>
                  {period.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid-tile">
            <select
              className="period-selection"
              onChange={handleChange}
              name="period_7"
              value={formValues.period_7}
            >
              <option selected disabled>
                Select A Period
              </option>
              {periodList.map((period) => (
                <option key={period.id} value={period.id}>
                  {period.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid-tile">
            <select
              className="period-selection"
              onChange={handleChange}
              name="period_8"
              value={formValues.period_8}
            >
              <option selected disabled>
                Select A Period
              </option>
              {periodList.map((period) => (
                <option key={period.id} value={period.id}>
                  {period.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid-tile">
            <select
              className="period-selection"
              onChange={handleChange}
              name="period_9"
              value={formValues.period_9}
            >
              <option selected disabled>
                Select A Period
              </option>
              {periodList.map((period) => (
                <option key={period.id} value={period.id}>
                  {period.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid-tile">
            <select
              className="period-selection"
              onChange={handleChange}
              name="period_10"
              value={formValues.period_10}
            >
              <option selected disabled>
                Select A Period
              </option>
              {periodList.map((period) => (
                <option key={period.id} value={period.id}>
                  {period.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid-tile">
            <select
              className="period-selection"
              onChange={handleChange}
              name="period_11"
              value={formValues.period_11}
            >
              <option selected disabled>
                Select A Period
              </option>
              {periodList.map((period) => (
                <option key={period.id} value={period.id}>
                  {period.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid-tile">
            <select
              className="period-selection"
              onChange={handleChange}
              name="period_12"
              value={formValues.period_12}
            >
              <option selected disabled>
                Select A Period
              </option>
              {periodList.map((period) => (
                <option key={period.id} value={period.id}>
                  {period.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid-tile">
            <select
              className="period-selection"
              onChange={handleChange}
              name="period_13"
              value={formValues.period_13}
            >
              <option selected disabled>
                Select A Period
              </option>
              {periodList.map((period) => (
                <option key={period.id} value={period.id}>
                  {period.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid-tile">
            <select
              className="period-selection"
              onChange={handleChange}
              name="period_14"
              value={formValues.period_14}
            >
              <option selected disabled>
                Select A Period
              </option>
              {periodList.map((period) => (
                <option key={period.id} value={period.id}>
                  {period.name}
                </option>
              ))}
            </select>
          </div>
          <div className="sumbit-form-button">
            <button
              disabled={
                !formValues.name ||
                !formValues.date ||
                !formValues.period_1 ||
                !formValues.period_2 ||
                !formValues.period_3 ||
                !formValues.period_4 ||
                !formValues.period_5 ||
                !formValues.period_6 ||
                !formValues.period_7 ||
                !formValues.period_8 ||
                !formValues.period_9 ||
                !formValues.period_10 ||
                !formValues.period_11 ||
                !formValues.period_12 ||
                !formValues.period_13 ||
                !formValues.period_14
              }
              className="create-schedule-button"
              type="submit"
            >
              Create Schedule
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default CreateSchedule
