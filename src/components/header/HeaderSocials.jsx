import React from 'react'
import {BsTiktok, BsTwitter} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.tiktok.com/@saraisrgv" target='_blank' rel='noreferrer' aria-label='TikTok'><BsTiktok/></a>
        <a href="https://www.instagram.com/saraisrgv/" target='_blank' rel='noreferrer' aria-label='Instagram'><FiInstagram /></a>
        <a href="https://twitter.com/Saraisrgv" target='_blank' rel='noreferrer' aria-label='Twitter'><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials