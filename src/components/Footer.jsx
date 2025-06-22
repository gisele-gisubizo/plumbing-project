import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6"
import '../styles/footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-topLinks'>
        <ul>
          <li>
            <Link to='/' className='footer-links-links'>Home</Link>
          </li>
          <li>
            <Link to='/' className='footer-links-links'>About Us</Link>
          </li>
          <li>
            <Link to='/' className='footer-links-links'>Hardware Menu</Link>
          </li>
          <li>
            <Link to='/' className='footer-links-links'>Services</Link>
          </li>
          <li>
            <Link to='/' className='footer-links-links'>Contact</Link>
          </li>
        </ul>
      </div>

      <div className='footer-p'>
        <h5>Get Monthly Plumbing Updates</h5>
      </div>

      <div className='footer-emailInput'>
        <input type="email" placeholder='Your Email' />
        <div className='footer-emailIcon'><FaArrowRight/></div>
      </div>

      <div className='footer-location'>
        <h3>New York</h3>
        <ul>
          <li>123 Kigali</li>
          <li>Remera, Kg 11</li>
          <li>07986338653</li>
          <li>KigaliPlumbers123@gmail.com</li>
        </ul>
      </div>

      <div className='footer-copyrights'>
        <p>© 2025 Kigali Plumbers</p>
      </div>
    </div>
  )
}

export default Footer