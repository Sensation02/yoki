import { useState } from 'react'

const useSettings = () => {
  // стейти для зберігання даних з форми
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [email, setEmail] = useState('')

  // функції для зміни стейтів
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }
  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  const handleNewPassword = (event) => {
    setNewPassword(event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  return {
    firstName,
    lastName,
    email,
    password,
    newPassword,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handlePassword,
    handleNewPassword,
  }
}

export default useSettings
