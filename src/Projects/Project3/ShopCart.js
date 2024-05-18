import React, { useEffect, useRef, useState } from "react";
import "./ShopCart.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import ShopCartSlider from "./ShopCartSlider";
import DeleteIcon from "@mui/icons-material/Delete";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import HourglassDisabledIcon from '@mui/icons-material/HourglassDisabled';
import { useClickAway } from "react-use";
import PInfo from "../../Componets/PInfo";
import { Link } from "react-router-dom";
import { TourP3step } from "./TourP3";
export default function ShopCart() {
  const [showcart, setshowcart] = useState(false);
  const [cartitems, setcartitems] = useState([]);
  const deleteItemFromCart = (id) => {
    const newCartItems = [...cartitems];
    const itemIndex = newCartItems.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      
      if (newCartItems[itemIndex].quantity > 1) {
        newCartItems[itemIndex].quantity -= 1;
      } else {
       
        newCartItems.splice(itemIndex, 1);
      }
      localStorage.setItem("myItemCart", JSON.stringify(newCartItems));
      setcartitems(newCartItems);
    } else {
     
      console.warn(`Item with ID ${id} not found in cart`);
    }
  };
useEffect(()=>{
  const storedItems = localStorage.getItem("myItemCart");
  if (storedItems) {
      setcartitems(JSON.parse(storedItems));
  }
},[])


const calculateTotalPrice = (cartItems) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return totalPrice;
};


  const ref = useRef(null);
  useClickAway(ref, () => {
   setshowcart(false)
  });

  return (
    <div className="containercartshop">
      <div ref={ref} className={showcart ? "bodyshowcartp3" : "bodycartp3"}>
        <div style={{display:"flex",alignItems:"center",padding:"20px"}}>
          <ProductionQuantityLimitsIcon style={{color:"#999",fontFamily:"6em",marginLeft:"10px"}}/>
          <p style={{ color: "#999", fontSize: "1.3em" }}>
            سبد خرید شما
          </p>
        </div>

        <div className="bodyincart">
          { cartitems.length >0 ? cartitems.map((item) => {
          
            return (
              <div className="cartitemp3">
                <div className="imgcartpos">
                <img src={item.img} alt="" />
             <p> {item.quantity}</p> 
             </div>
                <p>{item.name} </p>
                <p>{item.price * item.quantity} </p>
                <DeleteIcon onClick={() => deleteItemFromCart(item.id)} />
              </div>
            );
          })
        :
        <div style={{ width:"100%",height:"100%",backgroundColor:"#222",borderRadius:"15px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
    <HourglassDisabledIcon style={{color:"#888",paddingLeft:"10px",fontSize:"3em"}}/>
        <h3 style={{color:"#888" }}> سبد خالی است</h3>
       
        </div>
        }
        </div>

        <div>
          <p style={{ color: "white", padding: "20px", marginBottom: "5px" }}>
          جمع کل: {calculateTotalPrice(cartitems)} تومان
          </p>
          <p
            style={{
              cursor: "pointer",
              backgroundColor: "green",
              color: "white",
              padding: "10px",
              borderRadius: "15px",
              display: "inline",
              margin: "15px",
            }}
          >
            تکمیل خرید
          </p>
        </div>
      </div>
      <div
        onClick={() => setshowcart(!showcart)}
      
        className={
          showcart
            ? "cartlogop3 animationcartp3"
            : "cartshowlogop3 animationcartp3"
        }
      >
        {showcart ? (
          <CloseIcon className="animationcartp3" />
        ) : (
       <>
                  <ShoppingCartIcon className="animationcartp3" />
                  
                  {cartitems.length >0 && <p className="animationcartp3" style={{position:"absolute",top:"-10px",left:"0px",backgroundColor:"green",fontSize:"0.4em",padding:'2px 10px',borderRadius:"10px"}}>{cartitems.length}</p>}
                  </>      
    
        )}
      </div>

      <ShopCartSlider setcartitems={setcartitems} cartitems={cartitems} />
 
 

      <PInfo steps={TourP3step}/>
    <Link className="linkback" to={'../'}>رفتن به صفحه اصلی</Link>
    </div>
  );
}
