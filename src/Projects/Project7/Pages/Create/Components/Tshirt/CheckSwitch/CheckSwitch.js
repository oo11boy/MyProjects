import React, { useState } from 'react'
import Switch from "react-switch";
export default function CheckSwitch({Tcolor,setTcolor}) {
    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
      Tcolor=="white" ? setTcolor('black') : setTcolor('white')
      setChecked(nextChecked)
    };
  return (
 
    <Switch
      checked={checked}
      onChange={handleChange}
      handleDiameter={17}
      offColor="#000"
      onColor="#fff"
      offHandleColor="#fff"
      onHandleColor="#000"
      height={30}
     
      width={40}
      borderRadius={6}
     
      uncheckedIcon={false}
      checkedIcon={false}
   
      
      className="react-switch"
      id="small-radius-switch"
    />

  
  )
}
