import React, { useEffect, useState } from 'react'
import "./Project1.css"
import Btn from '../../Componets/Btn'

export default function Project1() {
  const [number,setnumber]=useState(0)
const [showtag,setshowtag]=useState(true)
  return (
    <div className='container'>

<Btn setshowtag={setshowtag} setnumber={setnumber} number={number} updown="up" bg="green"/>
<div className='count'>
<h1 className='countnum'>
  <p className='othernum'>{number+1}</p>
  {showtag ? <p className='countnump'> {number}</p> : <p className='empty'></p>}
  <p className='othernum'>{number-1}</p>
  </h1>
  </div>

<Btn setshowtag={setshowtag} setnumber={setnumber} number={number} updown="down" bg="red"/>
   
   
    </div>
  )
}
