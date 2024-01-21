import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { AuthContext } from '../../providers/AuthContext'
import { useForm, useFormState, Controller } from 'react-hook-form'
import { validateEmail, validatePassword } from '../../utils/validate'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import './style.scss'

export default function SignIn() {
  // показуємо пароль
  const [showPassword, setShowPassword] = React.useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)

  // auth context
  const auth = React.useContext(AuthContext)

  // стейт для помилки
  const [error, setError] = React.useState(false)

  // обробник події submit
  const { handleSubmit, control } = useForm()
  const { errors } = useFormState({ control })
  const onSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email')
    const password = data.get('password')
    console.log({ email, password })
    // TODO: зробити запит на сервер
  }

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
          onSubmit={onSubmit}
          sx={{
            mt: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '290px',
            maxWidth: 'fit-content',
          }}
        >
          <Controller
            control={control}
            name='email'
            rules={validateEmail}
            render={({ field }) => {
              return (
                <TextField
                  id='outlined-helperText'
                  label='Email'
                  size='medium'
                  type='email'
                  name='email'
                  fullWidth
                  onChange={(e) => field.onChange(e)}
                  value={field.value}
                  error={!!errors.email?.message}
                  helperText={errors.email?.message}
                  placeholder='Enter your email'
                  color='error'
                />
              )
            }}
          />
          <Controller
            control={control}
            name='password'
            rules={validatePassword}
            render={({ field }) => {
              return (
                <TextField
                  id='outlined-helperText'
                  label='Password'
                  size='medium'
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  fullWidth
                  onChange={(e) => field.onChange(e)}
                  value={field.value}
                  autoComplete='off'
                  error={!!errors.password?.message}
                  helperText={errors.password?.message}
                  placeholder='Enter your password'
                  color='error'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          // onMouseDown={handleMouseDownPassword}
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
          <FormControlLabel
            control={<Checkbox value='remember' color='error' />}
            label='Remember me'
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
        </Box>
      </Box>
    </Container>
  )
}
