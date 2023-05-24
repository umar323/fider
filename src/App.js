import React from 'react'
import { ContextProvider } from './context/context'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import UserDetails from './pages/UserDetails'

function App() {
  return (
    <ContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/users/:login' element={<UserDetails />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer />
      </Router>
    </ContextProvider>
  )
}

export default App
