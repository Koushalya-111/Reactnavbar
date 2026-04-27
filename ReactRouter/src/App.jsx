import React from 'react'
import { Link, BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Career from './Pages/Career'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <>
      <h1>React Nav bar</h1>
    
      <BrowserRouter>
         <Navbar/>
        <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/about' element={<About/>}></Route>
           <Route path='/career' element={<Career/>}></Route>
        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App