import React from 'react'
import Home from './pages/Home'
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
const App = () => {
  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App