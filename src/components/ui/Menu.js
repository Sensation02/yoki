import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import { routes } from './Routes'

const ITEM_HEIGHT = 48

const LongMenu = ({ className }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        aria-label='more'
        id='long-button'
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MenuIcon
          sx={{
            width: '30px',
            height: '30px',
          }}
          className={className}
        />
      </IconButton>
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {routes.map((route) => (
          <MenuItem
            key={route.name}
            selected={route.name}
            onClick={handleClose}
            style={{ backgroundColor: 'white' }}
          >
            <Link
              to={route.path}
              style={{
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                color: 'black',
              }}
            >
              {route.name}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default LongMenu
