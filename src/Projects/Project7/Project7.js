import React, { useState } from "react";
import "./Project7.css";
import Header from "./Components/Header/Header";
import HomeSec1 from "./Components/HomeSec1/HomeSec1";
import HomeSec2 from "./Components/HomeSec2/HomeSec2";
import HomeSec3 from "./Components/HomeSec3/HomeSec3";
import Footer from "./Components/Footer/Footer";

export default function Project7() {
  return (
    <div className="containershop">
      <Header />
      <HomeSec1 />
      <HomeSec2 />
      <HomeSec3 />
      <Footer />
    </div>
  );
}
