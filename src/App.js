import { useState, useEffect } from 'react'

import HeaderTop from './components/headerTop/HeaderTop'
import HeaderBottom from './components/headerBottom/HeaderBottom'
import Slider from './components/slider/Slider'
import Meals from './components/meals/Meals'
import Footer from './components/footer/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {
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
    <main className='page'>
      <div className='page__content'>
        <BrowserRouter>
          <header style={{ position: 'relative' }}>
            <HeaderTop />
            <HeaderBottom />
          </header>
          {windowWidth > 767 && <Slider />}
          <Meals />
          <Footer />
        </BrowserRouter>
      </div>
    </main>
  )
}

export default App
