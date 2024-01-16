import React from 'react'
import { Pizza, Shell, Home } from 'lucide-react'
import NavLink from './NavLink'

export const routes = [
  { name: 'Home', path: '/' },
  { name: 'Sets', path: '/sets' },
  { name: 'Pizza', path: '/pizza' },
]

const Routes = () => {
  return (
    <div className='header-bottom__categories'>
      {routes.map((route, index) => (
        <NavLink
          key={index}
          path={route.path}
          name={route.name}
          index={index}
          className='header-bottom__categories--item'
        >
          {index === 0 && (
            <>
              <Home />
              <span>{route.name}</span>
            </>
          )}
          {index === 1 && (
            <>
              <Shell />
              <span>{route.name}</span>
            </>
          )}
          {index === 2 && (
            <>
              <Pizza />
              <span>{route.name}</span>
            </>
          )}
        </NavLink>
      ))}
    </div>
  )
}

export default Routes
