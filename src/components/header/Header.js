import React from 'react'
import HeaderTop from '../../components/headerTop/HeaderTop'
import HeaderBottom from '../../components/headerBottom/HeaderBottom'

const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <HeaderTop />
      <HeaderBottom />
    </header>
  )
}

export default Header
