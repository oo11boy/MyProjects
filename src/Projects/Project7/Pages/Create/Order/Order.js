import React, { useContext, useEffect, useState } from "react";
import Tshirt from "../Components/Tshirt/Tshirt";
import "./Order.css";
import { ShopContext } from "../../../Context/ShopContext";
import { Link } from "react-router-dom";

export default function Order(props) {
  const { highlightedText, itemselected ,Tcolor,setTcolor} = props;
  const mycontext=useContext(ShopContext)

  useEffect(()=>{
      mycontext.setitemselected(itemselected)
      mycontext.settextontshirt(highlightedText)
  },[])

  return (
    <div className="previewtshirt">
      <Tshirt setTcolor={setTcolor} Tcolor={Tcolor} highlightedText={highlightedText} itemselected={itemselected} />
      <div className="undertshirtorder">
        <div className="sec1order">
          <div>
            <p className="topsec1order">طرح اختصاصی</p>
            <p className="undersec1order">تیشرت تمام نخ</p>
          </div>
          <div>
            <p className="topsec1order">قیمت</p>
            <p className="undersec1order">۱,۲۰۰,۰۰۰ تومان</p>
          </div>
        </div>
        <p className="resp" style={{ padding: "10px 0", fontWeight: 300 }}>
          این محصول با طراحی کاملا اختصاصی و طبق موزیک انتخابی با بهترین کیفیت
          و در کمترین زمان ممکن به شما تحویل داده میشود.
        </p>
        <div className="infoordershop">
          <div>
            <div className="topinfoordershop">سایز:</div>
            <div className="sizetshirtorder">
              <div onClick={()=>{mycontext.setInfoProduct({...mycontext.infoproduct,size:"S"})}} className={mycontext.infoproduct.size=="S" &&"bg-white"}>S</div>
              <div onClick={()=>{mycontext.setInfoProduct({...mycontext.infoproduct,size:"M"})}} className={mycontext.infoproduct.size=="M" &&"bg-white"}>M</div>
              <div onClick={()=>{mycontext.setInfoProduct({...mycontext.infoproduct,size:"L"})}} className={mycontext.infoproduct.size=="L" &&"bg-white"}>L</div>
              <div onClick={()=>{mycontext.setInfoProduct({...mycontext.infoproduct,size:"XL"})}} className={mycontext.infoproduct.size=="XL" &&"bg-white"}>XL</div>
            </div>
          </div>

          <div>
            <div className="topinfoordershop">رنگ:</div>
            <div className="colorinfoordershop">
              <div onClick={() => mycontext.setInfoProduct({ ...mycontext.infoproduct, color: "black" },setTcolor('black'))} className="black">
               {mycontext.infoproduct.color =="black" && <div className="activecolor"></div>} 
              </div>
              <div onClick={() => mycontext.setInfoProduct({ ...mycontext.infoproduct, color: "white" },setTcolor('white'))} className="white">
              {mycontext.infoproduct.color =="white" && <div className="activecolor"></div>} 

              </div>
            </div>
          </div>
        </div>

        <Link to={'../project7/checkout'} className="orderdone" style={{marginTop:30}}>افزودن به سبد خرید</Link>
      </div>
    </div>
  );
}
