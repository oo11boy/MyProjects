import React, { useContext } from 'react'
import { GetDataUser } from '../../ContextApi/P2Context/GetDataUser'
import './DashboardP2.css'
export default function DashboardP2() {
  const logoutC=useContext(GetDataUser)
const obj=localStorage.getItem('userlogininfo')
const datauser=JSON.parse(obj)

  return (


    <div className="containerDashP2">
      <div className="DashP2">
        <h3> {datauser.name} عزیز به پنل کاربری خوش اومدی</h3>
        <p className='boldp'>اطلاعات شما:</p>
        <p>نام و نام خانوادگی: {datauser.name} {datauser.lastname}</p>
        <p>شهر: {datauser.city}</p>
        <p>شماره تماس: {datauser.numberphone}</p>
      <button onClick={(e)=>logoutC.logoutuser(e)}>خروج از حساب کاربری</button>
      </div>
      

    </div>



  )
}
