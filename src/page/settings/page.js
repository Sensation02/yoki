import React from 'react'
import axios from 'axios'
import { apiURL } from '../../utils/navigation'
import SectionHeading from '../../components/ui/SectionHeading'
import useSettings from '../../utils/useSettings'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom'
import './style.scss'
import useUser from '../../utils/useUser'
import useShowPassword from '../../utils/useShowPassword'

const Settings = () => {
  // підтягуємо нашого користувача щоб потім змінювати його дані
  const user = useUser()
  console.log(user)
  console.log(localStorage.getItem('token'))

  // показуємо пароль
  const { showPassword, handleClickShowPassword, handleMouseDownPassword } =
    useShowPassword()

  // помилка
  const [message, setMessage] = React.useState('')

  // використовуємо кастомний хук для зберігання даних і обробки даних з форми
  const {
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
  } = useSettings()

  // умови в залежності від наявності даних в інпутах
  const condition = {
    Password: password && newPassword,
    Email: email && password,
    FirstName: firstName && password,
    LastName: lastName && password,
  }

  // вихід
  const handleLogout = async (event) => {
    event?.preventDefault()

    try {
      const res = await axios.get(`${apiURL}/logout`)

      if (res.status === 204) {
        localStorage.removeItem('token')
        window.location.href = '/'
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.message)
      }
    }
  }

  // функція для відправки даних на сервер
  const handleSubmit = async (event) => {
    event.preventDefault()

    // відправляємо дані на сервер в залежності від того, які поля заповнені
    if (condition.Password) {
      try {
        const res = await axios.put(
          `${apiURL}/users`,
          {
            id: user.id,
            password,
            newPassword,
          },
          {
            headers: {
              authorization: localStorage.getItem('token'),
              'Content-Type': 'application/json',
            },
          },
        )

        if (res.status === 200) {
          setMessage('Password changed successfully')
        }
      } catch (error) {
        if (error.response) {
          setMessage(error.response.data.message)
        }
      }
    }

    if (condition.Email) {
      try {
        const res = await axios.put(`${apiURL}/users`, {
          id: user.id,
          email,
          password,
        })

        if (res.status === 200) {
          setMessage('Email changed successfully')
        }
      } catch (error) {
        if (error.response) {
          setMessage(error.response.data.message)
        }
      }
    }

    if (condition.FirstName) {
      try {
        const res = await axios.put(`${apiURL}/users`, {
          id: user.id,
          firstName,
          password,
        })

        if (res.status === 200) {
          setMessage('First name changed successfully')
        }
      } catch (error) {
        if (error.response) {
          setMessage(error.response.data.message)
        }
      }
    }

    if (condition.LastName) {
      try {
        const res = await axios.put(`${apiURL}/users`, {
          id: user.id,
          lastName,
          password,
        })

        if (res.status === 200) {
          setMessage('Last name changed successfully')
        }
      } catch (error) {
        if (error.response) {
          setMessage(error.response.data.message)
        }
      }
    }
  }

  return (
    <Container component='section' maxWidth='sm'>
      <SectionHeading title='Settings' subtitle='change your personal info' />
      <form onSubmit={handleSubmit} className='form'>
        <div className='form__group'>
          <TextField
            id='outlined-basic'
            label='First Name'
            variant='standard'
            color='error'
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <TextField
            id='outlined-basic'
            label='Last Name'
            variant='standard'
            color='error'
            value={lastName}
            onChange={handleLastNameChange}
          />
          <TextField
            id='outlined-basic'
            label='Email'
            variant='standard'
            color='error'
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            id='standard-password-input'
            label='New Password'
            variant='standard'
            color='error'
            type={showPassword ? 'text' : 'password'}
            value={newPassword}
            onChange={handleNewPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id='standard-password-input'
            label='Password'
            type={showPassword ? 'text' : 'password'}
            autoComplete='current-password'
            variant='standard'
            color='error'
            value={password}
            onChange={handlePassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className='button__group'>
          <Button variant='outlined' color='error' sx={{ width: '200px' }}>
            <Link
              to='/profile'
              style={{ textDecoration: 'none', color: 'red' }}
            >
              Back to profile
            </Link>
          </Button>
          <Button
            variant='outlined'
            color='error'
            sx={{ width: '200px' }}
            onClick={handleLogout}
          >
            <Link to='/' style={{ textDecoration: 'none', color: 'red' }}>
              logout
            </Link>
          </Button>
          <Button
            type='submit'
            variant='contained'
            color='error'
            sx={{ width: '200px' }}
          >
            Submit
          </Button>
        </div>
      </form>
      {message && (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert variant='outlined' severity='error'>
            {message}
          </Alert>
        </Stack>
      )}
    </Container>
  )
}

export default Settings
