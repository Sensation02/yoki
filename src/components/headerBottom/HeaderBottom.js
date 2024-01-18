import React from 'react'
import useScreenWidth from '../../utils/useScreenWidth'
import LongMenu from '../ui/Menu'
// import logo from '../../assets/logo_black_resteurant-01.svg'
import { ShoppingBag, Search, Heart, UserRound } from 'lucide-react'
import Routes from '../ui/Routes'
import { Link } from 'react-router-dom'
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
          <button className='header-bottom__cart' type='button'>
            <ShoppingBag className='icon' />
            <span>0 $</span>
          </button>
        </div>
      )}
      {windowWidth > 1200 && (
        <Link
          to='/cart'
          className='header-bottom__cart'
          style={{ textDecoration: 'none' }}
        >
          <ShoppingBag className='icon' />
          <span>100000 $</span>
        </Link>
      )}
    </div>
  )
}

export default HeaderBottom
