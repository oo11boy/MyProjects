import React from 'react'
import './About.css'
import { myinfo } from '../../../../Db'
export default function About() {
  return (
    <>
    <div className='aboutme'>
        <h3 className='tagme'>&lt;About&gt;</h3>
        <div className='aboutmebody'>
        <p className='aboutmetext'>{myinfo.aboutmetext}
        <h3 style={{marginTop:"10px"}}>تجربیات بک اند</h3>
      <p className='aboutmetext2'>{myinfo.aboutmetext2}</p>
      </p>
      <div className='underabout'> 
        <div>
        <h3>مدرک تحصیلی</h3>
        <p>کارشناسی مهندسی کامپیوتر</p>
        </div>
        <div>
            <h3>شماره تماس</h3>
            <p>09354502369</p>
        </div>
    </div>
    </div>
    <h3 className='tagme'>&lt;About/&gt;</h3>
    </div>

   
   
  </>
  )
}
