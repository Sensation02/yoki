import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './page/home/page'
import Sets from './page/sets/page'
import Pizza from './page/pizza/page'
import Error from './page/error/page'
import SignIn from './page/sign-in/page'
import SignUp from './page/sign-up/page'
import Profile from './page/profile/page'
import Settings from './page/settings/page'

import PrivateRoute, { AuthContext } from './providers/AuthContext'

function App() {
  const [isLogged, login] = useState(false)
  return (
    <main className='page'>
      <div className='page__content'>
        <AuthContext.Provider value={{ isLogged, login }}>
          <BrowserRouter>
            <Header />

            <Routes>
              <Route index element={<Home />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/sets' element={<Sets />} />
              <Route path='/pizza' element={<Pizza />} />

              <Route
                path='/profile'
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route
                path='/settings'
                element={
                  <PrivateRoute>
                    <Settings />
                  </PrivateRoute>
                }
              />

              <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </AuthContext.Provider>
      </div>
    </main>
  )
}

export default App
