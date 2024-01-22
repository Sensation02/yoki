import { createContext, useContext } from 'react'
import { Navigate } from 'react-router-dom'

export const AuthContext = createContext(null)

const PrivateRoute = ({ children }) => {
  const auth = useContext(AuthContext)

  if (!auth?.isLogged) {
    return <Navigate to='/profile' />
  } else {
    return <>{children}</>
  }
}

export default PrivateRoute
