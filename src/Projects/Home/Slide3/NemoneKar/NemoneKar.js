import React from "react";
import "./Nemonekar.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

export default function NemoneKar() {
  return (
    <div className="nemonekarhome">
      <h3 className="tagme">&lt;Works&gt;</h3>
      <div className="bodynemonekar">
        <Swiper
          slidesPerView={3}
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            506: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          grid={{
            rows: 2,
            fill: "row",
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="mySwipernemonekar"
        >
          <SwiperSlide>
            <div class="fatherslide">
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "white",
                }}
                to={"../project7"}
              >
                ساخت تیشرت با طرح دلخواه
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="fatherslide">
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "white",
                }}
                to={"../Project6"}
              >
                اینستاگرام
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="fatherslide">
              <a
                target="blank"
                href="https://shopnew-tau.vercel.app/"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "white",
                }}
              >
                فروشگاه آنلاین (vpn)
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="fatherslide">
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "white",
                }}
                to={"../project1"}
              >
                شمارنده
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="fatherslide">
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "white",
                }}
                to={"../project2"}
              >
                احراز هویت
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="fatherslide">
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "white",
                }}
                to={"../project3"}
              >
                سبد خرید پیشرفته
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="fatherslide">
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "white",
                }}
                to={"../project4"}
              >
                نوت برداری آنلاین
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="fatherslide">
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "white",
                }}
                to={"../project5"}
              >
                رزرو بلیت سینما
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="fatherslide">
              <a
                target="blank"
                href="https://sheypoor.vercel.app/"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "white",
                }}
              >
                آگهی نیازمندی(vpn)
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="fatherslide">
              <a
                target="blank"
                href="https://movie-ashy-two.vercel.app/"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "white",
                  padding: "10px",
                }}
              >
                دانلود فیلم و سریال(vpn)
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="fatherslide">
              <a
                target="blank"
                href="https://bankrez.vercel.app/"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "white",
                }}
              >
                داشبورد رزرو نوبت(vpn)
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="fatherslide">
              <a
                target="blank"
                href="https://myket.ir/app/com.freelancerkar.unicodewebdesign"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "white",
                }}
              >
                فریلنسرکار(React Native)
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <h3 className="tagme">&lt;Works/&gt;</h3>
    </div>
  );
}
