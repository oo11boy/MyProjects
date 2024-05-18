import { Alert } from '@mui/material'
import React, { useState } from 'react'

export default function AlertSuccess({text,addalert,setaddalert,time=600,status="success"}) {

        
    setTimeout(() => {
      setaddalert(false);
    }, time);
  return (
    addalert && <Alert

    severity={status}
    className="tootip"
    color="warning"
    style={{ fontFamily: "vazir", position: "absolute", top: 10,zIndex:999 }}
  >
   {text}
  </Alert>
  )
}
