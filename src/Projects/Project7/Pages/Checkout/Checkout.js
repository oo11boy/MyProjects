import React, { useContext, useEffect } from "react";
import Header from "../../Components/Header/Header";
import "./Checkout.css";
import { ShopContext } from "../../Context/ShopContext";
import { useNavigate } from "react-router-dom";
export default function Checkout() {
  const ShopContextme = useContext(ShopContext);
  const navi = useNavigate();

  useEffect(() => {
    if (!ShopContextme.itemselected) {
      navi("../project7/create");
    }
  }, []);

  return (
    <div className="containershop">
      <Header />

      <div className="checkoutcontainer">
        <div className="infousercheckout">
          <h3 className="endorderp7">تکمیل اطلاعات سفارش</h3>
          <h3 className="addressget"> اطلاعات کاربری</h3>
          <div>
            <div className="undercheckoutform">
              <div className="contentundercheckoutform">
                <h3>نام</h3>
                <input type="text" />
              </div>
              <div className="contentundercheckoutform">
                <h3>نام خانوادگی</h3>
                <input type="text" />
              </div>
            </div>

            <div className="undercheckoutform">
              <div className="contentundercheckoutform">
                <h3>ایمیل</h3>
                <input type="text" />
              </div>
              <div className="contentundercheckoutform">
                <h3>شماره تماس</h3>
                <input type="text" />
              </div>
            </div>
          </div>

          <h3 className="addressget">اطلاعات آدرس محل تحویل</h3>
          <div>
            <div className="undercheckoutform">
              <div className="contentundercheckoutform">
                <h3>استان</h3>
                <input type="text" />
              </div>
              <div className="contentundercheckoutform">
                <h3>شهر</h3>
                <input type="text" />
              </div>
            </div>

            <div className="undercheckoutform">
              <div className="contentundercheckoutform">
                <h3>آدرس کامل</h3>
                <input type="text" />
              </div>
              <div className="contentundercheckoutform">
                <h3>کدپستی</h3>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="leftcheckoutshop">
          <div className="contentleftcheckoutshop">
            <div className="checkoutshirtinfo">
              <img
                src={
                  ShopContextme.infoproduct.color == "white"
                    ? "../tshirt.png"
                    : "https://media.karousell.com/media/photos/products/2022/10/10/alstyle_plain_black_shirt_1665372972_1066ff58.jpg"
                }
                alt=""
              />

              <div>
                <h2>تیشرت طرح موزیک دلخواه</h2>
                <h2>رنگ: {ShopContextme.infoproduct.color}</h2>
                <h2>سایز: {ShopContextme.infoproduct.size}</h2>
                <h2 style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  متن:{" "}
                  <p className="textout" style={{ fontSize: 10 }}>{ShopContextme.textontshirt}</p>
                </h2>
                <h2>۱,۲۰۰,۰۰۰ تومان</h2>
              </div>
            </div>
            <hr />
            <div style={{ width: "100%", marginTop: 20 }}>
              <div className="infopostp7">
                <h2>نوع ارسال</h2>
                <h2>پست پیشتاز</h2>
              </div>
              <div className="infopostp7">
                <h2>هزینه ارسال</h2>
                <h2>۲۰,۰۰۰ تومان</h2>
              </div>
              <div className="infopostp7">
                <h2>مبلغ کل</h2>
                <h2>۱,۲۲۰,۰۰۰ تومان</h2>
              </div>
            </div>
          </div>
          <div className="tshirtview">تکمیل سفارش و پرداخت</div>
        </div>
      </div>
    </div>
  );
}
