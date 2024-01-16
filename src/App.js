import HeaderTop from './components/headerTop/HeaderTop'
import HeaderBottom from './components/headerBottom/HeaderBottom'
import Slider from './components/slider/Slider'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <main className='page'>
      <div className='page__content'>
        <BrowserRouter>
          <header style={{ position: 'relative' }}>
            <HeaderTop />
            <HeaderBottom />
          </header>
          <Slider />
        </BrowserRouter>
      </div>
    </main>
  )
}

export default App
