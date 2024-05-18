import React, { useContext, useEffect, useState } from 'react';
import { allposts } from '../../../Db';
import './Search.css';
import { IoIosSearch } from 'react-icons/io';
import { SocialPostContext } from '../../../ContextApi/P6Context/socialpostcontext';
import ImgPostUi from '../../../Componets/Project6/ImgPostUi';
import PostInfo from '../../../Componets/Project6/PostInfo/PostInfo';
import LoadingProgress from '../../../Componets/Project6/LoadingProgress/LoadingProgress';
import { TbMoodEmpty, TbMoodEmptyFilled } from "react-icons/tb";
import { HashLoader, PacmanLoader, PropagateLoader, ScaleLoader } from 'react-spinners';
export default function Search() {
  const darkmodec = useContext(SocialPostContext);
  const [filterdpost,setfilteredpost]=useState(allposts)
  const [searchtext,setsearchtext]=useState('')
  const [isLoading, setIsLoading] = useState(false);
const [massage,setmassage]=useState('')
  const searchhandler=(e)=>{
    e.preventDefault();
    setIsLoading(true); 
   
    setTimeout(() => { 
      const filterbytext = allposts.filter((item) => item.caption.includes(searchtext) || item.hashtag.includes(searchtext));
      setfilteredpost(filterbytext);
      setIsLoading(false);
     setmassage(`پستی با کپشن یا هشتگ "${searchtext}" وجود ندارد.`)
    }, 1000); 
   
  }

  return (
    <div className={darkmodec.darkmode ? 'searchcontainer darkmode111' : 'searchcontainer'}>
      <div className='searchbox'>
        <form onSubmit={searchhandler} style={{ width: "100%", height: "100%", position: "relative" }} action="">
          <input onChange={(e)=>setsearchtext(e.target.value)} placeholder='دنبال چه چیزی میگردید؟' className={darkmodec.darkmode ? 'searchinput darkmode222' : 'searchinput'} type="text" />
          <IoIosSearch style={{cursor:"pointer"}} onClick={searchhandler} className={darkmodec.darkmode ? 'searchicon color-w' : 'searchicon'} />
        </form>
      </div>

      <div  className={darkmodec.darkmode ? 'postscontainer darkmode111' : 'postscontainer'}>
        {isLoading ? (
          <>
      <LoadingProgress/>
        <div className="spinnersearch">
<ScaleLoader color="#36d7b7" />
</div>
</> 
        ) : (
          filterdpost.map(item => {
            return <ImgPostUi item={item} />;
          })
        )}

      {!isLoading && filterdpost.length ==0 && 
        <div className='nopost'>
          <div>
          <p>
         {massage}
         </p>
         <TbMoodEmpty style={{color:darkmodec.darkmode ? '#ffe':'black'}}/>
         </div>
          </div>}
        
      </div>
      <PostInfo  />
    </div>
  );
}
