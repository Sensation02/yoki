import React from 'react'

const useShowPassword = () => {
  const [showPassword, setShowPassword] = React.useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = (event) => event.preventDefault()

  return {
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
  }
}

export default useShowPassword
