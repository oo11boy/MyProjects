import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import smoothScroll from "smooth-scroll-into-view-if-needed";

import { useClickAway } from "react-use";
import { Link, useParams } from "react-router-dom";
export default function Header() {
  const params = useParams();
  const [showmenu, setshowmenu] = useState(false);

  const ref = useRef(null);
  useClickAway(ref, () => {
    setshowmenu(false);
  });

  useEffect(() => {
    params.id &&
      smoothScroll(document.getElementById(params.id), {
        behavior: "smooth",

        block: "center",
      });
  }, [params.id]);
  return (
    <div className="headershop">
      <Link to={'../project7'} className="logoheadershop">
        <svg
        
          width="50"
          height="35"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_422_1231)">
            <mask
              id="mask0_422_1231"
              maskUnits="userSpaceOnUse"
              x="-1"
              y="-1"
              width="62"
              height="62"
            >
              <path
                d="M47.5 0.25H12.5C5.73451 0.25 0.25 5.73451 0.25 12.5V47.5C0.25 54.2655 5.73451 59.75 12.5 59.75H47.5C54.2655 59.75 59.75 54.2655 59.75 47.5V12.5C59.75 5.73451 54.2655 0.25 47.5 0.25Z"
                fill="white"
                stroke="#DAAC50"
              />
            </mask>
            <g mask="url(#mask0_422_1231)">
              <path
                d="M13.2956 1.15778L1.27477 13.1786C0.688985 13.7644 0.688985 14.7141 1.27477 15.2999L45.1154 59.1405C45.7012 59.7263 46.6509 59.7263 47.2367 59.1405L59.2575 47.1197C59.8433 46.5339 59.8433 45.5842 59.2575 44.9984L15.4169 1.15778C14.8311 0.571996 13.8814 0.571997 13.2956 1.15778Z"
                stroke="#C0C0C0"
                stroke-width="2"
              />
              <path
                d="M59.0192 13.2956L46.9984 1.27477C46.4126 0.688985 45.4629 0.688985 44.8771 1.27477L1.03647 45.1154C0.450681 45.7012 0.450683 46.6509 1.03647 47.2367L13.0573 59.2575C13.6431 59.8433 14.5928 59.8433 15.1786 59.2575L59.0192 15.4169C59.605 14.8311 59.605 13.8814 59.0192 13.2956Z"
                stroke="#C0C0C0"
                stroke-width="2"
              />
              <path
                d="M37.1563 30.0852L30.0852 23.0142L23.0141 30.0852L30.0852 37.1563L37.1563 30.0852Z"
                stroke="#C0C0C0"
                stroke-width="2"
              />
              <path
                d="M32.6911 30.1454L30.1455 27.5999L27.5999 30.1454L30.1455 32.691L32.6911 30.1454Z"
                fill="#C0C0C0"
              />
              <path
                d="M37.1563 0.0852278L30.0852 -6.98584L23.0141 0.0852278L30.0852 7.1563L37.1563 0.0852278Z"
                stroke="#C0C0C0"
                stroke-width="2"
              />
              <path
                d="M32.6911 0.145438L30.1455 -2.40015L27.5999 0.145438L30.1455 2.69102L32.6911 0.145438Z"
                fill="#C0C0C0"
              />
              <path
                d="M37.1563 60.085L30.0852 53.0139L23.0141 60.085L30.0852 67.1561L37.1563 60.085Z"
                stroke="#C0C0C0"
                stroke-width="2"
              />
              <path
                d="M32.6911 60.1454L30.1455 57.5999L27.5999 60.1454L30.1455 62.691L32.6911 60.1454Z"
                fill="#C0C0C0"
              />
              <path
                d="M7.15627 30.0852L0.0852051 23.0142L-6.98586 30.0852L0.0852058 37.1563L7.15627 30.0852Z"
                stroke="#C0C0C0"
                stroke-width="2"
              />
              <path
                d="M2.69109 30.1454L0.145508 27.5999L-2.40008 30.1454L0.145508 32.691L2.69109 30.1454Z"
                fill="#C0C0C0"
              />
              <path
                d="M67.1565 30.0852L60.0854 23.0142L53.0144 30.0852L60.0855 37.1563L67.1565 30.0852Z"
                stroke="#C0C0C0"
                stroke-width="2"
              />
              <path
                d="M62.6911 30.1454L60.1455 27.5999L57.5999 30.1454L60.1455 32.691L62.6911 30.1454Z"
                fill="#C0C0C0"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_422_1231">
              <rect width="60" height="60" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <div ref={ref} className={showmenu ? "d-flexmenumob " : "menuheadershop"}>
        <Link to={"../project7/help"}>راهنما</Link>
        <Link to={"../project7/ask"}>سوالات متداول</Link>
        <Link to={"../project7/cme"}>ارتباط با ما</Link>
      </div>

      <div onClick={() => setshowmenu(!showmenu)} className="menumobshop">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 7H21"
            stroke="#FEFEFE"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M3 12H21"
            stroke="#FEFEFE"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M3 17H21"
            stroke="#FEFEFE"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div>
     
      </div>
    </div>
  );
}
