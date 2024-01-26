/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { apiURL } from '../../utils/navigation'
import SectionHeading from '../../components/ui/SectionHeading'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CssBaseLine from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import { Link } from 'react-router-dom'
import capitalize from '../../utils/capitalize'
import './style.scss'

const Profile = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = localStorage.getItem('token')
        const res = await axios.get(`${apiURL}/auth/me`, {
          headers: {
            token: token,
          },
        })

        if (res.status === 200) {
          setUser(res.data.user)
        }
      } catch (error) {
        if (error.response) {
          console.log(error.response.message)
        }
      }
    }
    getUser()
  }, [])

  const handleLogout = async (event) => {
    event?.preventDefault()

    try {
      const res = await axios.get(`${apiURL}/logout`)

      if (res.status === 204) {
        localStorage.removeItem('token')
        window.location.href = '/'
        setUser(null)
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.message)
      }
    }
  }

  return (
    <Container component='section' maxWidth='md'>
      <CssBaseLine />
      <SectionHeading title='Profile' />

      <Box className='profile'>
        <div className='profile__heading'>
          <img className='profile__background-image' />
          <Avatar alt='' src='' className='profile__avatar'>
            {user && capitalize(user.firstName)}
          </Avatar>
        </div>
        <Divider />
        <Box sx={{ m: 3 }}>
          <Grid container spacing={2}>
            <Box sx={{ padding: 0, paddingRight: 4 }}>
              <MenuList>
                <MenuItem>
                  <Link to='/settings' className='link'>
                    Settings
                  </Link>
                </MenuItem>
                <MenuItem className='link' onClick={handleLogout}>
                  Logout
                </MenuItem>
              </MenuList>
            </Box>
            <Grid item xs={12} sm={12} md={10} lg={10} sx={{ p: 2 }}>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <Box>
                  <Typography variant='h6' component='h6'>
                    First Name
                  </Typography>
                  <Divider />
                  <Typography variant='body1' component='p'>
                    {user && capitalize(user.firstName)}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='h6' component='h6'>
                    Last Name
                  </Typography>
                  <Divider />
                  <Typography variant='body1' component='p'>
                    {user && capitalize(user.lastName)}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='h6' component='h6'>
                    Email
                  </Typography>
                  <Divider />
                  <Typography variant='body1' component='p'>
                    {user && user.email}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default Profile
