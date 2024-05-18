import React from "react";
import "./Btn.css";
export default function Btn(props) {
  const { updown, bg ,setnumber,number,setshowtag} = props;
const clickhandler=(event)=>{
event.preventDefault()
switch (updown) {
    case "up":
        setnumber(number + 1);
        break;
      case "down":
        setnumber(number - 1);
        break;
    default:
       
        break;
}
setshowtag(false)
setTimeout(() => {
    setshowtag(true)
}, 20);
}
  return (
    <button onClick={(event)=>clickhandler(event)} style={{ backgroundColor: bg }} className="btnclass">
      {(updown == "up" ? "+" : "-")}
    </button>
  );
}
