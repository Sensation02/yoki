import React, { useState, useEffect } from 'react'
import Slider from '../../components/slider/Slider'
import Meals from '../../components/meals/Meals'

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <>
      {windowWidth > 767 && <Slider />}
      <Meals meal='both' />
    </>
  )
}

export default Home
