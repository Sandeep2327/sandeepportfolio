import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>SANDEEP MAHAWAR</a>

<ul className='permalinks'>
  <li><a href="#">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#experience">Experience</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#portfolio">Projects</a></li>
  <li><a href="#testimonial">Testimonials</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

<div className="footer_socials">
  <a href="https://facebook.com" target="_blank"><FaFacebookF/></a>
  <a href="https://instagram.com" target="_blank"><FiInstagram/></a>
  <a href="https://twitter.com" target="_blank"><IoLogoTwitter/></a>
</div>

<div className="footer_copyright">
  <small>&copy2023; Sanadeep Portfolio. All rights reserved.</small>
</div>
    </footer>
  )
}

export default Footer