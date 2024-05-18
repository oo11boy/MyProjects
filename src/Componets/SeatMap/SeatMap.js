import React, { useState } from 'react';
import './SeatMap.css';

export default function SeatMap(props) {

    const {rows,textscreen,setReserveList,reserveList}=props


    const handleSeatClick = (rowIndex, seatIndex) => {
        if (isSeatReserved(rowIndex, seatIndex)) {
          setReserveList(
            reserveList.filter(
              (seat) =>
                seat.row !== rowIndex + 1 || seat.column !== seatIndex + 1
            )
          );
        } else {
          if (countReservedSeats() >= 8) {
            alert("شما نمی‌توانید بیش از 8 صندلی رزرو کنید");
            return;
          }
          setReserveList([...reserveList, { row: rowIndex + 1, column: seatIndex + 1 }]);
        }
      };
    
      const isSeatReserved = (rowIndex, seatIndex) => {
        return reserveList.some(
          (seat) => seat.row === rowIndex + 1 && seat.column === seatIndex + 1
        );
      };
    
      const countReservedSeats = () => {
        return reserveList.length;
      };



  
//   const Rows = [
//     { count: 21, empty: [1, 2, 20, 21] },
//     { count: 21, empty: [1, 21] },
//     { count: 21, empty: [11] },
//     { emptyrow: true },
//     { count: 21, empty: [11] },
//     { count: 21, empty: [11] },
//     { count: 21, empty: [11] },
//   ];
{/* <SeatMap textscreen={'صفحه نمایش'} rows={Rows} reserveList={reserveList} setReserveList={setReserveList}/> */}

  return (
    <>
    <div className='screenseatmap'>{textscreen}</div>
    <div style={{width:"100%",height:"100%",overflow:"auto"}}>
       
    <div className='seatmap'>
       
      {rows.map((row, rowIndex) => {
        if (row.emptyrow) {
          return <div className='emptyrow' key={rowIndex}></div>;
        }
        const seats = [];
        for (let i = 0; i < row.count; i++) {
          if (row.empty && row.empty.includes(i + 1)) {
            seats.push(<div key={i} className="emptyseatonly"></div>);
          } else {
           
            seats.push(
              <div
                key={i}
                className={isSeatReserved(rowIndex, i) ? 'seatonly reserved' : 'seatonly'}
                onClick={() => handleSeatClick(rowIndex, i)}
              ></div>
            );
          }
        }
        return (
          <div className='seatrow' style={{ justifyContent:"space-between" }} key={rowIndex}>
            {seats}
            <br />
          </div>
        );
      })}
    </div>

    </div>
    </>
  );
}
