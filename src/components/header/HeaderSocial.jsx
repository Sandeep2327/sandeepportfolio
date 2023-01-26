import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocial = () => {
  return (
    <div className='header_social'>
    <a href="https://www.linkedin.com/" target="_blank"><BsLinkedin/></a>
    <a href="https://www.github.com/" target="_blank"><FaGithub/></a>
    <a href="https://www.instagram.com/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial