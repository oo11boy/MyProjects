import React, { useContext, useEffect, useState } from "react";

import "./Login.css";
import { SocialIcon } from "react-social-icons";
import { GetDataUser } from "../../ContextApi/P2Context/GetDataUser";
import { Link, useNavigate } from "react-router-dom";

import PInfo from "../../Componets/PInfo";
import { TourP2step } from "./TourP2";
export default function Login() {
  const loginstatus = useContext(GetDataUser);
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const navi = useNavigate();
  if(localStorage.getItem('islogin')) {
    navi("../project2/Dashboard" );
  } 
  return (

    <div className="containerLogin">
      <div className="formlogin">
        <form className="formloginhelp" action="">
          <div className="toploginform">
            <h4>ورود به سایت</h4>
            <p>جهت ورود به پنل اطلاعات زیر را وارد نمایید.</p>
          </div>
          <div className="maininputdiv">
          <input
            className="maininput"
            type="text"
            placeholder="ایمیل خود را وارد نمایید..."
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            onChange={(e) => setpassword(e.target.value)}
            className="maininput"
            type="text"
            placeholder="رمز ورود را وارد نمایید..."
          />
          </div>
          <div className="rereg">
            <div className="reme">
              <p>مرا به خاطر بسپار</p>
              <input className="checkbox" type="checkbox" />
            </div>
            <a href="#">بازیابی رمز عبور</a>
          </div>
          <button
            onClick={(e) => loginstatus.loginkychandler(email, password, e)}
            className="p2godash"
          >
            ورود
          </button>
          <p className="errormsg">{loginstatus.errorloginmsg}</p>
        </form>
        <div className="othersignin">
          <p>روش های دیگر ورود:</p>
          <div>
            <SocialIcon url="#" network="google" />
            <SocialIcon url="#" network="github" />
            <SocialIcon url="#" network="facebook" />
          </div>
        </div>
      </div>
      <div>
       <p className="linkback" onClick={()=>alert('email:demo@gmail.com , password:123')}>مشاهده اطلاعات دمو</p>

      </div>
     

    <PInfo steps={TourP2step}/>
    <Link className="linkback" to={'../'}>رفتن به صفحه اصلی</Link>
  
    </div>

   
  );
}
