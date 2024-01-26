import { useState, useEffect } from 'react'
import axios from 'axios'
import { apiURL } from './navigation'

const useUser = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = localStorage.getItem('token')
        const res = await axios.get(`${apiURL}/auth/me`, {
          headers: {
            token: token,
          },
        })

        if (res.status === 200) {
          setUser(res.data.user)
        }
      } catch (error) {
        if (error.response) {
          console.log(error.response.message)
        }
      }
    }
    getUser()
  }, [])

  return user
}

export default useUser
