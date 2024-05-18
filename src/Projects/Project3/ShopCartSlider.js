import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper/modules";
import StarIcon from "@mui/icons-material/Star";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import AlertSuccess from "../../Componets/AlertSuccess";

export default function ShopCartSlider(props) {
  const { setcartitems, cartitems } = props;

  const [ addalert, setaddalert]=useState(false)
  const data = [
    {
      id: 1,
      img: "https://hezartarh.com/wp-content/uploads/2023/08/0098t.summer%D8%AA%DB%8C%D8%B4%D8%B1%D8%AA-%D9%85%D8%B4%DA%A9%DB%8C-%D8%B7%D8%B1%D8%AD-%D8%AA%D8%A7%D8%A8%D8%B3%D8%AA%D8%A7%D9%86-.jpg",
      price: 150000,
      name: "تیشرت طرح تابستان",
      info: "این تیشرت در رنگ های آبی و مشکی موجود است.",
      rate: 5,
    },
    {
      id: 2,
      img: "https://hajamooo.ir/wp-content/uploads/2023/11/428.jpg",
      price: 980000,
      name: "کتونی نیوبالانس",
      info: "مناسب برای پیاده روی و کار های روزمره",
      rate: 4,
    },
    {
      id: 3,
      img: "https://www.technolife.ir/wp-content/uploads/2023/07/best-fake-apple-watches.jpg",
      price: 850000,
      name: "ساعت طرح اپل واچ",
      info: "کیفیت این ساعت بسیار بالا است.",
      rate: 3,
    },
    {
      id: 4,
      img: "https://hajamooo.ir/wp-content/uploads/2023/10/7W0A5683.jpg",
      price: 580000,
      name: "شلوار اسلش طرح دار",
      info: "این شلوار در رنگ های قرمز و مشکی موجود است.",
      rate: 2,
    },
  ];

  useEffect(() => {
    const storedItems = localStorage.getItem("myItemCart");
    if (storedItems) {
      setcartitems(JSON.parse(storedItems));
    }
  }, []);

  const addtocart = (id) => {
    const existingItem = cartitems.find((item) => item.id === id);
    if (existingItem) {
      const updatedCart = cartitems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("myItemCart", JSON.stringify(updatedCart));
      setcartitems(updatedCart);
    } else {
      const findItem = data.find((item) => item.id === id);
      const updatedCart = [...cartitems, { ...findItem, quantity: 1 }];
      localStorage.setItem("myItemCart", JSON.stringify(updatedCart));
      setcartitems(updatedCart);
    }
    setaddalert(true);
    
  };

  return (
    <>
     {addalert && <AlertSuccess  text={'به سبد خرید اضافه شد.'}  addalert={addalert} setaddalert={setaddalert}/>} 



            <Swiper
      slidesPerView={3}
      spaceBetween={30}
      navigation={true}
      loop={true}
      modules={[Navigation]}
      className="mySwiperp3"
      breakpoints={{
        // when window width is >= 320px
        100: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        802: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div style={{ width: "100%", height: "100%", borderRadius: "15px" }}>
            <img src={item.img} alt={item.name} />
            <div className="rightcart">
              <div className="starp3">
                {Array.from({ length: Math.min(item.rate, 5) }).map(
                  (_, index) => (
                    <StarIcon key={index} color="warning" />
                  )
                )}
                {Array.from({ length: Math.max(5 - item.rate, 0) }).map(
                  (_, index) => (
                    <StarIcon key={index} />
                  )
                )}
              </div>
              <p className="textcartinfo">{item.info}</p>
              <p>{item.price} تومان</p>
              <div
                className="addtocartp3"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <AddShoppingCartIcon />

                <p onClick={() => addtocart(item.id)} className="addtocartp3">
                  افزودن به سبد خرید
                </p>
              </div>
            </div>
            <div className="leftcart">
              <p>{item.name}</p>
            </div>
         
          </div>
        </SwiperSlide>
      ))}
      
    </Swiper>
            </>
 
  );
}
