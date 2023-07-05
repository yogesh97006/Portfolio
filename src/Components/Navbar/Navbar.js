import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

  const [Menu,setMenu]=useState(false)

  const handleMenu=()=>{
    setMenu(!Menu)
  }

  return (
    <div className='navbar'>
         <div className='navbarItems '>
            <div className='navbarLeft'>
                <p className='text'>Port<span style={{color:'rgb(105, 191, 244)'}}>folio</span></p>
            </div>
            <div>
            <div className='navbarRight'>
                <Link className='Links textItem' to="/">Home</Link>
                <Link className='Links textItem' to="/About">About</Link>
                <Link className='Links textItem' to="/Skills">Skills</Link>
                <Link className='Links textItem' to="/Projects">Projects</Link>
                <Link className='Links textItem' to="/Contact">Contact</Link>
            </div>
               <i className='bi bi-list icon' onClick={handleMenu}></i>{
               Menu?
               <ul className='Mobile_Menu'>
                <li ><Link className='Links' to="/">Home</Link></li>
                <li ><Link className='Links' to="/About">About</Link></li>
                <li ><Link className='Links'  to="/Skills">Skills</Link></li>
                <li ><Link className='Links' to="/Projects">Projects</Link></li>
                <li ><Link className='Links' to="/Contact">Contact</Link></li>
              </ul>:handleMenu}
            </div>
         </div>
    </div>
  )
}

export default Navbar