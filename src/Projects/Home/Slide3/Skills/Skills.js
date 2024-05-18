import React from 'react'
import "./Skills.css"
import { myinfo } from '../../../../Db'
import PhpIcon from '@mui/icons-material/Php';
import { FaReact } from "react-icons/fa";
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination ,Navigation} from 'swiper/modules';
export default function Skills() {
  return (
    <div className='skills'>
            <h3 className='tagme'>&lt;Skills&gt;</h3>
<div className='bodyskill'>
<div className='aboutmetext'>
    <h3 style={{marginBottom:"10px"}}>مهارت Responsive Design</h3>
    <p>{myinfo.responsivetext}</p>
</div>
<div className='aboutmetext'>
    <h3 style={{marginBottom:"10px"}}>مهارت React js</h3>
    <p>{myinfo.reactjstext}</p>
</div>
<div className='aboutmetext'>
    <h3 style={{marginBottom:"10px"}}>مهارت React Native</h3>
    <p>{myinfo.aboutmetext3}</p>
</div>
<div className='aboutmetext'>
    <h3>برخی دیگر از مهارت های من:</h3>
    <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
       navigation={true}
        modules={[FreeMode, Pagination,Navigation]}
        className="mySwiperskill"
        style={{marginTop:'10px'}}
      >
        <SwiperSlide>
        <div className='iconsskillsvg'>
        <PhpIcon />
        <p>PHP</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='iconsskillsvg'>
        <FaReact />
        <p>React Js</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
               
        <div className='iconsskillsvg'>
        <TbBrandReactNative />
        <p>React Native</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='iconsskillsvg'>
        <HtmlIcon />
        <p>Html</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='iconsskillsvg'>
        <CssIcon />
        <p>Css</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='iconsskillsvg'>
        <IoLogoJavascript />

        <p>JavaScript</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='iconsskillsvg'>
        < SiMui/>

        <p>Material Ui</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='iconsskillsvg'>
        < SiTailwindcss/>

        <p>Tailwind Css</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='iconsskillsvg'>
        < FaBootstrap/>

        <p>React Bootstrap</p>
        </div>
        </SwiperSlide>
      </Swiper>

    
</div>




</div>

            <h3 className='tagme'>&lt;Skills/&gt;</h3>
    </div>
  )
}
