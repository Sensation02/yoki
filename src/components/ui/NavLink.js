import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ path, index, className, children }) => {
  return (
    <Link key={index} to={path} className={className}>
      {children}
    </Link>
  )
}

export default NavLink
