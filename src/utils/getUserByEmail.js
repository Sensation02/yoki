import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import { apiURL } from './navigation'

const accessToken = localStorage.getItem('token')

const getEmail = ({ accessToken }) => {
  if (!accessToken || accessToken.split('.').length !== 3) {
    console.error('Access token must be a valid JWT')
    return null
  }
  const tokenData = jwtDecode(accessToken)
  const email = tokenData.email

  return email
}

const email = getEmail({ accessToken })

const getUserByEmail = async () => {
  if (!email) {
    console.error('Email must not be null')
    return null
  }

  try {
    const res = await axios.post(
      `${apiURL}/users`,
      { email },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      },
    )
    console.log('profile is loaded')
    return res.data.user
  } catch (error) {
    console.log(error)
  }
}

export default getUserByEmail
