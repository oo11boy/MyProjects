import React, { useEffect, useState } from 'react'
import "./PInfo.css";
import Tour from 'react-joyride';
export default function PInfo(props) {
const {steps,text}=props
  const [runTour, setRunTour] = useState(false);

  const startTour = () => {
    setRunTour(true);

  
  };
 
  return (
    <div className='PInfo'>
    <button onClick={startTour}>
      {text ? text :
        " در این پروژه چه کارهایی انجام داده ام؟ (تور معرفی)"
      }
     
      </button>
      <Tour
  steps={steps}
  run={runTour}
  continuous
  
  locale={{
    next: 'بعدی',
    back: 'قبلی',
    last:"پایان تور"
  }}
  styles={{
    
    tooltip: {
     
        direction: 'rtl',
      },
  }}
  onClose={() => setRunTour(false)}
/>
      </div>
  )
}
