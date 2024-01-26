import React from 'react'
import axios from 'axios'
import { apiURL } from '../../utils/navigation'
import SectionHeading from '../../components/ui/SectionHeading'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import TextField from '@mui/material/TextField'
import useUser from '../../utils/useUser'
import useShowPassword from '../../utils/useShowPassword'
import Container from '@mui/material/Container'
import useSettings from '../../utils/useSettings'
import { Link } from 'react-router-dom'

const Forgot = () => {
  // const user = useUser()
  const [message, setMessage] = React.useState('')
  const { showPassword, handleClickShowPassword, handleMouseDownPassword } =
    useShowPassword()
  const {
    email,
    password,
    newPassword,
    handleEmailChange,
    handlePassword,
    handleNewPassword,
  } = useSettings()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.put(
        `${apiURL}/users`,
        {
          email,
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

  return (
    <Container component='section' maxWidth='sm'>
      <SectionHeading title='Forgot password' />
      <form className='form' onSubmit={handleSubmit}>
        <div className='form__group'>
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
          <div className='button__group'>
            <Button
              variant='contained'
              type='button'
              color='error'
              fullWidth
              href='/sign-in'
            >
              <Link
                to='/sign-in'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Sign In
              </Link>
            </Button>
            <Button variant='contained' type='submit' color='error' fullWidth>
              Send
            </Button>
          </div>
        </div>
        {message && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant='outlined' severity='error'>
              {message}
            </Alert>
          </Stack>
        )}
      </form>
    </Container>
  )
}

export default Forgot
