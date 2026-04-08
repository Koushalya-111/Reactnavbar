import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-gray-100">

        <Navbar />

        <div className="max-w-6xl mx-auto p-6">

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>

        </div>

      </div>

    </BrowserRouter>
  )
}

export default App