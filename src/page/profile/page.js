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
import getUserByEmail from '../../utils/getUserByEmail'

const Profile = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserByEmail()
      setUser(user)
    }

    fetchUser()
  }, [])

  const handleLogout = async (event) => {
    event?.preventDefault()

    try {
      const res = await axios.get(`${apiURL}/logout`)

      if (res.status === 204) {
        setUser(null)
        window.location.href = '/'
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
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid gray',
          borderRadius: '10px',
          boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
        }}
      >
        <Avatar
          sx={{
            width: 100,
            height: 100,
            backgroundColor: 'red',
            alignSelf: 'center',
            mt: 3,
            mb: 3,
          }}
          alt=''
          src=''
        >
          B
        </Avatar>
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
                    {user && user.firstName}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='h6' component='h6'>
                    Last Name
                  </Typography>
                  <Divider />
                  <Typography variant='body1' component='p'>
                    {user && user.firstName}
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
