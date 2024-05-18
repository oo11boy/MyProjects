import React, { useContext } from 'react'
import { FaCircle, FaRegCircle } from 'react-icons/fa';
import { SelectedSeatContext } from '../../../ContextApi/Project5/SelectedSeatContext';

export default function Seats(props) {
  const { length, khali, radif } = props

const SeatC=useContext(SelectedSeatContext)


  return (
    <div className="rowseat">
     
      <div className='seat'>
        {
          Array.from({ length: length }).map((_, index) => (

            index == khali ? <span className='noseat'></span> :

              <span title={'صندلی: ' + (index + 1) + '   ردیف: ' + radif} onClick={() => SeatC.clickseat(index, radif)} key={index}>{
                SeatC.makan.find((item) => item.seat == index + 1 && item.radif == radif) ? <FaCircle /> : <FaRegCircle />}</span>

          ))

        }
      </div>
     

    </div>
  )
}
