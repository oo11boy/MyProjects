import React, {  useContext, useState } from "react";
import "./Namaye.css";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { IoIosArrowDown } from "react-icons/io";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Stories from 'react-insta-stories';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Modal from '@mui/material/Modal';
import MyTabs from "./Tabs";
import { SocialPostContext } from "../../../ContextApi/P6Context/socialpostcontext";
import Storyview from "../../../Componets/Project6/Storyview";

export default function Namaye() {
const darkmodec=useContext(SocialPostContext)
const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // State to track current story index
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNextStory = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= stories1.length ? 0 : nextIndex; // Loop back if at the end
    });
  };

  const handlePreviousStory = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? stories1.length - 1 : nextIndex; // Loop back if at the beginning
    });
  };
    const stories1 = [
        {
            content: (props) => (
                <div style={{ backgroundImage:`url(https://asianwiki.com/images/8/84/Soul_Mate_Korean_Movie-p2.jpg)`, padding: 20,backgroundSize:"cover",width:"100%",height:"100%" }}>
   </div>
            ),
        },
        {
            content: (props) => (
                <div style={{ backgroundImage:`url(https://assets.gadgets360cdn.com/pricee/assets/product/202311/Yodha_1699943967.jpg)`, padding: 20,backgroundSize:"cover",width:"100%",height:"100%" }}>

                    <h1 style={{ marginTop: 50,backgroundColor:"black",color:"white",fontFamily:"vazir",textAlign:"center",borderRadius:"10px" }}> استوری من</h1>
                </div>
            ),
        
        },
        {
            content: (props) => (
                <div style={{ backgroundImage:`url(https://e1.pxfuel.com/desktop-wallpaper/49/663/desktop-wallpaper-new-movie-posters-hollywood-movie-2022.jpg)`, padding: 20,backgroundSize:"cover",width:"100%",height:"100%" }}>

                    <h1 style={{ marginTop: 5,backgroundColor:"black",color:"white",fontFamily:"vazir",textAlign:"center",borderRadius:"10px" }}>🌝 هوش مصنوعی</h1>
                </div>
            ),
        },

    ];
