import React, { useContext, useEffect, useState } from "react";
import { FaComment, FaHeart } from "react-icons/fa";
import './ImgPostUi.css'
import { SocialPostContext } from "../../ContextApi/P6Context/socialpostcontext";
export default function ImgPostUi(params) {
  const { item  } = params;

  const [hoveredPost, setHoveredPost] = useState(null);
  const [onloadimg, setOnloadimg] = useState(false);
const itempostco=useContext(SocialPostContext)
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setOnloadimg(true);
    };
    img.src = item.img;
  }, [item.img]); 
const clickposthandler=()=>{
  itempostco.setOpen(true)
  itempostco.setitempost(item)
}
  return (
    onloadimg ? (
      <div onClick={clickposthandler} className="imgdiv" onMouseEnter={() => setHoveredPost(item)} onMouseLeave={() => setHoveredPost(null)}>
   
        <img src={item.img} alt="" />
    
        {hoveredPost && hoveredPost.id === item.id && 
          <div className='likeandcomment'>
            <div><p>{item.like}</p> <FaHeart/></div>
            <div><p>{item.comment.length}</p> <FaComment/></div>
          </div>
        }
      </div>
    ) : (
      <div className="imgdiv bgloading"></div>
    )
  );
}
