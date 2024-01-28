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
import { AuthContext } from '../../providers/AuthContext'

const Settings = () => {
  const auth = React.useContext(AuthContext)

  // підтягуємо нашого користувача щоб потім змінювати його дані
  const user = useUser()

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
    all: password && email && firstName && lastName,
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
              authorization: `Bearer ${localStorage.getItem('token')}`,
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
        const res = await axios.put(
          `${apiURL}/users`,
          {
            id: user.id,
            email,
            password,
          },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json',
            },
          },
        )

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
        const res = await axios.put(
          `${apiURL}/users`,
          {
            id: user.id,
            firstName,
            password,
          },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json',
            },
          },
        )

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
        const res = await axios.put(
          `${apiURL}/users`,
          {
            id: user.id,
            lastName,
            password,
          },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json',
            },
          },
        )

        if (res.status === 200) {
          setMessage('Last name changed successfully')
        }
      } catch (error) {
        if (error.response) {
          setMessage(error.response.data.message)
        }
      }
    }
    if (condition.all) {
      try {
        const res = await axios.put(
          `${apiURL}/users`,
          {
            id: user.id,
            firstName,
            lastName,
            email,
            password,
          },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json',
            },
          },
        )

        if (res.status === 200) {
          setMessage('All data changed successfully')
        }
      } catch (error) {
        if (error.response) {
          setMessage(error.response.data.message)
        }
      }
    }
  }

  const handleDelete = async (event) => {
    event.preventDefault()

    console.log('Trying to delete user with id: ', user.id)

    try {
      console.log('Sending request to server...')
      const res = await axios.delete(`${apiURL}/users/${user.id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      })

      if (res.status === 200) {
        localStorage.removeItem('token')
        setMessage('User deleted successfully')
        setTimeout(() => {
          auth.login(false)
          // navigation('/')
        }, 3000)
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message)
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
            type='text'
            variant='standard'
            color='error'
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <TextField
            id='outlined-basic'
            label='Last Name'
            type='text'
            variant='standard'
            color='error'
            value={lastName}
            onChange={handleLastNameChange}
          />
          <TextField
            id='outlined-basic'
            label='Email'
            type='email'
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
            variant='contained'
            color='error'
            sx={{ width: '200px' }}
            onClick={handleDelete}
          >
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
              Delete account
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
