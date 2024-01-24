import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import { apiURL } from './navigation'

const accessToken = localStorage.getItem('token')

const getEmail = ({ accessToken }) => {
  const tokenData = jwtDecode(accessToken)
  const email = tokenData.email

  return email
}

const email = getEmail({ accessToken })

const getUserByEmail = async () => {
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
