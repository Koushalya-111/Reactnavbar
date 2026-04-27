import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Gallery from './Pages/Gallery'

const App = () => {
  return (
    <BrowserRouter>

      <div>

        <Navbar />

        <div>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Gallery' element={<Gallery />} />
          </Routes>

        </div>

      </div>

    </BrowserRouter>
  )
}

export default App