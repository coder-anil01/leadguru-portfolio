import React from 'react'
import "../style/Navbar.css"
import Navlogo from '../image/coder-anil-nav.png'

const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
        <div>
            <img className='nav-logo' src={Navlogo} alt="nav-logo" />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
