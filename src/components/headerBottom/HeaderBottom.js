import React from 'react'
import useScreenWidth from '../../utils/useScreenWidth'
import Cart from '../cartModal/Cart'
import LongMenu from '../ui/Menu'
import Routes from '../ui/Routes'
import { Link } from 'react-router-dom'
import { Search, Heart, UserRound } from 'lucide-react'
// import { useSelector } from 'react-redux'

import './style.scss'

const HeaderBottom = ({ className }) => {
  const windowWidth = useScreenWidth()

  return (
    <div className={`header-bottom ${className}`}>
      <div className='header-bottom__menu'>
        <img
          src='../../../assets/logo_black_resteurant-01.svg'
          alt='yoki_logo'
          className='logo'
        />
        {windowWidth <= 619 && <LongMenu className='icon' />}
      </div>

      {windowWidth > 620 && <Routes />}
      {windowWidth < 1200 && (
        <div className='header-bottom__item'>
          <div className='header__actions'>
            <Link to='/search' className='icon'>
              <Search size={20} />
            </Link>
            <Link to='/favorite' className='icon'>
              <Heart size={20} />
            </Link>
            <Link to='/profile' className='icon'>
              <UserRound size={20} />
            </Link>
          </div>
          <Cart />
        </div>
      )}
      {windowWidth > 1200 && <Cart />}
    </div>
  )
}

export default HeaderBottom
