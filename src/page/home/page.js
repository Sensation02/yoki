import React from 'react'
import useScreenWidth from '../../utils/useScreenWidth'
import Slider from '../../components/slider/Slider'
import Meals from '../../components/meals/Meals'

const Home = () => {
  const windowWidth = useScreenWidth()
  return (
    <>
      {windowWidth > 767 && <Slider />}
      <Meals meal='both' />
    </>
  )
}

export default Home
