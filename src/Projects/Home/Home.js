
import "./Home.css"
import PersonIcon from '@mui/icons-material/Person';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

import { useState } from "react";
import Slide2 from "./Slide2/Slide2";
import About from "./Slide3/About/About";
import Skills from "./Slide3/Skills/Skills";
import NemoneKar from "./Slide3/NemoneKar/NemoneKar";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(()=>{
    if(localStorage.getItem('slide')){
      return localStorage.getItem('slide')
    }else{
      return 0;
    }
  });
  const handleItemClick = (index) => {
    setActiveSlide(index);

    if(localStorage.getItem('slide')){
      localStorage.removeItem("slide")
      localStorage.setItem("slide",index)
    }else{
      localStorage.setItem('slide',index)
    }
 
  };

  return (
 <div className="containerHome">
  <div className="homebody">
  <div className="slide1">
    <div className="slide1body">
    <div className={`underline ${activeSlide == 0 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>
              <PersonIcon />
              <p>درباره من</p>
            </div>
            <div className={`underline ${activeSlide == 1 ? 'active' : ''}`} onClick={() => handleItemClick(1)}>
              <CodeOffIcon />
              <p>مهارت ها</p>
            </div>
            <div className={` ${activeSlide == 2 ? 'active' : ''}`} onClick={() => handleItemClick(2)}>
            <SpaceDashboardIcon />
              <p>نمونه کار</p>
            </div>
        
    </div>
  </div>
  <div className="section2home">
 
  <div  className= {activeSlide == 0 ? "slide2" : "slide2 d-none"}><Slide2/></div>


  <div  className="slide3">
  {activeSlide==0 &&<div className="slide3body">   
  <About/>
  </div>}
  {activeSlide==1 &&<div className="slide3body">   
 <Skills/>
  </div>}
  {activeSlide==2 &&<div className="slide3body">   
 <NemoneKar/>
  </div>}
  </div>
  </div>
  </div>
 </div>
  )
}
