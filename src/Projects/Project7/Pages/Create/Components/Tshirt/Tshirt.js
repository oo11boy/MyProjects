import React, { useState } from 'react'
import './Tshirt.css'
import {MoonLoader} from "react-spinners"
import CheckSwitch from './CheckSwitch/CheckSwitch'
export default function Tshirt(props) {
    const { itemselected, highlightedText,Tcolor ,setTcolor } = props
    const [loadedimg, setLoadedImg] = useState(false)

    return (
        <div className='showimg'>
            <img
                className='imgbg'
                src={Tcolor=="white" ? "../tshirt.png" : "https://media.karousell.com/media/photos/products/2022/10/10/alstyle_plain_black_shirt_1665372972_1066ff58.jpg"}
                alt=""
                onLoad={() => 
                  setTimeout(() => {
                    setLoadedImg(true)
                  }, 2000)
                 } 
            />
             <div style={{position:'absolute',top:10,left:10,zIndex:999,border:"2px solid blue",borderRadius:6}} className="colorinfoordershop">
             <CheckSwitch Tcolor={Tcolor} setTcolor={setTcolor}/>
            </div>
            {loadedimg ? ( 
                <div className={Tcolor=="black" ?'centerimg cwhite' : "centerimg"}>
                   
                    <p className='namemusicen'>{itemselected.nameontshert}</p>
                    <img src={itemselected.cover} alt="" />
                    <p className='hlightextontshirt'>{highlightedText}</p>
                    <img className='musicimg' src={Tcolor=="white"? "../music.png" :"../musicwhite.png"} alt="" />
              
                </div>
            ) :<div className='centerimg' style={{color:"white",backgroundColor:"black",width:"100%",height:"100%",top:0}}>
 
          <MoonLoader color="#ffffff" size={40} />
              </div>}
        </div>
    )
}
