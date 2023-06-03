import React from 'react'
import {Routes,Route } from 'react-router-dom'
// import Navbar from '../src/Folders/Navbar/Navbar';
import Home from '../Components/Home/Home'
import Info from '../Components/Information/Info';
import Skills from '../Components/Skills/Skills';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';


function Routers() {
  return (
    <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/About' element={<Info/>} />
                <Route path='/Skills' element={<Skills />}/>
                <Route path='/Projects' element={<Projects />} />
                <Route path='/Contact' element={<Contact />} />
            </Routes>
    </div>
  )
}

export default Routers