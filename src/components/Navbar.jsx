import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className='navabar-container'>

        <div className='nav-logo'><img src={logo} alt="company logo" /></div>
        <nav className='navabar-links'>
            <ul>
                <Link to='/#Home' className='navbar-links-links'>
                    <li>Home</li>
                </Link>
                <Link to='/#About' className='navbar-links-links'>
                    <li>About Us</li>
                </Link>
                <Link to='/#Service' className='navbar-links-links'>
                    <li>Services</li>
                </Link>
                <Link to='/#HardwareMenu' className='navbar-links-links'>
                    <li>Hardware Menu</li>
                </Link>
                <Link to='/#Contact' className='navbar-links-links'>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>

    </div>
  )
}

export default Navbar