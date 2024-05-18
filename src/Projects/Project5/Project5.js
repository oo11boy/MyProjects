import React, { useContext, useState,  } from 'react'
import './Project5.css'
import { MdDelete } from "react-icons/md";
import { FaCircle, FaRegCircle, FaUser } from 'react-icons/fa';
import AlertSuccess from '../../Componets/AlertSuccess';
import { CircularProgress } from '@mui/material';
import SeatMap from '../../Componets/SeatMap/SeatMap';
export default function Project5() {

const [reserveList, setReserveList] = useState([]);

const deletebuy=(seat,radif)=>{
    const filterarray=reserveList.filter((item)=>item.row !=seat || item.column !==radif)
    setReserveList(filterarray)
}
const [addalert,setaddalert]=useState(false)

const [textalert,settextalert]=useState('')

const [showloading,setshowloading]=useState(false)
const [statusalert,setstatusalert]=useState('')
const submitrezerv=()=>{
    setshowloading(true)
    setTimeout(() => {
        setaddalert(true)
        if(reserveList.length ==0){
            setstatusalert('error')
            settextalert('لطفا ابتدا صندلی رزرو کنید.')
        }else{
            setstatusalert('success')
            
            settextalert('با موفقیت صندلی ها رزرو شد.')
        }
        setshowloading(false)
    }, 2000);
   
  
  
}


  const Rows = [
    { count: 21, empty: [1, 2, 20, 21] },
    { count: 21, empty: [1, 21] },
    { count: 21, empty: [11] },
    { emptyrow: true },
    { count: 21, empty: [11] },
    { count: 21, empty: [11] },
    { count: 21, empty: [11] },
  ];

    return (

        <div className='cmovie' dir='rtl'>
               <AlertSuccess status={statusalert} time={5000} text={textalert} setaddalert={setaddalert} addalert={addalert} />
            <div className='headertaketiket'>
                <p className='logoticket' style={{cursor:"pointer"}}>
                    سینما تیکت
                </p>
                <p style={{cursor:"pointer"}} className='timet'>
                    دوشنبه 2 بهمن - سانس 14:00
                </p>
                <p style={{cursor:"pointer"}} className='userti'>
                    <FaUser />
                    رسول قاسمی
                </p>
            </div>
<div className='seatme'>
            <SeatMap textscreen={'صفحه نمایش'} rows={Rows} reserveList={reserveList} setReserveList={setReserveList}/>

            </div>

            <div className="posfix">

                <div className='helping'>

                    <ul>
                        <li>خالی: <FaRegCircle /> </li>
                        <li>رزرو: <FaCircle /></li>
                    </ul>

                    <div className='zarfiat'>ظرفیت سالن:230</div>
                </div>

                <div className="infoticketmovie">
                    <div className='rightsidet'>
                        <div className='imgtmovie'>
                            <img src="https://www.digikala.com/mag/wp-content/uploads/2024/03/%D9%81%DB%8C%D9%84%D9%85-%D9%81%D8%B3%DB%8C%D9%84-1.jpg" alt="" />
                        </div>
                        <div className='infoadt'>
                            <p>فسیل</p>
                            <p>
                                سینما آزادی کرمانشاه
                                (سالن اصلی)
                            </p>
                            <p>
                                دوشنبه 2 بهمن - سانس 14:00
                            </p>
                        </div>
                    </div>

                    <div className='centersidet'>
                   
                        {reserveList.map((item)=>{
                                return <div className='infosanrad'>

                         
                                <div>
                                    ردیف {item.row} . صندلی {item.column}
                                   <p style={{cursor:"pointer"}} onClick={()=>deletebuy(item.row,item.column)}> <MdDelete /></p>
                                </div>
                                <p>25.000 تومان</p>
                            </div>
                            })}
                      
                      </div>
                    <div className="leftsidet">
                      {showloading ? <p><CircularProgress size={30} color="inherit" /></p>:    <p onClick={submitrezerv}>رزرو نهایی</p>}
                    
                    </div>
                    <div>

                    </div>

                </div>
            </div>
        </div>

    )
}
