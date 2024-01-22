import React from 'react'
// #region imports
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import { Link, useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../../utils/validate'
import axios from 'axios'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'
// #endregion

export default function SignUp() {
  // react hook form
  const {
    register,
    formState: { errors },
    // eslint-disable-next-line
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  })

  // показуємо пароль
  const [showPassword, setShowPassword] = React.useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = (event) => event.preventDefault()

  // помилка
  const [error, setError] = React.useState('')

  // навігація
  // eslint-disable-next-line
  const navigation = useNavigate()

  // submit
  const onSubmit = async (data, event) => {
    event.preventDefault()
    const { firstName, lastName, email, password } = data

    console.log({ firstName, lastName, email, password })

    try {
      const response = await axios.post(
        'http://localhost:4000/register',
        {
          firstName,
          lastName,
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        },
      )

      // console.log for debug
      console.log(response.data)

      // if response status is 200
      if (response?.status === 200) {
        navigation('/sign-in')
      }

      if (!response) {
        setError('No server response')
      } else if (response?.status === 400) {
        setError('Wrong email or password')
      } else if (response?.status === 401) {
        setError('Unauthorized')
      } else {
        setError('Login Failed')
      }
    } catch (error) {
      if (!error?.response) {
        setError('Something went wrong on server side')
      } else if (error.response?.status === 409) {
        setError('User is already exist')
      } else {
        setError('Registration Failed')
      }
    }
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, backgroundColor: 'black' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Box
          action='POST'
          component='form'
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register('firstName')}
                fullWidth
                label='First Name'
                name='firstName'
                helperText={errors.firstName?.message}
                color='error'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register('lastName')}
                fullWidth
                label='Last Name'
                name='lastName'
                helperText={errors.lastName?.message}
                color='error'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register('email')}
                fullWidth
                label='Email Address'
                name='email'
                helperText={errors.email?.message}
                color='error'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register('password')}
                fullWidth
                name='password'
                label='Password'
                type={showPassword ? 'text' : 'password'}
                helperText={errors.password?.message}
                color='error'
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
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            color='error'
          >
            Sign Up
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item xs>
              <Link to='/forgot' className='link'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item xs>
              <Link to='/sign-in' className='link'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          <Grid container sx={{ marginTop: '1rem' }}>
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
