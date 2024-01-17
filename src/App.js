import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './page/home/page'
import Sets from './page/sets/page'
import Pizza from './page/pizza/page'
import Error from './page/error/page'

function App() {
  return (
    <main className='page'>
      <div className='page__content'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/sets' element={<Sets />} />
            <Route path='/pizza' element={<Pizza />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </main>
  )
}

export default App
