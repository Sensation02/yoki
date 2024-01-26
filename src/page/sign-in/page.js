import React from 'react'
// #region imports
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Link, useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { AuthContext } from '../../providers/AuthContext'
import { useForm } from 'react-hook-form'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import { Controller, useFormState } from 'react-hook-form'
import axios from 'axios'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'
import useShowPassword from '../../utils/useShowPassword'
// #endregion
import './style.scss'

function remember() {
  const rememberMe = document.getElementById('rememberMe')
  const email = document.getElementById('email')
  if (rememberMe.checked) {
    localStorage.setItem('rememberMe', rememberMe.checked)
    localStorage.setItem('email', email.value)
  } else {
    localStorage.removeItem('rememberMe')
    localStorage.removeItem('email')
  }
}

export default function SignIn() {
  // показуємо пароль
  const { showPassword, handleClickShowPassword, handleMouseDownPassword } =
    useShowPassword()

  // навігація
  const navigation = useNavigate()

  // помилка
  const [error, setError] = React.useState('')
  console.log(error)

  // auth context
  const auth = React.useContext(AuthContext)

  // стейт для помилки
  const { handleSubmit, control } = useForm()
  const { errors } = useFormState({ control })

  const onSubmit = async (data, event) => {
    event.preventDefault()
    const { email, password } = data
    // console.log({ email, password })
    try {
      const response = await axios.post(
        'http://localhost:4000/auth',
        { email, password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      )

      console.log(response)

      // checking response and set error if it is
      if (!!response) {
        setError('No server response')
      } else if (response?.status === 400) {
        setError(response.data.message)
      } else if (response?.status === 401) {
        setError(response.data.message)
      } else if (response?.status === 403) {
        setError(response.data.message)
      } else if (response?.status === 404) {
        setError(response.data.message)
      } else if (!response?.data?.accessToken) {
        setError('Login Failed')
      }

      // set auth data to context
      if (!!response?.data?.accessToken) {
        auth?.login(true)
        localStorage.setItem('token', response.data.accessToken)
        navigation('/profile')
      }
    } catch (error) {
      console.log(error)
      if (!error?.response) {
        setError('Something went wrong on server side')
      } else if (error.response?.status === 409) {
        setError('User is already exist')
      }
    }
  }

  // remember me
  React.useEffect(() => {
    remember()
  }, [])

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: '1rem',
          marginBottom: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, backgroundColor: 'black' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box
          component='form'
          action='POST'
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            mt: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '290px',
            maxWidth: 'fit-content',
          }}
        >
          <Grid item xs={12}>
            <Controller
              control={control}
              name='email'
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              }}
              render={({ field }) => {
                return (
                  <TextField
                    id='outlined-helperText'
                    label='Email'
                    size='medium'
                    type='email'
                    fullWidth
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    error={!!errors.email?.message}
                    helperText={errors.email?.message}
                    placeholder='Enter your email'
                    autoFocus
                    color='error'
                  />
                )
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              name='password'
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
                maxLength: {
                  value: 20,
                  message: 'Password must be no more than 20 characters',
                },
                latin: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Password must contain only latin letters',
                },
                upperCase: {
                  value: /^(?=.*[A-Z])/,
                  message:
                    'Password must contain at least one uppercase letter',
                },
                specialCharacter: {
                  value: /^(?=.*[!@#$%^&*])/,
                  message:
                    'Password must contain at least one special character',
                },
                number: {
                  value: /^(?=.*[0-9])/,
                  message: 'Password must contain at least one number',
                },
              }}
              render={({ field }) => {
                return (
                  <TextField
                    id='outlined-helperText'
                    label='Password'
                    size='medium'
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    error={!!errors.password?.message}
                    helperText={errors.password?.message}
                    placeholder='Enter your password'
                    color='error'
                    autoComplete='on'
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge='end'
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )
              }}
            />
          </Grid>
          <FormControlLabel
            control={<Checkbox value='remember' color='error' />}
            label='Remember me'
            id='rememberMe'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='error'
            sx={{ mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container sx={{ display: 'flex', gap: '1rem' }}>
            <Grid item xs>
              <Link to='/recover' className='link'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to='/sign-up' className='link'>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              {error && (
                <Stack sx={{ width: '100%' }} spacing={2}>
                  <Alert variant='outlined' severity='error'>
                    {error}
                  </Alert>
                </Stack>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
