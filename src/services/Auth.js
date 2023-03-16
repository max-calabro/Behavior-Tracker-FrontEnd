import Client from './api'

export const SignInUser = async (data) => {
  try {
    const response = await Client.post('/auth/counselor/login', data)
    localStorage.setItem('token', response.data.token)
    return response.data.counselor
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/auth/counselor/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('/auth/counselor/session')
    return res.data
  } catch (error) {
    throw error
  }
}
