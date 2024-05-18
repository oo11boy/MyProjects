import { createContext, useState } from "react";

export const ShopContext=createContext({
    itemselected:()=>{},
    setitemselected:()=>{},
    setInfoProduct:()=>{},
    infoproduct:()=>{},
    textontshirt:()=>{},
    settextontshirt:()=>{}
})

export const ShopContextProvider=({children})=>{
const [itemselected,setitemselected]=useState()

const [textontshirt,settextontshirt]=useState()

const [infoproduct, setInfoProduct] = useState({
    name:"تیشرت تمام نخ",
    price:"۱,۲۰۰,۰۰۰",
    color: "white",
    size:"L",
  
  });

    const val={
        setitemselected,
        itemselected,
        infoproduct,
        setInfoProduct,
        settextontshirt,
        textontshirt
    }
    return <ShopContext.Provider value={val}>{children}</ShopContext.Provider>
}