import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/sandeep.jpg'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Sandeep Mahawar</h1>
            <h5 className='text-light'>Fullstack Developer</h5>
            <CTA/>
            <HeaderSocial/>

            <div className="me">
                <img src={ME} alt="" />
            </div>

            <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>

    </header>
  )
}

export default Header