import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiTryhackme} from 'react-icons/si'
import {BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/allenlopes23" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/allenlopes" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://tryhackme.com/p/allenlopes23" target="_blank" rel="noreferrer"><SiTryhackme/></a>
        <a href="https://allenlopes23.medium.com/" target="_blank" rel="noreferrer"><BsMedium/></a>
    </div>
  )
}

export default HeaderSocials