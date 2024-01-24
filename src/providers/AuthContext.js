import { createContext, useContext } from 'react'
import { Navigate } from 'react-router-dom'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const auth = useContext(AuthContext)

  if (!auth) {
    return <Navigate to='/sign-in' />
  }
  if (auth?.isLogged) {
    return <>{children}</>
  } else {
    return <Navigate to='/sign-in' />
  }
}

export default AuthProvider
