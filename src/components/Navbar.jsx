import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='nav-logo'>
        <img src={logo} alt="company logo" />
      </div>
      <nav className='navbar-links'>
        <ul>
          <Link to='/Home' className='navbar-links-links'>
            <li>Home</li>
          </Link>
          <Link to='/Products' className='navbar-links-links'>
            <li>Products</li>
          </Link>
          <Link to='/Service' className='navbar-links-links'>
            <li>Services</li>
          </Link>
           <Link to='/Pick' className='navbar-links-links'>
            <li>Pick Summary</li>
          </Link>
          <Link to='/booking' className='navbar-links-links'>
            <li>Booking</li>
          </Link>
         
        </ul>
      </nav>
    </div>
  )
}

export default Navbar