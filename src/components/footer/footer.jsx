import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'

import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiTryhackme} from 'react-icons/si'
import {BsMedium} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>

<div className="footer__socials">
  {/*   <a href='https://facebook.com' target="_blank" rel="noreferrer"><FaFacebookF/></a>
        <a href='https://instagram.com' target="_blank" rel="noreferrer"><FiInstagram/></a>
        <a href='https://twitter.com' target="_blank" rel="noreferrer"><BsTwitter/></a>       */}
        <a href="https://www.linkedin.com/in/allenlopes23" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/allenlopes" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://tryhackme.com/p/allenlopes23" target="_blank" rel="noreferrer"><SiTryhackme/></a>
        <a href="https://allenlopes23.medium.com/" target="_blank" rel="noreferrer"><BsMedium/></a>
      </div>

  {/*    <a href='#' className='footer__logo'>ALLEN</a>   */}

      <strong> <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        {/* <li><a href='#testimonials'>Testimonials</a></li> */}
        <li><a href='#contact'>Contact</a></li>
      </ul> </strong>



      <div className="footer__copyright">
        <small>&copy; WizardCodes. All rights reserved</small>
      </div>
    </footer>
  )
}

export default footer