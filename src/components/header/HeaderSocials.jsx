import React from 'react'
import {BsLinkedin, BsTwitter} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/saraí-garcía-72149724b/" target='_blank'><BsLinkedin/></a>
        <a href="https://www.instagram.com/saraisrgv/" target='__blank'><FiInstagram /></a>
        <a href="https://twitter.com/Saraisrgv" target='_blank'><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials