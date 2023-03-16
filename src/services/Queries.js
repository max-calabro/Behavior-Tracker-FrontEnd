import Client from './api'

export const GetCounselorAndStudents = async (data) => {
  try {
    const response = await Client.get(`/counselor/${data.id}`)
    return response
  } catch (error) {
    throw error
  }
}

export const CreateStudent = async (data) => {
  try {
    const response = await Client.post('/student', data)
    return response
  } catch (error) {
    throw error
  }
}

export const GetStudentById = async (id) => {
  try {
    const response = await Client.get(`/student/${id}`)
    return response
  } catch (error) {
    throw error
  }
}

export const AssignStudentToCounselor = async (data, counselorID) => {
  try {
    const response = await Client.put(
      `/counselor/assignStudentTo/${counselorID}`,
      { studentId: data }
    )
    return response
  } catch (error) {
    throw error
  }
}

export const CreateTracker = async (data) => {
  try {
    const response = await Client.post('/behaviorTracker', data)
    return response
  } catch (error) {
    throw error
  }
}

export const CreateNewSchedule = async (nameAndDate) => {
  try {
    const freshSchedule = await Client.post('/schedule', nameAndDate)
    return freshSchedule
  } catch (error) {
    throw error
  }
}

export const AddPeriodsToSchedule = async (period, id) => {
  try {
    let completedSchedule = await Client.put(
      `/schedule/add-period-to/${id}`,
      period
    )
    return completedSchedule
  } catch (error) {
    throw error
  }
}

export const AssignScheduleToStudent = async (studentId, scheduleId) => {
  try {
    const student = await Client.put(
      `/student/assignScheduleTo/${studentId}`,
      scheduleId
    )
    return student
  } catch (error) {
    throw error
  }
}

export const GetCounselor = async (id) => {
  try {
    const response = await Client.get(`/counselor/${id}`)
    return response
  } catch (error) {
    throw error
  }
}

export const GetAllPeriods = async () => {
  try {
    const response = await Client.get(`/period`)
    return response
  } catch (error) {
    throw error
  }
}

export const UpdatePeriod = async (id, data) => {
  try {
    const response = await Client.put(`/period/${id}`, data)
    return response
  } catch (error) {
    throw error
  }
}

export const GetScheduleById = async (id) => {
  try {
    const response = await Client.get(`/schedule/${id}`)
    return response
  } catch (error) {
    throw error
  }
}
