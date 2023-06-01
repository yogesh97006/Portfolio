import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
         <div className='navbarItems '>
            <div className='navbarLeft'>
                <p className='text'>Port<span style={{color:'rgb(105, 191, 244)'}}>folio</span></p>
            </div>
            <div className='navbarRight'>
                <Link className='Links textItem' to="/">Home</Link>
                <Link className='Links textItem' to="/About">About</Link>
                <Link className='Links textItem' to="/Skills">Skills</Link>
                <Link className='Links textItem' to="/Projects">Projects</Link>
                <Link className='Links textItem' to="/Contact">Contact</Link>
            </div>
         </div>
    </div>
  )
}

export default Navbar