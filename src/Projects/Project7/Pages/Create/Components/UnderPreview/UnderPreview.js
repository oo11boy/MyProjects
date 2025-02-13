import React from 'react'
import './UnderPreview.css'
export default function UnderPreview(props) {
    const {itemselected}=props
  return (
    <div className='underpreviewtshirt'>
    <div className='imgunder'><img src={itemselected.cover} alt="" /></div>
    <div className='infounderpreview'>
<div className='underselecttextmusic topunder'>
    <p>آهنگ انتخاب شده</p>
    <p>مرجع متن آهنگ</p>
</div>
<div className='underselecttextmusic'>
    <p>{itemselected.name}</p>
    <p>آهنگیفای</p>
</div>

<div className='nameartist'>
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.75 22.5001C11.336 22.5001 11 22.1641 11 21.7501V18.5891C11 18.1751 11.336 17.8391 11.75 17.8391C12.164 17.8391 12.5 18.1751 12.5 18.5891V21.7501C12.5 22.1641 12.164 22.5001 11.75 22.5001Z" fill="#FEFEFE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.75 2.5C9.92399 2.5 8.43799 3.994 8.43799 5.831V10.519C8.43799 12.354 9.92399 13.849 11.75 13.849C13.576 13.849 15.061 12.354 15.061 10.519V5.831C15.061 3.994 13.576 2.5 11.75 2.5ZM11.75 15.349C9.09699 15.349 6.93799 13.182 6.93799 10.519V5.831C6.93799 3.167 9.09699 1 11.75 1C14.403 1 16.561 3.167 16.561 5.831V10.519C16.561 13.182 14.403 15.349 11.75 15.349Z" fill="#FEFEFE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.75 19.3388C6.925 19.3388 3 15.3968 3 10.5508C3 10.1368 3.336 9.80078 3.75 9.80078C4.164 9.80078 4.5 10.1368 4.5 10.5508C4.5 14.5688 7.752 17.8388 11.75 17.8388C15.748 17.8388 19 14.5688 19 10.5508C19 10.1368 19.336 9.80078 19.75 9.80078C20.164 9.80078 20.5 10.1368 20.5 10.5508C20.5 15.3968 16.575 19.3388 11.75 19.3388Z" fill="#FEFEFE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8084 7.25586H13.8184C13.4044 7.25586 13.0684 6.91986 13.0684 6.50586C13.0684 6.09186 13.4044 5.75586 13.8184 5.75586H15.8084C16.2224 5.75586 16.5584 6.09186 16.5584 6.50586C16.5584 6.91986 16.2224 7.25586 15.8084 7.25586Z" fill="#FEFEFE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8103 10.5938H12.8203C12.4063 10.5938 12.0703 10.2578 12.0703 9.84375C12.0703 9.42975 12.4063 9.09375 12.8203 9.09375H15.8103C16.2243 9.09375 16.5603 9.42975 16.5603 9.84375C16.5603 10.2578 16.2243 10.5938 15.8103 10.5938Z" fill="#FEFEFE"/>
</svg>

    <p>{itemselected.artist}</p>
</div>
    </div>
</div>
  )
}
