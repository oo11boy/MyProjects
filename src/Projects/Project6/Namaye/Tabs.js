import React, { useContext, useEffect, useState } from 'react'
import './Tabs.css'
import { SocialPostContext } from '../../../ContextApi/P6Context/socialpostcontext'

import ImgPostUi from '../../../Componets/Project6/ImgPostUi';
import PostInfo from '../../../Componets/Project6/PostInfo/PostInfo';
import { allposts } from '../../../Db';
import { TbMoodEmpty } from 'react-icons/tb';

export default function Tabs() {
    const darkmodec=useContext(SocialPostContext)
    const userPostscontext=useContext(SocialPostContext)
   
    const [postinfo ,setpostinfo]=useState([])

    useEffect(()=>{
      const findme=allposts.filter((item)=>item.userid==22)
      setpostinfo(findme)
    },[])
   const [tabname,settabname]=useState('post')
const [focused,setfocused]=useState([])
const focushandler=(id)=>{
setfocused(id)
}
useEffect(()=>{setfocused(3)},[])
  return (
    <div  className='tabsp6'>
      <div  className={darkmodec.darkmode?'tabs bordertop-white':'tabs'}> 
       
         
    
         
        <a onFocus={()=>focushandler(1)} className={darkmodec.darkmode && focused==1 ?'darkfocus':darkmodec.darkmode==false && focused==1 ?"lightfocus":'' } style={{color:darkmodec.darkmode ?'white':'black'}} onClick={()=>settabname('save')} href='#save'>
            ذخیره
        </a>
        <a onFocus={()=>focushandler(3)} className={darkmodec.darkmode && focused==3?'darkfocus':darkmodec.darkmode==false && focused==3 ?"lightfocus":'' } style={{color:darkmodec.darkmode ?'white':'black'}} onClick={()=>settabname('post')} href='#post'>
            پست ها
        </a>
        </div> 

        <div style={{width:"100%"}}>
            {tabname=="post" && 
            <div className='imagesnam'>
             {userPostscontext.postsuser.length > 0 ?
             userPostscontext.postsuser.map((item)=>{
           
                return   <ImgPostUi item={item}/>
                }): postinfo.length >0 ?
               postinfo.map((item)=>{
               
                return  <ImgPostUi item={item}/>
                })
           
              
             :<div style={{width:"100%",direction:"rtl",height:"200px",display:"flex",paddingTop:50,justifyContent:"center"}}>
             <p >پستی وجود ندارد.</p>
            <TbMoodEmpty style={{color:darkmodec.darkmode ? '#ffe':'black',fontSize:25,marginRight:5}}/>
            
              </div>
              }

            </div>
            }
              <PostInfo  />
            {tabname=="save" && 
    <div className='imagesnam'>
    {userPostscontext.savelist.length > 0 ?
    userPostscontext.savelist.map((item)=>{
  
       return   <ImgPostUi item={item}/>
       })
  
    :<div style={{width:"100%",direction:"rtl",height:"200px",display:"flex",paddingTop:50,justifyContent:"center"}}>
      <p >پستی وجود ندارد.</p>
     <TbMoodEmpty style={{color:darkmodec.darkmode ? '#ffe':'black',fontSize:25,marginRight:5}}/>
     
       </div>}

   </div>

}
        </div>
    </div>
  )
}
