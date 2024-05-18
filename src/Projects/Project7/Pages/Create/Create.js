import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import "./Create.css";
import RoadMap from "./Components/RoadMap";

import Select from "../Select/Select";
import Preview from "../Preview/Preview";
import Order from "./Order/Order";

export default function Create() {
  const [selectisdone, setselectisdone] = useState(false);

  const [previewisdone, setpreviewisdone] = useState(false);
  const [createstep, setCreateStep] = useState("select");
  const [Tcolor,setTcolor]=useState('white')
  const [itemselected, setItemSelected] = useState({});
  const [highlightedText, setHighlightedText] = useState("");

  return (
    <div className="containershop">
      <Header />
      <RoadMap
        previewisdone={previewisdone}
        selectisdone={selectisdone}
        createstep={createstep}
        setCreateStep={setCreateStep}
        setselectisdone={setselectisdone}
      />
      {createstep == "select" && (
        <Select
          highlightedText={highlightedText}
          setHighlightedText={setHighlightedText}
          setCreateStep={setCreateStep}
          setItemSelected={setItemSelected}
          setselectisdone={setselectisdone}
        />
      )}
      {createstep == "preview" && (
        <Preview
        setTcolor={setTcolor}
        Tcolor={Tcolor}
          setpreviewisdone={setpreviewisdone}
          setCreateStep={setCreateStep}
          itemselected={itemselected}
          highlightedText={highlightedText}
        />
      )}

      {createstep == "order" && (
        <Order     setTcolor={setTcolor}
        Tcolor={Tcolor} itemselected={itemselected} highlightedText={highlightedText} />
      )}
    </div>
  );
}
