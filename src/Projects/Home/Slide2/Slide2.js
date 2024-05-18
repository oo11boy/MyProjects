import React from 'react'
import './Slide2.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Instagram, Telegram } from '@mui/icons-material';
import TelegramIcon from '@mui/icons-material/Telegram';
export default function Slide2() {
  return (
    <>
  <div className='slide2top'>
   <img src={'/logo.jpeg'}  alt="" />
   <p className='namehome'>رسول قاسمی</p>
   <p  className='nameworkhome'>برنامه نویس فرانت اند</p>
   <div className='homesocial'>
    <a href="https://github.com/oo11boy" target='_blank'>  <GitHubIcon /></a>
   
    <a href="https://instagram.com/unicodewebdesign" target='_blank'>  <Instagram /></a>
    <a href="https://t.me/unicodewebdesign" target='_blank'> <TelegramIcon /></a>
   </div>
  </div>
  <div className='slide2down'>
    <p><a className='linkhome' style={{color:"black",textDecoration:"none"}} href="tel:09354502369">تماس با من</a></p>
    {/* <p style={{borderLeft:"1px solid rgba(0, 0, 0, 0.227)"}}>دانلود رزومه</p> */}
  </div>
    </>
  )
}
