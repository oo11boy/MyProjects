import React from 'react'
import Mapme from '../../Pages/Create/Map/Map'
import { Facebook, Instagram, Telegram } from "@mui/icons-material";
import './Footer.css'
export default function Footer() {
  return (

    <div className="footershopp7" >
 <Mapme width="100%" radius={15}  height={150} markersize={60}/>
<div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:20}}>
 <p id="cme" style={{marginBottom:10}}>کرمانشاه میدان آزادی پوشاک نیکی</p>
 <p>09123456789</p>
 </div>
 <div className="socialfooterp7">
  <a href="#"><Telegram/></a>
  <a href="#"><Instagram/></a>
  <a href=""><Facebook/></a>
 </div>
 </div>
  )
}