const endstory=()=>{
    setOpen(false)
}

    const [viewmestory,setviewmestory]=useState(false)
    const [storyst,setstoryst]=useState(false)
  return (
    <div  className="namayecontainer">
          {viewmestory && darkmodec.mystories && <Storyview showstory={storyst}/>}
      <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
       <div className="topnamaye">
          <img
           onClick={()=>{setviewmestory(true);setstoryst(!storyst)}}
           style={{cursor:"pointer"}}
           
          className={darkmodec.mystories ?"imgdesk storyactive" :"imgdesk"}
            src="https://www.tarafdari.com/sites/default/files/styles/avatar/ts2/pictures/picture-258887-1563913842.jpg?itok=Lc3zziwI"
            alt=""
          />

          <div className="sec1content">
            <div className="sec1">

              <p style={{display:"flex",alignItems:"center",color:darkmodec.darkmode ?'white':"black"}}> <IoIosArrowDown  style={{fontSize:"20px",paddingRight:"5px",color:darkmodec.darkmode ?'white':"black"}}/> rasoulghasemi </p>
          {darkmodec.darkmode ?   <Brightness7Icon className="darkhelp" style={{cursor:"pointer"}} onClick={()=>darkmodec.setdarkmode(false)}/> :  <Brightness4Icon className="darkhelp" style={{cursor:"pointer"}} onClick={()=>darkmodec.setdarkmode(true)}/> }   
             
            </div>

            <div className="sec2">
               
            <img
              className={darkmodec.mystories ?"imgdesk storyactive" :"imgdesk"}
               onClick={()=>{setviewmestory(true);setstoryst(!storyst)}}
              style={{cursor:"pointer"}}
             
            src="https://www.tarafdari.com/sites/default/files/styles/avatar/ts2/pictures/picture-258887-1563913842.jpg?itok=Lc3zziwI"
            alt=""
          />
      
      
          <div className="infouser">
              <div className="usercounts">
                <p>703</p>
                <p>دنبال میکنید</p>
              </div>
              <div className="usercounts">
                <p>1505</p>
                <p>دنبال کننده</p>
              </div>

              <div className="usercounts">
                <p>63</p>
                <p>پست</p>
              </div>
            </div>
            </div>
            <div className="sec3">
              <h2>
                طراحی سایت |‌ آموزشی | هوش مصنوعی | اندروید | آیفون | تکنولوژی
              </h2>

              <div>
                <p> طراحی و توسعه وب 🌐</p>
                <p> مطالب آموزشی تکنولوزی و فناوری 🔥</p>
                <p>آموزش های جالب و سرگرم کننده 🛒</p>
               

                <p> هوش مصنوعی و مطالب روز دنیا 🚀</p>
                <p> با ما دانشتو بروز کن 💡</p>
              </div>
              <div style={{display:"flex",flexDirection:"row-reverse",alignItems:"center"}}>
              <svg aria-label="نماد پیوند" class="x1lliihq x1n2onr6 x7l2uk3" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title>نماد پیوند</title><path d="m9.726 5.123 1.228-1.228a6.47 6.47 0 0 1 9.15 9.152l-1.227 1.227m-4.603 4.603-1.228 1.228a6.47 6.47 0 0 1-9.15-9.152l1.227-1.227" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="8.471" x2="15.529" y1="15.529" y2="8.471"></line></svg>
              <a className={darkmodec.darkmode ? 'darkmode111a':''} href="https://unicodewebdesign.com">unicodewebdesign.com</a>
              </div>
            </div>
            
          </div>
          </div>
         

          <Swiper
            breakpoints={{
                250: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                530: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                  },
                620: {
                  slidesPerView: 6,
                  spaceBetween: 10,
                },
                // when window width is >= 480px
                802: {
                  slidesPerView: 7,
                  spaceBetween: 20,
                },
                // when window width is >= 640px
             
              }}
        slidesPerView={6}
        spaceBetween={30}
   
      
        className="p6slider"
      >
  
     <SwiperSlide className="helpveiwstory" onClick={handleOpen}>
            <img src="https://www.tarafdari.com/sites/default/files/styles/avatar/public/pictures/picture-244319-1663489184.png?itok=2J6POtBm" alt="" />
       <p>me</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://static.vecteezy.com/system/resources/previews/020/778/515/original/no-work-icon-vector.jpg" alt="" />
       <p>work</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Social_media_Icons_On_The_Home_Screen_of_an_Android_Phone.jpg" alt="" />
           <p>social</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://static.vecteezy.com/system/resources/previews/020/778/515/original/no-work-icon-vector.jpg" alt="" />
       <p>work</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Social_media_Icons_On_The_Home_Screen_of_an_Android_Phone.jpg" alt="" />
           <p>social</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://static.vecteezy.com/system/resources/previews/020/778/515/original/no-work-icon-vector.jpg" alt="" />
       <p>work</p>
        </SwiperSlide>
        
        <SwiperSlide>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Social_media_Icons_On_The_Home_Screen_of_an_Android_Phone.jpg" alt="" />
           <p>social</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://static.vecteezy.com/system/resources/previews/020/778/515/original/no-work-icon-vector.jpg" alt="" />
       <p>work</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Social_media_Icons_On_The_Home_Screen_of_an_Android_Phone.jpg" alt="" />
           <p>social</p>
        </SwiperSlide>

        <SwiperSlide>
      <p className="addnewst" style={{backgroundColor:"#999",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"40px",color:"white"}}>+</p>
        </SwiperSlide>

      </Swiper>
        </div>

     <MyTabs/>
      








      <Modal
        open={open}
        className="modalp6"
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       
          <div className="mestory">
            
            <Stories
            
              stories={stories1}
             height={"100vh"}
             width={"100%"}
             
              defaultInterval={10000}
              onAllStoriesEnd={endstory}
              currentIndex={currentIndex}
              onPrev={handlePreviousStory}
              onNext={handleNextStory}
              isPaused={true}
            />
          
          </div>
      </Modal>
    </div>
  );
}
